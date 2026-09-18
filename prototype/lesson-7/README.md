# Lesson 7 prototype: God's Promise

This directory contains an isolated, static prototype for Lesson 7 of *Filled with the Holy Spirit*. It is not a WordPress plugin, CPT model, ACF design, production theme, or deployment package.

## Source hierarchy

The prototype follows the approved source roles:

- The manuscript supplies what is taught.
- The class outline supplies learner actions.
- The Keynote supplies the progressive argument.

The prototype uses the manuscript's Lesson 7 section and the transition from Part Two, the class outline's Class 10 John-thread exercise, and Keynote slides 58–66.

## Local preview

Requirements: Node.js 20 or newer. There are no third-party runtime dependencies.

```bash
cd prototype/lesson-7
npm install
npm run check
npm run dev
```

Open `http://127.0.0.1:4173`.

To inspect the generated static build:

```bash
npm run build
npm run preview
```

## Non-production staging preview

Any static preview service can serve the generated `dist/` directory from this prototype branch. Use these settings:

- Branch: `prototype/filled-holy-spirit-lesson-7`
- Root directory: `prototype/lesson-7`
- Build command: `npm run build`
- Publish directory: `prototype/lesson-7/dist`

Do not point a production domain at this branch and do not copy these files into `wp-content`.

## Prototype behavior

- Forward, back, section navigation, and visible progress
- Persistent course map: Desire → Promise → Dwelling → Power → Born of God
- Learner notes stored in `sessionStorage`; closing the tab ends the session
- Restart control that clears lesson position, disclosures, and responses
- Responsive layout, keyboard focus treatment, and reduced-motion support

