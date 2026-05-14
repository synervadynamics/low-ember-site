# Low Ember Premium Homepage Design Implementation Brief
## Canonical Mockup Translation + Real Web Build Corrections

**Recommended repo path:**

```txt
docs/reference/visual/low-ember-homepage-mockup-implementation-spec.md
```

## Source Reference Status

Active canonical references:

```txt
Mockup image:
docs/reference/visual/low-ember-homepage-mockup.png

Implementation spec:
docs/reference/visual/low-ember-homepage-mockup-implementation-spec.md
```

Archived historical references:

```txt
Design brief:
docs/reference/visual/low-ember-premium-homepage-redesign-brief-old.md

Old mockup image:
docs/reference/visual/low-ember-homepage-mockup-old.png
```

Codex should follow the active implementation spec and active canonical mockup image.

The retired path below is not an active source of truth and should not be followed:

```txt
docs/reference/visual/low-ember-premium-homepage-redesign-brief.md
```

---

## 1. Purpose

This document translates the canonical Low Ember homepage mockup into a practical, buildable design specification for the current Next.js homepage.

The goal is not to copy the mockup blindly. The goal is to preserve its strongest premium visual ideas while correcting the parts that would make the actual coded homepage feel cramped, fragile, or less usable.

The canonical mockup should guide:

- Section composition
- Visual hierarchy
- Image-led rhythm
- Surface restraint
- Dark atmosphere
- Kitchen / Bar / Room / Private Dining layout direction
- Happenings editorial treatment
- Location / Footer integration
- Premium restaurant mood

The current coded homepage screenshot should guide:

- Actual Low Ember copy
- Current section order
- Current content reality
- Better external vertical breathing room
- Practical guest-facing pacing
- Existing homepage story logic

The key synthesis rule:

```txt
Use the canonical mockup for composition, hierarchy, and premium visual language.
Use the current coded homepage screenshot for external vertical rhythm and breathing room.
```

The current build screenshot shows more generous separation between the hero, feature strip, cards, Kitchen, Bar, Room, Private Dining, Happenings, Location, and Footer across the full page. Preserve that as the pacing reference.

---

## 2. Strategic Design Goal

Low Ember should feel like a real premium downtown St. Catharines restaurant and cocktail bar.

The homepage should communicate:

```txt
Dinner worth settling into.
A bar that keeps pace.
A room worth staying in.
Private dinners done properly.
```

The page should feel:

- Dark
- Warm
- Cinematic
- Intimate
- Premium but not precious
- Editorial but operational
- Polished but not overdecorated
- Atmospheric but still useful
- Hospitality-native
- Locally believable

The page should not feel like:

- A generic black-and-gold template
- A SaaS landing page wearing candlelight
- A steakhouse cliché
- A fake speakeasy moodboard
- A winery tourism brochure
- A tasting-menu shrine
- An AI-generated restaurant that smells faintly of mahogany prompts
- A page where every rectangle got a border because nobody knew what else to do

The design should feel composed, not decorated.

---

## 3. Identity and Copy Lock

The current Low Ember copy is one of the strongest parts of the project. It should be preserved unless the user explicitly requests copy changes.

Do not change:

```txt
LOW EMBER
St. Catharines, Ontario
123 St. Paul Street
St. Catharines, ON
L2R 3M3
```

Preserve hero copy:

```txt
Dinner worth settling into.

Seasonal plates, balanced cocktails, and warm service from five until late.

Bar seats for walk-ins, long tables for dinner, and a private room that keeps the pace.
```

Preserve major section language:

```txt
DINING
COCKTAILS
THE ROOM

FROM THE KITCHEN
Familiar plates, done with care.

THE BAR
Drinks that keep pace with dinner.

THE ROOM
A place to stay awhile.

PRIVATE DINING
Private dinners, done properly.

EVENTS
What’s on

Find Low Ember
```

Preserve CTA language:

```txt
Reserve a Table
View Menus
View Dinner Menu
View Cocktails
Explore the Room
PLAN A DINNER
See Details
```

