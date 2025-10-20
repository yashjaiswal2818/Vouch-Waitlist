import type { SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseAdmin } from "@/lib/supabase-server";
import { Resend } from "resend";
import { waitlistConfirmationEmail } from "@/lib/email-templates";

type WaitlistRequestBody = {
    email: string;
    name?: string | null;
};

type WaitlistResponseBody =
    | {
        success: true;
        position: number;
    }
    | {
        success: false;
        error: string;
    };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

async function getTotalCount(supabase: SupabaseClient): Promise<number> {
    const { count, error } = await supabase
        .from("waitlist")
        .select("id", { count: "exact", head: true });
    if (error) throw error;
    return count || 0;
}

export async function POST(request: Request): Promise<Response> {
    try {
        const supabase = getSupabaseAdmin();
        const body = (await request.json()) as WaitlistRequestBody;
        const email = (body.email || "").trim().toLowerCase();
        const name = (body.name ?? null) ? String(body.name).trim() : null;

        if (!email || !EMAIL_REGEX.test(email)) {
            const resp: WaitlistResponseBody = { success: false, error: "Invalid email address" };
            return new Response(JSON.stringify(resp), { status: 400, headers: { "Content-Type": "application/json" } });
        }

        // Try to insert; on duplicate, proceed to count and send friendly response
        const { error: insertErr } = await supabase
            .from("waitlist")
            .insert({ email, name })
            .select("id")
            .single();

        if (insertErr) {
            const isUniqueViolation = (insertErr as any)?.code === "23505" ||
                ((insertErr as any)?.message || "").toLowerCase().includes("duplicate") ||
                ((insertErr as any)?.message || "").toLowerCase().includes("unique");
            if (!isUniqueViolation) {
                throw insertErr;
            }
        }

        // Position by total count
        const total = await getTotalCount(supabase);

        // Send confirmation email (best-effort)
        try {
            const key = process.env.RESEND_API_KEY;
            if (key && key.trim()) {
                const resend = new Resend(key);
                const emailTemplate = waitlistConfirmationEmail(name || "", total);
                await resend.emails.send({
                    from: 'onboarding@resend.dev',
                    to: email,
                    subject: "🎉 You're on the EchoWidget waitlist!",
                    html: emailTemplate,
                });
            }
        } catch {
            // ignore email failures
        }

        const resp: WaitlistResponseBody = { success: true, position: total };
        return new Response(JSON.stringify(resp), { status: 200, headers: { "Content-Type": "application/json" } });
    } catch (error) {
        const message = (error as Error)?.message || "Unexpected error";
        const resp: WaitlistResponseBody = { success: false, error: message };
        return new Response(JSON.stringify(resp), { status: 500, headers: { "Content-Type": "application/json" } });
    }
}

// email template moved to src/lib/email-templates.ts


