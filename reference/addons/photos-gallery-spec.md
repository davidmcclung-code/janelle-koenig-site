# Single-Page Antigravity Addon Spec

## Janelle Koenig website: `/photos` gallery page

### Purpose

Add one new responsive photo gallery page at `/photos`, using the supplied approved desktop and mobile mock-ups as the visual authority.

This is an isolated addon to the existing Astro site. Do not regenerate, redesign, restructure or broadly refactor the existing website.

---

## 1. Scope guardrails

Before editing anything, inspect:

- `@.agents/rules/janelle-design.md`
- `@reference/brief.md`
- `@reference/style.md`
- `@reference/motion.md`
- `@reference/image-guide.md`
- `@reference/implementation.md`
- the existing layout, header, footer, button and responsive navigation implementation
- the supplied approved desktop and mobile gallery mock-ups

Treat the existing implemented site as the approved baseline. Reuse its actual layout component, design tokens, typography, container widths, buttons, header, footer and breakpoint conventions.

Do not assume the project uses Tailwind. If Tailwind is already installed and actively used, follow the existing utility conventions. Otherwise, use the site's current Astro/CSS architecture and do not add Tailwind.

Only create or edit the files required for this addon. Do not alter existing homepage sections, global typography, colour tokens, animation behaviour, footer sizing or unrelated components.

---

## 2. New route

Create:

- `@src/pages/photos.astro`

Requirements:

- Route must resolve at `/photos`.
- Use the site's existing shared layout component, likely `@src/layouts/BaseLayout.astro` or its actual equivalent. Do not create a second layout.
- Use the existing shared `Header.astro` and `Footer.astro` through the layout.
- Set the document title to `Photos | Janelle Koenig`.
- Set a concise description: `Photos of Janelle Koenig performing comedy, hosting events and appearing on stage around Australia.`
- Preserve the existing cream, crimson and charcoal design system.
- The entire page must be left-aligned to the same desktop content edge used by the homepage hero and major sections.

### Page structure

1. Existing site header
2. Gallery introduction on the cream background
3. Charcoal photo grid
4. Cream enquiry banner
5. Existing site footer

### Exact introduction copy

Eyebrow, using the existing crimson handwritten style:

`Proof she left the house.`

Main heading:

`GALLERY`

Supporting copy:

`Gigs, green rooms, good rooms and the occasional flattering angle.`

Desktop alignment requirement:

- Left-align the eyebrow, heading and supporting copy.
- Align them with the site's standard desktop content container.
- Do not centre this header block.
- Retain the small existing crimson flourish to the right of the heading if that flourish asset or treatment already exists.

### Exact enquiry banner copy

Heading, using the crimson handwritten style:

`Need Janelle at your thing?`

Body:

`MC, panel hosting, brand work and light corporate damage.`

Button:

`MAKE AN ENQUIRY →`

The button should link to the existing homepage enquiry destination. Use the site's real enquiry URL or `/#mc-events` if the existing MC and events section is the enquiry destination.

---

## 3. New isolated components

### Required: `@src/components/GalleryGrid.astro`

Responsibilities:

- Own the gallery item data and image imports.
- Render the asymmetric desktop grid and two-column mobile grid.
- Use semantic buttons for interactive image tiles, not clickable `div` elements.
- Pass the selected item's image, alt text and caption data to the lightbox.
- Use the existing container and spacing conventions.
- Keep layout stable while images load.

Each gallery item should support:

- `src`
- `alt`
- `title`
- `location`
- `caption`
- `layout` or span class for the approved asymmetric arrangement

### Required: `@src/components/GalleryLightbox.astro`

Responsibilities:

- Provide the full-screen image view opened by clicking or tapping a gallery tile.
- Display the selected image, title, location and caption.
- Include visible previous, next and close controls.
- Support keyboard navigation: `Escape` closes, left and right arrow keys move between images.
- Trap focus while open and return focus to the originating tile after closing.
- Prevent background scrolling only while the lightbox is open.
- Use a native `<dialog>` where compatible with the existing architecture, or an accessible dialog implementation without adding a large dependency.

Do not add React, Vue, Svelte, a carousel library or a lightbox package solely for this page. Use Astro, CSS and minimal vanilla JavaScript unless the project already has an established interactive framework.

### Reuse existing components

- Reuse `@src/components/Header.astro`.
- Reuse `@src/components/Footer.astro`.
- Reuse the existing button component or button classes.
- Reuse an existing promotional/banner component for the enquiry CTA if it can support the mock-up without changing other pages. Otherwise, keep the CTA markup local to `photos.astro`.

Do not duplicate the header, footer, logo, navigation system or global button styles inside the gallery components.

---

## 4. Asset list for `@src/assets/photos/`

Create the directory if it does not exist:

