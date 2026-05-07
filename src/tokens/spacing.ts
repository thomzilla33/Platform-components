/**
 * AIMS OS Design System — Spacing, Radius & Breakpoint Tokens
 * Extracted from Figma Variables: "Space and Radios Tokens" + "Breakpints / Layoud Grid"
 */

/** 4px base unit grid */
export const spacing = {
  "0x": 0,
  "0.5x": 2,
  "1x": 4,
  "2x": 8,
  "3x": 12,
  "4x": 16,
  "5x": 20,
  "6x": 24,
  "7x": 32,
  "10x": 40,
  "12x": 48,
  "16x": 64,
  "20x": 80,
} as const;

export const radius = {
  none: 0,
  xs: 2,
  s: 4,
  m: 8,
  l: 16,
  xl: 24,
  xxl: 32,
  full: 100,
} as const;

export const breakpoints = {
  s: { width: 744, columns: 8, gutter: 16, margin: 24 },
  m: { width: 1280, columns: 12, gutter: 16, margin: 24 },
  l: { width: 1440, columns: 12, gutter: 24, margin: 32 },
  xl: { width: 1920, columns: 12, gutter: 24, margin: 80 },
} as const;

export const shadow = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
} as const;
