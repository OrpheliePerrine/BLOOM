# ALCHE — African Arts, Culture & Commerce

ALCHE is a polished React + TypeScript prototype for a women-centered African arts, culture, and commerce platform. It turns the assignment's **Discover → Connect → Monetize → Uplift** model into an editorial marketplace experience.

The interface is intentionally designed to feel like a living cultural journal rather than a generic storefront: warm clay and paper tones, an editorial serif/sans font pairing, tactile card layouts, and clear pathways from story to sale to support.

## What is included

- **Discover:** searchable, filterable stories from African women creatives.
- **Connect:** creator locations, story details, save buttons, appreciation/like actions, and community CTAs.
- **Monetize:** a direct-access marketplace with maker information, origin, pricing, and an interactive bag counter.
- **Uplift:** mentorship, scholarship, and conference opportunity cards.
- **Responsive design:** desktop, tablet, and mobile layouts with a mobile bottom navigation bar.
- **Prototype interactions:** buttons, filters, search, add-to-bag actions, saved stories, likes, scrolling navigation, and toast feedback are wired up locally.

> This is a frontend-only prototype. It does not process payments, authenticate users, store data, or connect to a production marketplace backend yet.

## Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS 4 (available through the scaffold)
- Lucide React icons
- Sonner toast notifications
- Wouter-compatible project scaffold

## Run the project on your device

### 1. Install the prerequisites

Install these first:

- [Node.js](https://nodejs.org/) 20 or newer
- Git
- pnpm (recommended) or npm

To install pnpm after installing Node.js:

```bash
npm install --global pnpm
```

### 2. Get the code from GitHub

Once the repository has been created on GitHub, copy its URL and run:

```bash
git clone https://github.com/<your-github-username>/<your-repository-name>.git
cd <your-repository-name>
```

For example:

```bash
git clone https://github.com/marieanne/alche-african-arts-platform.git
cd alche-african-arts-platform
```

If the GitHub repository is private, GitHub may ask you to sign in or use an SSH URL instead:

```bash
git clone git@github.com:<your-github-username>/<your-repository-name>.git
```

### 3. Install dependencies

From inside the project folder, run:

```bash
pnpm install
```

If you prefer npm:

```bash
npm install
```

### 4. Start the development server

With pnpm:

```bash
pnpm dev
```

With npm:

```bash
npm run dev
```

Vite will print a local URL, normally:

```text
http://localhost:5173
```

Open that URL in your browser. The page updates automatically when you edit files.

### 5. Check the project

Run the TypeScript check:

```bash
pnpm check
```

Create a production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Main project files

```text
client/
  index.html              Document title and Google Fonts
  src/
    App.tsx               App shell and theme providers
    index.css             ALCHE design system and responsive styles
    pages/Home.tsx        Main page, sample content, and interactions
    components/ui/        Reusable scaffold UI components
server/
  index.ts                Scaffold server for production preview
README.md                 This guide
```

## Make your own changes

- Change example stories and products in `client/src/pages/Home.tsx`.
- Change colors, typography, breakpoints, and layout in `client/src/index.css`.
- Update the browser title and fonts in `client/index.html`.
- Keep image files outside `client/public` for this static scaffold. The prototype currently uses remote image URLs so the repository stays lightweight.

## Push the code to GitHub

If you are starting from a local copy and have not created the GitHub repository yet:

```bash
git init
git add .
git commit -m "Create ALCHE African arts platform"
git branch -M main
git remote add origin https://github.com/<your-github-username>/<your-repository-name>.git
git push -u origin main
```

After future changes:

```bash
git add .
git commit -m "Describe your change"
git push
```

## Suggested next sprint

The assignment describes an Agile Scrum approach. This prototype is a strong Sprint 3/4 interface foundation. A production build could add:

1. User accounts and creator profiles.
2. Database-backed stories, products, inventory, and opportunity listings.
3. Localized mobile-money checkout integrations.
4. Media upload for craft process videos and storytelling posts.
5. Mentor matching, scholarship applications, and conference registration.
6. Moderation, reporting, privacy controls, and low-bandwidth media options.

## Credits and note

ALCHE is a concept prototype based on the provided formative assignment brief. Example imagery is loaded from Unsplash and should be replaced or licensed appropriately before a commercial launch.
