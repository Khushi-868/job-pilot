# UI Registry

Living document. Updated after every component is built. Read this before building any new component — match existing patterns exactly before inventing new ones.

---

## How to Use

Before building any component:

1. Check if a similar component already exists here
2. If yes — match its exact classes
3. If no — build it following ui-rules.md and ui-tokens.md, then add it here

After building any component — update this file with the component name, file path, and exact classes used.

---

## Components

### Homepage Landing Page

File: app/page.tsx
Last updated: 2026-06-23

| Property         | Class                                                                 |
| ---------------- | --------------------------------------------------------------------- |
| Background       | `bg-surface`, `bg-surface-tertiary`, `bg-surface-muted`               |
| Border           | `border-border`, `border-x`, `border-b`, `border-t`, `border-l-2`     |
| Border radius    | `rounded-md`, `rounded-lg`, `rounded-xl`                              |
| Text — primary   | `text-text-primary`, `text-text-slate`, `text-text-dark`              |
| Text — secondary | `text-text-secondary`, `text-text-muted`                              |
| Spacing          | `px-6`, `py-14`, `py-16`, `py-20`, `gap-3`, `gap-8`, `gap-10`         |
| Hover state      | none                                                                  |
| Shadow           | `landing-preview-shadow`, `landing-card-shadow`                       |
| Accent usage     | `text-accent`, `border-l-accent`, `border-l-success`, `bg-overlay`    |

**Pattern notes:**
Landing pages use a centered `max-w-[1440px]` surface with subtle page borders, token-backed pastel bands via `landing-gradient`, and token-backed diagonal texture via `landing-pattern`. Primary CTAs use `bg-overlay text-accent-foreground`; secondary CTAs use `border border-border bg-surface/70 text-text-primary`. Preview imagery from `public/` is preferred for dense dashboard, table, and agent visuals.
