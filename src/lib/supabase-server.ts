import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let adminClient: SupabaseClient | null = null;

/**
 * Returns a singleton Supabase client configured with the service role key.
 * - Server-only: throws if invoked in the browser.
 * - Validates presence of required environment variables.
 * - Intended for API routes and server code to bypass RLS where appropriate.
 */
export function getSupabaseAdmin(): SupabaseClient {
    if (typeof window !== "undefined") {
        throw new Error(
            "Supabase admin client must only be created on the server (service role key)."
        );
    }

    if (adminClient) {
        return adminClient;
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || supabaseUrl.trim().length === 0) {
        throw new Error(
            "Missing NEXT_PUBLIC_SUPABASE_URL. Set it in your environment (e.g., .env.local)."
        );
    }

    if (!serviceRoleKey || serviceRoleKey.trim().length === 0) {
        throw new Error(
            "Missing SUPABASE_SERVICE_ROLE_KEY. This key is required for server-side admin operations."
        );
    }

    adminClient = createClient(supabaseUrl, serviceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    });

    return adminClient;
}

export type { SupabaseClient };


