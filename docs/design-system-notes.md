# Low Ember Design System Notes

## Visual Direction

Low Ember should feel dark, warm, intimate, editorial, polished, and grounded in real hospitality. It should feel like a premium neighbourhood restaurant and cocktail bar, not a generic dark luxury template.

## Palette Direction

Use semantic tokens rather than random hex values in components.

Suggested tokens:

--color-bg: #070604;
--color-surface: #11100d;
--color-surface-soft: #17140f;
--color-border: rgba(197, 138, 69, 0.24);
--color-text: #f2e8d8;
--color-muted: #b8aa96;
--color-brass: #c58a45;
--color-ember: #a64b2b;
--color-ember-hover: #bd5a34;
--color-rust: #71331f;

## Typography Direction

Use an elegant serif for headings and a readable sans-serif for body, navigation, labels, and metadata.

Heading feel:
- elegant
- editorial
- warm
- not overly ornate

Body feel:
- readable
- calm
- restrained
- sufficient line-height

Labels/nav:
- small uppercase
- tracked letter spacing
- crisp and readable

## Layout Direction

Use:
- centered max-width container
- consistent gutters
- modular sections
- dark panels
- subtle brass borders
- structured grid systems
- responsive stacking on mobile

Approximate max width:
- 1180px to 1240px

## Component Direction

Likely reusable components:
- Button
- Container
- SectionHeader
- PlaceholderImage
- FeatureIcon
- MenuHighlight
- EventCard
- Eyebrow
- LinkArrow

Do not overbuild a massive design system on day one. Components should solve repetition and consistency problems.

## Responsive Direction

The desktop layout should follow the screenshot closely, but the build must be mobile-first. Restaurant users often visit on mobile to check menus, hours, location, and reservations quickly.

## Interaction Direction

Initial v1 interactions:
- button hover states
- card hover states
- clear focus-visible states

Do not add heavy motion until static layout is stable.
