# Janelle Koenig Website Style Guide

## 1. Purpose

This file defines the reusable visual, written and interaction system for the Janelle Koenig website. Apply it to the homepage and every future page or component.

Do not redesign the brand when adding a page. New work should feel as though it was present in the original approved mockups.

## 2. Brand character

The design should feel:

- Confident
- Sharp
- Warm
- Contemporary
- Professional enough for corporate producers
- Funny without using comedy clichés
- Energetic without becoming noisy

The visual personality should come from scale, composition, photography, copy and timing. Do not decorate the site with microphones, spotlights, laughing emojis, speech bubbles, comedy masks, random squiggles or stock stand-up imagery.

## 3. Design principles

### Personality first

Janelle is the visual hero. Use authentic, expressive photography and strong copy rather than generic entertainment graphics.

### Editorial, not templated

Use deliberate asymmetry, oversized type, generous negative space and clear section changes. Avoid repeated rows of identical cards unless the information genuinely requires them.

### Controlled contrast

Use bold colour in large, intentional areas. Keep enough neutral space for the bright elements to remain effective.

### Humour through restraint

Short, dry lines are stronger than layers of jokes. Never add marketing clichés or invented comedic copy.

### Motion has a job

Animation should introduce hierarchy, reveal content or add one moment of personality. It should never exist merely because the tool can animate something.

## 4. Reference hierarchy

When implementing the design, follow this order:

1. Approved desktop and mobile mockups
2. `style.md`
3. `brief.md`
4. Sensible responsive adaptation

Before coding colours, typography or proportions, sample them from the supplied approved mockups. Record the final values in the design-token block below. Do not substitute Antigravity's preferred palette or generic defaults.

## 5. Colour system

The approved direction uses a vibrant yellow-led identity with warm light space and strong dark typography. Yellow must not be paired with black so relentlessly that the result resembles Comedy Lounge branding. Use the supporting tones and breathing room shown in the approved mockups.

### Semantic colour roles

| Token | Purpose |
| --- | --- |
| `--colour-page` | Default light page background |
| `--colour-surface` | Cards and raised light surfaces |
| `--colour-ink` | Primary text and strong rules |
| `--colour-muted` | Secondary text |
| `--colour-primary` | Main yellow brand field and key emphasis |
| `--colour-secondary` | Contrasting approved accent |
| `--colour-accent` | Small graphic highlights only |
| `--colour-border` | Rules, dividers and quiet card edges |
| `--colour-focus` | Accessible keyboard focus ring |
| `--colour-error` | Form errors |
| `--colour-success` | Form success state |

### Build gate

The developer must sample exact colour values from the final approved mockups before implementation and replace this block:

```css
:root {
  --colour-page: SAMPLE_FROM_APPROVED_MOCKUP;
  --colour-surface: SAMPLE_FROM_APPROVED_MOCKUP;
  --colour-ink: SAMPLE_FROM_APPROVED_MOCKUP;
  --colour-muted: SAMPLE_FROM_APPROVED_MOCKUP;
  --colour-primary: SAMPLE_FROM_APPROVED_MOCKUP;
  --colour-secondary: SAMPLE_FROM_APPROVED_MOCKUP;
  --colour-accent: SAMPLE_FROM_APPROVED_MOCKUP;
  --colour-border: SAMPLE_FROM_APPROVED_MOCKUP;
  --colour-focus: SAMPLE_AND_CONTRAST_TEST;
  --colour-error: CONTRAST_TESTED_ERROR;
  --colour-success: CONTRAST_TESTED_SUCCESS;
}
```

Do not leave placeholder values in production.

### Colour usage rules

- Use the primary yellow for major fields, selected emphasis and key identity moments.
- Use dark ink for most text, but verify contrast whenever it sits on yellow or another accent.
- Use the secondary colour to prevent a repetitive black-and-yellow rhythm.
- Avoid gradients unless one is visibly present in the approved mockup.
- Do not assign every section a different colour.
- Never use colour as the only indicator of state.

## 6. Typography

### Type roles

Use a two-family system at most:

1. **Display face:** bold, characterful and compact enough for oversized headings.
2. **Text face:** highly readable sans serif for body copy, navigation, forms and metadata.

If the approved mockup uses one variable family across both roles, retain it. Do not choose novelty comedy fonts, faux handwriting for body copy or condensed display faces for long paragraphs.

### Scale

Use fluid sizing with `clamp()` and tune it against both approved mockups.

