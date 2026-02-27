// =============================================================================
// DESIGN SYSTEM CONSTANTS
// StarUnion Website — Single source of truth for design tokens.
// All values below mirror tailwind.config.js so JS/JSX code and Tailwind stay
// in sync.  Import only what you need — tree-shaking will drop the rest.
// =============================================================================

// -----------------------------------------------------------------------------
// COLORS
// -----------------------------------------------------------------------------
export const COLORS = {
  // Brand palette
  primary: "#7441FF",
  secondary: "#11EDA4",
  tertiary: "#EFD830",

  // Surfaces
  background: "#FFFFFF",
  card: "#FFFFFF",
  cardSoft: "#C8B5FC",

  // Text
  text: "#141418",
  textInvert: "#FFFFFF",
  muted: "#E1D6FF",

  // Semantic / status
  success: "#12B76A",
  warning: "#F59E0B",
  error: "#EF4444",

  // Gradient background (Background 3)
  bg31: "#241352",
  bg32: "#4D3398",
  bg33: "#1E1A2B",
};

// -----------------------------------------------------------------------------
// GRADIENTS
// -----------------------------------------------------------------------------
export const GRADIENTS = {
  /** Dark radial background used in hero / full-bleed sections */
  background3:
    "radial-gradient(circle at top, #241352 0%, #4D3398 45%, #1E1A2B 100%)",

  /** Soft purple → primary used in the footer info area */
  footer: "linear-gradient(135deg, #E1D6FF 0%, #7441FF 100%)",

  /** Brand tri-color gradient (StarUnion.com identity) */
  brand: "linear-gradient(135deg, #7441FF 0%, #11EDA4 50%, #EFD830 100%)",
};

// -----------------------------------------------------------------------------
// SPACING  (matches Tailwind spacing scale)
// -----------------------------------------------------------------------------
/** Raw pixel values for use in inline styles or JS logic */
export const SPACING = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  6: "24px",
  8: "32px",
  12: "48px",
  16: "64px",
};

/** Section-level spacing helpers */
export const SECTION_SPACING = {
  sm: "24px", // mobile section gap
  md: "32px", // mobile section gap (large)
  lg: "48px", // desktop section gap
  xl: "64px", // desktop section gap (large)
};

/** Grid configuration */
export const GRID = {
  mobile: {
    columns: 4,
    gutter: "8px",
    sideMargin: "16px",
  },
  desktop: {
    columns: 12,
    gutter: "16px", // 16–24 px range; use 24px for wider viewports
    sideMargin: "24px",
  },
};

// -----------------------------------------------------------------------------
// TYPOGRAPHY
// -----------------------------------------------------------------------------
export const FONT_SIZE = {
  h1: "44px",
  h2: "32px",
  h3: "24px",
  h4: "20px",
  body: "16px",
  caption: "14px",
  micro: "12px",
};

export const FONT_WEIGHT = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

export const LETTER_SPACING = {
  tight: "-0.02em",
  normal: "0em",
  wide: "0.02em", // ~0.2px on 16px body — matches button spec
};

// -----------------------------------------------------------------------------
// BUTTONS
// -----------------------------------------------------------------------------
export const BUTTON_VARIANTS = {
  primary: {
    fontSize: FONT_SIZE.body, // 16px
    fontWeight: FONT_WEIGHT.semibold, // 600
    paddingY: "12px",
    paddingX: "20px",
    letterSpacing: "0.02em", // 0 to 0.2px
    textCase: "sentence", // Sentence case — not all-caps
  },
  secondary: {
    fontSize: FONT_SIZE.body, // 16px
    fontWeight: FONT_WEIGHT.medium, // 500
    paddingY: "12px",
    paddingX: "20px",
  },
  tertiary: {
    fontSize: "15px", // 14–16px range
    fontWeight: FONT_WEIGHT.regular, // 400–500 range
    paddingY: "12px",
    paddingX: "20px",
  },
};

// -----------------------------------------------------------------------------
// BORDER RADIUS
// -----------------------------------------------------------------------------
export const BORDER_RADIUS = {
  sm: "6px",
  md: "8px",
  lg: "12px",
  card: "16px",
  pill: "9999px",
};

// -----------------------------------------------------------------------------
// SHADOWS
// -----------------------------------------------------------------------------
export const SHADOWS = {
  soft: "0 4px 10px rgba(0,0,0,0.1)",
  medium: "0 8px 24px rgba(0,0,0,0.15)",
  glow: "0 0 20px rgba(116,65,255,0.35)", // primary glow
};

// -----------------------------------------------------------------------------
// BREAKPOINTS  (keep in sync with Tailwind's default + any custom screens)
// -----------------------------------------------------------------------------
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// -----------------------------------------------------------------------------
// ANIMATION / TRANSITIONS
// -----------------------------------------------------------------------------
export const TRANSITION = {
  fast: "150ms ease",
  default: "250ms ease",
  slow: "400ms ease",
  spring: "300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
};

// -----------------------------------------------------------------------------
// Z-INDEX SCALE
// -----------------------------------------------------------------------------
export const Z_INDEX = {
  base: 0,
  raised: 10,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  toast: 500,
};

// -----------------------------------------------------------------------------
// APP / ROUTE PATHS
// -----------------------------------------------------------------------------
export const PATHS = {
  home: "/",
  auth: {
    login: "/login",
    register: "/register",
  },
  board: "/board",
  committees: "/committees",
  contact: "/contact",
  events: "/events",
  profile: "/profile",
  projects: "/projects",
  services: "/services",
  workshops: "/workshops",
};

// -----------------------------------------------------------------------------
// API
// -----------------------------------------------------------------------------
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000";

export const API_ENDPOINTS = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    me: "/auth/me",
  },
  board: "/board",
  committees: "/committees",
  events: "/events",
  contact: "/contact",
  projects: "/projects",
  services: "/services",
  workshops: "/workshops",
  profile: "/profile",
};

// -----------------------------------------------------------------------------
// PAGINATION
// -----------------------------------------------------------------------------
export const PAGINATION = {
  defaultPage: 1,
  defaultPageSize: 10,
  pageSizeOptions: [10, 20, 50],
};

// -----------------------------------------------------------------------------
// LOCAL STORAGE KEYS
// -----------------------------------------------------------------------------
export const STORAGE_KEYS = {
  authToken: "su_auth_token",
  user: "su_user",
  language: "su_lang",
  theme: "su_theme",
};

// -----------------------------------------------------------------------------
// SUPPORTED LANGUAGES
// -----------------------------------------------------------------------------
export const LANGUAGES = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "ku", label: "کوردی", dir: "rtl" },
];

export const DEFAULT_LANGUAGE = "en";

// -----------------------------------------------------------------------------
// SOCIAL / EXTERNAL LINKS
// (fill in real URLs before going live)
// -----------------------------------------------------------------------------
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/starunion",
  twitter: "https://twitter.com/starunion",
  linkedin: "https://linkedin.com/company/starunion",
  github: "https://github.com/starunion",
  email: "mailto:contact@starunion.com",
};

// -----------------------------------------------------------------------------
// SITE META
// -----------------------------------------------------------------------------
export const SITE = {
  name: "StarUnion",
  tagline: "Unite. Build. Inspire.",
  url: "https://starunion.com",
  logoAlt: "StarUnion Logo",
};
