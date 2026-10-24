---
name: Academic Utility
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#0d46d1'
  on-tertiary: '#ffffff'
  tertiary-container: '#3761ea'
  on-tertiary-container: '#efefff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b7c4ff'
  on-tertiary-fixed: '#001551'
  on-tertiary-fixed-variant: '#0039b5'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
  surface-canvas: '#F8FAFC'
  surface-card: '#FFFFFF'
  surface-subtle: '#EEF4FD'
  border-subtle: '#E2E8F0'
  border-strong: '#CBD5E1'
  text-muted: '#64748B'
  status-success: '#10B981'
  status-success-bg: '#ECFDF5'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: -0.005em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.025em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system serves a modern, high-credibility academic examination repository. It balances institutional authority with the fluid efficiency of contemporary developer and productivity tools. The personality is disciplined, sharp, trustworthy, and clear, designed to eliminate cognitive friction for university students, educators, and researchers conducting focused inquiry.

The aesthetic blends **Modern Academic Corporate** with subtle tactile feedback:
- High contrast, pristine neutral backgrounds provide an uncluttered reading environment.
- Precision lines and deliberate border hierarchies anchor data filters and document previews.
- Electric royal blue provides an energetic intellectual anchor, balanced by warm amber badges that highlight active exam terms, verification markers, and curated highlights.
- Frosted glassmorphism is restricted to sticky utility headers and navigation bars to sustain spatial grounding during deep vertical browsing without obscuring repository assets.

## Colors

The palette establishes an immediate academic hierarchy through light, crisp token application:
- **Primary (`#2563EB`)**: Directs primary calls to action, focus halos, interactive states, and active selection states.
- **Tertiary (`#1D4ED8`)**: A deeper, weighted royal blue reserved for pressed button states, anchor text, and dense borders indicating verified structural modules.
- **Secondary (`#F59E0B`)**: An academic amber/gold applied selectively to non-critical highlights, course semester badges, difficulty tags, and solution indicators.
- **Neutral (`#0F172A`)**: High-contrast slate providing uncompromising typographic legibility across dense body copy, metadata lines, and tabular views.
- **Surfaces & Borders**: A multi-tiered neutral canvas starting at `#F8FAFC`, stepping into pure `#FFFFFF` for data cards, framed by clean hairline borders (`#E2E8F0` and `#CBD5E1`) to maintain clean structure without visual noise.

## Typography

Typographic scale is powered exclusively by **Inter**, leveraging its systematic structure, tight tracking at display levels, and exceptional legibility across dense data tables and technical academic notation.

- **Headlines**: Tight letter-spacing (`-0.025em` to `-0.01em`) and assertive weights (700 to 800) bring editorial discipline to section headers, landing displays, and subject breakdowns.
- **Body**: Standardized regular weight (`400`) at comfortable line-height ratios (1.5x) preserves comfortable reading sessions during full question evaluations.
- **Labels & Microcopy**: Medium and uppercase bold treatments (`label-md`, `label-sm`) with positive letter-spacing (`0.025em` to `0.05em`) are applied to metadata stamps, year tags, course codes, and exam status indicators.

## Layout & Spacing

The layout is engineered around a 12-column responsive fluid grid with strict content containment:
- **Maximum Width**: Main application interfaces and repository dashboards sit inside a constrained outer wrapper of `72rem` (1152px) to prevent excessive line length on ultrawide monitors.
- **Vertical Rhythm**: Built strictly in increments of 4px and 8px. Spacing between distinct structural sections uses `space-xl` (40px) or `space-lg` (24px), while intra-card filters and stacked metadata items scale between `space-sm` (8px) and `space-md` (16px).
- **Responsive Adaptations**:
  - **Desktop (1024px+)**: Standard 12-column grid. Left-side filter drawers sit fixed or pinned across 3 to 4 columns (`span 3`), with exam content streams spanning the remaining 8 to 9 columns.
  - **Tablet (768px - 1023px)**: 8-column layout. Filter controls collapse into a horizontally scrollable pill row or secondary trigger sheet.
  - **Mobile (<768px)**: 4-column layout with `margin-mobile` (16px) margins. Filter selectors reflow into a clean vertical bottom sheet modal, and exam paper previews collapse into single-column vertical cards.

