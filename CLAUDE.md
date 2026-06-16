# CLAUDE.md — AIMS OS Platform Components

## What This Is
React component library + design tokens for AIMS OS. Built with React 19, TypeScript, Tailwind CSS 4, Vite.

## AI Code Generation Rules

**Before writing ANY UI code, read these files:**
1. `figma-mapping.json` — component inventory with exact props, types, and defaults
2. `DESIGN_SYSTEM.md` — usage rules, decision tree, and token reference

**Critical rules:**
- Use components from this library — never create raw HTML equivalents
- Use CSS variables for all visual values — never hardcode colors, spacing, or radius
- Form fields use `inputSize`/`selectSize`/`toggleSize` (not `size`) to avoid HTML conflicts
- Table is a compound component — always use all 6 sub-components together
- Dark mode is automatic via `[data-theme="dark"]` — no conditional logic needed

## Commands
- `npm run dev` — Storybook on port 6006
- `npm run build` — Vite library build
- `npm run typecheck` — TypeScript check

## Stack
- React 19 + TypeScript 6
- Tailwind CSS 4 (via @tailwindcss/vite)
- Storybook 10
- Vitest + Playwright for testing