Especially preserve:

```txt
PLAN A DINNER
```

Do not drift into:

```txt
Gather at the Low Ember
wood-fired neighbourhood gem
elevated culinary journey
curated vibes
where passion meets plate
crafted experiences
```

That language belongs in the copy compost bin.

---

## 4. Core Visual Direction

The canonical mockup’s strongest quality is that it makes the page feel more intentionally designed. It reduces the “stacked component library” feeling and creates a richer, more editorial restaurant homepage.

The implementation should borrow these mockup qualities:

- Stronger dark atmospheric composition
- More image-led section rhythm
- Thinner, more selective borders
- Warmer brass / ember accent discipline
- More deliberate grid proportions
- Tighter internal card composition
- More cinematic Room and Private Dining treatments
- More editorial Happenings layout
- More integrated Location and Footer close

The implementation should correct these mockup weaknesses:

- Major sections are too vertically compressed
- The page risks feeling too dense if copied literally
- Some section groups need more breathing room for real web usability
- Image slots need layout-owned dimensions, not image-owned dimensions
- Mobile behavior must be planned, not guessed
- Current Low Ember copy must remain intact

The resulting page should feel more premium than the current build, but calmer and more usable than a literal mockup copy.

---

## 5. Image Placeholder Policy

Current images are placeholders.

Do not treat imperfect image quality as the current design problem.

The current task is to make the layout, containers, sizing, spacing, hierarchy, and section composition correct. Final image replacement can happen later.

Core rule:

```txt
The layout owns the image slot. The image fills the slot.
```

Implementation principles:

```css
object-fit: cover;
object-position: center;
```

Use fixed layout containers:

- Aspect ratios
- Min-heights
- Max-widths
- Grid proportions
- Overflow hidden
- Controlled border radius
- Controlled frame/border behavior

Do not let source image dimensions determine:

- Card height
- Hero height
- Section height
- Grid proportions
- Page rhythm
- Responsive collapse behavior

Images should remain easy to replace later without rewriting layout.

---

## 6. Desktop Frame and Container System

The canonical mockup appears roughly:

```txt
Canvas: ~920px wide × ~1708px tall
Main content width: ~832px
Side gutters: ~44px
```

Map that into the actual build as:

```txt
Desktop max-width: 1180px–1240px
Desktop horizontal gutters: 32px–48px
Internal grid gaps: 12px–18px
Panel padding: 20px–32px
Large section internal padding: 32px–48px
Border width: 1px
Border opacity: low
```

The page should use a consistent centered content container.

Avoid random section widths. If a section breaks the container width, it should be intentional and documented.

---

## 7. Vertical Rhythm Override

This is the most important correction.

The canonical mockup is too vertically compressed between major sections. The current coded homepage has better external breathing room across the full page.

Use this rhythm:

```txt
Header → Hero:
Connected, no large gap.

Hero → Feature Strip:
24–36px.

Feature Strip → Dining Cards:
56–80px.

Dining Cards → Kitchen:
64–88px.

Kitchen → Bar:
32–48px.
These sections are related and can sit closer together.

Bar → Room:
64–88px.

Room → Private Dining / Happenings:
64–88px.

Private Dining / Happenings → Location:
64–88px.

Location → Footer:
32–48px.
```

Responsive spacing:

```txt
1440px / 1280px:
Full generous rhythm.

1024px:
Slightly reduced, but still visibly separated.

768px:
48–64px major section gaps.

430px / 390px:
40–56px major section gaps.
```

Internal card/grid gaps can stay tighter.

The final page should not feel like one continuous slab of panels. It should feel like a sequence of composed restaurant moments.

---

## 8. Surface and Border System

The current build’s main visual weakness is repeated bordered boxes.

The redesign should use borders selectively.

Use borders for:

- Feature strip
- Menu rails
- Compact utility panels
- Image frames where useful
- Footer/location containment
- Active interactive areas

Reduce borders around:

