from pathlib import Path

brief = r"""# Low Ember Premium Homepage Redesign Brief

## Purpose

This document locks the premium homepage redesign target for Low Ember before runtime implementation begins.

The current coded homepage already has the right restaurant identity, copy, content structure, and section order. The redesign goal is not to rebuild the homepage from scratch. The goal is to upgrade the visual system so the page feels more premium, composed, atmospheric, and art-directed while preserving the existing Low Ember voice and architecture.

The canonical visual reference is:

`docs/reference/visual/low-ember-homepage-mockup.png`

The old visual reference is retained as:

`docs/reference/visual/low-ember-homepage-mockup-old.png`

The canonical mockup should guide layout, spacing, section composition, hierarchy, surface treatment, image rhythm, dark atmosphere, and premium flourishes.

The current repo should remain the source of truth for implementation structure and content.

---

## Source References

### Visual Target

`docs/reference/visual/low-ember-homepage-mockup.png`

Use this as the visual, layout, and design-system target.

It defines:

- Wider cinematic hero treatment
- Refined top navigation
- Compact hospitality feature strip
- Image-led Dining/Cocktails/Room cards
- Stronger Kitchen and Bar compositions
- Panoramic Room section
- Private Dining and Happenings lower-page split
- Integrated Location/Footer closing system
- More deliberate dark surfaces
- Selective brass/ember accents
- More premium page rhythm

### Current Build Source of Truth

The current coded homepage and `homepage.data.ts` remain the source of truth for:

- Brand identity
- City and address
- Copy voice
- Section order
- CTA labels
- Menu and cocktail names
- Event names
- Contact information
- Image paths
- Data-driven content structure

### Existing Runtime Architecture

The project already has the correct modular shape:

- `src/app/page.tsx` stays thin
- `src/features/homepage/Homepage.tsx` orchestrates the homepage
- `src/features/homepage/homepage.data.ts` stores homepage content
- `src/features/homepage/sections/` owns homepage sections
- `src/components/layout/` owns header/footer layout
- `src/components/ui/` owns reusable primitives
- `src/styles/tokens.css` owns visual tokens
- `src/app/globals.css` owns global utilities and base styles

The redesign should improve the visual system without flattening or replacing this architecture.

---

## Identity Lock

Low Ember must remain a premium neighbourhood restaurant and cocktail bar in downtown St. Catharines, Ontario.

Do not change the restaurant concept, city, address, or voice.

### Preserve These Details

Brand:

- `LOW EMBER`

Location:

- `St. Catharines, Ontario`

Address:

- `123 St. Paul Street`
- `St. Catharines, ON`
- `L2R 3M3`

Hero:

- `Dinner worth settling into.`
- `Seasonal plates, balanced cocktails, and warm service from five until late.`
- `Bar seats for walk-ins, long tables for dinner, and a private room that keeps the pace.`

Primary CTAs:

- `Reserve a Table`
- `View Menus`

Feature Strip:

- `Dinner Service`
- `Cocktails & Wine`
- `Private Dining`
- `Walk-Ins Welcome`

Main Section:

- `DINNER, DRINKS, ROOM`
- `Built for dinner. Better after dark.`

Kitchen:

- `FROM THE KITCHEN`
- `Familiar plates, done with care.`
- `View Dinner Menu`

Bar:

- `THE BAR`
- `Drinks that keep pace with dinner.`
- `Cocktails for the table.`
- `View Cocktails`

Room:

- `THE ROOM`
- `A place to stay awhile.`
- `Date Nights`
- `Work Dinners`
- `Late Tables`
- `Regulars`

Private Dining:

- `PRIVATE DINING`
- `Private dinners, done properly.`
- `PLAN A DINNER`

Events:

- `EVENTS`
- `What’s on`
- `Sunday Supper`
- `Guest Bartender Night`
- `Late Night Vinyl`

Location:

- `Find Low Ember`
- `905 555 0147`
- `hello@lowember.ca`
- `@lowember.bar`

Footer:

- `Seasonal plates. Good drinks. A room worth settling into.`
- `Dinner, cocktails, and private dining in downtown St. Catharines.`

### Do Not Introduce

- Somerville
- `Gather at the Low Ember`
- Wood-fired concept language
- `Neighbourhood gem`
- Generic luxury restaurant copy
- Tasting-menu language
- Speakeasy cliché language
- `Inquire Now` replacing `PLAN A DINNER`
- New event names unless explicitly approved
- A new city, address, or restaurant concept

The visual system should improve the existing Low Ember, not replace it with a prettier stranger.

---

## Visual Target Summary

The canonical mockup moves Low Ember toward a more premium, editorial, image-led hospitality homepage.

The current coded homepage is structurally correct, but it still feels too evenly componentized. Too many sections rely on the same pattern:

- dark panel
- thin border
- image well
- text block
- brass accent
- repeat

The premium direction should reduce that repetition.

The redesign should create hierarchy through:

- atmosphere
- image scale
- tonal depth
- spacing contrast
- section rhythm
- selective borders
- refined typography
- restrained brass/ember accents

The goal is not “more decoration.” The goal is better visual authorship.

---

## Core Design Rules

### 1. Atmosphere Creates Structure Before Borders Do

Use dark tonal bands, image scale, spacing, and composition to organize the page.

Borders should support structure. They should not be the structure.

### 2. Borders Are Selective

Use borders for:

- CTA buttons
- utility strips
- menu rails
- small dividers
- selected cards
- controlled image frames

Avoid heavy boxed treatment on every major emotional section.

Hero, Room, and Private Dining should feel more cinematic than card-like.

### 3. Brass and Ember Are Punctuation

Use brass/ember for:

- CTA emphasis
- icons
- small metadata accents
- arrows
- map pin
- key dividers
- hover/focus polish

Do not use brass as the default border color for every surface.

### 4. Dark Surfaces Need Tonal Depth

Avoid flat black fields.

Use:

- near-black base
- charcoal layers
- warm radial gradients
- subtle vignettes
- elevated panels
- soft inset shadows
- low-opacity dividers

The page should feel dark, warm, and dimensional.

### 5. Kitchen and Bar Must Not Feel Like Clones

Kitchen can be structured and food/menu-forward.

Bar should feel more lounge-like, image-led, and editorial.

They may share the same data discipline, but not the same visual rhythm.

### 6. Room and Private Dining Should Feel Cinematic

Room should read as a panoramic atmosphere section.

Private Dining should read as a conversion moment with mood, not as another bordered card.

### 7. Happenings Should Feel Editorial

Do not force Happenings into three equal blog cards if the canonical mockup is pointing toward a date/list/image composition.

The section should feel alive and current, not generic.

### 8. Location and Footer Are One Closing System

Location and footer should feel like a designed close to the page.

The map should be dark, branded, and subdued.

Address, hours, phone, email, Instagram, and reservation CTA must stay easy to find.

### 9. The Site Must Remain Useful

Low Ember is still a restaurant website.

Guests must quickly understand:

- what it is
- where it is
- what kind of night it offers
- how to reserve
- how to view menus
- hours
- address
- contact
- private dining path
- what’s on

Mood without utility is expensive fog.

### 10. Motion Is Quiet

Use restrained CSS transitions only:

- nav underline
- button hover
- arrow movement
- subtle card image scale
- focus states
- opacity/tonal changes

Do not add animation libraries for this phase.

Respect reduced motion.

---

## Section-by-Section Redesign Map

## SiteHeader

### Current Role

The header provides global navigation, brand identity, and the Reserve a Table CTA.

### Target Visual Change

Move toward the canonical mockup’s tighter, more premium header:

- slim black header
- restrained brass wordmark
- small uppercase nav
- clear but not oversized reservation CTA
- polished hover underline already committed

### Content to Preserve

- LOW EMBER
- About
- Menus
- Cocktails
- Private Dining
- Happenings
- Contact
- Reserve a Table

### Likely Files

- `src/components/layout/SiteHeader.tsx`
- `src/app/globals.css`
- possibly `src/components/ui/Button.tsx`

### Risk

Low

### Responsive Notes

Mobile nav must stay tap-safe and readable. Do not sacrifice usability for a thinner desktop look.

---

## HeroSection

### Current Role

The hero establishes the restaurant identity, location, emotional promise, and primary actions.

### Target Visual Change

The hero should become more cinematic and less panel-first.

Target qualities:

- larger image dominance
- stronger full-width top-world feeling
- left text column with controlled width
- warmer dark gradient blending into image
- less obvious outer box
- CTAs aligned cleanly
- hero image remains atmospheric and readable

### Content to Preserve

- St. Catharines, Ontario
- Dinner worth settling into.
- Seasonal plates, balanced cocktails, and warm service from five until late.
- Bar seats for walk-ins, long tables for dinner, and a private room that keeps the pace.
- Reserve a Table
- View Menus

### Likely Files

- `src/features/homepage/sections/HeroSection.tsx`
- `src/styles/tokens.css`
- `src/app/globals.css`
- possibly `src/components/ui/Button.tsx`
- possibly `src/components/ui/MediaFrame.tsx`

### Data Changes

None expected.

### Risk

Medium

### Responsive Notes

The hero must retain hierarchy on:

- 1440px: cinematic and broad
- 1280px: same rhythm without crowding
- 1024px: image/text proportions still intentional
- 768px: stack without losing the premium feel
- 430px / 390px: headline, copy, and CTAs remain readable and tappable

### Accessibility Notes

Ensure sufficient contrast over imagery. Preserve one clear `h1`.

---

## FeatureStrip

### Current Role

The feature strip gives quick operational reassurance.

### Target Visual Change

Make it feel like a refined hospitality utility band:

- compact height
- cleaner icon rhythm
- softer dividers
- less boxiness
- stronger alignment
- more premium spacing

### Content to Preserve

- Dinner Service, Nightly from 5pm
- Cocktails & Wine, Classics, house drinks, Niagara wine
- Private Dining, Birthdays, work dinners, buyouts
- Walk-Ins Welcome, Bar seats and high-tops nightly

### Likely Files

- `src/features/homepage/sections/FeatureStrip.tsx`
- `src/components/ui/FeatureIcon.tsx`
- `src/app/globals.css`

### Data Changes

None expected.

### Risk

Low

### Responsive Notes

At tablet/mobile widths, it should collapse to 2x2 or stacked without feeling like four random cards.

---

## DiningCardsSection

### Current Role

The section introduces the three core promises: Dining, Cocktails, The Room.

### Target Visual Change

Move from equal cards toward a more image-led editorial row:

- stronger image crops
- less generic card-bottom panel treatment
- more elegant CTA placement
- softer borders
- tighter internal spacing
- visual connection to the rest of the page

### Content to Preserve

- DINNER, DRINKS, ROOM
- Built for dinner. Better after dark.
- Dining
- Cocktails
- The Room
- View Dinner Menu
- View Cocktails
- Explore the Room

### Likely Files

- `src/features/homepage/sections/DiningCardsSection.tsx`
- `src/components/ui/MediaFrame.tsx`
- `src/components/ui/LinkArrow.tsx`
- `src/app/globals.css`

### Data Changes

Possibly add card CTA labels/hrefs if not already present.

### Risk

Medium

### Responsive Notes

On mobile, cards should stack with image and CTA still clear. Avoid collapsing into generic dark boxes.

---

## KitchenSection

### Current Role

The Kitchen section provides food credibility and menu preview.

### Target Visual Change

The existing structure is close, but needs more premium proportion and surface control:

- stronger featured image
- clearer menu rail
- less equal panel weight
- refined “Featured Dishes” list
- softer outer structure
- better image/text balance

### Content to Preserve

- FROM THE KITCHEN
- Familiar plates, done with care.
- Existing kitchen copy
- Charred Striploin
- Lake Erie Pickerel
- Coal-Roasted Carrots
- Ember Burger
- View Dinner Menu
- View Full Menu

### Likely Files

- `src/features/homepage/sections/KitchenSection.tsx`
- `src/components/ui/MenuHighlight.tsx`
- `src/components/ui/SectionHeader.tsx`
- `src/app/globals.css`

### Data Changes

None expected.

### Risk

Medium

### Responsive Notes

When stacked, menu items must stay scannable and not become an afterthought under the image.

---

## BarSection

### Current Role

The Bar section explains the cocktail/wine program and previews signature drinks.

### Target Visual Change

Bar must stop mirroring Kitchen.

Target qualities:

- more lounge-like rhythm
- cocktail image as atmosphere anchor
- cocktail list as a refined rail
- text panel feels editorial, not equivalent to Kitchen
- warmer, slower pacing

### Content to Preserve

- THE BAR
- Drinks that keep pace with dinner.
- Existing bar copy
- Cocktails for the table.
- House Martini
- Burnt Orange Old Fashioned
- Niagara Negroni
- View Cocktails
- View Full Cocktail List

### Likely Files

- `src/features/homepage/sections/BarSection.tsx`
- `src/components/ui/MenuHighlight.tsx`
- `src/components/ui/SectionHeader.tsx`
- `src/app/globals.css`

### Data Changes

None expected.

### Risk

Medium

### Responsive Notes

On tablet/mobile, Bar should still feel distinct from Kitchen even if both stack vertically.

---

## RoomSection

### Current Role

The Room section communicates atmosphere and use cases.

### Target Visual Change

Make it a panoramic atmospheric band:

- wide image treatment
- left text area integrated with image
- right-side feature list more premium
- fewer nested boxes
- stronger dark gradient overlay
- better visual breathing room

### Content to Preserve

- THE ROOM
- A place to stay awhile.
- Existing room copy
- Date Nights
- Work Dinners
- Late Tables
- Regulars

### Likely Files

- `src/features/homepage/sections/RoomSection.tsx`
- `src/components/ui/FeatureIcon.tsx`
- `src/components/ui/MediaFrame.tsx`
- `src/app/globals.css`

### Data Changes

None expected.

### Risk

Medium

### Responsive Notes

The panoramic feel must degrade gracefully. On mobile, text should come first or overlay safely with strong contrast.

---

## PrivateDiningSection

### Current Role

Private Dining is the main conversion section for events and dinners.

### Target Visual Change

Make it a distinct conversion block:

- richer image-led composition
- CTA more prominent
- less generic split-card feel
- stronger relationship to Happenings below/alongside
- warm, private-room atmosphere

### Content to Preserve

- PRIVATE DINING
- Private dinners, done properly.
- Existing description
- PLAN A DINNER

### Likely Files

- `src/features/homepage/sections/PrivateDiningSection.tsx`
- `src/components/ui/MediaFrame.tsx`
- `src/components/ui/Button.tsx`
- `src/app/globals.css`

### Data Changes

None expected.

### Risk

Medium

### Responsive Notes

On mobile, CTA must remain visible and persuasive without requiring the full desktop split.

---

## HappeningsSection

### Current Role

Happenings makes the restaurant feel alive and current.

### Target Visual Change

This is one of the biggest redesign areas.

The canonical mockup points away from three equal event cards and toward:

- editorial date list
- compact event copy
- stacked side imagery
- stronger lower-page rhythm
- less blog-card sameness

### Content to Preserve

- EVENTS
- What’s on
- Sunday Supper
- Guest Bartender Night
- Late Night Vinyl
- See Details

### Likely Files

- `src/features/homepage/sections/HappeningsSection.tsx`
- `src/features/homepage/homepage.data.ts`
- possibly avoid or replace `src/components/ui/EventCard.tsx`
- `src/app/globals.css`

### Data Changes

Likely add:

- event date/month fields
- optional image layout metadata
- possible featured/side-image grouping

### Risk

High

### Responsive Notes

At narrow widths, dates and event details must remain readable. Side thumbnails should stack or move below the list.

### Accessibility Notes

Dates should be clear text. Links should have meaningful labels.

---

## LocationSection

### Current Role

Location provides address, hours, phone, email, Instagram, map, and reservation CTA.

### Target Visual Change

Rebuild as an integrated closing panel:

- contact/address left
- large dark branded map center
- hours right
- reservation CTA visible
- map is dark and atmospheric, not bright Google UI residue
- visually connected to footer

### Content to Preserve

- Find Low Ember
- 123 St. Paul Street
- St. Catharines, ON
- L2R 3M3
- hours
- 905 555 0147
- hello@lowember.ca
- @lowember.bar
- Reserve a Table

### Likely Files

- `src/features/homepage/sections/LocationSection.tsx`
- `src/features/homepage/homepage.data.ts`
- `src/components/ui/SectionHeader.tsx`
- `src/components/ui/MediaFrame.tsx`
- `src/app/globals.css`

### Data Changes

Possibly adjust hours/contact grouping for the three-zone layout.

### Risk

High

### Responsive Notes

On mobile, contact links must remain easy to tap. Map should not dominate the section.

---

## SiteFooter

### Current Role

Footer closes the brand and provides navigation/legal/social links.

### Target Visual Change

Make the footer tighter and more integrated with Location:

- brand column left
- Explore column
- Information column
- Join Us/newsletter-style column if supported
- subtle dividers
- restrained brass labels
- dark tonal surface

### Content to Preserve

- LOW EMBER
- Existing tagline/description
- site nav
- legal links
- social links

### Likely Files

- `src/components/layout/SiteFooter.tsx`
- `src/lib/site.ts`
- `src/app/globals.css`

### Data Changes

Likely add or expand footer config if a Join Us/newsletter column is used.

Do not create a functional newsletter system unless explicitly requested.

### Risk

Medium

### Responsive Notes

Footer columns should stack calmly on mobile. Avoid tiny unreadable footer text.

---

## Visual System Requirements

## Tokens and Globals

The current tokens are good but need richer tiers.

Add or refine tokens for:

- background base
- background soft
- surface 0
- surface 1
- surface 2
- surface warm
- elevated panel
- footer band
- map band
- divider faint
- divider standard
- divider strong
- image frame inner line
- shadow soft
- shadow panel
- warm radial glow
- hero overlay
- focus ring

Do not overbuild. Add only what implementation passes need.

---

## Surface System

The redesign should distinguish:

- cinematic bands
- utility panels
- editorial cards
- menu rails
- image frames
- footer/location surfaces

Avoid using one `.panel` style everywhere.

---

## Typography

The site should use stronger typographic hierarchy:

- hero headline remains largest
- mid-page display headings get more contrast
- body copy gets controlled line length
- uppercase labels become more restrained
- footer/meta text remains readable

Avoid making every section use the same headline cadence.

---

## Image Treatment

Current local images remain valid placeholder/concept assets.

Do not source new images during this redesign phase.

Preserve current runtime image paths:

- `/images/low-ember/homepage/hero/hero-interior.jpg`
- `/images/low-ember/homepage/cards/dining-card.jpg`
- `/images/low-ember/homepage/cards/cocktail-card.jpg`
- `/images/low-ember/homepage/cards/room-card.jpg`
- `/images/low-ember/homepage/sections/kitchen-feature.jpg`
- `/images/low-ember/homepage/sections/cocktail-feature.jpg`
- `/images/low-ember/homepage/sections/room-interior.jpg`
- `/images/low-ember/homepage/sections/private-dining.jpg`
- `/images/low-ember/homepage/events/sunday-supper.jpg`
- `/images/low-ember/homepage/events/guest-bartender-night.jpg`
- `/images/low-ember/homepage/events/late-night-vinyl.jpg`
- `/images/low-ember/homepage/location/location-map-dark.jpg`

Likely crop/object-position review needed for:

- Hero
- Kitchen
- Bar
- Room
- Private Dining
- Events
- Map

---

## Implementation Constraints

Do not:

- rebuild from scratch
- flatten the architecture
- move content out of `homepage.data.ts`
- hardcode all copy into JSX
- introduce a CMS
- introduce a database
- introduce backend infrastructure
- add animation libraries
- replace all images
- source new assets
- change city/address/hero/events/CTA language
- add unsupported content
- create one giant implementation pass
- edit `/Users/kylegruarin/package-lock.json`
- treat the Next.js workspace-root warning as a blocker

Use:

- existing Next.js App Router structure
- existing TypeScript/React/Tailwind approach
- existing CSS token strategy
- existing static data architecture
- current local image paths
- staged implementation passes
- lint/build after each pass

---

## Staged Implementation Plan

## Pass 0: Resolve Visual Reference State

Goal:

Confirm the new mockup and old mockup backup are intended and commit them with the brief.

Likely files:

- `docs/reference/visual/low-ember-homepage-mockup.png`
- `docs/reference/visual/low-ember-homepage-mockup-old.png`
- `docs/reference/visual/low-ember-premium-homepage-redesign-brief.md`

Risk:

Low

Suggested commit:

`docs: add premium homepage redesign brief`

---

## Pass 1: Visual Foundation

Goal:

Expand tokens and global utilities so future sections can use richer surfaces, tonal depth, selective borders, and display typography without one-off CSS chaos.

Likely files:

- `src/styles/tokens.css`
- `src/app/globals.css`
- possibly `src/components/ui/Button.tsx`
- possibly `src/components/ui/MediaFrame.tsx`

Risk:

Medium

Suggested commit:

`feat: expand low ember visual foundation`

---

## Pass 2: Header and Hero

Goal:

Bring the top of page closer to the canonical mockup: tighter header, more cinematic hero, better image/text proportions, stronger overlay, less boxed feeling.

Likely files:

- `src/components/layout/SiteHeader.tsx`
- `src/features/homepage/sections/HeroSection.tsx`
- `src/components/ui/Button.tsx`
- `src/app/globals.css`

Risk:

Medium

Suggested commit:

`feat: refine low ember header and hero`

---

## Pass 3: Feature Strip and Dining Cards

Goal:

Upgrade the utility strip and the three-card editorial preview while preserving content.

Likely files:

- `src/features/homepage/sections/FeatureStrip.tsx`
- `src/features/homepage/sections/DiningCardsSection.tsx`
- `src/components/ui/FeatureIcon.tsx`
- `src/components/ui/MediaFrame.tsx`
- `src/components/ui/LinkArrow.tsx`

Risk:

Medium

Suggested commit:

`feat: upgrade feature strip and dining cards`

---

## Pass 4: Kitchen and Bar Differentiation

Goal:

Keep Kitchen as food/menu-forward and make Bar feel visually distinct, more lounge-like, and less like a mirrored sibling.

Likely files:

- `src/features/homepage/sections/KitchenSection.tsx`
- `src/features/homepage/sections/BarSection.tsx`
- `src/components/ui/MenuHighlight.tsx`
- `src/components/ui/SectionHeader.tsx`
- `src/app/globals.css`

Risk:

Medium

Suggested commit:

`feat: differentiate kitchen and bar sections`

---

## Pass 5: Room and Private Dining Atmosphere

Goal:

Make Room and Private Dining feel cinematic, atmospheric, and conversion-aware rather than generic bordered sections.

Likely files:

- `src/features/homepage/sections/RoomSection.tsx`
- `src/features/homepage/sections/PrivateDiningSection.tsx`
- `src/components/ui/MediaFrame.tsx`
- `src/components/ui/FeatureIcon.tsx`
- `src/app/globals.css`

Risk:

Medium

Suggested commit:

`feat: deepen room and private dining atmosphere`

---

## Pass 6: Happenings and Location Close

Goal:

Rebuild Happenings into an editorial date/list/image section and Location into a darker integrated contact/map/hours close.

Likely files:

- `src/features/homepage/sections/HappeningsSection.tsx`
- `src/features/homepage/sections/LocationSection.tsx`
- `src/features/homepage/homepage.data.ts`
- possibly `src/components/ui/EventCard.tsx`
- `src/app/globals.css`

Risk:

High

Suggested commit:

`feat: redesign happenings and location close`

---

## Pass 7: Footer Tightening

Goal:

Integrate footer with the location close and improve its visual density, structure, and brand finish.

Likely files:

- `src/components/layout/SiteFooter.tsx`
- `src/lib/site.ts`
- `src/app/globals.css`

Risk:

Medium

Suggested commit:

`feat: tighten footer and final page rhythm`

---

## Pass 8: Responsive QA

Goal:

Test and refine the redesign across key widths.

Breakpoints:

- 1440px
- 1280px
- 1024px
- 768px
- 430px
- 390px

Check:

- hero legibility
- CTA visibility
- feature strip stacking
- card hierarchy
- Kitchen/Bar stacking
- Room panorama behavior
- Private Dining CTA
- Happenings readability
- Location contact tap targets
- footer stacking

Suggested commit:

`fix: responsive qa for homepage redesign`

---

## Pass 9: Accessibility and Performance Cleanup

Goal:

Preserve professional execution quality.

Check:

- one clear h1
- heading order
- contrast
- focus states
- reduced motion
- tap targets
- image alt/decorative flags
- contact links
- mobile nav accessibility
- image sizes
- lazy loading behavior
- build warnings

Suggested commit:

`fix: accessibility and build polish`

---

## First Runtime Implementation Recommendation

After this brief and the visual reference files are committed, the first runtime implementation pass should be:

`Visual Foundation`

This should focus only on:

- tokens
- global utilities
- surface tiers
- divider tiers
- background depth helpers
- typography helpers
- motion/reduced-motion helpers
- maybe small primitive variants if required

Reason:

The canonical mockup’s premium feel is systemic. It depends on better surfaces, darker tonal depth, selective borders, and stronger typographic rhythm. If those foundations are not added first, later section work will become one-off Tailwind sprawl.

Build the visual grammar first. Then make sections speak it.

---

## Validation Expectations

After every implementation pass:

Run:

```bash
npm run lint
npm run build