// Email service for waitlist signups
import { supabase } from './supabaseTest';

export interface WaitlistSignup {
    email: string;
    source?: string; // Track where signup came from (hero, cta, etc.)
    timestamp: Date;
}

export class EmailService {
    private static async submitToBackend(data: WaitlistSignup): Promise<boolean> {
        try {
            // Try direct Supabase connection first (for local development)
            const { data: insertData, error: insertError } = await supabase
                .from('waitlist')
                .insert({
                    email: data.email.toLowerCase(),
                    name: null,
                    source: data.source,
                    created_at: new Date().toISOString()
                })
                .select()
                .single();

            if (insertError) {
                if (insertError.code === '23505') {
                    console.log('Email already registered');
                    return true; // Treat as success
                }
                console.error('Supabase insert error:', insertError);
                return false;
            }

            console.log('Waitlist signup successful:', insertData);
            return true;
        } catch (error) {
            console.error('Email submission failed:', error);
            return false;
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
        const backendSuccess = await this.submitToBackend(signupData);

        if (!backendSuccess) {
            this.storeLocally(signupData);
        }

        return {
            success: true,
            message: backendSuccess
                ? "Welcome to the waitlist! Check your email for confirmation."
                : "Welcome to the waitlist! We'll notify you when we launch."
        };
    }

    // Get signup count for display
    static getSignupCount(): number {
        try {
            const signups = JSON.parse(localStorage.getItem('waitlist_signups') || '[]');
            return signups.length;
        } catch {
            return 47; // Fallback to current number
        }
    }
}
