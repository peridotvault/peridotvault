# DESIGN — PeridotVault Web

`brand.md` documents identity, colors and typography; the CSS token files are the source of truth for implemented values. This document describes the shared marketing layout and its design rules.

## Direction

Dark, technical and gaming-focused. Use generous marketing layouts, sharp edges, thin connected rails and restrained peridot accents. Space Grotesk is the primary font. Motion supports the content and must respect reduced-motion preferences.

## Rails and page layout

- `--container-max-width` is `1512px`; `RailEdges` draws the vertical rails at that width. The marketing layout owns the main rails and fixed navbar; the navbar uses the same edges.
- Wrap each page-level section in `RailSection`. Its decorative bottom rail spans the viewport and connects to the vertical rails. Do not add another outer top or bottom border to the wrapped section.
- `RailSection` and `RailEdges` live in `src/shared/components/atoms/Rail.tsx`; the horizontal rail style lives in `src/shared/styles/globals.css`. Keep the wrapper outside clipping containers. Rails are decorative and do not intercept input.
- Separate blocks inside a section with `border-t border-line` on the lower block. Use `grid gap-px bg-line` for column dividers. Cells have opaque backgrounds; a first-child grid omits its top border.
- `SectionHeader`, `RailCard`, `DotGrid` and `Button` are shared building blocks. Use cell padding to establish rhythm and avoid adding a floating border around an entire grid.
- The fixed navbar is rendered once by the marketing layout. Full-bleed hero backgrounds may extend behind it; keep content clear using `--navbar-height`, also used for anchor scrolling.

```tsx
<RailSection>
  <section>
    <div className="mx-auto w-full max-w-(--container-max-width)">
      <SectionHeader title="Section title" />
      <div className="grid gap-px border-t border-line bg-line md:grid-cols-3">
        <RailCard title="Title" description="Description" />
      </div>
    </div>
  </section>
</RailSection>
```

## Hero and motion

`HeroBackground` is shared by the home and Identity heroes. Grainient uses a green palette, a dark upper area, a brighter lower area and grain. Preserve the contrast overlay and readable content over the animation. Its WebGL fallback is static; reduced motion is supported. Do not assume all other legacy animations and videos already have reduced-motion alternatives; check them when modifying those areas.

## Components and accessibility

- Prefer semantic links, buttons and form controls; give controls accessible names and visible keyboard focus.
- Use `text-paragraph` for body copy and check contrast on the actual surface. Decorative rail colors are not accessible control borders by themselves.
- Use responsive layouts, meaningful image alternatives and decorative `aria-hidden` attributes. Avoid hover-only functionality.
- The primary rail system uses square corners and flat surfaces. AI and roadmap retain older rounded styles and are not yet fully migrated.
- Size and spacing tokens use `rem` against the project's `0.85rem` root font size. Check rendered sizing instead of assuming Tailwind's default pixel measurements.

## Project structure

Page-specific sections live in their route's `_sections/` folder. Shared UI lives under `src/shared/components/{atoms,molecules,organisms}/`; feature-specific components live under `src/features/`. Keep theme values in `src/shared/styles/token/` and shadcn-specific values in `globals.css`.

## Checks

Verify keyboard navigation and visible focus, labels, contrast, reduced motion and dark-mode rendering. Check at mobile (375px), tablet (768px) and desktop (1280px), as well as wider screens where full-width rails extend beyond the content container. Validate with ESLint and TypeScript; use browser testing when available.
