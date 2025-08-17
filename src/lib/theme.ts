import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Luxury Spacing Scale - More airy defaults
export const spacing = {
  // Micro spacing
  xs: "0.5rem",    // 8px
  sm: "0.75rem",   // 12px
  md: "1rem",      // 16px
  lg: "1.5rem",    // 24px
  xl: "2rem",      // 32px
  "2xl": "3rem",   // 48px
  "3xl": "4rem",   // 64px
  "4xl": "5rem",   // 80px
  "5xl": "6rem",   // 96px
  "6xl": "8rem",   // 128px
  "7xl": "10rem",  // 160px
  "8xl": "12rem",  // 192px
  "9xl": "16rem",  // 256px
  
  // Component-specific spacing
  section: "5rem",      // 80px - Standard section padding
  sectionSm: "3rem",    // 48px - Smaller section padding
  sectionLg: "7rem",    // 112px - Larger section padding
  container: "1.5rem",  // 24px - Container gutters
  containerLg: "2.5rem", // 40px - Large container gutters
  card: "1.5rem",       // 24px - Card padding
  button: "0.75rem 1.5rem", // Button padding
  input: "0.75rem 1rem",     // Input padding
} as const;

// Typography Scale
export const typography = {
  // Display styles - Large, impactful text
  display: {
    "3xl": {
      fontSize: "3.5rem",    // 56px
      lineHeight: "1.1",
      fontWeight: "600",
      letterSpacing: "-0.02em",
    },
    "2xl": {
      fontSize: "2.75rem",   // 44px
      lineHeight: "1.1",
      fontWeight: "600",
      letterSpacing: "-0.02em",
    },
    xl: {
      fontSize: "2.25rem",   // 36px
      lineHeight: "1.2",
      fontWeight: "600",
      letterSpacing: "-0.01em",
    },
  },
  
  // Heading styles
  heading: {
    "2xl": {
      fontSize: "1.75rem",   // 28px
      lineHeight: "1.3",
      fontWeight: "600",
      letterSpacing: "-0.01em",
    },
    xl: {
      fontSize: "1.5rem",    // 24px
      lineHeight: "1.3",
      fontWeight: "600",
      letterSpacing: "-0.01em",
    },
  },
  
  // Subhead style
  subhead: {
    fontSize: "1.25rem",     // 20px
    lineHeight: "1.4",
    fontWeight: "500",
    letterSpacing: "0",
  },
  
  // Body styles
  body: {
    lg: {
      fontSize: "1.125rem",  // 18px
      lineHeight: "1.6",
      fontWeight: "400",
      letterSpacing: "0",
    },
    base: {
      fontSize: "1rem",      // 16px
      lineHeight: "1.6",
      fontWeight: "400",
      letterSpacing: "0",
    },
  },
  
  // Caption style
  caption: {
    fontSize: "0.875rem",    // 14px
    lineHeight: "1.5",
    fontWeight: "400",
    letterSpacing: "0.01em",
  },
} as const;

// Border Radius Scale
export const borderRadius = {
  none: "0",
  sm: "0.25rem",     // 4px
  md: "0.375rem",    // 6px
  lg: "0.5rem",      // 8px
  xl: "0.75rem",     // 12px
  "2xl": "1rem",     // 16px - Cards
  "3xl": "1.5rem",   // 24px - Large cards
  full: "9999px",
} as const;

// Shadow System - Very soft, layered shadows
export const shadows = {
  // Subtle shadows for depth
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05), 0 1px 3px 1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  
  // Special shadows for luxury feel
  card: "0 1px 3px 0 rgb(0 0 0 / 0.03), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
  cardHover: "0 4px 6px -1px rgb(0 0 0 / 0.04), 0 2px 4px -2px rgb(0 0 0 / 0.08)",
  button: "0 1px 2px 0 rgb(0 0 0 / 0.04), 0 1px 3px 1px rgb(0 0 0 / 0.08)",
  buttonHover: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  
  // Inner shadows for depth
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  
  // Glow effects for accents
  glow: "0 0 20px rgb(14 165 233 / 0.15)", // Icy blue glow
  glowGold: "0 0 20px rgb(203 163 92 / 0.15)", // Gold glow
} as const;

