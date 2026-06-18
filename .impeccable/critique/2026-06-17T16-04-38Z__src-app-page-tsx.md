---
target: landing page
total_score: 28
p0_count: 0
p1_count: 0
p2_count: 2
timestamp: 2026-06-17T16-04-38Z
slug: src-app-page-tsx
---
### Design Health Score

| # | Heuristic | Score |
|---|-----------|-------|
| 1 | Visibility of System Status | 2 |
| 2 | Match System / Real World | 4 |
| 3 | User Control and Freedom | 3 |
| 4 | Consistency and Standards | 3 |
| 5 | Error Prevention | 2 |
| 6 | Recognition Rather Than Recall | 3 |
| 7 | Flexibility and Efficiency | 2 |
| 8 | Aesthetic and Minimalist Design | 4 |
| 9 | Error Recovery | 2 |
| 10 | Help and Documentation | 3 |
| Total | | 28/40 |

### Fixes verified from Run 1

P1 Motion: resolved — slide-left on services, fade-blur on approach paragraphs, slide-up on headings and contact. Each section has a differentiated gesture.
P1 Contrast: resolved — oklch(80% 0.015 275) reads clearly on dark bg.
P2 Hero dead zone: resolved — tighter padding, services enter viewport earlier.
P2 Eyebrow: resolved — "Wooster, Ohio" sentence-case, no tracking.
Bonus: contact form Send button full-width on mobile.

### Priority Issues

[P2] No social proof — biggest remaining conversion gap. One named testimonial with a real result would do more than any CSS fix.

[P2] No repeated CTA after services list — user sold on services must scroll far to find the contact form. One anchor link bridge would capture peak-interest traffic.

[P3] Nav label/heading mismatch — "How we work" links to "Built for businesses without an IT department". Change one to match the other.

### Minor

- text-wrap: balance missing on services H2 and contact H2
- Footer lacks phone number
- Fade-blur stagger on approach paragraphs could go to 0/150/300ms for a more visible cascade
