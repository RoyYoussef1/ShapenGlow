# Shape N Glow — Website

Marketing site for **Shape N Glow**, a physiotherapy & wellness center in Lebanon.
Built with **React + Vite** and **React Router**. Same design as the original mockup
(dark, luminous teal aesthetic) with Home, Services, About, and Contact pages, plus a
swipeable services carousel on mobile.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

```bash
npm run build     # production build to /dist
npm run preview   # preview the production build
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

## Things to update before going live

- **Phone number** in `src/pages/Contact.jsx` (currently a placeholder).
- **Email** in `src/pages/Contact.jsx` (`hello@shapenglow.lb`).
- **Contact form** has no backend yet — it shows a success message but doesn't send.
  Wire it to one of:
  - a WhatsApp link (`https://wa.me/<number>?text=...`),
  - an email service like [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com),
  - or a Vercel serverless function.
- Replace the **placeholder testimonials/content** with real copy as needed.
- Swap in additional **real photos** where helpful (Services page, etc.).
- The **Google Maps link** points to the location from the Instagram bio — confirm it's correct.
