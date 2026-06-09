# BORA — Design System

> **BORA · Consultoria em Gestão de Projetos** — a Brazilian (PT-BR) project-management
> consultancy. The brand exists to make project management feel *human, direct and
> energetic* — the opposite of the cold, corporate-blue consultancy cliché. The name itself
> is the idea: **"bora"** is Brazilian slang for *"let's go / let's do this."*

---

## 1. Company & product context

BORA migrated away from its former name **"I²"** and its original **blue** identity. The 2026
rebrand commits to a **burnt-orange primary (#E8622A)** over a **deep navy base**, set in
**Syne ExtraBold**, finished with **subtle grain texture**. The strategic thesis: blue is the
default of 80% of consultancies (IBM, LinkedIn, Bradesco) — safe but undifferentiated. Orange
signals *energy + accessibility + action* ("the colour of *let's go*", à la Amazon / Bumble /
Duolingo) while navy keeps the authority.

**What BORA actually ships** is not a software product — it is a **consultancy brand** expressed
across B2B touchpoints:

- **Marketing website** (`borapm.com.br`, built on Lovable) — the primary digital surface.
- **LinkedIn presence** — cover banners, square + rectangular post templates, carousels.
- **Sales & delivery collateral** — commercial proposals (A4/PDF), pitch decks, email signatures.

This design system therefore centres on **brand, marketing, and presentation surfaces**, plus a
small kit of reusable UI primitives for the website.

### Sources provided
- `uploads/logo bora.png` — primary logo (orange "Bora" wordmark + B-mark with yellow upward
  arrow / sticky-note peel). Copied + processed into `assets/logo/`.
- `uploads/BORA_Identidade_Visual_2026.html` — visual-identity exploration deck
  (Paula Balduino, Comunicação & Marketing, Mai 2026).
- `uploads/BORA_Sem3_Briefing-Visual (1).docx` — Week-3 identity briefing: palette %, logo
  concepts, typography, 2026 trends, per-application specs.

> No codebase or Figma file was provided. The website is referenced as living on **Lovable**
> (`borapm.com.br`) but was not shared — the UI kit here is a faithful **brand-led recreation**
> of the consultancy site the identity guidelines describe, not an import of production code.

---

## 2. Content fundamentals — how BORA writes

**Language:** Brazilian Portuguese (PT-BR), first. Tone is **jovial, direct, confident, warm.**
The brand talks like a capable colleague who's on your side — never stiff, never academic.

- **Voice = "bora, vamos resolver isso juntos"** ("let's go, let's solve this together"). Action-
  oriented, inclusive *we/us*, second person *você* when addressing the client.
- **Casing:** the logotype **BORA** is set in all-caps in display contexts; in running prose the
  brand is written "Bora". Eyebrows/labels are UPPERCASE with wide tracking. Headlines use
  sentence-or-title case, never SHOUTING beyond the logotype.
- **Sentence style:** short, declarative, outcome-led. "Gestão de Projetos que funciona de
  verdade." ("Project management that actually works.") · "Clareza, estrutura e execução real."
  · "A BORA ajuda times a sair do caos e entregar com consistência."
- **Vocabulary:** plain and concrete — *clareza* (clarity), *estrutura* (structure), *execução*
  (execution), *entrega* (delivery), *caos → consistência*. Credentials appear as discreet,
  matter-of-fact tags: *PMP · Scrum · Agile*.
- **Emoji:** **not** part of the brand voice in finished pieces. (The exploration doc used emoji
  as internal annotation only.) Prefer the **arrow** ("›" / "→") as the brand's expressive glyph.
- **Numbers & claims:** used sparingly and only when real — no invented stats, no data-slop.

**Quick do / don't**
- ✔ "Bora resolver isso." / "Do caos à entrega." / "Gestão de projetos que funciona de verdade."
- ✘ Corporate filler ("synergistic end-to-end solutions"), hype, exclamation spam, emoji decoration.

---

## 3. Visual foundations

### Colour
A **dominance-ruled** palette, not an even split:
- **60% Navy Profundo `#1A2234`** — primary dark surface, authority, hero floors, footers.
- **25% Cream Off-white `#F5F0E8`** — light sections, card grounds, breathing room (replaces the
  old beige).
- **10% Laranja BORA `#E8622A`** — CTAs, section headings, the logo, key highlights. *Never on
  everything at once* — orange earns attention by being rationed.
- **5% Verde Resultado `#2D9E6B`** — delivery / success / confirmation.
- **5% Âmbar `#F4A01C`** — secondary highlights, hovers, internal accents. **Coral `#FF4F2B`** is
  a brighter orange variant reserved for energetic social posts.

Imagery & fields skew **warm** (orange/amber/cream), grounded by **cool navy**. Tints/shades are
derived in oklch (`tokens/colors.css`) to stay harmonious.

### Typography
- **Display / Logo / Headings → Syne ExtraBold (800)**, letter-spacing `0.04em`. Geometric, a
  little techy, high personality without being cold. Alt: Space Grotesk.
- **Body / UI → DM Sans**, weight **300** for body, **500** for emphasis/labels, line-height
  **1.7**. Alt: Inter.
- Hierarchy: H1 Syne 800 36–44px · H2 Syne 700 22–28px · Body-L DM Sans 500 15–17px · Body
  DM Sans 300 13–14px.

### Texture, backgrounds & "feel"
- **Grain / noise** is a signature element — a subtle monochrome fractal-noise overlay at
  **8–12% opacity** on **solid colour fields** (hero panels, posts, slides, banners). It reads as
  "made with intention," the antidote to flat AI-generic. **Not on everything** — reserve it for
  moments of impact. Use the `.grain` utility (`tokens/spacing.css`).
- Backgrounds are **solid colour fields**, not photo-heavy and not gradient-heavy. Navy and cream
  do most of the work; the giant ghost "BORA" watermark (very low-opacity Syne) is an accepted
  motif on dark panels.
- **"Modo Não Perturbe"** (do-not-disturb) layout principle: generous negative space, bold type
  contrasting with emptiness. Editorial, magazine-like hierarchy on content pieces.

### Shape, depth & interaction
- **Corner radii:** soft, friendly — 12px default cards/inputs, 16px feature cards, 24px hero
  panels, pill (999px) for badges & capsule buttons.
- **Cards:** white (or cream) ground, 1px warm hairline border `#E6E0D6`, **soft navy-tinted
  shadow** (low spread, never harsh, never neon). `--shadow-sm/md/lg`. Primary CTAs get a warm
  **orange lift** shadow.
- **Borders:** 1px warm hairlines on light; 10%-white hairlines on navy.
- **Motion:** energetic but composed — quick (130–360ms), confident easing
  (`--ease-out`), a touch of spring on playful elements. Fades + small rises; **no** infinite
  decorative loops, no bounce-heavy gimmicks.
- **Hover:** darken brand (orange-500 → orange-600), or amber for secondary; subtle lift on
  cards. **Press:** slightly darker + 1px nudge / 0.98 scale. **Focus:** 3px soft-orange ring.
- **Transparency / blur:** used sparingly — translucent white hairlines and low-opacity
  watermarks on navy; occasional frosted overlay on imagery. Not a glassmorphism brand.

---

## 4. Iconography

BORA has **no proprietary icon font**. Approach:
- The **brand glyph is the arrow** — "›" / "→" / the upward arrow inside the B-mark. It is the
  single most "branded" piece of iconography and recurs across materials ("bora →").
- For **UI icons**, this system standardises on **[Lucide](https://lucide.dev)** (loaded from
  CDN) — a clean, **1.5–2px stroke, rounded-join, outline** set that matches Syne/DM Sans's
  friendly-geometric feel. This is a **documented substitution**: no icon set shipped with the
  brand, so Lucide is the closest match in weight and style. Swap freely if the client adopts a
  set.
- **Emoji** are **not** used as product/marketing iconography.
- **No hand-rolled decorative SVG illustration** — the brand leans on type, colour fields, grain,
  and the arrow rather than spot illustration.

Real brand assets live in `assets/logo/`:
- `bora-logo.png` — full lockup, original (white ground).
- `bora-logo-transparent.png` — full lockup, transparent.
- `bora-mark.png` — the **B-mark** (B + yellow arrow), transparent — favicon / avatar / watermark.

---

## 5. Index / manifest

**Root**
- `styles.css` — global entry point (imports only). Consumers link this.
- `readme.md` — this guide. · `SKILL.md` — portable Agent-Skill wrapper.

**`tokens/`** — `fonts.css` (self-hosted Syne + DM Sans woff2), `colors.css`, `typography.css`,
`spacing.css` (spacing/radii/shadows/motion/grain), `base.css` (reset + body defaults).

**`assets/`** — `logo/` (logos + B-mark), `fonts/` (woff2 binaries).

**`guidelines/`** — foundation specimen cards (Type, Colors, Spacing, Brand) shown in the
Design System tab.

**`components/`** — reusable React primitives, grouped by concern:
- `buttons/` — **Button** (primary · secondary · ghost · soft · dark-ghost; sizes; arrow).
- `feedback/` — **Badge** (status tones) · **Tag** (credentials & filters).
- `surfaces/` — **Card** (default · feature · dark · inset; grain) · **Stat** · **Avatar** · **Eyebrow**.
- `forms/` — **Field** · **Input** · **Textarea**.

**`ui_kits/`** — full-screen product recreations.
- `website/` — BORA marketing landing page (Nav · Hero · Method · Services · Contact); interactive contact form, smooth-scroll nav. Marked as a Starting Point.

**`slides/`** — sample branded 16:9 slide templates: `title`, `content`, `quote` (orange), `stats` (navy).

---

### Caveats / substitutions
- **Fonts** Syne & DM Sans are self-hosted from Google Fonts (the brand explicitly endorses
  Google Fonts). If the client licenses different masters, replace files in `assets/fonts/`.
- **Icons** Lucide via CDN as a documented stand-in (no brand icon set was provided).
- **Website** recreated from brand guidelines, not from the Lovable source (not shared).
