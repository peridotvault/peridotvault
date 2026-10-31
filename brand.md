# Brand — PeridotVault

PeridotVault is an intelligent decentralized gaming platform. Its visual identity is dark, technical and restrained, with peridot green used for emphasis.

## Color

The implemented color tokens in `src/shared/styles/token/colors.css` are the source of truth. Additional shadcn and sidebar tokens are in `src/shared/styles/globals.css`. The product currently supports dark mode only.

| Token | Value | Use |
| --- | --- | --- |
| `--background` | `#0d0f0e` | Main canvas |
| `--surface`, `--card` | `#060807` | Secondary surfaces |
| `--foreground` | `#e0e4e4` | Primary text |
| `--paragraph` | `#b5b5b5` | Body copy |
| `--primary` | `#349b65` | Primary brand green |
| `--secondary` | `#349b6650` | Translucent green accents |
| `--accent` | `#87ee83` | Emphasis, hover and focus |
| `--border` | `#ffffff28` | Component borders |
| `--line` | `#ffffff14` | Decorative rails and grid dividers |
| `--label` | `#ffffff60` | Decorative or secondary details; check contrast before use as text |
| `--muted` / `--muted-foreground` | `#363636` / `#7d7d7d` | Muted surfaces and text; check contrast in context |

Use semantic utilities such as `bg-background`, `text-foreground`, `text-paragraph` and `border-line`. Do not rely on decorative `--line` for a control boundary or focus indicator. Verify text and interactive contrast against the actual background, especially over imagery and gradients. Shader palettes may use explicit color values where a canvas cannot directly resolve CSS tokens.

## Typography

- **Display and body:** Space Grotesk, loaded with `next/font/google` in `src/app/layout.tsx`. The existing CSS variable is named `--font-inter` for compatibility; it contains Space Grotesk.
- **Code and changing numbers:** system monospace; use tabular numerals for changing or aligned values.
- The root font size is `0.85rem` (13.6px at a 16px browser default), defined in `src/shared/styles/token/fonts.css`. Tailwind `rem` sizes inherit this scale; check actual rendered sizes and do not assume one spacing unit is 4 physical pixels.
- Marketing headings are large and responsive. Use a single `h1` per page and preserve heading hierarchy.

## Hero treatment

The home and Identity heroes share `HeroBackground` in `src/shared/components/atoms/HeroBackground.tsx`. It uses the Grainient shader, a dark-to-light green palette, 180° direction, visible grain and a dark overlay at the top. The shader has a static fallback and respects the reduced-motion preference. Hero backgrounds extend behind the fixed navbar; content needs clearance using `--navbar-height`.

## Voice

Use direct, specific language. Prefer clear verbs and concrete claims; avoid hype, unsupported promises and unnecessary jargon. Keep buttons short and action-oriented.

## Applying the brand

- Use square edges for the rail-based marketing system and shared buttons/cards.
- Prefer named tokens and shared components to new one-off colors and spacing.
- Use visible focus indicators, semantic controls and accessible labels.
- Test responsive layouts, dark surfaces and text contrast over dynamic backgrounds.
- `DESIGN.md` documents layout, rail and component rules. Legacy AI and roadmap layouts still include rounded surfaces and should be migrated deliberately when those pages are redesigned.