| Role | Desktop guide | Mobile guide |
| --- | ---: | ---: |
| Hero display | 88 to 144 px | 52 to 72 px |
| Section display | 56 to 88 px | 38 to 52 px |
| Card heading | 26 to 36 px | 24 to 30 px |
| Intro copy | 20 to 26 px | 18 to 22 px |
| Body copy | 17 to 19 px | 16 to 18 px |
| Small metadata | 13 to 15 px | 13 to 14 px |

These are guardrails, not instructions to ignore the reference composition.

### Typography rules

- Use sentence case unless the approved design uses uppercase for a specific label.
- Keep large headlines tightly led, around 0.9 to 1.0 line-height.
- Body copy should sit around 1.45 to 1.6 line-height.
- Keep paragraph measure between approximately 45 and 70 characters.
- Do not fake bold or italic styles.
- Avoid centred body copy except for a short, deliberate statement.
- Preserve deliberate line breaks in display copy only when they remain sensible responsively.

## 7. Layout system

### Container

- Maximum content width: approximately 1280 to 1360 px, matched to the approved desktop mockup.
- Page gutters: fluid, from 20 px on mobile to 64 or 80 px on wide screens.
- Use a 12-column desktop grid and a 4-column mobile grid.

### Spacing tokens

Use a consistent spacing scale:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
--space-10: 128px;
```

Section spacing should be generous. Prefer 96 to 160 px vertically on desktop and 64 to 96 px on mobile, adjusted for the composition.

### Layout rules

- Maintain strong alignment even when compositions are asymmetric.
- Allow selected typography or photography to break the grid intentionally.
- Do not centre every section.
- Do not place every section inside a rounded rectangle.
- Avoid excessive card nesting, shadows and dashboard-like UI treatment.
- Use whitespace before adding another divider or decorative object.

## 8. Photography

### Direction

Photography should feel real, expressive and professionally art-directed. Janelle should appear warm, capable and quick rather than posed as a generic corporate speaker.

Use a mix of:

- Strong portraiture
- Genuine stage performance
- MC or panel-hosting context
- One candid personality image if useful

### Treatment

- Preserve natural skin texture and facial detail.
- Use clean, deliberate crops.
- Transparent cut-outs may overlap typography or colour fields when shown in the approved composition.
- Keep hair edges natural.
- Avoid heavy beauty retouching, artificial rim lighting and fake cinematic backgrounds.
- Never generate text, logos or event signage inside images.

### Responsive crops

Supply desktop and mobile crops where one crop cannot preserve the intended composition. Use `object-position` per breakpoint rather than accepting an accidental centre crop.

## 9. Graphic elements

Graphic details should be simple and code-native where possible:

- Rules
- Underlines
- Arrows
- Small geometric accents
- Masked colour blocks
- Cropped typographic fragments

Use SVG or CSS for precise graphics. Do not use AI-generated raster images for arrows, icons, text, logos, patterns that need to tile, or anything that must remain geometrically exact.

## 10. Logo usage

- Use the full Janelle Koenig logo once in the header on desktop.
- Do not repeat the same full lock-up in the hero.
- A compact mark or wordmark may appear in the footer.
- Maintain clear space around the logo.
- Do not add shadows, outlines, bevels, animation loops or alternate colours that are not approved.
- Use SVG wherever possible.

## 11. Buttons and links

### Primary button

- High contrast
- Solid fill
- Compact, confident label
- Optional simple arrow
- No pill shape unless clearly present in the approved mockup

### Secondary button

- Outline, text treatment or quieter contrasting fill
- Must remain visibly actionable

### Behaviour

- Minimum touch target: 44 x 44 px
- Hover: 2 px lift plus subtle colour or shadow change
- Duration: 180 to 220 ms
- Focus: strong visible ring with adequate offset
- Active: return toward the surface with a small shadow reduction
- Disabled: visibly different and semantically disabled

### Copy

Preferred actions:

- Book Janelle
- Watch her work
- Learn more
- View all dates
- Read the Substack
- Download press kit

Do not invent lines such as `Let's make magic`, `Your next unforgettable event starts here` or `Ready to laugh?`.

## 12. Cards and content groups

- Service cards should feel like three related editorial panels, not software product cards.
- Event rows should prioritise date, title and location.
- Testimonials should use prominent quotation typography without oversized decorative quote marks competing with the words.
- Client logos should use consistent optical size, not identical bounding-box dimensions.
- Borders should generally be more useful than shadows.
- Corner radius should be restrained and consistent. Use no more than two radius values across the site.

## 13. Icons

