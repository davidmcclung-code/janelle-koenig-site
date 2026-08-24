---
trigger: always_on
---

# Janelle Koenig Website Design Rule

This rule applies to all design, layout, styling, component and responsive work on the Janelle Koenig website.

## Sources of truth

Before making design or frontend changes, read:

@../../reference/style.md
@../../reference/brief.md

These documents define the approved brand, visual system, tone, page structure and responsive behaviour.

The existing implemented website should also be treated as the approved baseline. Do not redesign established sections unless the user specifically requests it.

## Design consistency

- Follow the colours, typography, spacing, borders, component treatments and responsive rules defined in `style.md`.
- Preserve the site’s confident, editorial, polished and lightly irreverent character.
- Reuse existing design tokens, components and layout patterns before introducing new ones.
- New pages and sections must feel like part of the same website, not a separate template.
- Do not introduce generic startup styling, gradients, glass effects, excessive cards, ornamental clutter or decorative animation unless requested.
- Do not use distressed, graffiti, grunge or artificially weathered typography.
- Animation should be subtle, purposeful and respect `prefers-reduced-motion`.

## Content and imagery

- Follow the hierarchy, purpose and copy direction defined in `brief.md`.
- Do not rewrite approved copy, names, facts or calls to action without being asked.
- Use supplied genuine photography wherever available.
- Placeholder or AI-generated imagery must remain clearly replaceable and must not be treated as a permanent brand asset.
- Do not crop faces, hands or important parts of supplied photography awkwardly.
- Never remove watermarks from source imagery.

## Implementation

- Preserve the existing Astro project structure and established component patterns.
- Avoid unnecessary dependencies.
- Keep styling maintainable and reuse shared CSS variables and components.
- Do not fix one viewport by breaking another.
- Maintain accessible contrast, keyboard navigation, focus states, semantic structure and descriptive alternative text.

## Verification

After visual or layout changes:

1. Run the project build and resolve any errors introduced by the change.
2. Start or keep the local preview server running so the user can review the changes manually.
3. Do not automatically open, inspect, record or interact with browser previews.
4. Do not automatically conduct browser-based checks at desktop, tablet or mobile widths.
5. After implementation and build verification, tell the user the preview server is running and ask whether they would like a browser-preview check.
6. Only perform browser-preview inspection when the user explicitly requests it.
7. When browser-preview inspection is requested, check alignment, wrapping, spacing, cropping, overflow and responsive behaviour at the relevant widths.
8. Continue to compare implementation decisions against `style.md`, `brief.md` and the approved existing design.
9. Report exactly which files were changed, whether the build passed, and that the preview server is running.

When a request conflicts with the established design system, explain the conflict before implementing it. Do not silently reinterpret the design.
