import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { email, name } = req.body;

        // Save to database
        const { data, error } = await supabase
            .from('waitlist')
            .insert({ email: email.toLowerCase(), name })
            .select()
            .single();

        if (error) {
            if (error.code === '23505') {
                return res.status(409).json({ error: 'Already registered!' });
            }
            throw error;
        }

        // Get position
        const { count } = await supabase
            .from('waitlist')
            .select('*', { count: 'exact', head: true });

        // Send email - WORKS WITHOUT ANY SETUP!
        await resend.emails.send({
            from: 'onboarding@resend.dev',  // ← Just works!
            to: email,                       // ← Any email!
            subject: "🎉 You're on the EchoWidget waitlist!",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; padding: 40px; text-align: center; border-radius: 16px;">
            <h1 style="margin: 0;">🚀 You're In!</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 16px; margin-top: 20px;">
            <p>Hey ${name || 'there'}! 👋</p>
            <p>You're #${count} on the waitlist for EchoWidget!</p>
            <p><strong>First 100 users get 50% off for 3 months! 🎁</strong></p>
            <p>We'll email you when we launch. Stay tuned! ✨</p>
          </div>
        </div>
      `
        });

        return res.status(200).json({
            success: true,
            position: count
        });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
}

