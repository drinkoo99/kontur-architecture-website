# KONTUR — Architecture Studio Website

A fast, editorial-style portfolio website for **KONTUR**, a fictional architecture
studio based in Prishtina, Kosovo. Built as a single-page application with React,
TypeScript, Vite and Tailwind CSS, it includes a home page, a filterable project
index, per-project detail pages, a studio profile and a contact page.

Live domain placeholder: `https://kontur.studio/`

---

## Table of contents

1. [What's inside](#whats-inside)
2. [Tech stack](#tech-stack)
3. [Project structure](#project-structure)
4. [Prerequisites](#prerequisites)
5. [Step-by-step: running the project](#step-by-step-running-the-project)
6. [Available scripts](#available-scripts)
7. [Building for production](#building-for-production)
8. [Customizing the site](#customizing-the-site)
9. [How the images work](#how-the-images-work)
10. [Deploying](#deploying)
11. [Troubleshooting](#troubleshooting)

---

## What's inside

- **Home page** — full-bleed hero, featured work grid, studio approach section.
- **Projects index** — all projects with category filtering (Residential, Cultural,
  Adaptive Reuse, Urban).
- **Project detail pages** — hero image, metadata (location, year, status, area,
  client, team), description, concept and a responsive image gallery, plus
  previous/next navigation.
- **Studio page** — practice statement, principles and disciplines.
- **Contact page** — contact details, address and live studio local time.
- **Polish** — editorial typography, scroll-reveal animations, animated image
  covers, sticky header that turns transparent over the hero, accessible mobile
  menu, dynamic SEO tags, and a responsive layout down to small phones.

## Tech stack

| Layer      | Choice                                              |
| ---------- | --------------------------------------------------- |
| UI         | React 18 + TypeScript                               |
| Routing    | React Router 6 (`BrowserRouter`)                    |
| Build tool | Vite 5                                              |
| Styling    | Tailwind CSS 3 + a small layer of custom CSS        |
| Linting    | ESLint 8 + `@typescript-eslint` + React hooks plugin |
| Fonts      | Google Fonts (Instrument Sans + IBM Plex Mono)      |
| Images     | Pre-generated responsive JPEGs + a JSON manifest    |

No backend, API keys, database or environment variables are required.

## Project structure

```
architecture-website/
├─ index.html                  # HTML shell, fonts, meta tags
├─ package.json                # Scripts and dependencies
├─ vite.config.ts              # Vite config + "@" -> "./src" alias
├─ tailwind.config.js          # Design tokens (colors, fonts, sizes)
├─ postcss.config.js           # Tailwind + autoprefixer
├─ tsconfig*.json              # TypeScript configs
├─ eslintrc.cjs                # Lint rules
├─ public/
│  ├─ favicon.svg
│  └─ images/                  # All responsive project images (jpg)
└─ src/
   ├─ main.tsx                 # App entry point (mounts React + Router)
   ├─ App.tsx                  # Routes + shared layout
   ├─ index.css                # Tailwind layers, design tokens, animations
   ├─ components/
   │  ├─ home/                 # Hero, FeaturedWork, Approach
   │  ├─ layout/               # Header, Footer, MobileNav, ScrollToTop, PageIntro
   │  ├─ projects/             # ProjectIndex, ProjectCard, CategoryFilter
   │  ├─ ui/                   # Figure, MetaList, SectionLabel, TextLink, Wordmark
   │  └─ Seo.tsx               # Injects per-page title/meta tags
   ├─ data/
   │  ├─ projects.ts           # All project content
   │  └─ site.ts               # Studio info, nav, principles
   ├─ generated/
   │  └─ images.json           # Image manifest (widths + aspect ratios)
   ├─ lib/
   │  ├─ cn.ts                 # className helper
   │  ├─ hooks.ts              # Scroll, local time, reveal hooks
   │  └─ images.ts             # Image src/srcSet/ratio helpers
   └─ pages/                   # HomePage, ProjectsPage, ProjectDetailPage,
                               # StudioPage, ContactPage, NotFoundPage
```

## Prerequisites

You only need **Node.js** and **npm** (npm ships with Node). Git is optional but
recommended.

- **Node.js 18 or newer** — Vite 5 requires it. Node 20 LTS is ideal.
- **npm 9 or newer** (bundled with Node 18+).

Check what you already have:

```bash
node -v
npm -v
```

If a version number prints for both, you're ready. If you see
`command not found` or `'node' is not recognized`, install Node first.

<details>
<summary><strong>Installing Node.js (if needed)</strong></summary>

- **Windows / macOS:** download the LTS installer from <https://nodejs.org> and
  run it, then reopen your terminal.
- **Windows (winget):** `winget install OpenJS.NodeJS.LTS`
- **macOS (Homebrew):** `brew install node`
- **Linux (nvm, recommended):**
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  nvm install --lts
  ```

</details>

## Step-by-step: running the project

Follow these steps exactly. Commands are shown for a terminal (PowerShell on
Windows, Terminal on macOS/Linux).

### Step 1 — Open a terminal

- **Windows:** press `Win`, type **PowerShell**, and open it. (You can also use
  Windows Terminal or Git Bash.)
- **macOS:** open **Terminal** (Applications → Utilities → Terminal).
- **Linux:** open your terminal emulator.

### Step 2 — Go to the project folder

The project already exists at:

```
C:\Users\Drin\Desktop\architecture-website
```

In PowerShell / macOS / Linux:

```bash
cd "C:\Users\Drin\Desktop\architecture-website"
```

On macOS/Linux the path is usually:

```bash
cd ~/Desktop/architecture-website
```

> Tip: you can drag the folder onto the terminal window to auto-fill the path.

### Step 3 — Confirm you're in the right place

```bash
ls        # macOS / Linux
dir       # Windows PowerShell
```

You should see `package.json`, `index.html`, `src`, `public`, etc. If you do, you
are in the correct folder.

### Step 4 — Install dependencies (first time only)

```bash
npm install
```

This downloads React, Vite, Tailwind and the rest into a local `node_modules`
folder. It can take a minute or two. You only need to do this once (or whenever
`package.json` changes). A `package-lock.json` is included, so this will install
the exact versions the project was built with.

### Step 5 — Start the development server

```bash
npm run dev
```

Vite will start and print something like:

```
  VITE v5.4.8  ready in 412 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Step 6 — Open the site in your browser

Hold `Ctrl` (Windows/Linux) or `Cmd` (macOS) and click the `http://localhost:5173/`
link in the terminal, or paste it into your browser's address bar. The site
should load immediately.

### Step 7 — Edit and watch it reload

Leave `npm run dev` running. Open any file in `src/` with your editor, save it,
and the browser updates automatically (hot module replacement). Great files to
try first:

- `src/data/site.ts` — studio name, email, phone, address, nav links
- `src/data/projects.ts` — all projects and their text

### Step 8 — Stop the server

When you're done, click the terminal and press `Ctrl + C` to stop the dev server.
Run `npm run dev` again whenever you want to work on the site.

---

## Available scripts

Run these from the project folder with `npm run <name>`:

| Script              | What it does                                                        |
| ------------------- | ------------------------------------------------------------------- |
| `npm run dev`       | Start the local dev server with hot reload at `http://localhost:5173` |
| `npm run build`     | Type-check and create an optimized production build in `dist/`       |
| `npm run preview`   | Serve the built `dist/` locally to test it before deploying          |
| `npm run typecheck` | Run TypeScript in check-only mode (no files written)                 |
| `npm run lint`      | Lint all `.ts`/`.tsx` files with ESLint (fails on any warning)       |

## Building for production

To create the optimized, static files that get deployed:

```bash
npm run build
```

This runs `tsc -b` (type check) and then `vite build`. The output lands in the
`dist/` folder: a handful of hashed JS/CSS files plus the `images/` and
`favicon.svg` assets copied from `public/`.

To preview that exact build on your machine:

```bash
npm run preview
```

It serves `dist/` at `http://localhost:4173/`. This is the closest thing to what
visitors will see in production.

> Note: `dist/` is a generated folder and is ignored by Git. Never edit it by
> hand — rebuild instead.

## Customizing the site

All content is data-driven, so most edits don't touch components.

### Studio details, nav and principles — `src/data/site.ts`

- `site.name`, `site.descriptor`, `site.founded` — studio identity.
- `site.email`, `site.phone`, `site.address` — contact page details.
- `site.social` — Instagram / LinkedIn links.
- `site.nav` — header navigation items (label + route).
- `studio.intro`, `studio.statement`, `studio.principles`, `studio.disciplines` —
  the studio page copy.

### Projects — `src/data/projects.ts`

Each entry in the `projects` array is one project. Key fields:

- `slug` — used in the URL (`/projects/house-on-the-hill`). Keep it unique and
  lowercase.
- `title`, `subtitle`, `summary`, `description[]`, `concept` — text content.
- `location`, `year`, `status`, `category`, `area`, `client`, `team` — metadata.
- `featured: true` — shows the project on the home page.
- `hero` and `gallery[]` — reference image names from the image manifest.

To add a project, copy an existing object, give it a new unique `slug`, and add
its images (see below). To change category filters, edit the `categories` array
at the top of the file.

### Colors and typography — `src/index.css` and `tailwind.config.js`

The color palette lives as CSS variables in `:root` inside `src/index.css`
(`--paper`, `--ink`, `--accent`, etc.). Tailwind exposes them as `bg-paper`,
`text-ink`, `text-accent`, and so on, via `tailwind.config.js`.

## How the images work

Images are **pre-generated** at multiple widths rather than processed at build
time, and there is no external image service involved.

- Actual files live in `public/images/` and follow the pattern
  `<name>-<width>.jpg` (for example `hill-hero-1920.jpg`, `hill-hero-1280.jpg`,
  `hill-hero-800.jpg`).
- `src/generated/images.json` is the manifest. For every image name it lists the
  available `widths` and the `ratio` (height ÷ width). This is what
  `src/lib/images.ts` reads to build `src` and responsive `srcset` attributes.

### Adding a new image

1. Export the image in the widths your layout needs. For full-width images use
   `1920`, `1280` and `800`; for smaller/side images use `900` and `640`.
2. Save them into `public/images/` as `<name>-<width>.jpg`.
3. Add a matching entry to `src/generated/images.json`:

   ```json
   "my-new-image": {
     "widths": [1920, 1280, 800],
     "ratio": 0.6667
   }
   ```

   `ratio` is `height / width`. For a 1920×1280 image that's `1280 / 1920 =
   0.6667`.

4. Reference the name in `src/data/projects.ts` (as `hero.name` or a
   `gallery[].name`). TypeScript will now accept it as a valid `ImageName`.

The `Figure` component (`src/components/ui/Figure.tsx`) then renders the correct
`srcset`/`sizes` automatically, so images stay sharp without shipping oversized
files.

## Deploying

Because the build is fully static, you can host `dist/` almost anywhere
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, any static host or CDN).

The one requirement is **SPA fallback routing**: because routing happens in the
browser, any unknown URL must return `index.html` instead of a 404, otherwise
refreshing a page like `/projects/house-on-the-hill` will break.

- **Netlify** — add a `public/_redirects` file containing:
  ```
  /*  /index.html  200
  ```
- **Vercel** — add a `vercel.json` with a rewrite of `"/(.*)"` to `"/index.html"`.
- **Cloudflare Pages** — set the fallback / single-page-app option to
  `index.html`, or use a `_redirects` file as above.
- **GitHub Pages** — copy `dist/index.html` to `dist/404.html`, or use a
  hash-based router.

The canonical/OG URLs currently point at `https://kontur.studio/`. Update them in
`index.html` and `src/components/Seo.tsx` if you deploy to a different domain.

## Troubleshooting

**`npm` or `node` is not recognized / command not found**
Node isn't installed or isn't on your PATH. Install it (see
[Prerequisites](#prerequisites)) and reopen the terminal.

**`npm install` fails behind a corporate network or proxy**
Try `npm install --registry https://registry.npmjs.org/`. If you're offline, you
need network access at least once to fetch packages.

**Port 5173 is already in use**
Run on a different port: `npm run dev -- --port 3000`. (Or stop whatever is using
5173.)

**Blank page after `npm run dev`**
Make sure you ran `npm install` first, and that you're in the folder that
contains `package.json`. Check the terminal for errors.

**Images are broken**
Confirm the exact `-<width>.jpg` files exist in `public/images/` and that the
entry in `src/generated/images.json` matches the file name and lists every width
you generated.

**`npm run lint` reports warnings and exits**
The script is configured with `--max-warnings 0`, so any warning fails the run.
Either fix the warning or adjust the script in `package.json`.

**Refreshing a deep link 404s on my host**
That's the SPA fallback issue — see [Deploying](#deploying).

---

© KONTUR Architecture Studio. All project content and imagery are sample material
for demonstration purposes.