- `@src/assets/photos/`

Create 12 temporary local placeholder photos with these filenames:

| Filename | Intended crop | Placeholder subject |
| --- | --- | --- |
| `gallery-comedy-stage-01.webp` | landscape | Comedian performing on a small theatre stage |
| `gallery-mc-lectern-01.webp` | portrait | Event host at a lectern with a microphone |
| `gallery-backstage-01.webp` | landscape | Warm backstage or dressing-room moment |
| `gallery-editorial-portrait-01.webp` | portrait | Informal seated editorial portrait |
| `gallery-audience-01.webp` | portrait | Performer interacting with an audience |
| `gallery-panel-host-01.webp` | landscape | Host moderating a panel discussion |
| `gallery-comedy-stage-02.webp` | portrait | Performer holding a microphone under stage lighting |
| `gallery-event-arrival-01.webp` | portrait | Event arrival or media-wall photograph |
| `gallery-green-room-01.webp` | landscape | Candid green-room conversation |
| `gallery-theatre-wide-01.webp` | landscape | Wide theatre or auditorium view |
| `gallery-event-interview-01.webp` | landscape | On-stage event interview |
| `gallery-venue-detail-01.webp` | landscape | Theatre exterior, marquee or venue detail |

### Placeholder generation instructions

- Generate simple, tasteful local placeholder event and performance photographs for now.
- The placeholders do not need to depict Janelle accurately. They will be replaced with approved genuine photographs later.
- Do not use recognisable public figures, brand logos, watermarks or legible event branding.
- Do not hotlink remote images at runtime.
- Save the files locally in `@src/assets/photos/` and import them through Astro's asset pipeline.
- Prefer WebP source files. If the available generator produces PNG or JPEG, use the project's existing image-processing workflow to create the named WebP files.
- Aim for source images at least 1200 px on the long edge so they remain useful across grid and lightbox views.
- Preserve natural photographic texture. Do not add typography, frames or graphic overlays to the image files.

### Temporary metadata

Use clearly editable placeholder metadata in `GalleryGrid.astro`. The first item should demonstrate the approved caption treatment:

- Title: `Perth Comedy Festival Gala`
- Location: `State Theatre Centre, Perth`
- Caption: `Trying to look employable between jokes.`
- Alt text: `Janelle Koenig performing at the Perth Comedy Festival Gala`

For the remaining placeholder items, use short descriptive alt text and neutral editable titles such as `Event photo placeholder`. Do not invent real clients, venues, awards or endorsements.

---

## 5. Gallery layout and behaviour

### Desktop: 1024 px and above

- Use the supplied desktop mock-up as the visual authority.
- Present the images as a dense, asymmetric editorial contact sheet on a charcoal background.
- Use a controlled CSS Grid with deliberate column and row spans. Do not use twelve identical cards.
- Keep gaps tight and consistent.
- Images use `object-fit: cover` with deliberate `object-position` values where needed.
- Avoid awkward face, microphone, hand and lectern cropping.
- The introduction above the grid remains left-aligned.

Desktop hover/focus behaviour:

- Hovering or keyboard-focusing a tile should gently enlarge it above neighbouring tiles without causing grid reflow.
- Use a restrained scale of approximately `1.04` to `1.08`, a higher `z-index`, and the site's approved shadow treatment.
- Reveal the image title, location and caption over a subtle solid/translucent charcoal overlay near the bottom of the image.
- Keep the transition within the timing and easing defined in `@reference/motion.md`.
- Do not make the image literally fill the screen on hover.
- Clicking the image opens the full-screen lightbox.

### Tablet and mobile: below 1024 px

- Use the supplied mobile mock-up as the visual authority.
- Use a compact two-column masonry-like grid where practical.
- Allow selected feature images to span both columns when the approved composition requires it.
- Do not rely on hover for captions or discovery.
- Tapping a tile opens the full-screen lightbox with the complete caption.
- Keep body copy at least 16 px and interactive targets at least 44 by 44 px.
- At very narrow widths, preserve the two-column grid only while tiles remain usable. A one-column fallback below approximately 360 px is acceptable if required to prevent poor crops or overflow.

### Reduced motion

Under `prefers-reduced-motion: reduce`:

- Remove tile scaling and non-essential transforms.
- Reveal captions without animated movement.
- Keep the lightbox functional with immediate state changes.

---

## 6. Navigation updates

### `@src/components/Header.astro`

Add one navigation item:

- Label: `GALLERY`
- URL: `/photos`

Placement:

- Add it after `MC & EVENTS` and before the existing primary `SEE JANELLE LIVE` button, matching the supplied desktop mock-up.
- Add the same destination to the existing mobile menu.
- On `/photos`, mark the Gallery link as the active page using the site's existing active-state pattern. If no pattern exists, use the existing crimson colour plus a restrained underline.
- Add `aria-current="page"` on the active Gallery link.

