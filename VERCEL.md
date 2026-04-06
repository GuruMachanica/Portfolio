# Deploying to Vercel

This repository can be deployed to Vercel as a static Vite site. The repository already includes a `vercel.json` that instructs Vercel to run `npm run build` and publish the `dist` folder.

Two ways to deploy: Web UI (recommended) or CLI.

1) Deploy via Vercel Web UI (recommended)

- Go to https://vercel.com and sign in with your GitHub account.
- Click **New Project** → **Import Git Repository** and select `GuruMachanica/Portfolio`.
- During import set:
  - Framework Preset: **Vite** (auto-detected) or choose "Other" and set Build Command to `npm run build` and Output Directory to `dist`.
- Add Environment Variables (Settings → Environment Variables):
  - `VITE_EMAILJS_SERVICE_ID` (value from EmailJS)
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`
  - `VITE_CONTACT_TO_EMAIL`
  Set them for `Production` (and `Preview` if you want preview builds to use same values).
- Click **Deploy**. Vercel will build and publish automatically on every push to `main`.

2) Deploy using Vercel CLI (from your machine)

- Install / run (no global install required):
  ```bash
  npx vercel login
  npx vercel --prod
  ```
- To add environment variables via CLI:
  ```bash
  npx vercel env add VITE_EMAILJS_SERVICE_ID production
  npx vercel env add VITE_EMAILJS_TEMPLATE_ID production
  npx vercel env add VITE_EMAILJS_PUBLIC_KEY production
  npx vercel env add VITE_CONTACT_TO_EMAIL production
  ```

Notes
- Do NOT commit your `.env` file. Use Vercel environment variables for builds and production.
- If a demo link (Google Drive) is used for a project, Vercel simply hosts the site — external demo links remain unchanged.
- If you want, I can help you walk through the Vercel import UI or run the CLI commands on your machine (I won't ask for your secrets here).