- Large atmospheric image sections
- Room
- Private Dining
- Large editorial panels
- Areas where tonal contrast or gradient can do the work

Preferred hierarchy:

```txt
Background
→ tonal section band
→ soft panel
→ elevated panel
→ framed image
→ compact utility rail
```

Do not give every nested element the same 1px border. That creates “spreadsheet in a steakhouse” energy.

Use:

- Near-black background
- Charcoal panels
- Warm brown-black surfaces
- Subtle amber radial depth
- Restrained brass lines
- Ember CTA accents
- Soft shadows
- Image vignettes

---

## 9. Typography Direction

The design should use a clear serif / sans contrast.

Headlines:

- Elegant serif
- High contrast
- Warm, editorial
- Not wedding-invitation fragile
- Not giant just for drama

Body/navigation:

- Clean sans
- Readable
- Quiet
- Well-spaced

Approximate type scale:

```txt
Hero headline desktop:
56–68px

Hero headline tablet:
44–56px

Hero headline mobile:
38–44px

Major section heading desktop:
36–48px

Major section heading mobile:
30–36px

Card headings / labels:
12–14px uppercase, tracked

Body:
15–17px

Small metadata:
12–13px

Navigation:
11–12px uppercase, tracked
```

Line-height should feel premium and readable:

```txt
Headlines:
0.95–1.08

Body:
1.55–1.7

Small labels:
1.2–1.4
```

Avoid tiny grey dust text. Atmosphere does not require illegibility. The guest still needs to book dinner, not decode a monastery wall.

---

## 10. Color and Atmosphere System

Use a disciplined dark palette.

Suggested semantic values:

```txt
Background:
#070604 / #090806

Deep charcoal:
#11100D / #14120F

Panel charcoal:
#17140F / #181511

Soft surface:
#201A14

Cream text:
#F2E8D8 / #EFE3D0

Muted text:
#B8AA96 / #AFA08D

Brass accent:
#C58A45 / #C89452

Dim brass border:
rgba(197, 138, 69, 0.20–0.28)

Ember CTA:
#A64B2B / #A94F2D

Ember CTA hover:
#C05F35 / #B85A34

Dark rust:
#71331F

Soft black overlay:
rgba(0, 0, 0, 0.45–0.65)
```

Use semantic tokens, not one-off hex values everywhere.

The background should have subtle depth:

- Faint radial warmth near key sections
- Soft vertical gradients
- Extremely subtle texture/noise if already supported
- Darker lower-page integration

Nothing should scream “texture.” It should be felt, not announced.

---

# 11. Section Specifications

---

## 11.1 SiteHeader

### Design role

A quiet, precise premium navigation rail.

It should support the page without trying to become the show.

### Desktop layout

```txt
Height: 48–56px
Width: full viewport
Inner max-width: 1180–1240px
Logo: left
Nav: center/right
Reserve CTA: far right
```

### Visual treatment

- Near-black background
- Subtle bottom divider
- Small uppercase nav
- Brass/cream logo
- Ember reserve button
- Restrained hover treatment

### Header hover flourish

Nav items may use:

```txt
center-out ember underline
```

Behavior:

- 1px line
- Brass/ember color
- 180–220ms transition
- Subtle text warmth on hover
- Respect reduced motion

Avoid:

- Glowing nav text
- Bouncing items
- Flame effects
- Smoke
- Sliding pills
- Anything that looks like a WordPress steakhouse theme discovered electricity

### Mobile behavior

- Logo remains visible
- Reserve CTA should remain available if possible
- Nav collapses cleanly
- Menu trigger must be accessible
- No broken hidden nav state

---

## 11.2 HeroSection

### Design role

The hero should immediately communicate:

```txt
what Low Ember is
where it is
why it matters
what to do next
```

It is the main emotional and conversion anchor.

### Desktop layout target

```txt
Height: 430–500px
Container width: 1180–1240px
Text zone: 34–38%
Image/atmosphere zone: 62–66%
Text inset: 32–48px
```

