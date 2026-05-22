# Personal Website — Armando Mancino Portfolio

A single-page portfolio website built to showcase Armando Mancino's work,
skills, and background as a Software Engineer based in Montreal, Canada.

---

## Overview

The site is a **single-page application** with smooth in-page navigation
between five sections. It supports a **dark / light theme toggle** and a
working **contact form** powered by EmailJS. Visitors can read about Armando,
browse 11 featured projects, view a categorized skills matrix, download a
résumé and degree, and send a message directly from the page.

## Tech Stack

| Area            | Choice                                            |
| --------------- | ------------------------------------------------- |
| Framework       | React 18 (Create React App / `react-scripts` 5)   |
| Styling         | Custom CSS design system + Bootstrap 5 grid       |
| UI components   | `react-bootstrap` (navbar / collapse)             |
| Icons           | Font Awesome 6 (free + `react-fontawesome`)       |
| Fonts           | Inter (Google Fonts)                              |
| Contact form    | `emailjs-com`                                     |
| Hosting         | Vercel (referenced in project links)              |

## Project Structure

```
Personal-Website/
├── README.md
├── WEBSITE.md                  ← this file
└── website-portfolio/
    ├── package.json
    ├── public/
    │   ├── index.html          ← HTML shell, fonts, meta
    │   ├── ArmandoResume.pdf    ← downloadable résumé
    │   ├── degree.pdf          ← downloadable degree
    │   ├── profile_img.jpg     ← About-section photo
    │   └── *.png / *.PNG       ← project + skill icons/screenshots
    └── src/
        ├── index.js            ← React entry point
        ├── index.css           ← base reset + body font
        ├── App.css             ← full design system + component styles
        ├── App.js              ← layout, theme state, section order
        ├── hooks/
        │   └── useScrollReveal.js  ← IntersectionObserver scroll animations
        └── components/
            ├── Header.js       ← fixed navbar, scroll-spy, theme toggle
            ├── Welcome.js      ← hero section
            ├── About.js        ← bio + photo + stats
            ├── Portfolio.js    ← project grid (data-driven)
            ├── Skills.js       ← languages / frameworks / tools
            ├── Contact.js      ← EmailJS contact form
            └── Footer.js       ← footer with socials + back-to-top
```

## Sections

1. **Header** — Fixed, glassmorphic navbar. Transparent at the top of the
   page; gains a blurred background + shadow on scroll. Highlights the active
   section (scroll-spy) and collapses into a menu on mobile.
2. **Welcome (Hero)** — Full-viewport intro with an animated gradient name,
   role tags, call-to-action buttons, social links, and a scroll cue.
3. **About** — Short bio paragraph, profile photo with a soft gradient glow,
   and a row of headline stats (years coding, projects, languages).
4. **Portfolio** — Responsive card grid of 11 projects. Each card has a
   screenshot, description, category tags, and links to source / live demo.
   Cards are rendered from a single `PROJECTS` data array.
5. **Skills** — Three groups (Programming Languages, Frameworks,
   Tools / Applications) shown as hover-reactive tiles.
6. **Contact** — Two-column layout: direct contact details + socials beside an
   EmailJS-backed message form with inline success / error feedback.
7. **Footer** — Copyright (auto-updating year), social links, back-to-top.

## Theming

Theme state lives in `App.js` (`isDarkMode`) and is applied as a
`theme-dark` / `theme-light` class on the root element. All colors are driven
by **CSS custom properties** scoped to those classes, so the entire palette
switches from one source of truth — components do not hard-code colors.

## Running Locally

```bash
cd website-portfolio
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production bundle in build/
```

## Notes

- The contact form uses public EmailJS client identifiers; they are safe to
  expose in client code but rate-limited by EmailJS.
- Project screenshots/icons are served from `public/`. Filenames are
  case-sensitive on most hosts — keep `.PNG` / `.png` casing intact.
</content>
</invoke>
