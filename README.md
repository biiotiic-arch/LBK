# League of Bullies

A simple React + Vite + Tailwind site for League of Bullies.

## Quick Start

1. Install Node.js LTS (https://nodejs.org)
2. Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

This creates a `dist/` folder ready to deploy.

## Deploy (Easiest Options)

### Netlify (drag-and-drop)
1. Run `npm run build`
2. Drag the `dist/` folder into Netlify Deploys (app.netlify.com/drop)
3. In Netlify → **Domain settings**, add your custom domain `leagueofbullies.us` and follow their DNS steps.

### Vercel (GitHub)
1. Push this folder to a **GitHub** repo.
2. Go to **vercel.com → Add New Project** and import the repo.
3. Accept defaults. After deploy, go to **Domains** and add `leagueofbullies.us`. Vercel will show the DNS records to add at your registrar.

## Assets & Content

- Images are in `src/assets/` and referenced in `src/App.jsx`.
- Contact buttons use your Instagram and email:
  - Instagram: https://instagram.com/leagueofbullies
  - Email: Leagueofbullies@gmail.com

## Notes
- No phone numbers or locations are displayed.
- Colors listed: Lilac Tri / Champagne Tri across profiles.
- Birthdays & weights/heights have been set per your instructions.