### Composition

Left side:

```txt
ST. CATHARINES, ONTARIO
Dinner worth settling into.
Support copy
Detail copy
Reserve a Table
View Menus
```

Right side:

```txt
large atmospheric dining/bar image
dark overlay
warm highlight zone
```

### Critical constraints

Do not make the hero a giant fullscreen billboard.

Do not make the hero 650–800px tall.

Do not let the image become a huge abstract slab.

Do not create awkward headline stacking.

Do not push the CTAs below the first-screen visual area on common desktop screens.

### Image treatment

- Image fills container
- Overlay gradient from left to right
- Dark vignette around edges
- Preserve legibility
- object-fit: cover
- object-position adjustable

### Mobile behavior

The hero can stack or become background-led, but:

- Headline remains readable
- CTAs remain visible
- Text does not sit on a chaotic image crop
- Hero does not become comically tall
- View Menus remains accessible

---

## 11.3 FeatureStrip

### Design role

A compact operational reassurance strip.

It tells guests:

```txt
we serve dinner
we have serious drinks
we handle private dining
walk-ins have a place
```

### Desktop layout

```txt
Height: 70–90px
Columns: 4 equal
Container: same width as hero
```

### Items

```txt
Dinner Service
Nightly from 5pm

Cocktails & Wine
Classics, house drinks, Niagara wine

Private Dining
Birthdays, work dinners, buyouts

Walk-Ins Welcome
Bar seats and high-tops nightly
```

### Visual treatment

- Dark utility panel
- Thin outer border
- Subtle vertical dividers
- Small brass icons
- Uppercase labels
- Muted descriptions

### Responsive behavior

```txt
1024px:
4 columns if still readable.

768px:
2×2 grid.

430px / 390px:
stack or 2×2 depending readability.
```

---

## 11.4 DiningCardsSection

### Design role

The three-card section introduces the core guest promise:

```txt
Dinner
Drinks
Room
```

This section should feel like a premium editorial preview, not a generic card row.

### Desktop layout

```txt
Columns: 3 equal
Gap: 12–18px
Card image area: 55–65%
Card text area: 35–45%
```

### Cards

```txt
Dining
Cocktails
The Room
```

### Visual treatment

- Image-led cards
- Restrained border
- Soft dark surface
- Brass label
- Small CTA arrow
- Slight tonal difference between cards and background

### Constraint

Avoid making each card feel like a mini landing page.

They should be confident previews.

### Responsive behavior

```txt
1024px:
3 columns if readable.

768px:
single-column or 2+1 layout.

430px / 390px:
single column.
```

---

## 11.5 KitchenSection

### Design role

The Kitchen section proves food credibility.

It should say:

```txt
This is familiar food, done with care.
You can understand the menu.
You can trust the kitchen.
```

### Desktop layout

Use a three-zone editorial grid.

Preferred target:

```txt
Text panel: 30–34%
Menu rail: 22–25%
Image feature: 40–45%
Gap: 12–18px
```

The canonical mockup uses a strong image/menu/text relationship. Preserve that.

### Content

```txt
FROM THE KITCHEN
Familiar plates, done with care.
```

Menu items:

```txt
Charred Striploin
Lake Erie Pickerel
Coal-Roasted Carrots
Ember Burger
```

### Visual treatment

- Text panel should feel editorial
- Menu rail should feel compact and useful
- Image should carry appetite and warmth
- Borders should be present but not equal everywhere
- The section should not feel like three unrelated boxes

### Responsive behavior

```txt
1024px:
2-column layout acceptable.

768px:
stack text → image → menu.

430px / 390px:
single column, menu remains readable.
```

---

## 11.6 BarSection

### Design role

The Bar section should feel related to Kitchen but structurally different.

Kitchen is food/menu-forward.  
Bar is lounge/list/ritual-forward.

### Desktop layout

Preferred target:

```txt
Image: 34–38%
Cocktail list: 25–28%
Text panel: 32–36%
Gap: 12–18px
```

