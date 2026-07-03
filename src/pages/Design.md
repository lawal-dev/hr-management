---
name: Kinetic Enterprise
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#464554'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#5e5c6e'
  on-secondary: '#ffffff'
  secondary-container: '#e4e0f5'
  on-secondary-container: '#646274'
  tertiary: '#712ae2'
  on-tertiary: '#ffffff'
  tertiary-container: '#8a4cfc'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#e4e0f5'
  secondary-fixed-dim: '#c7c4d8'
  on-secondary-fixed: '#1b1a29'
  on-secondary-fixed-variant: '#464555'
  tertiary-fixed: '#eaddff'
  tertiary-fixed-dim: '#d2bbff'
  on-tertiary-fixed: '#25005a'
  on-tertiary-fixed-variant: '#5a00c6'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base-unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

This design system is built for the modern workforce, prioritizing clarity, efficiency, and professional warmth. The aesthetic is rooted in **Corporate Modernism** with a leaning toward **Minimalism**, ensuring that complex HR data remains digestible and "breathable."

The brand personality is authoritative yet approachable—moving away from the sterile, rigid feel of legacy enterprise software toward a more fluid, human-centric experience. By utilizing generous whitespace and a refined color palette, the UI reduces cognitive load for HR administrators and employees alike, fostering an environment of focused productivity.

## Colors

The palette is anchored by a vibrant Indigo primary color, chosen for its association with intelligence and modern technology. 

- **Primary (#6366f1):** Used for main actions, active states, and brand recognition.
- **Secondary / Accent (#ede9fe):** A soft lavender used for subtle background fills, such as active menu item highlights or decorative icons.
- **Background (#f9fafb):** A very light gray that provides a softer canvas than pure white, reducing eye strain during long working sessions.
- **Surface (#ffffff):** Pure white is reserved for cards, tables, and input fields to create a clear "layer" above the background.
- **Text (#111827):** High-contrast dark charcoal ensures maximum legibility for data-heavy views.

## Typography

The design system utilizes **Plus Jakarta Sans** across all levels. This typeface offers a contemporary, slightly rounded geometric structure that feels professional yet welcoming.

The hierarchy is strictly enforced to manage information density:
- **Headlines** use a tighter letter-spacing and heavier weights to anchor pages.
- **Body Text** is set with generous line-heights to ensure that long-form employee records or policy documents are comfortable to read.
- **Labels** are used for metadata and navigation, utilizing medium weights for clear distinction from standard body text.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a standardized 8px spacing system. This ensures consistency in alignment and rhythm across all modules.

- **Desktop (12 columns):** Centralized content area with a 1280px max-width. Sidebars are fixed at 280px, while the main content area remains fluid.
- **Tablet (8 columns):** Sidebars collapse into a "hamburger" menu or icon-only rail. Gutters are reduced to 16px.
- **Mobile (4 columns):** Full-width content with 16px safe-area margins.

The spacing philosophy emphasizes "Inner Breathing Room." Cards and containers should use `lg` (24px) padding as a default to prevent data from feeling cramped.

## Elevation & Depth

This design system uses **Tonal Layering** combined with **Ambient Shadows** to define hierarchy.

1.  **Level 0 (Background):** The base canvas (`#f9fafb`). No shadow.
2.  **Level 1 (Cards/Tables):** The primary surface (`#ffffff`). Uses a soft, low-opacity shadow (Color: `#6366f1` at 4% opacity, Blur: 8px, Offset-Y: 2px).
3.  **Level 2 (Dropdowns/Modals):** Floating elements. Uses a more pronounced shadow (Color: `#000000` at 8% opacity, Blur: 16px, Offset-Y: 8px) with a subtle 1px border (`#e5e7eb`) to maintain crisp edges.

Interactions are signaled through subtle elevation changes. For example, a card might transition from Level 1 to a slightly deeper shadow upon hover to indicate interactivity.

## Shapes

The shape language is consistently **Rounded**, reflecting the approachable nature of the brand.

- **Standard Elements (Buttons, Inputs, Small Cards):** Use a radius of 8px (`0.5rem`).
- **Large Containers (Main Content Cards):** Use a radius of 12px to 16px (`1rem`) to soften the overall interface.
- **Badges/Chips:** Use a fully rounded pill-shape to distinguish them from interactive buttons.

## Components

### Buttons
- **Primary:** Solid `#6366f1` with white text. 8px rounded corners.
- **Secondary:** Light lavender `#ede9fe` background with `#6366f1` text. No border.
- **Ghost:** Transparent background with `#4b5563` text; turns to a light gray fill on hover.

### Data Tables
- **Header:** Light gray background (`#f3f4f6`) with bold `label-sm` text in uppercase.
- **Rows:** 64px minimum height. Use thin horizontal separators (`#f3f4f6`). Hover states should apply a very subtle blue tint to the entire row.

### Form Fields
- **Inputs:** 1px solid `#e5e7eb` border, 8px radius. Active state uses a 2px `#6366f1` focus ring with 20% opacity.
- **Search Bars:** Always include a 20px "Magnifying Glass" icon in `#9ca3af` (Gray 400).

### Status Badges
- Small, pill-shaped containers. 
- **Department Tags:** Use the Secondary Purple (`#ede9fe`) with Primary Purple text.
- **Status (Active):** Soft green background with dark green text.
- **Status (On Leave):** Soft amber background with dark brown text.

### Cards
- Pure white background, 12px rounded corners, and Level 1 shadow. Used to group employee profile summaries, upcoming tasks, or quick-stat widgets.