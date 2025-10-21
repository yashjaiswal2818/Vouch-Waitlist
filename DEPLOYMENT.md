# Deployment Guide

## Netlify Deployment

### Environment Variables Required

In your Netlify dashboard, go to **Site settings** → **Environment variables** and add:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here
```

### Steps to Deploy

1. **Connect your GitHub repository to Netlify**
2. **Add the environment variables above**
3. **Deploy**

The application will work with direct Supabase connection (no API routes needed for Netlify).

## Vercel Deployment

### Environment Variables Required

In your Vercel dashboard, go to **Settings** → **Environment Variables** and add:

**For Frontend (React app):**
```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here
```

**For API Routes (Serverless functions):**
```
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key-here
```

**Note:** You need to set BOTH sets of variables because:
- Frontend uses `VITE_` prefixed variables
- API routes use non-prefixed variables

### Steps to Deploy

1. **Connect your GitHub repository to Vercel**
2. **Add the environment variables above**
3. **Deploy**

The application will work with both:
- **Local development**: Uses direct Supabase connection (no API routes needed)
- **Vercel deployment**: Uses API routes for serverless functions

### Database Setup

Make sure you've run the SQL schema in your Supabase project:

```sql
-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255),
    source VARCHAR(100) DEFAULT 'unknown',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for waitlist signups)
CREATE POLICY "Allow public waitlist signups" ON waitlist
    FOR INSERT 
    TO anon 
    WITH CHECK (true);

-- Create policy to allow public reads (for counting)
CREATE POLICY "Allow public waitlist reads" ON waitlist
    FOR SELECT 
    TO anon 
    USING (true);
```

### Troubleshooting

**If you get 500 errors:**
1. Check that environment variables are set correctly in Vercel
2. Verify your Supabase project is accessible
3. Check the Vercel function logs for detailed error messages

**If you get 401 errors:**
1. Make sure you've set BOTH `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Vercel
2. Verify the Supabase URL and anon key are correct
3. Check that your Supabase project allows public access (RLS policies are set correctly)
4. Make sure you're using the anon key, not the service role key for frontend

**Common issues:**
- Missing `VITE_` prefix in environment variable names
- Using service role key instead of anon key for frontend
- Supabase RLS policies blocking public access

**For Netlify specifically:**
- Make sure environment variables are set in **Site settings** → **Environment variables**
- Redeploy after adding environment variables
- Check that the build command is `npm run build` and publish directory is `dist`
