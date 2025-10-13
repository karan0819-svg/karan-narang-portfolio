# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 performance marketing portfolio website for Karan Narang built with TypeScript, React, and shadcn/ui components. The project uses the App Router architecture with dynamic routing for case studies and includes dark mode support via next-themes.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production server
npm run start

# Lint the codebase
npm run lint
```

## Architecture

### Project Structure

- **`app/`** - Next.js App Router pages
  - `layout.tsx` - Root layout with ThemeProvider and Navbar
  - `page.tsx` - Homepage with section components
  - `about/page.tsx` - Dedicated About page
  - `case-studies/page.tsx` - All case studies listing
  - `case-studies/[slug]/page.tsx` - Individual case study detail pages
  - `book-a-call/page.tsx` - Contact/scheduling page
  - `globals.css` - Global styles with Tailwind and CSS variables

- **`components/`** - React components organized by purpose
  - `ui/` - shadcn/ui components (Button, Card, Sheet, etc.)
  - `layout/` - Layout components (Navbar, ThemeProvider, ToggleTheme)
  - `layout/sections/` - Page section components:
    - `hero.tsx` - Agency-style hero with CTAs
    - `sponsors.tsx` - Brand logos marquee
    - `stats.tsx` - "Outsourced CMO" stats section
    - `services.tsx` - Services/features grid
    - `testimonial.tsx` - Case studies carousel (shows 4 on homepage)
    - `footer.tsx` - Footer with contact info and links
  - `icons/` - Custom SVG icon components

- **`lib/`** - Utility functions and data
  - `utils.ts` - Contains `cn()` helper for merging Tailwind classes
  - `case-studies-data.ts` - Centralized case study data with slugs for dynamic routing

### Key Configuration

- **Path aliases**: `@/*` maps to project root (configured in tsconfig.json)
- **shadcn/ui config**: Located in `components.json`
  - Style: default
  - Base color: zinc → customized to blue/mint theme
  - CSS variables enabled
  - Components alias: `@/components`
  - Utils alias: `@/lib/utils`

### Routing Strategy

- **Homepage (`/`)**: Hero → Sponsors → Stats → Services → Case Studies (4 featured) → Footer
- **About (`/about`)**: Dedicated page with full biography and stats
- **Case Studies (`/case-studies`)**: All case studies in grid layout
- **Individual Case Study (`/case-studies/[slug]`)**: Dynamic routing using slugs from `lib/case-studies-data.ts`
- **Book a Call (`/book-a-call`)**: Contact page with calendar placeholder and alternative contact methods

### Navigation Behavior

- Header nav links to `/about` and `/case-studies` pages
- Homepage hash links (e.g., `/#services`) scroll smoothly when on homepage
- "Case Studies" in header links to `/case-studies` page
- Individual case study cards link to `/case-studies/[slug]`
- Prominent "Book a Call" button in header on all pages

### Styling Approach

The project uses Tailwind CSS with:
- Custom blue/mint color scheme (keeping original designer colors)
- Custom CSS variables defined in `app/globals.css` for theming:
  - Primary: `hsl(211, 82%, 40%)` (Blue)
  - Accent: `hsl(165, 99%, 52%)` (Mint)
- Dark mode via class strategy (configured in tailwind.config.ts)
- shadcn/ui's design tokens (primary, secondary, accent, muted, etc.)
- `cn()` utility function from `@/lib/utils` for conditional class merging

### Component Patterns

- All section components are imported and composed in `app/page.tsx`
- Navbar uses responsive design with Sheet component for mobile menu + Book a Call CTA
- Case studies use centralized data from `lib/case-studies-data.ts`
- Helper functions: `getFeaturedCaseStudies()`, `getCaseStudyBySlug()`, `getAllCaseStudySlugs()`
- Theme toggling handled by `next-themes` package
- Marquee for brand logos uses `@devnomic/marquee` package

### Data Management

Case studies are centrally managed in `lib/case-studies-data.ts`:
- Each case study has a unique slug for URL routing
- Homepage shows first 4 case studies via `getFeaturedCaseStudies()`
- Individual pages use `getCaseStudyBySlug(slug)`
- Static generation uses `getAllCaseStudySlugs()` for build optimization

### Remote Images

Remote image patterns are configured in `next.config.mjs` for:
- i.pravatar.cc
- images.unsplash.com
- github.com

When adding new image sources, update the `remotePatterns` array.

## shadcn/ui Components

This project uses shadcn/ui components. To add new components:

```bash
npx shadcn-ui@latest add [component-name]
```

Existing components are located in `components/ui/` and follow shadcn/ui conventions.

## Contact Information

The website uses the following contact details:
- Email: info@growwithkarannarang.in
- Phone: +91 63533 61180
- WhatsApp: https://wa.me/916353361180
- LinkedIn: https://www.linkedin.com/in/karan-narang-744496225/

## Important Notes

- The project uses Next.js 14 App Router (not Pages Router)
- Client components must use `"use client"` directive
- All UI components use the `cn()` utility for className merging
- Theme system relies on CSS variables defined in globals.css
- Blue/mint color scheme maintained throughout (not monochrome)
- Agency-focused messaging ("we" vs "I") with data-driven emphasis
- Multiple "Book a Call" CTAs strategically placed (6-7 touchpoints)
- Case study data is the single source of truth in `lib/case-studies-data.ts`
