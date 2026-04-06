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

npm install

### Run Development Server

npm run dev

Default local URL:

http://localhost:5173/

### Build for Production

npm run build

### Preview Production Build

npm run preview

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

See the full legal terms in LICENSE.md.

## Credits

Built and maintained by Mohammad Huzaifa.

## Contact

- LinkedIn: https://www.linkedin.com/in/mohammad-huzaifa-137939322/
- GitHub: https://github.com/GuruMachanica
- LeetCode: https://leetcode.com/u/6e8oFGT8hK/
- Email: mdhuzaifa00786@gmail.com
