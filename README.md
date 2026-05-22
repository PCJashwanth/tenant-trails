# TenantTrails

An apartment review platform where tenants leave feedback, AI generates summaries, and future tenants make informed decisions before signing a lease.

## Lab 1 Scope

This repository contains the **Landing page** implementation for CSCI 5709 Lab 1.

## Tech Stack

- React 19
- Vite
- Vanilla CSS with design tokens

## Project Structure

```
tenant-trails/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              Entry point
    ├── App.jsx               Root component
    ├── index.css             Global styles and design tokens
    └── components/
        ├── Landing.jsx       Landing page composition
        ├── Landing.css
        ├── Navbar.jsx        Top navigation bar
        ├── Navbar.css
        ├── Hero.jsx          Hero section
        ├── Hero.css
        ├── Features.jsx      Three-column features section
        └── Features.css
```

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173 in the browser.

## Production Build

```bash
npm run build
```

The output is in the `dist/` folder.

## Deployment

This project is deployed on Vercel. Vercel auto-detects Vite and builds with:

- Build command: `npm run build`
- Output directory: `dist`

## Design

The Landing page implements the design from the Figma prototype submitted alongside this code.
