/**
 * AIMS OS Design System — Primitive Color Tokens
 * Extracted from Figma Variables: "Primitives Tokens" collection
 */

export const colors = {
  primary: {
    100: "#F6F9FF",
    200: "#E9F1FF",
    400: "#80AFFF",
    500: "#2173FF",
    700: "#002F80",
    900: "#001740",
  },

  gray: {
    100: { light: "#FFFFFF", dark: "#131C2E" },
    200: { light: "#FAFAFA", dark: "#0F172B" },
    300: { light: "#F2F2F2", dark: "#19263D" },
    400: { light: "#D9D9D9", dark: "#243551" },
    500: { light: "#BABABA", dark: "#374E6E" },
    600: { light: "#5C5C5C", dark: "#8899B0" },
    700: { light: "#2A2A2A", dark: "#B8CADE" },
    900: { light: "#000000", dark: "#E5EEF8" },
  },

  red: {
    100: "#FDEDED",
    200: "#EA9191",
    300: "#CC5252",
    400: "#D32F2F",
    500: "#992222",
    900: "#5F2120",
  },

  green: {
    100: "#E5FDF8",
    200: "#CBFFF4",
    300: "#BFFFF1",
    400: "#00D9AA",
    500: "#00A07E",
    600: "#009978",
    700: "#00765F",
    800: "#005B47",
    900: "#003328",
  },

  orange: {
    100: "#FFF4E5",
    200: "#FFEEDB",
    300: "#EDC6A6",
    400: "#ED9F5F",
    500: "#ED6C02",
    600: "#B25102",
    700: "#8F4201",
    800: "#7A3700",
    900: "#663C00",
  },

  yellow: {
    100: "#FFFAF0",
    200: "#FFEBCB",
    300: "#FFD285",
    400: "#FFB344",
    500: "#FF9900",
    600: "#DB8200",
    700: "#B36900",
    800: "#8A5100",
    900: "#5C3500",
  },

  limeGreen: {
    100: "#F9FEE5",
    200: "#E7F9B5",
    300: "#D4F381",
    400: "#BDEE49",
    500: "#A0DA1D",
    600: "#8BC417",
    700: "#6E9B14",
    800: "#557A10",
    900: "#3E5C0A",
  },

  purple: {
    100: "#F3E9FD",
    200: "#E4CEFC",
    300: "#CFA7F9",
    400: "#B070F5",
    500: "#7B27ED",
    600: "#6719D5",
    700: "#4E0DAF",
    800: "#3B0B82",
    900: "#2C075C",
  },

  lightBlue: {
    100: "#E5F8FF",
    200: "#CCF1FF",
    300: "#99E5F9",
    400: "#66D8F5",
    500: "#00B5D9",
    600: "#009EBC",
    700: "#007C92",
    800: "#00596A",
    900: "#02445A",
  },

  /** White with opacity — used as dark mode surface/overlay primitives */
  white: {
    5: "rgba(255, 255, 255, 0.05)",
    8: "rgba(255, 255, 255, 0.08)",
    10: "rgba(255, 255, 255, 0.10)",
    12: "rgba(255, 255, 255, 0.12)",
    15: "rgba(255, 255, 255, 0.15)",
    20: "rgba(255, 255, 255, 0.20)",
    25: "rgba(255, 255, 255, 0.25)",
    30: "rgba(255, 255, 255, 0.30)",
    50: "rgba(255, 255, 255, 0.50)",
    60: "rgba(255, 255, 255, 0.60)",
    70: "rgba(255, 255, 255, 0.70)",
    80: "rgba(255, 255, 255, 0.80)",
    100: "#FFFFFF",
  },
} as const;
