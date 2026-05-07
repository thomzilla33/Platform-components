/**
 * AIMS OS Design System — Typography Tokens
 * Extracted from Figma Variables: "Primitives Tokens" + "Type Tokens" collections
 */

export const typography = {
  fontFamily: {
    title: "Inter",
    body: "Inter",
  },

  /** Font size scale (px) — mapped from FontSize/1..10 primitives */
  fontSize: {
    1: "10px", // 0.625rem
    2: "12px", // 0.75rem
    3: "14px", // 0.875rem
    4: "16px", // 1rem
    5: "18px", // 1.125rem
    6: "20px", // 1.25rem
    7: "24px", // 1.5rem
    8: "32px", // 2rem
    9: "40px", // 2.5rem
    10: "48px", // 3rem
  },

  fontWeight: {
    regular: 500,
    medium: 500,
    semibold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },

  /**
   * Type scale — composite tokens from "Type Tokens" collection.
   * Format: Category/Weight/Size
   *
   * Display:   Black|ExtraBold|Bold × XL(48)|L(40)|M(32)
   * Title:     Bold × L(24)|M(20)|S(18)
   * Subtitle:  Bold × L(18)|M(16)|S(14)
   * Body:      Regular × L(16)|M(14)|S(12)
   * Label:     Bold × L(16)|M(14)|S(12)
   * Caption:   Bold|Regular × M(14)|S(12)|XS(10)
   * Link:      Bold × M(14)|S(12) | Regular × L(16)|M(14)|S(12)
   */
  typeScale: {
    display: {
      xl: { size: "48px", weight: 900 }, // Black
      l: { size: "40px", weight: 900 },
      m: { size: "32px", weight: 900 },
    },
    title: {
      l: { size: "24px", weight: 700 },
      m: { size: "20px", weight: 700 },
      s: { size: "18px", weight: 700 },
    },
    subtitle: {
      l: { size: "18px", weight: 700 },
      m: { size: "16px", weight: 700 },
      s: { size: "14px", weight: 700 },
    },
    body: {
      l: { size: "16px", weight: 500 },
      m: { size: "14px", weight: 500 },
      s: { size: "12px", weight: 500 },
    },
    label: {
      l: { size: "16px", weight: 700 },
      m: { size: "14px", weight: 700 },
      s: { size: "12px", weight: 700 },
    },
    caption: {
      m: { size: "14px", weight: 500 },
      s: { size: "12px", weight: 500 },
      xs: { size: "10px", weight: 500 },
    },
    link: {
      l: { size: "16px", weight: 500 },
      m: { size: "14px", weight: 500 },
      s: { size: "12px", weight: 500 },
    },
  },
} as const;