### Content

```txt
THE BAR
Drinks that keep pace with dinner.
```

Cocktails:

```txt
House Martini
Burnt Orange Old Fashioned
Niagara Negroni
```

### Visual treatment

- Darker and more intimate than Kitchen
- Cocktail image anchors the mood
- Cocktail list feels like a curated rail
- Text panel stays calm and readable
- Avoid mirrored-clone layout from Kitchen

### Responsive behavior

```txt
1024px:
maintain three-part layout if readable.

768px:
stack into text/image/list or image/text/list.

430px / 390px:
single column.
```

---

## 11.7 RoomSection

### Design role

The Room section should be the page’s atmospheric breath.

It explains the experience, not just the décor.

### Desktop layout

Target panoramic band:

```txt
Left text: 25–30%
Center image: 45–55%
Right feature list: 20–25%
Height: 170–230px
```

### Content

```txt
THE ROOM
A place to stay awhile.
```

Feature list:

```txt
Date Nights
Work Dinners
Late Tables
Regulars
```

### Visual treatment

- Wide cinematic panel
- Fewer nested borders
- Image-led atmosphere
- Right-side feature list should feel premium, not icon clutter
- This section should break up the card/module repetition

### Responsive behavior

```txt
1024px:
compress carefully.

768px:
stack text → image → features.

430px / 390px:
features become a simple list or compact grid.
```

---

## 11.8 PrivateDiningSection

### Design role

Private Dining is a conversion section.

It should feel like a real restaurant product line, not a footer afterthought.

### Content

```txt
PRIVATE DINING
Private dinners, done properly.

A separate room, flexible set menus, and the same service pace as the main floor.

PLAN A DINNER
```

### Visual treatment

- Cinematic image-led panel
- Copy should sit in a dark readable overlay or adjacent panel
- CTA should be clearly visible
- Less boxed than current build
- More atmospheric than utility sections

### CTA rule

Do not change:

```txt
PLAN A DINNER
```

---

## 11.9 HappeningsSection

### Design role

Happenings makes Low Ember feel alive.

The current three-card row is useful, but the canonical mockup’s editorial date-list treatment is stronger.

### Preferred direction

Move toward:

- Compact event list
- Date markers
- Short event descriptions
- Supporting image stack
- Editorial rhythm

Rather than:

- Three equal blog cards

### Events

```txt
Sunday Supper
Guest Bartender Night
Late Night Vinyl
```

### Data implication

This may require adding date fields to `homepage.data.ts`.

Example:

```ts
{
  month: "MAY",
  day: "24",
  title: "Sunday Supper",
  description: "A Sunday set menu built for lingering. Different each time, always dinner first."
}
```

### Risk

Medium to high.

Do this after Hero, FeatureStrip, DiningCards, Kitchen, Bar, and Room are stable.

---

## 11.10 LocationSection

### Design role

Location is practical hospitality UX.

Premium guests still need the address. Civilization, somehow, continues.

### Desktop layout

Preferred three-zone row:

```txt
Contact/details left: 25%
Map/locator center: 50%
Hours right: 25%
```

### Content

Preserve:

```txt
Find Low Ember
123 St. Paul Street
St. Catharines, ON
L2R 3M3

905 555 0147
hello@lowember.ca
@lowember.bar

Mon–Thu 5pm–11pm
Fri–Sat 5pm–1am
Sun 5pm–10pm
```

### Map treatment

The current bright map treatment is off-system.

Long-term target:

- Dark custom locator graphic
- Subtle street grid
- Brass pin
- No bright Google UI residue

Current map can remain temporarily if layout is the priority.

### Responsive behavior

```txt
1024px:
three zones if readable.

768px:
contact → map → hours.

430px / 390px:
phone/email tappable, hours readable, map not too tall.
```

---

## 11.11 SiteFooter

### Design role

Footer should close the brand system cleanly.

It should not become a junk drawer.

### Desktop layout

