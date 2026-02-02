/**
 * ProContractors Theme Configuration
 * 
 * This file contains all theme constants, design tokens, and utility classes
 * for maintaining 100% UI consistency across the project.
 * 
 * Usage:
 * import { colors, fonts, spacing, components } from './theme';
 */

// ============================================
// COLORS
// ============================================

export const colors = {
  // Primary Palette
  primary: '#333333',
  secondary: '#f6f1ef',
  accent: '#5b5b5b',
  
  // Extended Palette
  dark: '#2a2a2a',
  darker: '#1a1a1a',
  white: '#ffffff',
  
  // Grays
  gray: {
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
  },
  
  // With Opacity (for Tailwind classes)
  withOpacity: {
    primary5: 'bg-primary/5',
    primary10: 'bg-primary/10',
    primary20: 'bg-primary/20',
    secondary40: 'bg-secondary/40',
    secondary50: 'bg-secondary/50',
    secondary80: 'bg-secondary/80',
    white5: 'bg-white/5',
    white10: 'bg-white/10',
    white90: 'bg-white/90',
    white95: 'bg-white/95',
    accent30: 'bg-[#5b5b5b]/30',
    accent60: 'bg-[#5b5b5b]/60',
  }
};

// ============================================
// TYPOGRAPHY
// ============================================

export const fonts = {
  families: {
    custom: "'CustomFont', sans-serif",
    sora: "'Sora', sans-serif",
    wixMadefor: "'Wix Madefor Display', sans-serif",
    cormorant: "'Cormorant Garamond', serif",
    times: "'Times New Roman', serif",
    fraunces: "'Fraunces', serif",
  },
  
  classes: {
    custom: 'font-custom',
    sora: 'font-sora',
    wixMadefor: 'font-wix-madefor',
    cormorant: 'font-cormorant',
    times: 'font-times',
    fraunces: 'font-fraunces',
  },
  
  sizes: {
    heroTitle: 'text-[72px]',
    pageTitle: 'text-[72px]',
    sectionTitle: 'text-[42px]',
    cardTitle: 'text-[32px]',
    serviceTitle: 'text-2xl',
    body: 'text-[16px]',
    bodyLarge: 'text-[17px]',
    bodySmall: 'text-[14px]',
    nav: 'text-[15px] xl:text-[17px]',
    badge: 'text-sm',
    badgeSmall: 'text-xs',
    category: 'text-[10px]',
  }
};

// ============================================
// SPACING
// ============================================

export const spacing = {
  section: {
    paddingY: {
      large: 'py-32',      // 128px
      medium: 'py-28',     // 112px
      small: 'py-24',      // 96px
      xsmall: 'py-12',     // 48px
    },
    paddingX: 'px-8',       // 32px
  },
  
  container: {
    default: 'max-w-[1400px]',
    content: 'max-w-7xl',
    wide: 'max-w-6xl',
    narrow: 'max-w-5xl',
    text: 'max-w-3xl',
    narrowText: 'max-w-2xl',
  },
  
  gaps: {
    grid: 'gap-8',          // 32px
    gridLarge: 'gap-10',    // 40px
    content: 'gap-20',      // 80px
    small: 'gap-4',         // 16px
    medium: 'gap-6',        // 24px
  },
  
  margin: {
    sectionTitle: 'mb-20',
    heading: 'mb-8',
    paragraph: 'mb-6',
    element: 'mb-4',
  }
};

// ============================================
// BORDER RADIUS
// ============================================

export const borderRadius = {
  full: 'rounded-full',
  '3xl': 'rounded-3xl',
  '2xl': 'rounded-2xl',
  xl: 'rounded-xl',
  lg: 'rounded-lg',
  md: 'rounded-md',
};

// ============================================
// SHADOWS
// ============================================

export const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  '3xl': 'shadow-3xl',
  
  hover: {
    xl: 'hover:shadow-xl',
    '2xl': 'hover:shadow-2xl',
    '3xl': 'hover:shadow-3xl',
    custom: 'hover:shadow-[0_20px_60px_rgba(246,241,239,0.3)]',
    customDark: 'hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]',
  }
};

// ============================================
// TRANSITIONS
// ============================================

export const transitions = {
  duration: {
    fast: 'duration-300',
    normal: 'duration-500',
    slow: 'duration-700',
  },
  
  timing: {
    smooth: 'ease-smooth',
    smoothIn: 'ease-smooth-in',
    smoothOut: 'ease-smooth-out',
    smoothInOut: 'ease-smooth-in-out',
    lenis: 'ease-lenis',
  },
  
  all: {
    fast: 'transition-all duration-300',
    normal: 'transition-all duration-500',
    slow: 'transition-all duration-700',
  },
  
  colors: 'transition-colors duration-300',
  transform: 'transition-transform duration-300',
};

