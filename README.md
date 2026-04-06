# Mohammad Huzaifa Portfolio

A personal portfolio website built with React, Vite, Three.js, Framer Motion, and Tailwind CSS.

This project presents my profile, education timeline, certifications, achievements timeline, projects, and contact section in an interactive single-page experience.

## Live Experience

Run locally to view the full experience with animations, timelines, and 3D skill bubbles.

## Features

- Hero section with animated intro and social links
- Structured About section
- Categorized skills and technologies section with animated bubbles
- Separate Education timeline
- Dedicated Certifications section
- Separate Achievements timeline
- Projects showcase with links
- Contact form section
- Floating resume button
- Entry loading screen with animated logo

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Three.js
- @react-three/fiber
- @react-three/drei
- React Vertical Timeline

## Project Structure

- src/components: UI sections and reusable components
- src/constants: central content and data
- src/assets: images, icons, and backgrounds
- src/hoc: section wrappers and composition helpers
- src/utils: utility functions and icon helpers

## Getting Started

### Prerequisites

- Node.js 16 or newer
- npm 9 or newer

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Default local URL:

http://localhost:5173/

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Environment variables

This project uses Vite and expects environment variables prefixed with `VITE_` for client-side usage. Create a local `.env` (already ignored) with these keys:

```env
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_TO_EMAIL=you@yourdomain.com
```

Do NOT commit your `.env` — it is included in `.gitignore`.

If you use GitHub Actions to build & deploy, add the same keys to the repository **Secrets** (Settings → Secrets → Actions) with the exact names above.

## Customization Guide

Primary content lives in:

- src/constants/index.js

Update these areas to customize quickly:

- Hero and short bio: src/components/Hero.jsx
- Skills categories and icons: src/constants/index.js
- Education timeline: src/constants/index.js (educations)
- Certifications cards: src/constants/index.js (certifications)
- Achievements timeline: src/constants/index.js (achievements)
- Project cards: src/constants/index.js (projects)
- Contact behavior: src/components/Contact.jsx

## Usage Policy

This repository is not open source.

You may:

- View the source code
- Learn from the implementation
- Take inspiration for your own original work

You may not:

- Copy and paste this code in whole or in part
- Re-upload this codebase or modified versions
- Redistribute project assets, source files, or design sections
- Use this project as a template for direct reuse

See the full legal terms in [LICENSE](LICENSE).

## Deployment

Three common deployment options are described below. Choose one and follow the steps.

- Vercel (recommended):
	1. Sign in to https://vercel.com and create a new project.
	2. Import this GitHub repository.
	3. Under Project Settings → Environment Variables, add the same `VITE_` variables listed above.
	4. Vercel will automatically detect the Vite project and deploy on push.

- Netlify:
	1. Create a site from Git → GitHub and import the repo.
	2. Set the build command to `npm run build` and the publish directory to `dist`.
	3. Add the `VITE_` environment variables under Site Settings → Build & deploy → Environment.

- GitHub Pages (via GitHub Actions):
	- I added a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the site and publishes the `dist` folder to the `gh-pages` branch on push to `main`.
	- To use it:
		1. Add the `VITE_` variables as **Repository secrets** (Settings → Secrets → Actions).
		2. Push to `main` — the workflow will run, build, and publish `dist` to `gh-pages`.
		3. Enable Pages in the repository Settings → Pages and select the `gh-pages` branch as the source.

If you'd like, I can set up CI deployment to Netlify or Vercel for you (I can't set up external accounts, but I can create the configuration and instructions you can follow to connect them).

## Credits

Built and maintained by Mohammad Huzaifa.

## Contact

- LinkedIn: https://www.linkedin.com/in/mohammad-huzaifa-137939322/
- GitHub: https://github.com/GuruMachanica
- LeetCode: https://leetcode.com/u/6e8oFGT8hK/
- Email: mdhuzaifa00786@gmail.com
