# Shape N Glow - Website

Marketing site for **Shape N Glow**, a physiotherapy & wellness center in Lebanon.
Built with **React + Vite** and **React Router**. Same design as the original mockup
(dark, luminous teal aesthetic) with Home, Services, About, and Contact pages, plus a
swipeable services carousel on mobile.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints: http://localhost:5173.

```bash
npm run build
npm run preview
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Shape N Glow website"
git branch -M main
git remote add origin https://github.com/<your-username>/shape-n-glow.git
git push -u origin main
```

## Deploy to Vercel

1. Go to https://vercel.com → **Add New… → Project**.
2. Import the GitHub repo.
3. Vercel auto-detects Vite. Defaults are correct:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

`vercel.json` is included so client-side routes (e.g. `/services`) resolve correctly
on refresh and direct links.

## Project structure

```
src/
  assets/         logo + photos
  components/     Nav, Footer, CursorGlow, ScrollToTop, ServicesCarousel, Icons
  pages/          Home, Services, About, Contact
  hooks/          useScrollReveal (scroll-in animations)
  data/           services list + shared links
  index.css       all styles (global)
```
