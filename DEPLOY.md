# How to Deploy to Vercel 🚀

You have 3 easy ways to deploy your portfolio. Choose the one you prefer!

## Option 1: Drag & Drop (Easiest)
**Best for:** First-time deployment without needing GitHub.

1.  Run the build command in your terminal:
    ```bash
    npm run build
    ```
2.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
3.  Click **"Add New..."** -> **"Project"**.
4.  Drag and drop the `dist` folder created in step 1 into the Vercel window.
5.  Wait for the upload to finish. Your site is live!

---

## Option 2: Vercel CLI (Professional)
**Best for:** Quick updates directly from your terminal.

1.  Install Vercel CLI (if not installed):
    ```bash
    npm i -g vercel
    ```
2.  Login to Vercel:
    ```bash
    vercel login
    ```
3.  Deploy:
    ```bash
    vercel
    ```
    *   Follow the prompts (Use default settings, just press Enter).
    *   It will automatically detect `Vite` and deploy.

---

## Option 3: GitHub Integration (Recommended)
**Best for:** Automatic updates every time you save code.

1.  Create a new repository on GitHub.
2.  Push your code:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git branch -M main
    git push -u origin main
    ```
3.  Go to Vercel -> **"Add New Project"** -> **"Import from GitHub"**.
4.  Select your repository.
5.  Click **Deploy**.

## ⚠️ Important Note for Client-Side Routing
If you refresh a page like `/about` and get a 404 error, create a file named `vercel.json` in your root folder with this content:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
(This app is a Single Page Application (SPA), so all routes must point to `index.html`.)
