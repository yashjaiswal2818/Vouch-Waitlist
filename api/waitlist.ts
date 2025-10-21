import { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
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

        return res.status(200).json({
            success: true,
            position: count
        });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
}

