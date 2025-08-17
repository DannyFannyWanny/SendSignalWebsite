# Waitlist Setup Guide

## Overview
The Signal waitlist system supports two storage backends:
1. **Local JSON file storage** (default)
2. **Supabase database** (optional)

## Local Storage (Default)
By default, waitlist entries are stored in `data/waitlist.json` in your project root. This file is created automatically when the first entry is submitted.

## Supabase Integration (Optional)
To use Supabase instead of local storage:

1. **Create a Supabase project** at [supabase.com](https://supabase.com)

2. **Create a table** in your Supabase database:
```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  city TEXT NOT NULL,
  university_company TEXT,
  platform TEXT NOT NULL CHECK (platform IN ('ios', 'android', 'both')),
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. **Set environment variables** in `.env.local`:
```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

4. **Install Supabase client** (optional):
```bash
npm install @supabase/supabase-js
```

## API Endpoints

### POST /api/waitlist
Submit a new waitlist entry.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "city": "New York",
  "universityCompany": "NYU",
  "platform": "ios",
  "honeypot": ""
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully joined waitlist",
  "id": "entry_1234567890_abc123"
}
```

### GET /api/waitlist
Retrieve waitlist data (for admin purposes).

## Security Features

- **Honeypot field**: Hidden field to catch bots
- **Input validation**: Zod schema validation
- **Rate limiting**: Basic IP-based rate limiting
- **Data sanitization**: Email normalization and trimming

## Switching Between Storage Backends

The system automatically detects which storage to use based on environment variables:

- **No environment variables**: Uses local JSON storage
- **SUPABASE_URL + SUPABASE_ANON_KEY**: Uses Supabase

To switch, simply add or remove the environment variables and restart your development server.

## Data Structure

Each waitlist entry includes:
- `id`: Unique identifier
- `name`: Full name
- `email`: Email address (normalized)
- `city`: City name
- `universityCompany`: Optional university/company
- `platform`: iOS, Android, or both
- `ip`: IP address (for analytics)
- `createdAt`: Timestamp

## Development

The waitlist system is fully functional in development mode. All entries are logged to the console and stored locally by default.

## Production Considerations

- **Rate limiting**: Implement proper rate limiting for production
- **Email validation**: Consider email verification workflows
- **Data backup**: Regular backups of waitlist data
- **Privacy compliance**: Ensure GDPR/CCPA compliance
- **Monitoring**: Set up alerts for failed submissions
