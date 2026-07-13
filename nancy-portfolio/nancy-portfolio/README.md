# Nancy M — Portfolio

A responsive React portfolio built from your résumé, with a glassmorphism + animated gradient
aesthetic, dark/light mode, and the bonus features you asked for.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This outputs a `dist/` folder — deploy that to Vercel, Netlify, or GitHub Pages.

- **Vercel / Netlify:** just import the GitHub repo, both auto-detect Vite. Build command
  `npm run build`, output directory `dist`.
- **GitHub Pages:** add `base: '/your-repo-name/'` to `vite.config.js`, then run
  `npm run build` and deploy the `dist/` folder (e.g. with the `gh-pages` package).

## Before you publish, do these 3 things

1. **Add your résumé PDF.** Drop a file named `resume.pdf` into the `public/` folder — the
   "Download Résumé" button in the hero already links to `/resume.pdf`.
2. **Update your links.** Open `src/data/resumeData.js` and replace the placeholder
   `linkedin` and `github` URLs with your real profile links.
3. **Wire up the contact form.** The form in `src/components/Contact.jsx` currently simulates
   a submission (so you can see the toast notification work). To actually receive messages,
   connect it to a service like [Formspree](https://formspree.io) or
   [EmailJS](https://www.emailjs.com/) — both have a few lines of setup and a free tier.

## What's included

- Dark/light mode toggle (remembers your choice)
- Active nav-link highlight as you scroll, glass pill navbar
- Animated skill counters and skill bars
- Mobile hamburger menu
- Scroll-to-top button
- Résumé download button
- Loading animation on first visit
- Custom cursor (desktop only — automatically off on touch devices)
- Toast notification after the contact form is submitted
- Scroll-reveal animations throughout
- Fully responsive, down to small mobile screens

## Editing your content

Everything text-based — your bio, skills, experience, projects, education — lives in one file:
`src/data/resumeData.js`. Update it there and every section updates automatically.

## Tech stack

React 18, Vite, Framer Motion (for the loader/toast/hero entrance), lucide-react (icons), and
hand-written CSS (no Tailwind) using CSS variables for the glassmorphism/theme system.
