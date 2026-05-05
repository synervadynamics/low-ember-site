# Low Ember Homepage Mockup Notes

## Purpose

This screenshot is the primary visual reference for the Low Ember homepage implementation.

Use it to understand:

- section order
- content hierarchy
- layout rhythm
- dark/warm color direction
- typography contrast
- CTA hierarchy
- card and panel structure
- image placement
- approximate aspect ratios
- spacing relationships
- footer/contact organization

## Critical Instruction

Do not use the screenshot as a runtime image for the homepage.

Do not implement the homepage by placing this screenshot as a background image.

Do not create clickable overlays on top of the screenshot.

The screenshot is a visual reference only. The homepage must be rebuilt as real semantic, responsive, accessible HTML/React components using structured data and reusable UI primitives.

## Homepage Section Order Shown

1. Header / navigation
2. Hero
3. Feature strip
4. Dining / Cocktails / Room cards
5. Kitchen and menu highlights
6. Bar and cocktail highlights
7. Room / atmosphere section
8. Private dining section
9. Happenings / events cards
10. Location and contact section
11. Footer

## Visual Direction

The mockup uses:

- near-black page background
- charcoal panels
- warm amber/brass borders and accents
- ember CTA buttons
- cream serif headlines
- small uppercase sans-serif navigation and labels
- cinematic dark hospitality imagery
- subtle dividers
- dense but readable content blocks
- premium editorial spacing

## Layout Notes

The desktop page appears to use a centered max-width container with repeated bordered panels.

The hero is wide and cinematic with text over a darkened image area.

The feature strip is a compact four-column utility band.

Several mid-page sections use three-column grid logic:

- text panel
- large image/media panel
- menu or highlight panel

The room section uses a text panel plus wide image composition.

The private dining section is a wide conversion panel with text and image composition.

The happenings section uses three event cards.

The contact section uses contact details on the left and a map panel on the right.

## Responsive Interpretation

Desktop should follow this mockup closely.

Tablet and mobile should stack sections cleanly:

- preserve CTA visibility
- keep text readable
- keep buttons tap-friendly
- stack cards naturally
- avoid tiny nav text
- keep contact details easy to tap
- preserve image aspect ratios

## Implementation Notes

Use the existing architecture:

- src/app/page.tsx should stay thin
- src/features/homepage/Homepage.tsx should orchestrate sections
- src/features/homepage/homepage.data.ts should provide content
- src/features/homepage/sections/ should own homepage sections
- src/components/ui/ should provide reusable primitives
- src/components/layout/ should provide header/footer

Use placeholders first. Final photography can replace placeholders later.

## Not Exact Pixel Math

The screenshot is a directional mockup, not a strict pixel-perfect spec.

Exact spacing, line heights, and responsive behavior should be tuned in browser during implementation.
