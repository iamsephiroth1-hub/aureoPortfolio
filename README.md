# Aureo Portfolio

A modern, minimal developer portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
Copy `.env.example` to `.env.local` and fill in your values:
```bash
cp .env.example .env.local
```

### 3. Personalize your portfolio
Edit these files with your real information:
- `src/data/config.ts` — name, email, social links
- `src/data/projects.ts` — your featured projects
- `src/data/experience.ts` — your work experience
- `src/data/stack.ts` — your tech skills

### 4. Add your assets
- Place your CV PDF at `/public/cv.pdf`
- Add project thumbnails to `/public/projects/`

### 5. Start the dev server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📋 Customization Guide

### Design Tokens
Edit `tailwind.config.js` to change colors:
- `--bg`: Background color (default: `#0A0A0A`)
- `--surface`: Surface/card color (default: `#141414`)
- `--text`: Primary text (default: `#F0EDE8`)
- `--muted`: Secondary text (default: `#6B6B6B`)
- `--accent`: Primary accent (default: `#00FF94`)

### Fonts
- Display font: **Cabinet Grotesk** (Google Fonts)
- Mono font: **DM Mono** (Google Fonts)

Both are automatically loaded in `app/layout.tsx`.

### Sections

The portfolio includes these sections:
1. **Navbar** — Fixed header with logo and navigation
2. **Hero** — Full-viewport intro with CTA buttons
3. **About** — Bio text and stats cards
4. **Tech Stack** — Skills grouped by category
5. **Projects** — Featured work with links
6. **Experience** — Timeline of roles and companies
7. **Contact** — Email + social links
8. **Footer** — Minimal footer with links

---

## 🔧 Build & Deploy

### Local Build
```bash
npm run build
npm start
```

### Deploy to Vercel

Vercel is recommended (zero-config deployment):

1. Push your code to GitHub
2. Import your repo at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js and deploys

**Env variables on Vercel:**
Add your `.env.local` values to the Vercel dashboard under **Settings → Environment Variables**.

### Alternative Deployment

This portfolio works on any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

---

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** lucide-react
- **Utilities:** clsx + tailwind-merge

---

## 🎨 Components

### UI Primitives
- `Button` — CTA with variants (primary, ghost)
- `Badge` — Rounded label/tag
- `Tag` — Tech skill with proficiency indicator
- `SectionHeading` — Section title + eyebrow
- `AnimatedText` — Staggered fade-in animations
- `GradientText` — Text-to-accent gradient

### Sections
- `Navbar` — Mobile-responsive navigation
- `Hero` — Large intro with grain overlay
- `About` — Bio + stats grid
- `TechStack` — Categorized skills with animations
- `Projects` — Card grid with featured state
- `ProjectCard` — Individual project card
- `Experience` — Timeline layout
- `ExperienceItem` — Single role with bullets
- `Contact` — CTA + social links
- `Footer` — Minimal footer

---

## 📝 Content Files

All site content lives in `src/data/`:
- `config.ts` — Site metadata, name, socials
- `projects.ts` — Featured work
- `stack.ts` — Tech skills by category
- `experience.ts` — Work history

---

## 🛠️ Development

### Linting
```bash
npm run lint
```

### File Structure
```
app/
├── layout.tsx          # Root layout + fonts
├── page.tsx            # Home page (sections)
├── globals.css         # Design tokens + resets
└── not-found.tsx       # 404 page

src/
├── components/
│   ├── sections/       # Full-page sections
│   └── ui/            # Reusable UI primitives
├── data/              # Content files
├── types/             # TypeScript types
└── lib/               # Utilities (cn, formatDate, etc)

public/
├── cv.pdf             # Your resume
└── projects/          # Project images
```

---

## 💡 Tips

- **Mobile-first:** Design is mobile-responsive by default
- **Dark mode:** No light mode toggle needed (dark first)
- **Animations:** Stagger only on first viewport entry (`once: true`)
- **SEO:** OpenGraph & Twitter meta tags in `layout.tsx`
- **Performance:** Uses Next.js Image component for optimization

---

## 📄 License

MIT — free to use and modify.

---

**Built with ❤️ for developers.**
