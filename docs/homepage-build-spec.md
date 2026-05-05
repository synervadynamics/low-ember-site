# Low Ember Homepage Build Spec

## Project Goal

Low Ember is a fictional premium neighbourhood restaurant and cocktail bar created as a flagship Synerva Dynamics portfolio build. The homepage must demonstrate strong hospitality positioning, clear UX, conversion hierarchy, atmospheric visual direction, modular content architecture, and professional Next.js implementation.

The homepage should feel dark, warm, intimate, polished, grounded, editorial, premium but not precious, and useful for real guests.

## Core Principle

A restaurant website is a service interface wearing good clothes. It must help guests quickly understand the restaurant, view menus, reserve a table, check hours, find the location, and inquire about private dining.

Mood matters, but utility leads.

## Initial Homepage Section Order

1. Header / navigation
2. Hero section
3. Feature strip
4. Dining cards section
5. Kitchen / menu preview section
6. Bar / cocktail preview section
7. Room / atmosphere section
8. Private dining section
9. Happenings section
10. Location / contact section
11. Footer

## Primary Conversion Hierarchy

Primary CTA:
- Reserve a Table

Secondary CTAs:
- View Menus
- Explore the Dinner Menu
- See the Cocktail List
- Plan an Event
- Learn More

## Technical Architecture Principle

src/app/page.tsx should stay thin and render the homepage feature.

Homepage orchestration should live in:
src/features/homepage/Homepage.tsx

Homepage content should live in:
src/features/homepage/homepage.data.ts

Homepage sections should live in:
src/features/homepage/sections/

Shared layout components should live in:
src/components/layout/

Reusable UI primitives should live in:
src/components/ui/

Site constants should live in:
src/lib/site.ts

Design tokens should live in:
src/styles/tokens.css and be imported into src/app/globals.css when implemented.

## Placeholder Media Principle

Use local placeholder media or a reusable PlaceholderImage component first. Do not rely on remote URLs. Do not bake text into images. Preserve aspect ratios so final photography can be swapped in later without layout rewrites.

## Accessibility Requirements

- Use semantic header, nav, main, section, and footer landmarks.
- Use one clear h1.
- Maintain logical heading order.
- Use accessible labels for CTAs.
- Use visible focus states.
- Keep buttons and links tap-friendly.
- Do not bake meaningful text into images.
- Mark decorative icons as aria-hidden.
- Use tel: and mailto: for phone and email links.
- Keep contrast high enough for dark UI readability.

## Performance Requirements

- Avoid unnecessary dependencies.
- Avoid animation libraries in v1.
- Prepare for next/image when final assets exist.
- Avoid layout shift by preserving media aspect ratios.
- Keep the homepage static and Vercel-friendly.
- Run lint and build checks regularly.

## Initial Motion Policy

Use CSS hover and focus transitions only in v1. Framer Motion, GSAP, or Lenis can be considered later after the static layout is stable.
