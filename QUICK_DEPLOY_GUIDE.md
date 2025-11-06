# Quick Deployment Guide - EMF Safe Haven

## 🎯 What Was Fixed

Your Next.js app was being deployed as a static site, but it has API routes that need server-side rendering. I've configured it properly for Netlify.

### Key Changes:
1. ✅ Added `@netlify/plugin-nextjs` for SSR support
2. ✅ Removed incorrect static export configuration
3. ✅ Fixed routing to work with Next.js App Router

---

## 🚀 How to Deploy - Choose One Method

### Method 1: Grant GitHub App Access (Easiest)

1. Visit: **https://github.com/apps/abacusai/installations/select_target**
2. Select repository: `emf-safe-haven`
3. Grant "Read and write" permissions for Contents
4. Come back and tell me - I'll push the code automatically

### Method 2: Manual Git Push

```bash
# In your terminal (local machine):
cd /path/to/emf-safe-haven

git init
git add .
git commit -m "Fix Netlify deployment configuration"
git remote add origin https://github.com/ACIM2025/emf-safe-haven.git
git push -u origin main
```

### Method 3: Download & Upload to GitHub

1. **Download:** `/home/ubuntu/emf-safe-haven-FIXED.zip`
2. **Extract** the ZIP file
3. **Go to:** https://github.com/ACIM2025/emf-safe-haven
4. **Click:** "uploading an existing file"
5. **Drag & drop** all extracted files
6. **Commit** the changes

---

## 🔄 After Pushing to GitHub

### Automatic Deployment (If GitHub Connected)
Netlify will automatically detect the push and redeploy with the new configuration.

### Manual Deployment
1. Go to your Netlify dashboard
2. Navigate to your site (helpful-arithmetic-cfe59b)
3. Click **Deploys** → **Trigger deploy** → **Deploy site**

---

## ✅ Verify It Works

After deployment:

1. Visit: **https://helpful-arithmetic-cfe59b.netlify.app/**
2. **Expected:** See your EMF Safe Haven landing page (not 404)
3. **Test:** Any forms that use API routes should work

### Check Build Logs
In Netlify, look for:
```
Essential Next.js Build Plugin
@netlify/plugin-nextjs
```

---

## 📁 Files Location

- **Fixed Project:** `/home/ubuntu/github_repos/emf-safe-haven/`
- **Download ZIP:** `/home/ubuntu/emf-safe-haven-FIXED.zip`
- **Push Script:** `/home/ubuntu/github_repos/emf-safe-haven/PUSH_TO_GITHUB.sh`

---

## 🔧 Configuration Files Changed

| File | What Changed |
|------|-------------|
| `netlify.toml` | Added Next.js plugin, removed static config |
| `next.config.js` | Removed output mode to enable SSR |
| `package.json` | Added `@netlify/plugin-nextjs` dependency |

---

## 💡 Troubleshooting

### Still seeing 404 after deployment?

1. **Clear Netlify cache:**
   - Site Settings → Build & deploy → Clear cache and retry deploy

2. **Check environment variables:**
   - Make sure `NEXT_OUTPUT_MODE` is not set to 'export'

3. **Verify plugin installed:**
   - Build logs should show `@netlify/plugin-nextjs`
   - If not, run `npm install` before deploying

### API routes not working?

1. Check that API files exist:
   - `app/api/contact/route.ts`
   - `app/api/newsletter/route.ts`
   - `app/api/orders/route.ts`

2. Verify the Essential Next.js plugin is active (check build logs)

---

## 📞 Need Help?

If you encounter any issues:
1. Check the detailed `DEPLOYMENT_FIXES_SUMMARY.md`
2. Review Netlify build logs for errors
3. Ensure all dependencies installed: `npm install`

---

**Ready to deploy? Choose a method above and let's get your site live!** 🎉
