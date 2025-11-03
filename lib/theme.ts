// Typography Theme Configuration
// This file centralizes all font and text styling for the wedding invitation

export const typography = {
  // Script font (Great Vibes) - Used for names
  script: {
    family: "var(--font-great-vibes), cursive",
    sizes: {
      sm: "text-3xl md:text-4xl",          // Small script text
      md: "text-5xl md:text-6xl lg:text-7xl", // Medium script text (parent names)
      lg: "text-7xl md:text-8xl lg:text-9xl", // Large script text
      xl: "text-8xl md:text-9xl lg:text-[10rem]", // Extra large (hero couple names)
    },
    color: {
      gold: "text-[#d4af37]",
      white: "text-white",
    },
  },

  // Serif font (Playfair Display) - Used for headings, titles, and elegant text
  serif: {
    family: "var(--font-playfair), serif",
    sizes: {
      sm: "text-xl md:text-2xl",            // Small headings
      md: "text-2xl md:text-3xl",           // Medium headings
      lg: "text-3xl md:text-4xl",           // Large headings
      body: "text-lg md:text-xl lg:text-2xl", // Elegant body text
      bodyMd: "text-lg md:text-xl",         // Medium elegant body text
    },
    weights: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
    color: {
      navy: "text-[#2c3e50]",
      white: "text-white",
      muted: "text-[#5a6c7d]",
    },
    styles: {
      italic: "italic",
    },
    leading: {
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
    tracking: {
      wide: "tracking-wide",
      wider: "tracking-wider",
    },
  },

  // Sans-serif font (Inter) - Used for body text and long paragraphs
  body: {
    family: "var(--font-inter), sans-serif",
    sizes: {
      sm: "text-base md:text-lg",           // Small body text
      md: "text-lg md:text-xl",             // Medium body text
      lg: "text-lg md:text-xl lg:text-2xl", // Large body text
      xl: "text-xl md:text-2xl",            // Extra large body text
      xxl: "text-2xl md:text-3xl",          // Extra extra large body text
    },
    weights: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
    },
    color: {
      navy: "text-[#2c3e50]",
      white: "text-white",
      whiteOpaque: "text-white/90",
      muted: "text-[#5a6c7d]",
      gray: "text-gray-400",
    },
    leading: {
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
    tracking: {
      wide: "tracking-wide",
      wider: "tracking-wider",
    },
  },
};

// Helper functions to build complete className strings
export const getScriptStyle = (
  size: keyof typeof typography.script.sizes,
  color: keyof typeof typography.script.color = "gold"
) => {
  return `${typography.script.sizes[size]} ${typography.script.color[color]}`;
};

export const getSerifStyle = (
  size: keyof typeof typography.serif.sizes,
  weight: keyof typeof typography.serif.weights = "normal",
  color: keyof typeof typography.serif.color = "navy",
  options?: {
    italic?: boolean;
    leading?: keyof typeof typography.serif.leading;
    tracking?: keyof typeof typography.serif.tracking;
  }
) => {
  const baseStyle = `${typography.serif.sizes[size]} ${typography.serif.weights[weight]} ${typography.serif.color[color]}`;
  const italic = options?.italic ? typography.serif.styles.italic : "";
  const leading = options?.leading ? typography.serif.leading[options.leading] : "";
  const tracking = options?.tracking ? typography.serif.tracking[options.tracking] : "";
  
  return `${baseStyle} ${italic} ${leading} ${tracking}`.trim();
};

export const getBodyStyle = (
  size: keyof typeof typography.body.sizes,
  weight: keyof typeof typography.body.weights = "normal",
  color: keyof typeof typography.body.color = "navy",
  options?: {
    leading?: keyof typeof typography.body.leading;
    tracking?: keyof typeof typography.body.tracking;
  }
) => {
  const baseStyle = `${typography.body.sizes[size]} ${typography.body.weights[weight]} ${typography.body.color[color]}`;
  const leading = options?.leading ? typography.body.leading[options.leading] : "";
  const tracking = options?.tracking ? typography.body.tracking[options.tracking] : "";
  
  return `${baseStyle} ${leading} ${tracking}`.trim();
};

