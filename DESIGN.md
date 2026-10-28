# DESIGN — PeridotVault Web

> Source of truth for tokens: `brand.md`. This file holds page-level direction only.

## Direction

```
Direction: dark marketing site + docs, workstation-dense where data shows
Density:   comfortable (marketing), compact (data/stats blocks)
Surface:   cards on dark bg (#0a0c0b on #1a1a1a), flat-sm neumorphic shadow
Type mood:  tight, technical, Inter-only
Motion:     crisp, subtle — tsparticles hero only, respect prefers-reduced-motion
```

## Do / Don't

**Do:**
- One `h1` per page, `p` for paragraphs, `span` otherwise
- `<button>` / `<a>` for interactive elements, visible focus ring
- Skeleton > spinner for loading; empty + error states with recovery action
- `text-paragraph` for body copy, `text-label` for meta only
- Images get `alt`, icons get `aria-label` or `aria-hidden`

**Don't:**
- No pure `#000` backgrounds, no `transition-all`, no arbitrary `p-[13px]` / hardcoded hex
- No body copy in `text-label` (contrast fail)
- No second font without updating `brand.md` + `layout.tsx`
- No new gradient without updating `brand.md`

## Rail system (borders)

Single source of truth for section layout. Rules:

1. Section carries only `border-b border-line` — never `border-t` (the top line comes from the previous section's `border-b`; two lines render as a 2px double).
2. Blocks stacked inside a section are separated by `border-t border-line` on the lower block.
3. Column rails use `grid gap-px bg-line` full-bleed inside `max-w-(--container-max-width)` — never an outer `border` box floating in section padding.
4. Vertical rhythm comes from cell padding (`p-12` / `px-12 py-18`), not section `py-*`.
5. Card media sits on `<DotGrid/>` dots (visible behind icons, covered by full-bleed images).

Standard structure:

```
<section className="border-b border-line">
  <div className="mx-auto w-full max-w-(--container-max-width)">
    <SectionHeader ... />
    <div className="grid gap-px border-t border-line bg-line md:grid-cols-3">
      <RailCard ... />
    </div>
  </div>
</section>
```

Shared pieces: `SectionHeader` (atoms), `RailCard` (molecules), `Button` / `ButtonLink` (molecules). A first-child grid omits `border-t`; cards inside a `gap-px` grid must not carry their own outer `border`.

## Foldering

- Page sections live co-located in `_sections/` next to their `page.tsx` (`(marketing)/_sections/`,
  `identity/_sections/`) — one file per section, `page.tsx` only composes. Adding, removing, or
  reordering a section = one line in the composer, no scrolling through 600-line files.
- Shared UI: `shared/components/{atoms,molecules,organisms}/`. Feature-specific interactive
  pieces: `features/<feature>/components/`. Third-party blocks: `components/blocks/`
  (harmonized to this system on install, never used raw).
- `_`-prefixed folders are route-exempt by Next.js convention — safe for co-location.

## Stack

Next.js App Router + TypeScript, Tailwind v4 (`@import "tailwindcss"`), `next/font` (Inter), `lucide-react` icons, `framer-motion`/`motion` for orchestrated motion only, CSS transitions otherwise.

Skills: `frontend-design-guidelines` (mechanical correctness), `design-taste` (direction review), `brand-design` (re-theme).

## Checks before done

- Keyboard nav (Tab/Enter/Escape), focus ring, hit target ≥40px
- Contrast AA (4.5:1 body, 3:1 large/icon)
- Mobile 375 / tablet 768 / desktop 1280
- Dark-only render correct (light mode not supported)
