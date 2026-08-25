# Task: Janelle Koenig Website

## Design Context

### Users
- **Target Audience**: 
  1. Live comedy fans and general audiences looking to see Janelle perform live across Australia.
  2. Corporate event planners, conference producers, and festival programmers looking for a polished, reliable, funny MC / keynote host.
  3. Readers and followers interested in her writing, essays, and Substack (*The Indoors Club*).
- **User Context**: Browsing primarily on mobile devices and desktop; looking for quick show dates, video clips of stand-up, credible social proof, or a frictionless way to submit booking enquiries.
- **Jobs to be Done**:
  - Discover upcoming live tour dates and purchase tickets immediately.
  - Watch stand-up and interview clips directly without leaving the page flow.
  - Establish credibility (media appearances, corporate experience) and submit MC / booking enquiries.
  - Subscribe to / read Janelle's Substack.

### Brand Personality
- **3-Word Personality**: *Sharp, Warm, Confident* (with dry, self-deprecating wit).
- **Tone & Voice**: Editorial, intelligent, effortless, lightly irreverent, and adult. Funny without being slapstick; professional without being corporate-stodgy.
- **Emotional Goals**: Evoke confidence, authentic delight, ease, and credibility.
- **Anti-References / What this is NOT**:
  - No comedy club clichés (no brick walls, neon signs, laughing emojis, comedy masks, vintage microphones, spotlights, or random comic squiggles).
  - No generic tech-startup styling (no heavy drop shadows, neon gradients, glassmorphism, or ornamental fluff).
  - No distressed, graffiti, grunge, or artificially weathered typography.
  - No fake proof points, invented testimonials, or AI-generated comedy imagery.

### Aesthetic Direction
- **Visual System**: High-end editorial magazine layout with generous negative space, crisp rules, deliberate asymmetry, and bold typography.
- **Palette**:
  - Ground: Warm light cream / off-white (`--colour-page: #fbf8f4`, `--colour-page-warm: #f4ede3`).
  - Text & Accents: Crisp deep black ink (`--colour-ink: #121212`), muted neutral grey (`--colour-muted: #666666`).
  - Primary Brand Accent: Confident crimson red (`--colour-primary: #9e1b32`) used with discipline for key CTAs and expressive script highlights.
  - Footer & Contrast: Grounded in solid dark ink (`--colour-footer: #0a0a0a`).
- **Typography**:
  - Display / Headings: `Plus Jakarta Sans` (bold, clean, punchy modern sans).
  - Body: `Inter` (neutral, legible, robust).
  - Expressive Moments: `Caveat` (handwritten red script for subtle personal notes and jokes).
- **Imagery**: Authentic, high-resolution portrait and stage photography carries the character and visual warmth.
- **Motion**: Restrained, purposeful micro-animations (`--motion-standard: 800ms`, `cubic-bezier(0.16, 1, 0.3, 1)`) with strict adherence to `prefers-reduced-motion`.

### Design Principles
1. **Personality First**: Authentic photography, genuine presence, and sharp, dry copy lead every section—never generic entertainment tropes or stock comedy decorations.
2. **Editorial, Not Templated**: Use scale, generous whitespace, deliberate asymmetrical composition, and crisp editorial dividers rather than monotonous rows of cards.
3. **Controlled Contrast & Restraint**: Keep large fields of warm cream breathing space so that bold display type and rich red accents command high focus without visual noise.
4. **Commercial & Action Clarity**: Primary CTAs (*See Janelle Live*, *Watch Janelle*, *MC & Event Enquiries*) must be prominent, accessible (minimum 44px touch targets), and instantly scannable across all viewports (320px to 1440px+).
5. **Purposeful Motion & High Accessibility**: Transitions must support hierarchy and feel seamless. Ensure strict WCAG contrast compliance, keyboard focus indicators, and semantic HTML structure throughout.
