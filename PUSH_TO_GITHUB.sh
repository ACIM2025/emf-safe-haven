#!/bin/bash

# Script to push the fixed EMF Safe Haven code to GitHub
# Run this script from the project root directory

echo "🚀 Pushing EMF Safe Haven fixes to GitHub..."
echo ""

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository. Run this from the project root."
    exit 1
fi

# Check git status
echo "📋 Current git status:"
git status --short
echo ""

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 Repository: https://github.com/ACIM2025/emf-safe-haven"
    echo ""
    echo "Next steps:"
    echo "1. Go to your Netlify dashboard"
    echo "2. Trigger a new deployment"
    echo "3. Verify the site loads correctly at https://helpful-arithmetic-cfe59b.netlify.app/"
else
    echo ""
    echo "❌ Push failed. You may need to:"
    echo "1. Grant GitHub App access: https://github.com/apps/abacusai/installations/select_target"
    echo "2. Or use GitHub's web interface to upload files"
    echo "3. Or set up GitHub authentication in your terminal"
fi