Preferred multi-column close:

```txt
Brand column
Explore links
Information links
Join Us / email field
Legal row
```

### Content

Preserve:

```txt
Seasonal plates. Good drinks. A room worth settling into.

Dinner, cocktails, and private dining in downtown St. Catharines.
```

### Visual treatment

- Visually connected to Location
- Dark surface band
- Restrained top divider
- Compact typography
- Warm logo treatment
- Clear links

---

# 12. Implementation Priorities

Do not implement everything at once.

Recommended sequence:

```txt
Pass A:
Confirm repo state and ensure failed Header/Hero changes are reverted.

Pass B:
Preserve existing Visual Foundation work.

Pass C:
Create this implementation brief/spec document.

Pass D:
Header + Hero layout scaffold.

Pass E:
FeatureStrip + DiningCards layout scaffold.

Pass F:
Kitchen + Bar layout scaffold.

Pass G:
Room + PrivateDining scaffold.

Pass H:
Happenings + Location + Footer scaffold.

Pass I:
Surface, border, typography, and atmosphere polish.

Pass J:
Responsive QA.

Pass K:
Accessibility and performance cleanup.

Pass L:
Final image replacement / regeneration.
```

---

# 13. Runtime Implementation Rules

Codex should not:

```txt
rewrite all copy
change the restaurant city
change section order
flatten architecture
move all content into JSX
add a CMS
add auth/backend/database
add animation libraries
replace images prematurely
use the mockup as a runtime image
make one giant redesign pass
commit or push without instruction
modify /Users/kylegruarin/package-lock.json
```

Codex should:

```txt
preserve homepage.data.ts ownership
keep page.tsx thin
preserve modular section files
use semantic HTML
use responsive layout rules
use existing tokens/utilities where possible
keep image layout container-driven
validate with lint/build
report exactly what changed
```

---

# 14. Review Criteria

After each implementation pass, compare against the following criteria.

## Composition

Does the section resemble the canonical mockup’s layout idea?

## Spacing

Does the section preserve current build-style breathing room?

## Content

Is current Low Ember copy preserved?

## Hierarchy

Does the eye know where to go first?

## Boxiness

Did the pass reduce repetitive bordered-panel sameness?

## Image behavior

Does the container control the image slot?

## Responsiveness

Does the section collapse cleanly?

## Maintainability

Are files still modular and data-driven?

## Taste

Does it feel like a real premium restaurant site, or did we accidentally summon template sludge?

---

# 15. Summary Direction

The final homepage should feel like:

```txt
a dark, warm, premium downtown restaurant website
with real hospitality logic,
strong copy,
clear guest actions,
cinematic but controlled imagery,
varied section composition,
generous external spacing,
restrained brass accents,
selective borders,
and a practical path toward final image replacement.
```

The canonical mockup gives the page its upgraded visual world.

The current build screenshot keeps the page grounded in real spacing, real content, and real usability.

The implementation should live between them:

```txt
More premium than the current coded build.
More spacious and buildable than the mockup.
```

That is the target.

---

# 16. Codex Handoff Note

When Codex implements from this document, it should first confirm current repo state:

```bash
pwd
git branch --show-current
git status --short
git log --oneline -n 8
```

Then it should verify the relevant design references exist:

```txt
docs/reference/visual/low-ember-homepage-mockup.png
docs/reference/visual/low-ember-homepage-mockup-old.png
docs/reference/visual/low-ember-premium-homepage-redesign-brief-old.md
docs/reference/visual/low-ember-homepage-mockup-implementation-spec.md
```

Before runtime implementation, Codex should inspect:

```txt
src/app/page.tsx
src/features/homepage/Homepage.tsx
src/features/homepage/homepage.data.ts
src/features/homepage/sections/
src/components/layout/SiteHeader.tsx
src/components/layout/SiteFooter.tsx
src/components/ui/
src/styles/tokens.css
src/app/globals.css
```

No runtime changes should be made until the user gives a scoped implementation instruction.
