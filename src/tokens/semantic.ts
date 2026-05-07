/**
 * AIMS OS Design System — Semantic Color Tokens
 * Extracted from Figma Variables: "Semantic Color Tokens" collection
 *
 * Each token maps to a primitive via alias.
 * Light mode values shown here; dark mode is handled via CSS variables.
 */

export const semantic = {
  surface: {
    neutral: {
      white: "var(--color-surface-neutral-white)",
      subtle: "var(--color-surface-neutral-subtle)",
      default: "var(--color-surface-neutral-default)",
      emphasis: "var(--color-surface-neutral-emphasis)",
      focus: "var(--color-surface-neutral-focus)",
      darker: "var(--color-surface-neutral-darker)",
      black: "var(--color-surface-neutral-black)",
    },
    primary: {
      moreSubtle: "var(--color-surface-primary-more-subtle)",
      subtle: "var(--color-surface-primary-subtle)",
      lighter: "var(--color-surface-primary-lighter)",
      default: "var(--color-surface-primary-default)",
      emphasis: "var(--color-surface-primary-emphasis)",
      darker: "var(--color-surface-primary-darker)",
    },
    error: {
      moreSubtle: "var(--color-surface-error-more-subtle)",
      subtle: "var(--color-surface-error-subtle)",
      default: "var(--color-surface-error-default)",
      lighter: "var(--color-surface-error-lighter)",
      darker: "var(--color-surface-error-darker)",
    },
    alert: {
      moreSubtle: "var(--color-surface-alert-more-subtle)",
      subtle: "var(--color-surface-alert-subtle)",
      default: "var(--color-surface-alert-default)",
      lighter: "var(--color-surface-alert-lighter)",
      darker: "var(--color-surface-alert-darker)",
    },
    success: {
      moreSubtle: "var(--color-surface-success-more-subtle)",
      subtle: "var(--color-surface-success-subtle)",
      default: "var(--color-surface-success-default)",
      lighter: "var(--color-surface-success-lighter)",
      emphasis: "var(--color-surface-success-emphasis)",
      darker: "var(--color-surface-success-darker)",
    },
    yellow: {
      moreSubtle: "var(--color-surface-yellow-more-subtle)",
      subtle: "var(--color-surface-yellow-subtle)",
      lighter: "var(--color-surface-yellow-lighter)",
      default: "var(--color-surface-yellow-default)",
      emphasis: "var(--color-surface-yellow-emphasis)",
      darker: "var(--color-surface-yellow-darker)",
    },
    limeGreen: {
      moreSubtle: "var(--color-surface-lime-more-subtle)",
      subtle: "var(--color-surface-lime-subtle)",
      lighter: "var(--color-surface-lime-lighter)",
      default: "var(--color-surface-lime-default)",
      emphasis: "var(--color-surface-lime-emphasis)",
      darker: "var(--color-surface-lime-darker)",
    },
    purple: {
      moreSubtle: "var(--color-surface-purple-more-subtle)",
      subtle: "var(--color-surface-purple-subtle)",
      lighter: "var(--color-surface-purple-lighter)",
      default: "var(--color-surface-purple-default)",
      emphasis: "var(--color-surface-purple-emphasis)",
      darker: "var(--color-surface-purple-darker)",
    },
    lightBlue: {
      moreSubtle: "var(--color-surface-lightblue-more-subtle)",
      subtle: "var(--color-surface-lightblue-subtle)",
      lighter: "var(--color-surface-lightblue-lighter)",
      default: "var(--color-surface-lightblue-default)",
      emphasis: "var(--color-surface-lightblue-emphasis)",
      darker: "var(--color-surface-lightblue-darker)",
    },
  },

  text: {
    title: "var(--color-text-title)",
    subtitle: "var(--color-text-subtitle)",
    body: "var(--color-text-body)",
    caption: "var(--color-text-caption)",
    label: "var(--color-text-label)",
    negative: "var(--color-text-negative)",
    negativeDisable: "var(--color-text-negative-disable)",
    disabled: "var(--color-text-disabled)",
    link: "var(--color-text-link)",
    info: "var(--color-text-info)",
    error: "var(--color-text-error)",
    alert: "var(--color-text-alert)",
    success: "var(--color-text-success)",
    yellow: "var(--color-text-yellow)",
    limeGreen: "var(--color-text-lime-green)",
    purple: "var(--color-text-purple)",
    lightBlue: "var(--color-text-light-blue)",
  },

  border: {
    neutral: {
      lighter: "var(--color-border-neutral-lighter)",
      subtle: "var(--color-border-neutral-subtle)",
      default: "var(--color-border-neutral-default)",
      darker: "var(--color-border-neutral-darker)",
      black: "var(--color-border-neutral-black)",
    },
    primary: {
      subtle: "var(--color-border-primary-subtle)",
      lighter: "var(--color-border-primary-lighter)",
      default: "var(--color-border-primary-default)",
      darker: "var(--color-border-primary-darker)",
    },
    error: {
      subtle: "var(--color-border-error-subtle)",
      lighter: "var(--color-border-error-lighter)",
      default: "var(--color-border-error-default)",
      darker: "var(--color-border-error-darker)",
    },
    alert: {
      subtle: "var(--color-border-alert-subtle)",
      lighter: "var(--color-border-alert-lighter)",
      default: "var(--color-border-alert-default)",
      darker: "var(--color-border-alert-darker)",
    },
    success: {
      subtle: "var(--color-border-success-subtle)",
      lighter: "var(--color-border-success-lighter)",
      default: "var(--color-border-success-default)",
      darker: "var(--color-border-success-darker)",
    },
  },

  icon: {
    neutral: {
      light: "var(--color-icon-neutral-light)",
      disableLight: "var(--color-icon-neutral-disable-light)",
      disableDark: "var(--color-icon-neutral-disable-dark)",
      dark: "var(--color-icon-neutral-dark)",
      black: "var(--color-icon-neutral-black)",
    },
    primary: {
      subtle: "var(--color-icon-primary-subtle)",
      lighter: "var(--color-icon-primary-lighter)",
      default: "var(--color-icon-primary-default)",
      darker: "var(--color-icon-primary-darker)",
    },
    error: {
      disabled: "var(--color-icon-error-disabled)",
      default: "var(--color-icon-error-default)",
      darker: "var(--color-icon-error-darker)",
    },
    alert: {
      default: "var(--color-icon-alert-default)",
      darker: "var(--color-icon-alert-darker)",
    },
    success: {
      default: "var(--color-icon-success-default)",
      darker: "var(--color-icon-success-darker)",
    },
  },
} as const;