## Elevation & Depth

Visual hierarchy prioritizes surface clarity over heavy visual shadows, aligning with rigorous academic precision:
- **Level 0 (Flat Canvas)**: Global background runs on `surface-canvas` (`#F8FAFC`).
- **Level 1 (Structural Cards & Modules)**: Raised with `surface-card` (`#FFFFFF`) bound by a 1px border stroke using `border-subtle` (`#E2E8F0`). Subtle ambient drop shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)`.
- **Level 2 (Hovered Cards & Interactive Surfaces)**: Slight elevation shift on hover: `0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)` accompanied by a border transition to `border-strong` (`#CBD5E1`).
- **Level 3 (Dropdowns & Modals)**: Floating dialogs and popovers use `0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)`.
- **Header Glassmorphism**: Top global navigation uses `backdrop-filter: blur(12px)` over a 90% semi-transparent surface (`rgba(255, 255, 255, 0.90)`) with a crisp bottom border `1px solid rgba(226, 232, 240, 0.8)`.

## Shapes

The design system adopts a roundedness level of `2`:
- **Default Base (`rounded`, 8px / 0.5rem)**: Applied to input elements, dropdown fields, utility buttons, filter badges, and preview thumbnails.
- **Large Containers (`rounded-lg`, 16px / 1rem)**: Applied to major data cards, question bank containers, filter panels, and modal shells.
- **Extra Large Containers (`rounded-xl`, 24px / 1.5rem)**: Applied to hero feature callouts and modal windows.
- **Pill Exception (`rounded-full`)**: Strictly reserved for primary conversion triggers (e.g., "Download PDF", "Grab Questions") and live status indicator chips (e.g., "FREE", "Verified Answer").

## Components

### Buttons
- **Primary CTA**: Background `#2563EB`, text `#FFFFFF`, font `label-lg`, padding `0.625rem 1.25rem`. Rounded with full pill radius (`rounded-full`) or 8px (`rounded`) for toolbar contexts. Hover: `#1D4ED8`. Active: scale transform down to `0.98`. Focus ring: 2px offset with 2px solid `#2563EB`.
- **Secondary / Outline**: Background transparent, border `1px solid #CBD5E1`, text `#0F172A`. Hover: background `#F8FAFC`, border `#94A3B8`.
- **Tertiary / Ghost**: Background transparent, text `#2563EB`. Hover: background `#EEF4FD`.

### Inputs & Selects
- Form inputs and select dropdowns use height `42px`, padding `0 0.875rem`, border `1px solid #CBD5E1`, border-radius 8px, background `#FFFFFF`, typography `body-sm`.
- Focus state triggers border `1px solid #2563EB` and a crisp ring: `box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15)`.
- Prefix and suffix icons are sized at 18px and colored `#64748B`.

### Chips & Badges
- **Status Pills**: Height `24px`, padding `0 8px`, border-radius `9999px`, typography `label-sm`.
- **Academic Highlight (Amber)**: Background `#FEF3C7`, text `#D97706`, border `1px solid #FDE68A`.
- **Success / Verified (Green)**: Background `#ECFDF5`, text `#059669`, border `1px solid #A7F3D0`.
- **Department / Code Filter**: Background `#EEF4FD`, text `#1D4ED8`, border `1px solid #BFDBFE`.

### Cards & Question Items
- Exam items reside on white container cards (`#FFFFFF`) with 16px radius, bordered by `1px solid #E2E8F0`, padding `1.25rem`.
- Divided into structural zones:
  - **Header**: Course code, session year, semester badge, action menu.
  - **Content Body**: Question prompt, mathematical/technical formula snippet, attached diagram asset.
  - **Footer**: Solution indicator, file format badges, download action button.

### Lists & Tables
- Clean tabular rows featuring `border-bottom: 1px solid #F1F5F9`.
- Row hover displays a subtle background fill of `#F8FAFC`.
- Cells maintain vertical padding `0.875rem` with uniform alignment between textual data and numeric indicators.