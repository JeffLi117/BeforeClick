# Deployment Guide - BeforeClick

## Quick Deployment Checklist

### ✅ Step 1: GitHub (Already Done!)
- ✅ Code pushed to: https://github.com/JeffLi117/BeforeClick.git

### 🔧 Step 2: Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New"** → **"Project"**
3. Import repository: `JeffLi117/BeforeClick`
4. Configure build settings:
   - Framework Preset: **Vite** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `dist` (auto-filled)
5. **Add Environment Variables:**
   - `VITE_SUPABASE_URL` = (from Supabase project settings)
   - `VITE_SUPABASE_ANON_KEY` = (from Supabase project settings)
6. Click **"Deploy"**

Your site will be live at: `beforeclick.vercel.app` (temporary URL)

### 🌐 Step 3: Connect Cloudflare Domain

1. **In Vercel:**
   - Project → Settings → Domains
   - Enter your domain (e.g., `beforeclick.com` or `www.beforeclick.com`)
   - Click "Add"
   - Note the DNS records Vercel shows

2. **In Cloudflare:**
   - Go to your domain dashboard
   - Click **"DNS"** → **"Records"**
   - Add the DNS records Vercel provided:
     - **Root domain (`@`)**: Type `A`, Value `76.76.21.21` (or IP Vercel shows)
     - **www subdomain**: Type `CNAME`, Value `cname.vercel-dns.com` (or what Vercel shows)
   - Save records

3. **Wait for DNS propagation:**
   - Usually takes 5-30 minutes
   - Vercel will automatically provision SSL certificate
   - Check status in Vercel dashboard

### 📝 Important Notes

- **Environment Variables**: Make sure to add both `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Vercel
- **DNS Propagation**: Can take up to 48 hours, but usually much faster
- **SSL**: Vercel automatically handles HTTPS certificates (no extra setup needed)
- **Auto-deployments**: Every push to `main` branch will automatically deploy

### 🔄 Future Updates

Just push to GitHub and Vercel will automatically redeploy:
```bash
git add .
git commit -m "Your update message"
git push
```

### 📧 Testing the Waitlist

After deployment, test the waitlist form to ensure Supabase integration works correctly.
