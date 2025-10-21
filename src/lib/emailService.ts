// Email service for waitlist signups
import { createClient } from '@supabase/supabase-js';

export interface WaitlistSignup {
    email: string;
    source?: string; // Track where signup came from (hero, cta, etc.)
    timestamp: Date;
}

export class EmailService {
    private static async submitToBackend(data: WaitlistSignup): Promise<{ success: boolean; position?: number }> {
        try {
            // Use direct Supabase connection instead of API route
            const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
            const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

            if (!supabaseUrl || !supabaseKey) {
                console.error('Supabase configuration missing');
                return { success: false };
            }

            const supabase = createClient(supabaseUrl, supabaseKey);

            // Insert into waitlist table
            const { data: insertData, error: insertError } = await supabase
                .from('waitlist')
                .insert({
                    email: data.email.toLowerCase().trim(),
                    name: null,
                    source: data.source || 'unknown'
                })
                .select()
                .single();

            if (insertError) {
                if (insertError.code === '23505') {
                    // Email already exists
                    return { success: true, position: 0 };
                }
                throw insertError;
            }

            // Get total count for position
            const { count, error: countError } = await supabase
                .from('waitlist')
                .select('*', { count: 'exact', head: true });

            if (countError) {
                console.warn('Could not get position:', countError);
            }

            console.log('Waitlist signup successful:', insertData);
            return { success: true, position: count || 1 };
        } catch (error) {
            console.error('Email submission failed:', error);
            return { success: false };
        }
    }

    // For now, store in localStorage as fallback
    private static storeLocally(data: WaitlistSignup): void {
        const existing = JSON.parse(localStorage.getItem('waitlist_signups') || '[]');
        existing.push(data);
        localStorage.setItem('waitlist_signups', JSON.stringify(existing));
    }

    static async addToWaitlist(email: string, source: string = 'unknown'): Promise<{
        success: boolean;
        message: string;
    }> {
        const signupData: WaitlistSignup = {
            email: email.toLowerCase().trim(),
            source,
            timestamp: new Date(),
        };

        // Try backend first, fallback to localStorage
        const backendResult = await this.submitToBackend(signupData);

        if (!backendResult.success) {
            this.storeLocally(signupData);
        }

        return {
            success: true,
            message: backendResult.success
                ? "Welcome to the waitlist! Check your email for confirmation."
                : "Welcome to the waitlist! We'll notify you when we launch."
        };
    }

    // Get signup count for display
    static async getSignupCount(): Promise<number> {
        try {
            const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
            const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

            if (!supabaseUrl || !supabaseKey) {
                console.warn('Supabase configuration missing, using fallback count');
                return 47; // Fallback to current number
            }

            const supabase = createClient(supabaseUrl, supabaseKey);
            const { count, error } = await supabase
                .from('waitlist')
                .select('*', { count: 'exact', head: true });

            if (error) {
                console.error('Failed to get signup count:', error);
                return 47; // Fallback to current number
            }

            return count || 47;
        } catch (error) {
            console.error('Failed to get signup count:', error);
            return 47; // Fallback to current number
        }
    }
}
