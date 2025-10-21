// Simple test to verify Supabase connection
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.warn('Missing Supabase environment variables - using fallback mode');
    console.log('VITE_SUPABASE_URL:', supabaseUrl);
    console.log('VITE_SUPABASE_ANON_KEY:', supabaseKey);
}

// Create a mock client if environment variables are missing
export const supabase = supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey)
    : {
        from: () => ({
            insert: () => ({ select: () => ({ single: () => Promise.resolve({ data: null, error: { code: 'MOCK_ERROR' } }) }) }),
            select: () => ({ count: () => Promise.resolve({ count: 0, error: null }) })
        })
    };

export async function testSupabaseConnection() {
    try {
        console.log('Testing Supabase connection...');
        console.log('URL:', supabaseUrl);
        console.log('Key exists:', !!supabaseKey);

        // Test connection by getting count
        const { count, error } = await supabase
            .from('waitlist')
            .select('*', { count: 'exact', head: true });

        if (error) {
            console.error('Supabase error:', error);
            return false;
        }

        console.log('Supabase connection successful! Count:', count);
        return true;
    } catch (error) {
        console.error('Supabase connection failed:', error);
        return false;
    }
}