// ============================================
// ANIMATIONS
// ============================================

export const animations = {
  fadeIn: 'animate-fade-in',
  fadeInSmooth: 'animate-fade-in-smooth',
  slideUpSmooth: 'animate-slide-up-smooth',
  pulse: 'animate-pulse',
};

// ============================================
// HOVER EFFECTS
// ============================================

export const hover = {
  scale: {
    sm: 'hover:scale-105',
    md: 'hover:scale-110',
    groupSm: 'group-hover:scale-105',
    groupMd: 'group-hover:scale-110',
  },
  
  translate: {
    up1: 'hover:-translate-y-1',
    up3: 'hover:-translate-y-3',
    right1: 'hover:translate-x-1',
    groupRight1: 'group-hover:translate-x-1',
  }
};

// ============================================
// COMPONENT CLASSES
// ============================================

export const components = {
  // Buttons
  button: {
    primary: {
      light: 'px-12 py-5 bg-[#f6f1ef] text-[#333333] text-base font-semibold font-wix-madefor hover:bg-white hover:scale-105 transition-all duration-300 rounded-full shadow-2xl hover:shadow-[0_20px_60px_rgba(246,241,239,0.3)]',
      dark: 'px-10 py-4 bg-[#333333] text-[#f6f1ef] rounded-full font-wix-madefor font-bold hover:bg-[#5b5b5b] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl',
    },
    secondary: {
      small: 'px-6 py-2.5 bg-[#2a2a2a] text-white hover:bg-[#5b5b5b] transition-all duration-300 rounded-full font-wix-madefor font-semibold text-sm hover:scale-105 shadow-md',
    },
    cta: 'inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#333333] text-white text-[16px] font-wix-madefor font-semibold rounded-full hover:bg-[#4a4a4a] transition-all duration-300 group/btn shadow-md hover:shadow-lg tracking-wide',
    nav: 'relative hover:text-gray-300 transition-all duration-300 text-[15px] xl:text-[17px] group',
  },
  
  // Badges
  badge: {
    darkOnLight: 'inline-flex items-center gap-2 px-5 py-2.5 bg-[#333333] rounded-full text-[#f6f1ef] font-custom text-sm font-semibold tracking-wide uppercase',
    lightOnDark: 'inline-flex items-center gap-2 px-4 py-2 bg-[#5b5b5b]/30 rounded-full backdrop-blur-sm text-[#f6f1ef] font-custom text-sm font-medium tracking-wide',
    lightOnLight: 'inline-flex items-center gap-2 px-5 py-2.5 bg-[#f6f1ef] rounded-full text-[#333333] font-custom text-sm font-semibold tracking-wide uppercase',
    category: 'bg-white/95 text-[#333333] px-4 py-1.5 rounded-md text-[10px] font-custom font-bold tracking-[0.15em] shadow-md backdrop-blur-sm',
    pill: 'inline-block px-4 py-2 bg-[#333333] text-[#f6f1ef] rounded-full text-xs font-custom font-bold tracking-wider',
  },
  
  // Cards
  card: {
    service: 'bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group w-full max-w-sm mx-auto border border-gray-200 hover:border-[#2a2a2a]/20 h-full',
    featured: 'group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 w-full flex flex-col',
    project: 'bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl',
    iconContainer: 'w-24 h-24 flex items-center justify-center bg-gray-100 rounded-2xl group-hover:bg-[#2a2a2a]/5 transition-all duration-300',
  },
  
  // Sections
  section: {
    light: 'py-24 bg-white',
    dark: 'relative pt-40 pb-28 bg-[#333333] overflow-hidden',
    gradient: 'py-32 bg-gradient-to-b from-[#f6f1ef] to-white',
    secondary: 'py-24 bg-secondary/50',
  },
  
  // Containers
  container: {
    default: 'max-w-7xl mx-auto px-8',
    wide: 'max-w-[1400px] mx-auto px-8',
    narrow: 'max-w-5xl mx-auto px-8',
  },
  
  // Typography
  text: {
    heroTitle: 'text-[72px] font-custom text-white leading-tight drop-shadow-2xl',
    pageTitle: 'text-[72px] font-custom text-[#f6f1ef] tracking-tight',
    sectionTitle: 'text-[42px] font-custom text-[#333333]',
    sectionTitleLight: 'text-[42px] font-custom text-[#f6f1ef]',
    cardTitle: 'text-[32px] font-custom text-[#333333] font-bold leading-tight',
    body: 'text-[#5b5b5b] font-wix-madefor leading-relaxed text-[16px]',
    bodyLight: 'text-[#f6f1ef]/80 font-wix-madefor text-[16px] leading-relaxed',
  },
  
  // Decorative Elements
  decorative: {
    divider: 'w-24 h-1 bg-[#5b5b5b] mx-auto',
    dividerCard: 'w-16 h-0.5 bg-gradient-to-r from-transparent via-[#2a2a2a]/30 to-transparent',
    pulseDot: 'w-2 h-2 bg-[#f6f1ef] rounded-full animate-pulse',
    backgroundBlur: 'hidden md:block absolute inset-0 opacity-5',
  },
  
  // Dropdowns
  dropdown: {
    menu: 'absolute top-full left-1/2 -translate-x-1/2 mt-6 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 py-3 z-50',
    header: 'px-4 py-2 border-b border-gray-200/50 mb-2',
    headerText: 'text-xs font-semibold text-gray-500 uppercase tracking-wider',
  },
  
  // Form Elements
  form: {
    input: 'w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl font-wix-madefor text-[#333333] text-[16px] placeholder:text-gray-400 focus:border-[#333333] focus:outline-none transition-all duration-300 hover:border-gray-300',
    textarea: 'w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl font-wix-madefor text-[#333333] text-[16px] placeholder:text-gray-400 focus:border-[#333333] focus:outline-none transition-all duration-300 hover:border-gray-300 resize-none h-40',
    iconBox: 'w-14 h-14 bg-[#f6f1ef] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#333333] transition-all duration-300',
  },
  
  // Navigation
  nav: {
    container: 'fixed top-0 left-0 right-0 z-50 bg-[#2a2a2a] shadow-lg',
    inner: 'max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-3.5 md:py-3 lg:py-3 xl:py-3.5 flex items-center justify-between',
    link: 'relative hover:text-gray-300 transition-all duration-300 text-[15px] xl:text-[17px] group',
    underline: 'absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full',
  },
  
  // Checkmark List Item
  checkmark: {
    container: 'flex items-center gap-3',
    icon: 'w-6 h-6 rounded-full bg-[#333333] flex items-center justify-center flex-shrink-0',
    iconSmall: 'w-5 h-5 rounded-full bg-[#333333] flex items-center justify-center flex-shrink-0 mt-0.5',
    text: 'text-[#333333] font-wix-madefor',
  },
};