Subpage anchor handling:

- Confirm all homepage-section navigation links still work from `/photos`.
- If existing links use fragment-only values such as `#shows`, update only those shared links to root-relative homepage anchors such as `/#shows`, `/#watch`, `/#about` and `/#mc-events`.
- Preserve the existing top-right `SEE JANELLE LIVE` CTA and ensure it resolves to the homepage shows section from `/photos`.
- Do not otherwise redesign the header or mobile menu.

### `@src/components/Footer.astro`

Add one Explore link:

- Label: `Gallery`
- URL: `/photos`

Placement:

- Add it after `MC & Events` in the existing Explore list.
- Ensure the other homepage-section links use root-relative anchors when visited from `/photos`.
- Preserve all existing footer layout, widths, typography, spacing, social links, contact details, copyright content and the current `Website by David McClung` credit/link.
- Do not redesign or resize the footer.

---

## 7. Accessibility and performance

- Use one `<h1>` on the page: `GALLERY`.
- Gallery tiles must be reachable and operable by keyboard.
- Provide meaningful alt text for genuine photos when they replace the placeholders.
- Decorative flourishes must use empty alt text or be hidden from assistive technology.
- Maintain visible focus indicators that match the site.
- Do not communicate selection or active state through colour alone.
- Ensure caption text meets WCAG AA contrast against its overlay.
- Use Astro's image optimisation component or the project's existing equivalent.
- Supply explicit dimensions or aspect ratios to prevent layout shift.
- Use responsive `srcset`/`sizes` output.
- Eager-load only the first visible gallery row if needed. Lazy-load the remainder.
- Do not preload all full-resolution lightbox images.
- No horizontal overflow at 320, 390, 768, 1024, 1440 or 1920 px.

---

## 8. Files that may be changed

Expected new files:

- `@src/pages/photos.astro`
- `@src/components/GalleryGrid.astro`
- `@src/components/GalleryLightbox.astro`
- 12 temporary image files under `@src/assets/photos/`

Expected existing files with small targeted edits:

- `@src/components/Header.astro`
- `@src/components/Footer.astro`

Only edit a shared stylesheet, token file or existing navigation data file if the current architecture requires it. Keep any such change specific to the gallery page or the new Gallery navigation item.

Do not modify unrelated pages or components.

---

## 9. Verification and acceptance criteria

Run the project's existing validation commands. At minimum:

1. Start the development server and open `/photos`.
2. Run the Astro build command and confirm there are no build errors.
3. Confirm the existing homepage still renders unchanged.
4. Confirm header and footer Gallery links open `/photos`.
5. Confirm homepage anchor links work correctly from `/photos`.
6. Test keyboard access, focus states, lightbox open/close, Escape, previous and next controls.
7. Test responsive layouts at 390, 768, 1024, 1440 and 1920 px.
8. Test `prefers-reduced-motion` behaviour.
9. Confirm there is no horizontal overflow or layout shift caused by the gallery.

The implementation is complete only when:

- `/photos` closely matches the supplied approved desktop and mobile mock-ups.
- The desktop introduction is left-aligned to the site's standard content edge.
- The photo grid is visually varied and editorial, not a repeated card grid.
- Desktop hover/focus emphasis works without reflow.
- Click/tap opens an accessible full-screen lightbox with captions.
- Mobile does not depend on hover.
- Existing pages and shared site components remain visually unchanged apart from the added navigation link.

---

## 10. Antigravity implementation instruction

Use this instruction with this spec and the attached approved desktop and mobile gallery mock-ups:

> Implement only the new `/photos` gallery page described in the attached Single-Page Antigravity Addon Spec and approved desktop/mobile mock-ups. First inspect the existing project rules, reference files, layout, shared components, styling architecture and navigation implementation. Then report the exact files you intend to create or edit before making changes.
>
> Create `@src/pages/photos.astro` using the site's existing shared layout. Build the isolated gallery grid and accessible lightbox components specified in the document. Generate the 12 temporary local placeholder photos listed in the spec and place them under `@src/assets/photos/`; these will be replaced with approved photography later. Import them through the existing Astro image pipeline.
>
> Update only `@src/components/Header.astro`, `@src/components/Footer.astro` and any existing shared navigation data required to add the `/photos` Gallery link and make homepage anchor links work from the subpage. Follow the site's actual styling system. Do not add or assume Tailwind unless the current project already uses it.
>
> Do not regenerate, redesign, refactor or alter the rest of the site. Preserve all existing homepage sections and shared component styling. Run the dev server, verify `/photos`, run the production build, test the listed responsive widths and confirm the homepage is unchanged. Finish with a concise report of files created, files edited, checks run and any remaining placeholder content.
