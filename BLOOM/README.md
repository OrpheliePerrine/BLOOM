# BLOOM: Arts · Culture · Commerce

A multi-page front-end web app for ALCHE, a digital home for African women creatives. Visitors can read maker stories, browse a marketplace of handmade pieces, explore opportunities, and join the collective.

Built with **React 19**, **TypeScript**, **Vite**, **wouter** (routing), **sonner** (toast notifications) and **lucide-react** (icons).

---

## Table of contents

1. [What you need before starting](#1-what-you-need-before-starting)
2. [Get the code](#2-get-the-code)
3. [Install dependencies](#3-install-dependencies)
4. [Run the app locally](#4-run-the-app-locally)
5. [Build for production](#5-build-for-production)
6. [Pages and routes](#6-pages-and-routes)
7. [Project structure](#7-project-structure)
8. [Editing content](#8-editing-content)
9. [Deploying](#9-deploying)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. What you need before starting

You need three things installed on your computer.

### a) Node.js (version 20.19 or newer, or 22.12 or newer)

Vite 7 will not run on older versions.

1. Go to <https://nodejs.org> and download the **LTS** version.
2. Run the installer and accept the defaults.
3. Open a **new** terminal and check the version:

```bash
node -v
```

It should print `v20.19.0` or higher (or `v22.12.0` or higher).

### b) pnpm (package manager)

This project uses pnpm. Install it with:

```bash
npm install -g pnpm
```

Check it worked:

```bash
pnpm -v
```

### c) Git (only if you are cloning from GitHub)

Download from <https://git-scm.com/downloads>, then check with:

```bash
git --version
```

---

## 2. Get the code

**Option A: clone from GitHub**

```bash
git clone https://github.com/OrpheliePerrine/BLOOM.git
cd BLOOM
```

Replace the URL with the real address of this repository.

**Option B: download a ZIP**

1. On the GitHub page, click the green **Code** button, then **Download ZIP**.
2. Extract the ZIP.
3. Open a terminal inside the extracted folder (in VS Code: **File → Open Folder**, then **Terminal → New Terminal**).

Make sure your terminal is in the folder that contains `package.json`. You can check with `ls` (macOS/Linux) or `dir` (Windows).

---

## 3. Install dependencies

From the project root, run:

```bash
pnpm install
```

This creates a `node_modules/` folder and may take a minute. It only needs to be done once, or again whenever `package.json` changes.

---

## 4. Run the app locally

```bash
pnpm dev
```

The terminal will print something like:

```
  VITE v7.x.x  ready

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
```

Open the **Local** address in your browser. The site reloads automatically when you save a file.

To view it on your phone, connect the phone to the same Wi-Fi and open the **Network** address.

To stop the server, press `Ctrl + C` in the terminal.

> **Internet connection required:** the images load from Unsplash, so they will not appear offline.

---

## 5. Build for production

```bash
pnpm build
```

This creates an optimized version of the site in the `dist/` folder.

To preview that production build locally:

```bash
pnpm preview
```

---

## 6. Pages and routes

| URL | Page |
| --- | --- |
| `/` | Home |
| `/stories` | All stories, with search and category filters |
| `/stories/:id` | A single story |
| `/market` | Marketplace |
| `/market/:id` | A single product |
| `/uplift` | Opportunities: mentorship, scholarships, conferences |
| `/join` | Join the collective (sign-up form) |
| anything else | 404 page |

**Note:** the shopping bag counter and the join form are front-end demos. Nothing is saved to a server, and refreshing the page resets the bag.

---

## 7. Project structure

```
.
├── client/
│   ├── index.html
│   ├── public/                 Static files (favicon, etc.)
│   └── src/
│       ├── main.tsx            App entry point
│       ├── App.tsx             Routes and layout
│       ├── index.css           All site styling
│       ├── data/
│       │   └── content.ts      Stories, products and opportunities
│       ├── components/
│       │   ├── BagContext.tsx  Shopping bag counter (shared state)
│       │   ├── Header.tsx
│       │   ├── Footer.tsx
│       │   ├── ScrollToTop.tsx
│       │   ├── StoryCard.tsx
│       │   └── ProductCard.tsx
│       └── pages/
│           ├── Home.tsx
│           ├── Stories.tsx
│           ├── StoryDetail.tsx
│           ├── Market.tsx
│           ├── ProductDetail.tsx
│           ├── Uplift.tsx
│           ├── Join.tsx
│           └── NotFound.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 8. Editing content

Almost all text, prices and images live in one file: **`client/src/data/content.ts`**.

- **Add a story:** add a new object to the `stories` array with a unique `id`.
- **Add a product:** add a new object to the `products` array with a unique `id`.
- **Change opportunities:** edit the `opportunities` array.
- **Change images:** replace the `image` URLs.

Save the file and the browser updates immediately.

Colors, fonts and spacing are controlled in `client/src/index.css`.

---

## 9. Deploying

The site is a single-page app, so the host must send every URL to `index.html`. Otherwise refreshing on `/stories/1` will show a 404.

Use these settings on any static host:

| Setting | Value |
| --- | --- |
| Install command | `pnpm install` |
| Build command | `pnpm build` |
| Output directory | `dist` |

**Netlify:** add a file `client/public/_redirects` containing:

```
/*  /index.html  200
```

**Vercel:** add a `vercel.json` in the project root:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---