// Motion System - Spring defaults and durations
export const motion = {
  // Duration tokens
  duration: {
    micro: "150ms",    // Quick interactions
    fast: "200ms",     // Fast transitions
    medium: "300ms",   // Standard transitions
    slow: "400ms",     // Slower transitions
    reveal: "500ms",   // Content reveals
    page: "600ms",     // Page transitions
  },
  
  // Easing presets
  easing: {
    // Spring-based easings
    spring: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    springFast: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    springSlow: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    
    // Smooth easings
    smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    smoothFast: "cubic-bezier(0.4, 0, 0.2, 1)",
    smoothSlow: "cubic-bezier(0.4, 0, 0.2, 1)",
    
    // Bounce easings
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    bounceFast: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    bounceSlow: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
  
  // Animation presets
  animations: {
    fadeIn: {
      duration: "300ms",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    slideUp: {
      duration: "400ms",
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    },
    scaleIn: {
      duration: "300ms",
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    },
    slideIn: {
      duration: "500ms",
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    },
  },
} as const;

// Component-specific theme tokens
export const components = {
  card: {
    padding: spacing.card,
    borderRadius: borderRadius["2xl"],
    shadow: shadows.card,
    shadowHover: shadows.cardHover,
  },
  button: {
    padding: spacing.button,
    borderRadius: borderRadius.xl,
    shadow: shadows.button,
    shadowHover: shadows.buttonHover,
  },
  input: {
    padding: spacing.input,
    borderRadius: borderRadius.lg,
    shadow: shadows.sm,
  },
  container: {
    maxWidth: "80rem", // max-w-7xl
    padding: {
      mobile: spacing.md,
      tablet: spacing.lg,
      desktop: spacing.containerLg,
    },
  },
} as const;

// CSS Custom Properties for use in CSS files
export const cssVariables = {
  // Spacing
  "--spacing-xs": spacing.xs,
  "--spacing-sm": spacing.sm,
  "--spacing-md": spacing.md,
  "--spacing-lg": spacing.lg,
  "--spacing-xl": spacing.xl,
  "--spacing-2xl": spacing["2xl"],
  "--spacing-3xl": spacing["3xl"],
  "--spacing-4xl": spacing["4xl"],
  "--spacing-5xl": spacing["5xl"],
  "--spacing-6xl": spacing["6xl"],
  "--spacing-7xl": spacing["7xl"],
  "--spacing-8xl": spacing["8xl"],
  "--spacing-9xl": spacing["9xl"],
  
  // Typography
  "--font-display-3xl-size": typography.display["3xl"].fontSize,
  "--font-display-2xl-size": typography.display["2xl"].fontSize,
  "--font-display-xl-size": typography.display.xl.fontSize,
  "--font-heading-2xl-size": typography.heading["2xl"].fontSize,
  "--font-heading-xl-size": typography.heading.xl.fontSize,
  "--font-subhead-size": typography.subhead.fontSize,
  "--font-body-lg-size": typography.body.lg.fontSize,
  "--font-body-base-size": typography.body.base.fontSize,
  "--font-caption-size": typography.caption.fontSize,
  
  // Shadows
  "--shadow-sm": shadows.sm,
  "--shadow-md": shadows.md,
  "--shadow-lg": shadows.lg,
  "--shadow-xl": shadows.xl,
  "--shadow-card": shadows.card,
  "--shadow-card-hover": shadows.cardHover,
  "--shadow-button": shadows.button,
  "--shadow-button-hover": shadows.buttonHover,
  "--shadow-glow": shadows.glow,
  "--shadow-glow-gold": shadows.glowGold,
  
  // Motion
  "--duration-micro": motion.duration.micro,
  "--duration-fast": motion.duration.fast,
  "--duration-medium": motion.duration.medium,
  "--duration-slow": motion.duration.slow,
  "--duration-reveal": motion.duration.reveal,
  "--duration-page": motion.duration.page,
  
  "--easing-spring": motion.easing.spring,
  "--easing-smooth": motion.easing.smooth,
  "--easing-bounce": motion.easing.bounce,
} as const;

// Utility functions for common patterns
export const utils = {
  // Spacing utilities
  space: (size: keyof typeof spacing) => spacing[size],
  
  // Typography utilities
  text: (variant: keyof typeof typography.display | keyof typeof typography.heading | keyof typeof typography.body) => {
    if (variant in typography.display) return typography.display[variant as keyof typeof typography.display];
    if (variant in typography.heading) return typography.heading[variant as keyof typeof typography.heading];
    if (variant in typography.body) return typography.body[variant as keyof typeof typography.body];
    return typography.body.base;
  },
  
  // Shadow utilities
  shadow: (variant: keyof typeof shadows) => shadows[variant],
  
  // Motion utilities
  transition: (duration: keyof typeof motion.duration = "medium", easing: keyof typeof motion.easing = "spring") => ({
    transitionDuration: motion.duration[duration],
    transitionTimingFunction: motion.easing[easing],
  }),
  
  // Component utilities
  card: () => ({
    padding: components.card.padding,
    borderRadius: components.card.borderRadius,
    boxShadow: components.card.shadow,
  }),
  
  button: () => ({
    padding: components.button.padding,
    borderRadius: components.button.borderRadius,
    boxShadow: components.button.shadow,
  }),
} as const;

// Export everything for easy importing
const theme = {
  spacing,
  typography,
  borderRadius,
  shadows,
  motion,
  components,
  cssVariables,
  utils,
  cn,
};

export default theme;
