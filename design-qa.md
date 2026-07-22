# Design QA

## Comparison setup

- Reference: `C:\Users\iai\.codex\generated_images\019f87f8-d143-7a41-af4b-a534f85d0472\exec-30172d9c-a782-470f-bcb4-aafee1329d35.png`
- Reference dimensions: 1536 × 1024
- Implementation capture: `C:\Users\iai\.codex\visualizations\2026\07\22\019f87f8-d143-7a41-af4b-a534f85d0472\implementation-desktop.png`
- Implementation dimensions / viewport: 1536 × 1024
- Combined comparison: `C:\Users\iai\.codex\visualizations\2026\07\22\019f87f8-d143-7a41-af4b-a534f85d0472\design-comparison.png`
- Mobile capture / viewport: `C:\Users\iai\.codex\visualizations\2026\07\22\019f87f8-d143-7a41-af4b-a534f85d0472\implementation-mobile.png`, 390 × 844
- Skia verification capture: `C:\Users\iai\.codex\visualizations\2026\07\22\019f87f8-d143-7a41-af4b-a534f85d0472\lottie-skia-player.png`, 1280 × 720

## Comparison passes

1. Layout and hierarchy
   - Matched the navy lab rail, warm paper surface, split hero, oversized Korean name, compact top navigation, red CTA, and right-side research matrix.
   - Preserved the selected direction's flat rules and square geometry without rounded card grids or decorative shadows.

2. Typography and color
   - Pretendard is used for Korean/body copy and Clash Display for the English display treatment.
   - Industrial AI navy, Kyung Hee red, and warm white are mapped to reusable tokens; contrast remains legible in both light and dark sections.

3. Research matrix and motion
   - Implemented nine semantic matrix buttons with a 44 × 44 px hit target, visible focus state, `aria-pressed`, and a live localized readout.
   - The selected research path is a transparent 900 × 540, 60 FPS, 180-frame Lottie with slot-driven navy/red colors and an ease-in-out signal packet.
   - Verified in the official diffusionstudio Skia Skottie player; the player exposed both slots and rendered the full route without console errors.

4. Responsive and accessibility
   - Verified at 1536 × 1024, 1440 × 1024, and 390 × 844.
   - No horizontal overflow at desktop or mobile widths.
   - Verified keyboard/semantic controls, mobile navigation, Korean/English switching, reduced motion, visible focus, and 44 px matrix targets.

5. States and interactions
   - Checked the default selected node, alternate matrix selection, mobile menu open/close, language switching, section navigation, external links, and scroll progress.
   - Browser console: no errors.
   - Automated checks: 8 Playwright tests passed across desktop and mobile, including visual regression.

## Resolved findings

- P1: The animated route was not present during an offline cold load because runtime libraries depended on external CDNs. Resolved by vendoring pinned Lucide and Lottie browser builds.
- P1: The selected reference depended on a persistent red research path, while the first animation pass temporarily hid it. Resolved by keeping the path visible and animating a signal packet over it.
- P2: Matrix controls were visually compact but below a practical mobile hit target. Resolved by increasing the semantic button area to 44 × 44 px without changing the visual node scale.
- P2: Only the active intersection carried the red path treatment. Resolved by styling all verified featured-path intersections while keeping the current selection distinct.

No open P0, P1, or P2 findings remain.

final result: passed
