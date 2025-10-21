import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'YOUR_EMAIL@gmail.com',  // ← Put your real email here
            subject: 'Test Email from EchoWidget',
            html: '<h1>It works! 🎉</h1><p>Your Resend integration is working perfectly.</p>'
        });

        if (error) {
            return res.status(400).json({ error });
        }

        return res.status(200).json({ success: true, data });
    } catch (error) {
        return res.status(500).json({ error: String(error) });
    }
}