- Use one consistent line-icon family or simple custom SVGs.
- Default stroke weight should match the body typography.
- Use icons only where they improve comprehension.
- Provide accessible labels for icon-only controls.
- Do not use emoji as interface icons.

## 14. Forms

- Stack labels above fields.
- Never rely on placeholder text as the label.
- Use generous field height and clear focus styling.
- Keep the form short.
- Place validation messages next to the relevant field.
- Preserve entered data after a recoverable error.
- Use a specific success message only after confirmed submission.
- Avoid novelty microcopy that makes an error less clear.

## 15. Motion system

### Tokens

```css
--motion-fast: 200ms;
--motion-standard: 600ms;
--motion-slow: 750ms;
--motion-distance: 20px;
--motion-stagger: 100ms;
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
```

### Rules

- Animate sections as whole compositions.
- Use opacity, transform and clipping masks for most reveals.
- Avoid animating layout properties that cause reflow.
- Do not make content wait more than approximately 150 ms to begin appearing.
- Run entrance animation once only.
- No auto-rotating testimonials or event carousels.
- No bouncing, pulsing, elastic easing or continuous floating.
- Do not animate the logo continuously.

### Hero sequence

1. Header fades in.
2. `Hello Australia!` rises about 20 px through a masked reveal.
3. Janelle's portrait fades and scales from 98% to 100%.
4. Supporting copy and actions appear together.

Total sequence should remain close to 1.2 seconds.

### Scroll sequence

- Trigger when approximately 15 to 20 per cent of the section is visible.
- Heading enters first.
- Main content follows after 80 to 120 ms.
- Event rows may stagger by approximately 70 ms.
- The Substack underline is the one deliberately playful flourish.

### Reduced motion

Under `prefers-reduced-motion: reduce`:

- Remove transform and mask-based entrances.
- Remove parallax and smooth scrolling.
- Use immediate display or a short opacity fade.
- Preserve all content and functionality.

## 16. Mobile adaptation

- Mobile is a composed layout, not a shrunken desktop.
- Remove hero parallax.
- Keep the hero message and both actions visible without excessive scrolling.
- Protect Janelle's face and silhouette in every crop.
- Stack service panels in a deliberate rhythm.
- Keep event dates easy to scan.
- Avoid horizontal carousels unless there is a strong usability reason.
- Use shorter motion durations.
- Keep the Substack panel visually distinct before the footer.

## 17. Voice and copy style

### Tone

- Smart
- Dry
- Direct
- Warm
- Self-aware
- Professionally reassuring

### Writing rules

- Use Australian English.
- Use short sentences and strong verbs.
- Keep jokes secondary to clarity.
- Prefer one good line over three average ones.
- Avoid hype, generic event language and exaggerated claims.
- Avoid comedy clichés, including `mic drop`, `laugh a minute`, `non-stop laughs`, `side-splitting` and `make your event unforgettable`.
- Do not invent credits, testimonials, clients, dates or achievements.
- Do not use em dashes.

### Approved recurring phrases

- Hello Australia!
- Comedian | MC | Panel Host
- Quick wit. Calm hands. Zero beige.
- The Flex
- Three ways Janelle keeps the room alive.
- Where to catch Janelle
- Nice things people said
- Need a grown-up?
- Apparently she writes too.
- More Janelle, but with considerably less standing up.

## 18. Accessibility style rules

- All normal text and controls must meet WCAG 2.2 AA contrast.
- Large display type still needs legible contrast.
- Focus styles are part of the design, not a browser defect to remove.
- Never place essential text inside raster images.
- Avoid large areas of all-uppercase copy.
- Underline body-copy links or distinguish them by more than colour alone.
- Ensure motion does not obstruct reading or navigation.

## 19. Component naming

Use clear reusable component names:

```text
SiteHeader
Hero
CredibilityStrip
ServiceGrid
ServiceCard
EventList
EventRow
TestimonialGrid
BookingSection
BookingForm
SubstackPanel
SiteFooter
Reveal
Button
LogoCloud
```

Do not create multiple slightly different components for the same visual role.

## 20. New-page checklist

Before approving any future page, confirm that it:

- Uses the existing colour, type and spacing tokens
- Reuses established components where appropriate
- Has one clear purpose and primary action
- Does not repeat the full homepage hero
- Uses authentic approved imagery
- Introduces no new decorative style without a clear need
- Works at all nominated breakpoints
- Supports keyboard and reduced-motion users
- Contains no invented facts or placeholder content
- Looks recognisably part of the Janelle Koenig site

