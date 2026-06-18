---
target: landing page
total_score: 27
p0_count: 0
p1_count: 2
p2_count: 3
timestamp: 2026-06-17T15-24-58Z
slug: src-app-page-tsx
---
### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No scroll position awareness; no sticky nav; contact form feedback exists but that's the only state feedback on the page |
| 2 | Match System / Real World | 4 | Copy is excellent — plain English throughout, no jargon, natural flow |
| 3 | User Control and Freedom | 3 | Anchor links work cleanly; no sticky nav means the CTAs vanish after scrolling past the hero |
| 4 | Consistency and Standards | 3 | Visually cohesive; one friction point: nav says "How we work" but the section heading is "Built for businesses without an IT department" |
| 5 | Error Prevention | 2 | required and type=email attributes present; no inline validation before submit; no max-length on textarea |
| 6 | Recognition Rather Than Recall | 3 | Services scannable, nav clear; nothing is buried |
| 7 | Flexibility and Efficiency | 2 | Anchor links are the only shortcut; no keyboard path to contact form |
| 8 | Aesthetic and Minimalist Design | 3 | Clean hierarchy, good restraint; two spacing issues drag the score |
| 9 | Error Recovery | 2 | Contact form gives email fallback on error; does not preserve entered data |
| 10 | Help and Documentation | 3 | "We'll reply within a day — no obligation" sets expectations; appropriate for surface |

Total: 27/40

### Anti-Patterns Verdict

Detector returned [] — zero rule violations. Clean scan.

LLM: WOOSTER, OHIO eyebrow matches the uppercase/tracked kicker ban. Color strategy (indigo + amber) is committed and avoids cream/sand default. Structural formula (hero → services → approach → contact) is textbook; no personality moment that anchors to this specific person.

### Priority Issues

[P1] No motion below the fold — hero animates, everything else loads instantly. Energy drops off at first scroll.

[P1] Approach section body text at oklch(97% 0.01 275 / 65%) on dark bg — alpha transparency on dark is a contrast risk near or below 4.5:1 for body text.

[P2] Hero dead zone — pb-32 creates ~8rem of empty space below CTAs before services begin.

[P2] No social proof — no testimonials, no named results, no faces. Target audience (skeptical small biz owners) needs trust signals.

[P2] WOOSTER, OHIO eyebrow — uppercase + tracking-widest above H1 matches absolute ban pattern.

### Persona Red Flags

Jordan (First-Timer): No phone number. No placeholder guidance in textarea. No repeated CTA after services list.

Riley (Stress Tester): Form success message lost on page reload — no persistence. No textarea max-length or counter.

Casey (Mobile): Send message button is self-start/left-aligned — should be full-width on mobile. Mobile nav hidden with no hamburger alternative.

### Minor Observations

- Footer lacks phone number
- H2s missing text-wrap: balance
- No aria-label on form / Send button
- "How we work" nav label vs "Built for businesses without an IT department" heading register mismatch
