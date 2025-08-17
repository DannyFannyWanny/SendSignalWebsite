# Environment Variables Example

Copy this to `.env.local` for local development:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://sendasignal.org

# Supabase Configuration (optional)
# SUPABASE_URL=your_supabase_url
# SUPABASE_ANON_KEY=your_supabase_anon_key

# Environment
NODE_ENV=production
```

## For Production Deployment

Set these environment variables in your Vercel dashboard:

1. Go to your project settings in Vercel
2. Navigate to Environment Variables
3. Add:
   - `NEXT_PUBLIC_SITE_URL` = `https://sendasignal.org`
   - `SUPABASE_URL` = your Supabase URL (if using)
   - `SUPABASE_ANON_KEY` = your Supabase anon key (if using)
