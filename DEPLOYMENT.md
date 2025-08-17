# Deployment Guide for Signal Website

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Push your code to GitHub
3. **Domain**: Configure `sendasignal.org` (optional but recommended)

## Quick Deploy

### Option 1: Vercel Dashboard (Recommended)

1. **Import Project**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Select the `signal-website` folder

2. **Configure Project**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `signal-website`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

3. **Environment Variables**:
   ```
   NEXT_PUBLIC_SITE_URL=https://sendasignal.org
   SUPABASE_URL=your_supabase_url (if using)
   SUPABASE_ANON_KEY=your_supabase_anon_key (if using)
   ```

4. **Deploy**: Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd signal-website
vercel

# Follow prompts to configure
```

## Domain Configuration

### 1. Add Custom Domain

1. Go to your project dashboard in Vercel
2. Navigate to **Settings** → **Domains**
3. Add `sendasignal.org`
4. Follow DNS configuration instructions

### 2. DNS Records

Add these records to your domain provider:

```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. SSL Certificate

Vercel automatically provisions SSL certificates for custom domains.

## Post-Deployment

### 1. Verify Redirects

- `www.sendasignal.org` → `sendasignal.org` ✅
- All pages accessible ✅
- HTTPS working ✅

### 2. Test Functionality

- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] Waitlist form submits
- [ ] All pages accessible
- [ ] Mobile responsive
- [ ] Performance optimized

### 3. SEO Verification

- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] Meta tags working
- [ ] Open Graph images loading

## Monitoring

### 1. Vercel Analytics

Enable in your project dashboard for:
- Performance metrics
- Error tracking
- User analytics

### 2. Performance Monitoring

- Core Web Vitals
- Lighthouse scores
- Page load times

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check build logs in Vercel dashboard
   - Verify all dependencies are in `package.json`
   - Ensure TypeScript compilation passes

2. **Environment Variables**:
   - Verify all required env vars are set
   - Check for typos in variable names
   - Ensure `NEXT_PUBLIC_` prefix for client-side vars

3. **Domain Issues**:
   - DNS propagation can take 24-48 hours
   - Verify DNS records are correct
   - Check domain status in Vercel dashboard

### Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)

## Performance Optimization

### 1. Image Optimization

- Use Next.js `Image` component
- Optimize image formats (WebP, AVIF)
- Implement lazy loading

### 2. Code Splitting

- Next.js automatically code-splits
- Use dynamic imports for heavy components
- Implement route-based splitting

### 3. Caching

- Vercel Edge Network provides global CDN
- Implement proper cache headers
- Use static generation where possible

## Security

### 1. Headers

The `vercel.json` includes:
- `X-Frame-Options: DENY` (prevents clickjacking)
- `X-Content-Type-Options: nosniff` (prevents MIME sniffing)
- `Referrer-Policy: strict-origin-when-cross-origin`

### 2. Additional Security

Consider adding:
- Content Security Policy (CSP)
- HSTS headers
- Rate limiting for API routes

## Maintenance

### 1. Regular Updates

- Keep Next.js updated
- Update dependencies regularly
- Monitor security advisories

### 2. Performance Monitoring

- Regular Lighthouse audits
- Monitor Core Web Vitals
- Track user experience metrics

---

**Ready to deploy?** Your Signal website is configured for production deployment on Vercel with all the necessary optimizations and security measures in place! 🚀
