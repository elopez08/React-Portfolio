# React Portfolio — Source Review & Reconstruction Guide

**Repository:** https://github.com/elopez08/React-Portfolio  
**Historical work:** August 17–20, 2022 (Pacific time; GitHub commits)  
**Review:** October 27, 2026  
**Status:** Static repository inspection completed. No local build, CMS login, deployment, or browser testing was performed.

## 1. Project provenance and purpose

A multi-section React developer portfolio with animated UI, content fetched from Sanity CMS, a work gallery, skills/experience display, testimonials, and a contact form.

**Tutorial provenance matters.** The original notes directly link to [Adrian Hajdin's professional portfolio project](https://github.com/adrianhajdin/project_professional_portfolio), and `frontend_react/src/wrapper/AppWrap.js` credits JavaScript Mastery. The user also recalls following a long YouTube tutorial. Treat the application as **tutorial-guided learning and customization**, not evidence that the entire architecture/design was independently invented. The notes document experimentation, troubleshooting, explanations, and intended customization. Compare the original tutorial repository and video before assigning individual code authorship.

## 2. Critical directory layout

The repository contains **two application subdirectories** and extensive learning notes at the root:

```text
React-Portfolio/
├── frontend_react/
│   ├── package.json
│   ├── public/
│   └── src/
│       ├── App.js
│       ├── client.js
│       ├── index.js
│       ├── components/
│       │   ├── Navbar/
│       │   ├── NavigationDots.jsx
│       │   └── SocialMedia.jsx
│       ├── container/
│       │   ├── About/
│       │   ├── Footer/
│       │   ├── Header/
│       │   ├── Skills/
│       │   ├── Testimonial/
│       │   └── Work/
│       ├── wrapper/
│       │   ├── AppWrap.js
│       │   └── MotionWrap.js
│       ├── constants/
│       └── assets/
├── backend_sanity/
│   ├── package.json
│   ├── sanity.json
│   └── schemas/
├── ReadMeBeginningAndNavbar.md
├── ReadMeHeaderSteps.md
├── ReadMeAboutPage.md
├── ReadMeSanityAfterAbout.md
├── HigherEndComponent.md
├── ReadMeWorkPage.md
├── ReadMeSkillsSection.md
├── ReadMeMotionWrap.md
├── ReadMeTestimonials.md
├── ReadMeFooter.md
├── ReadMeFINALSTEPDEPLOYMENT.md
├── WhatIfReactHasAProblem.md
└── README.md
```

Some historical commits included `backend_sanity/node_modules` and other dependency material; do not treat third-party packages as authored code.

## 3. Verified technology inventory

| Technology | Evidence | Purpose |
|---|---|---|
| React 18 | `frontend_react/package.json` | Component-driven UI |
| Create React App / react-scripts 5 | `frontend_react/package.json` | Historical build/development tooling |
| JavaScript and JSX | `frontend_react/src/` | UI logic and component markup |
| SCSS / node-sass 7 | `frontend_react/package.json`, `.scss` files | Component styling |
| Framer Motion 7 | `frontend_react/src/container/`, `wrapper/MotionWrap.js` | Animations and transitions |
| React Icons | Navbar, Work, Testimonial | Icons |
| React Tooltip | Skills | Experience hover details |
| Sanity Studio v2 | `backend_sanity/package.json`, `backend_sanity/schemas/` | Content management |
| Sanity client and image-url | `frontend_react/src/client.js` | CMS data fetching, image URLs |
| GROQ queries | About, Work, Skills, Testimonial | Fetch Sanity document types |
| React state/effects | `useState`, `useEffect` across sections | Dynamic CMS data and UI state |
| Higher-order components (HOCs) | `AppWrap.js`, `MotionWrap.js` | Shared navigation/social UI and animation wrappers |

The backend folder is **Sanity Studio/CMS configuration**, not a custom Express/SQL backend.

## 4. Runtime flow and sections

1. `frontend_react/src/index.js` renders `<App />` into the root DOM node using historical `ReactDOM.render`.
2. `frontend_react/src/App.js` renders `Navbar`, `Header`, `About`, `Work`, `Skills`, `Testimonial`, and `Footer`.
3. `frontend_react/src/client.js` configures the Sanity client and image URL builder.
4. `About.jsx` fetches `*[_type == "abouts"]` and displays profile cards.
5. `Work.jsx` fetches `*[_type == "works"]`, filters portfolio items by tag, and links to live/code pages.
6. `Skills.jsx` fetches `experiences` and `skills`; renders nested experience records and tooltips.
7. `Testimonial.jsx` fetches `testimonials` and `brands`, displays a previous/next testimonial control; brand rendering is commented out in the inspected source.
8. `Footer.jsx` manages a contact form and calls `client.create(contact)` to write a Sanity `contact` document.
9. `AppWrap.js` provides section IDs, navigation dots, social links, and shared layout; `MotionWrap.js` provides animation wrappers.

The CMS schemas are in `backend_sanity/schemas/`: abouts, brands, contact, experiences, skills, testimonials, workExperience, and works.

## 5. The original study notes — recommended reading order

These are especially valuable because they preserve explanations and debugging steps from the tutorial:

1. [`ReadMeBeginningAndNavbar.md`](../ReadMeBeginningAndNavbar.md) — initial Sanity schemas, React setup, imports, styling, navbar, and assets.
2. [`ReadMeHeaderSteps.md`](../ReadMeHeaderSteps.md) — header section.
3. [`ReadMeAboutPage.md`](../ReadMeAboutPage.md) — mapping cards, React JSX, animations, and styling.
4. [`ReadMeSanityAfterAbout.md`](../ReadMeSanityAfterAbout.md) — transition from static arrays to Sanity data, `useState`/`useEffect`, GROQ, images.
5. [`HigherEndComponent.md`](../HigherEndComponent.md) — shared higher-order wrappers, social links, navigation dots.
6. [`ReadMeWorkPage.md`](../ReadMeWorkPage.md) — work-gallery filtering, animation, CMS data.
7. [`ReadMeSkillsSection.md`](../ReadMeSkillsSection.md) — skills, nested arrays, experience troubleshooting, tooltips.
8. [`ReadMeMotionWrap.md`](../ReadMeMotionWrap.md) — reusable animation wrapper.
9. [`ReadMeTestimonials.md`](../ReadMeTestimonials.md) — testimonials and navigation.
10. [`ReadMeFooter.md`](../ReadMeFooter.md) — controlled form inputs, state, submission.
11. [`ReadMeFINALSTEPDEPLOYMENT.md`](../ReadMeFINALSTEPDEPLOYMENT.md) — historical build/Netlify plan.
12. [`WhatIfReactHasAProblem.md`](../WhatIfReactHasAProblem.md) — historical troubleshooting note, not a generally recommended fix.

The root `README.md` is mostly unmodified Create React App boilerplate, so the separate learning notes are the more informative project documentation.

## 6. Reconstruct the historical architecture

**These steps have not been executed during this review.** The dependency versions and Sanity v2 tooling are old; first reproduce in a compatible, isolated environment, then modernize separately.

### A. Clone and inspect

```bash
git clone https://github.com/elopez08/React-Portfolio.git
cd React-Portfolio
```

Review `frontend_react/package.json`, `backend_sanity/package.json`, `frontend_react/src/client.js`, `backend_sanity/sanity.json`, and both subprojects' ignore rules before installing or running anything.

### B. Frontend install and start

```bash
cd frontend_react
npm install
npm start
```

The historical Create React App dev server normally uses `http://localhost:3000`. **Compatibility caveat:** `node-sass@7`, older React Scripts, and older dependencies may not install cleanly on a current Node.js release. Prefer testing with an appropriate isolated runtime rather than blindly changing package versions.

### C. Sanity CMS

```bash
cd ../backend_sanity
npm install
npm start
```

The historical Studio uses Sanity v2 packages and may require a compatible legacy CLI/runtime and access to the original Sanity project. The repository stores a Sanity project configuration, but **that does not establish current account access or the continued availability of its remote dataset**. If unavailable, create a new Sanity project and dataset or temporarily substitute local mock content.

### D. Frontend CMS configuration — security correction

The historical `frontend_react/src/client.js` reads:

- `REACT_APP_SANITY_PROJECT_ID`
- `REACT_APP_SANITY_TOKEN`

The original notes recommend putting an **Editor-permission token** in the React frontend environment. **Do not reproduce that practice.** Variables prefixed `REACT_APP_` can be included in browser-delivered bundles, making a privileged token public.

For a public read-only portfolio dataset, configure a browser client **without a secret token** and use appropriate dataset/CORS settings. For protected content or contact-form writes, use a server-side endpoint or serverless function that stores its Sanity write token securely. Never commit credentials, and rotate any historically exposed tokens. Review the original project and account settings before enabling writes.

### E. Test the sections

- Navbar and mobile menu toggle
- Header assets and motion
- About data and images
- Work gallery and tag filters
- Skills/experience records and tooltips
- Testimonial navigation and empty-state behavior
- Contact form validation, successful submission, error handling, and abuse protection
- Responsive layout and keyboard accessibility
- Production build (`npm run build`)

Test Sanity reads and writes with dummy data. Do not submit real personal information while testing.

## 7. Source-level issues / modernization backlog

1. **Browser token exposure risk:** Frontend `REACT_APP_SANITY_TOKEN` plus client-side `client.create(contact)`. Replace with public read-only access and server-side authenticated writes.
2. **Outdated stack:** Sanity Studio v2, Create React App, `node-sass`, and historical package versions require compatibility assessment. Migrate in a separate, tested branch.
3. **React 18 entrypoint:** `ReactDOM.render` is legacy; consider `createRoot` when modernizing.
4. **CMS dependencies:** Site sections depend on external Sanity data and may appear empty if the project/dataset is unavailable.
5. **Contact form:** Add input validation, submission error handling, rate limiting/spam protection, and a safe backend submission mechanism. Currently the inspected handler sets loading and only handles success.
6. **Work animation state:** `Work.jsx` initializes `animateCard` as an object but later assigns an array; verify intended Framer Motion behavior.
7. **Work tags:** `work.tags.includes(item)` assumes tags exist; validate optional/malformed CMS records.
8. **Testimonials:** `testimonials.length && ...` can render `0` when empty; use an explicit boolean condition. Brand display is commented out.
9. **Skills nested arrays:** `experience.works.map` assumes every experience has a `works` array; handle missing data. Fragments inside mapped items should have stable keys.
10. **Navbar resume link:** Desktop nav includes a resume link, but mobile nav does not; verify current destination and update outdated resume assets.
11. **Public contact details:** Historical footer hardcodes personal contact information. Review privacy and whether it should still be published before redeploying.
12. **Attribution:** Keep credit to JavaScript Mastery/tutorial origin while documenting verified individual changes.
13. **Repository hygiene:** Historical commits included dependencies and large assets; ensure `node_modules`, `.env`, and secrets are ignored. Avoid committing sensitive personal materials.
14. **Tests:** No meaningful application-specific test suite has been verified; add component and form tests.
15. **Accessibility:** Review icon-only controls, keyboard interaction, alt text, focus states, and motion preferences.

## 8. Learning outcomes worth revisiting

- Component architecture and imports/exports
- JSX, props, state, events, controlled forms
- `useState` and `useEffect` for asynchronous data
- Array `.map()`, `.filter()`, nested data, and keys
- Higher-order components and reusable UI patterns
- Responsive SCSS and CSS variables
- Framer Motion transitions
- CMS schema modeling and GROQ querying
- API/CMS security boundaries and safe form submission
- Debugging data shape mismatches and legacy dependency issues

## 9. Attribution and portfolio wording

The notes and source explicitly credit an Adrian Hajdin / JavaScript Mastery tutorial. There is evidence of personalized branding, explanatory comments, and troubleshooting notes, but code similarity and individual modifications need comparison against the tutorial before claiming original implementation.

Suggested accurate project description:

> **React Portfolio (2022) — Tutorial-guided React/Sanity project.** Followed and documented a comprehensive JavaScript Mastery portfolio tutorial, exploring component architecture, React hooks, Framer Motion animations, SCSS, Sanity CMS schemas and queries, and a contact form. Customized portfolio content and recorded troubleshooting and implementation notes.

This should not be described as a wholly independently designed application.

## 10. Reconstruction checklist

- [ ] Compare the historical code with the original tutorial repository/video
- [ ] Identify personal modifications and independent problem-solving
- [ ] Inspect Git history for changes and old dependency files
- [ ] Choose compatible isolated Node.js environment
- [ ] Install and run `frontend_react/`
- [ ] Determine whether original Sanity project/dataset is still accessible
- [ ] Avoid privileged browser-side API tokens; rotate exposed credentials
- [ ] Recreate schemas or provide local mock data
- [ ] Verify every section renders with test content
- [ ] Verify responsive/mobile navbar and resume link
- [ ] Repair secure contact-form submission and error handling
- [ ] Run production build and test in browser
- [ ] Update privacy-sensitive contact/resume content
- [ ] Add tests and accessibility checks
- [ ] Modernize dependencies in a separate branch
- [ ] Document actual tested outcomes, screenshots, and changes

**Review conclusion:** A substantial tutorial-guided React/CMS learning artifact with unusually detailed historical notes. Valuable for reconstructing frontend skills, but not yet verified to run unmodified.