// ============================================
// GRADIENTS
// ============================================

export const gradients = {
  heroOverlay: 'bg-gradient-to-b from-[#333333]/80 via-[#333333]/60 to-white/95',
  footer: 'bg-gradient-to-b from-primary to-[#1a1a1a]',
  sectionLight: 'bg-gradient-to-b from-[#f6f1ef] to-white',
  cardDark: 'bg-gradient-to-br from-[#333333] to-[#5b5b5b]',
  divider: 'bg-gradient-to-r from-transparent via-[#2a2a2a]/30 to-transparent',
  imageOverlay: 'bg-gradient-to-t from-[#333333]/70 via-transparent to-transparent',
  leftFade: 'bg-gradient-to-r from-white via-white/90 to-transparent',
};

// ============================================
// RESPONSIVE UTILITIES
// ============================================

export const responsive = {
  hide: {
    mobile: 'hidden md:block',
    desktop: 'block md:hidden',
    lg: 'hidden lg:block',
    lgDown: 'block lg:hidden',
  },
  
  show: {
    mobile: 'flex md:hidden',
    desktop: 'hidden md:flex',
    lg: 'hidden lg:flex',
    lgDown: 'flex lg:hidden',
  },
  
  grid: {
    services: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    featured: 'grid-cols-1 lg:grid-cols-2',
    twoColumn: 'grid-cols-1 md:grid-cols-2',
    footer: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
  }
};

// ============================================
// ICON SIZES
// ============================================

export const iconSizes = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-7 h-7',
  '2xl': 'w-10 h-10',
  '3xl': 'w-16 h-16',
};

// ============================================
// Z-INDEX SCALE
// ============================================

export const zIndex = {
  dropdown: 'z-50',
  navbar: 'z-50',
  modal: 'z-60',
  tooltip: 'z-40',
  content: 'z-10',
};

// ============================================
// BREAKPOINTS (for reference)
// ============================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export default {
  colors,
  fonts,
  spacing,
  borderRadius,
  shadows,
  transitions,
  animations,
  hover,
  components,
  gradients,
  responsive,
  iconSizes,
  zIndex,
  breakpoints,
};
