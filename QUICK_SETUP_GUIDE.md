# 🚀 Quick Setup Guide - Complete CI/CD in 5 Minutes

## ⚠️ Important: Manual Steps Required

Due to GitHub App permissions, two steps must be completed manually:

---

## Step 1: Create GitHub Actions Workflow File (2 minutes)

### Option A: Using GitHub Web Interface (Recommended)

1. **Go to your repository:**  
   [https://github.com/ACIM2025/emf-safe-haven](https://github.com/ACIM2025/emf-safe-haven)

2. **Click "Add file" → "Create new file"**

3. **Enter filename:**
   ```
   .github/workflows/netlify-deploy.yml
   ```
   *Note: GitHub will automatically create the directories*

4. **Copy and paste this content:**

```yaml
name: Deploy to Netlify

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build Next.js project
        run: npm run build
        env:
          NODE_ENV: production
          
      - name: Install Netlify CLI
        run: npm install -g netlify-cli
        
      - name: Deploy to Netlify
        run: |
          netlify deploy --prod --dir=.next --site=${{ secrets.NETLIFY_SITE_ID }} --auth=${{ secrets.NETLIFY_AUTH_TOKEN }}
        env:
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          
      - name: Deployment Status
        run: |
          echo "✅ Deployment successful!"
          echo "🌐 Site URL: https://helpful-arithmetic-cfe59b.netlify.app/"
```

5. **Scroll down and commit:**
   - Commit message: `feat: Add GitHub Actions workflow for Netlify deployment`
   - Click "Commit new file"

### Option B: Using Git Command Line

```bash
# Clone the repository (if not already cloned)
git clone https://github.com/ACIM2025/emf-safe-haven.git
cd emf-safe-haven

# Create the workflow directory
mkdir -p .github/workflows

# Create the workflow file
cat > .github/workflows/netlify-deploy.yml << 'EOF'
name: Deploy to Netlify

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build Next.js project
        run: npm run build
        env:
          NODE_ENV: production
          
      - name: Install Netlify CLI
        run: npm install -g netlify-cli
        
      - name: Deploy to Netlify
        run: |
          netlify deploy --prod --dir=.next --site=${{ secrets.NETLIFY_SITE_ID }} --auth=${{ secrets.NETLIFY_AUTH_TOKEN }}
        env:
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          
      - name: Deployment Status
        run: |
          echo "✅ Deployment successful!"
          echo "🌐 Site URL: https://helpful-arithmetic-cfe59b.netlify.app/"
EOF

# Commit and push
git add .github/workflows/netlify-deploy.yml
git commit -m "feat: Add GitHub Actions workflow for Netlify deployment"
git push origin main
```

---

## Step 2: Configure GitHub Secrets (2 minutes)

1. **Go to repository settings:**  
   [https://github.com/ACIM2025/emf-safe-haven/settings/secrets/actions](https://github.com/ACIM2025/emf-safe-haven/settings/secrets/actions)

2. **Add first secret:**
   - Click "New repository secret"
   - Name: `NETLIFY_AUTH_TOKEN`
   - Secret: `nfp_rMd9xPbh5cnTk1KvAXqLzxQCFSUtjcR30f2b`
   - Click "Add secret"

3. **Add second secret:**
   - Click "New repository secret"
   - Name: `NETLIFY_SITE_ID`
   - Secret: `cd733d44-79ab-4a30-ae05-b30b80bf83ef`
   - Click "Add secret"

4. **Verify:**
   - You should see both secrets listed (values will be hidden)

---

## Step 3: Test the Setup (1 minute)

1. **Make a small change to test:**
   ```bash
   # Edit any file (or use GitHub web editor)
   echo "# Testing CI/CD" >> README.md
   git add README.md
   git commit -m "test: Trigger CI/CD workflow"
   git push origin main
   ```

2. **Monitor the deployment:**
   - Go to: [Actions Tab](https://github.com/ACIM2025/emf-safe-haven/actions)
   - You should see "Deploy to Netlify" workflow running
   - Wait for green checkmark (2-5 minutes)

3. **Verify site is live:**
   - Visit: [https://helpful-arithmetic-cfe59b.netlify.app/](https://helpful-arithmetic-cfe59b.netlify.app/)
   - You should see your changes live!

---

## ✅ Verification Checklist

After completing steps 1 and 2:

- [ ] Workflow file exists at `.github/workflows/netlify-deploy.yml`
- [ ] Both secrets are configured in repository settings
- [ ] Test push triggers the workflow
- [ ] Workflow completes successfully (green checkmark)
- [ ] Site deploys to Netlify
- [ ] Email popup appears after 5-8 seconds on the site

---

## 🎉 You're Done!

Your CI/CD pipeline is now fully operational!

### What happens now:
1. ✅ Every push to `main` branch automatically triggers deployment
2. ✅ GitHub Actions builds your Next.js project
3. ✅ Netlify receives the build and makes it live
4. ✅ Your site is updated within 3-5 minutes

### Email Popup Features:
- ✨ Appears 5-8 seconds after page load
- 💾 Remembers if user closed or submitted
- 📧 Integrates with existing newsletter API
- 🎨 Beautiful, responsive design

---

## 📚 Need More Details?

See the comprehensive [DEPLOYMENT_REPORT.md](./DEPLOYMENT_REPORT.md) for:
- Detailed documentation
- Troubleshooting guide
- Rollback procedures
- Token regeneration steps
- Best practices

---

## 🐛 Troubleshooting

### Workflow doesn't appear in Actions tab
- **Cause:** Workflow file not created correctly
- **Solution:** Verify file is at `.github/workflows/netlify-deploy.yml` (exact path)

### Workflow fails with "secrets not found"
- **Cause:** Secrets not configured or wrong names
- **Solution:** Check secret names are exactly `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID`

### Build succeeds but deploy fails
- **Cause:** Invalid Netlify credentials
- **Solution:** Verify token and site ID are correct

---

## 📞 Questions?

If you encounter any issues:
1. Check the [Troubleshooting section in DEPLOYMENT_REPORT.md](./DEPLOYMENT_REPORT.md#-troubleshooting-guide)
2. Review workflow logs in Actions tab
3. Check Netlify deploy logs

---

**Setup time:** ~5 minutes  
**Deployment time after setup:** 3-5 minutes per push  
**Status:** ✅ Ready to deploy

---

*Last updated: November 11, 2025*
