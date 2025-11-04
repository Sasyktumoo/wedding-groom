# Wedding Invite - Current Status

## Tech Stack
- Next.js 14.2.33 (App Router)
- React 18.3.1
- TypeScript 5.6.3
- Tailwind CSS 3.4.14
- Framer Motion 11.11.17
- react-intersection-observer 9.13.1

## Project Structure
```
/app
  layout.tsx          # Root layout with fonts (Inter, Playfair Display, Great Vibes) + LanguageProvider
  page.tsx            # Main page orchestration (EnvelopeIntro → Hero → EventDetails → Footer)
  globals.css         # Global styles, color palette, custom scrollbar
/components
  EnvelopeIntro.tsx   # Opening animation with envelope and paper plane
  TypewriterText.tsx  # Reusable typewriter text effect component
  BackgroundMusic.tsx # Automatic background music (no controls)
  LanguageSwitcher.tsx # Language toggle button (KGZ/RU) at top-right corner
  Hero.tsx            # Wedding invitation with proposal photo and typewriter text (i18n)
  EventDetails.tsx    # Premium event details with sunset background, glassmorphism, parallax (i18n)
  Footer.tsx          # Minimal footer with names (i18n)
/contexts
  LanguageContext.tsx # Language state management and translation provider
/locales
  kgz.json            # Kyrgyz translations (default language)
  ru.json             # Russian translations
/lib
  animations.ts       # Framer Motion variants
  theme.ts            # Centralized typography theme configuration
/public/images
  main photo.jpg      # Proposal photo used as hero background
  grad.jpg            # Sunset gradient photo for EventDetails background
/public/audio
  wedding-background.mp3  # Royalty-free romantic background music (8.4MB)
next.config.mjs       # Next.js config (converted from .ts)
```

## Implemented Features

### Internationalization (i18n)
- **Multi-language support**: Kyrgyz (default) and Russian
- **Language switcher**: Fixed button at top-right corner
  - Animated entrance (fade-in from top)
  - Toggle between KGZ and RU
  - Active language highlighted with gold gradient
  - Smooth transitions
- **Language persistence**: Selection saved to localStorage
- **Translation system**:
  - JSON-based translation files (kgz.json, ru.json)
  - React Context API for state management
  - useLanguage hook for accessing translations
- **Content coverage**:
  - Hero section: Greeting, invitation message, names, honor message
  - EventDetails: Date, time, venue information
  - Footer: Invitation message, parents' names, gratitude message
- **Date format**: 06.01.2026 format, Bishkek location, Restaurant "..."
- **Parents names**: Kenzhebek & Zhyldyz (Той ээси)

### Opening Animation Sequence
- **Envelope intro animation** with paper plane
  - Envelope appears with scale and rotation animation
  - Decorative wax seal with initials (M & A) 
  - Envelope flap opens smoothly
  - Paper plane flies out with spiral motion
  - Plane follows curved path with rotation (360°)
  - Sparkle effects during plane flight
  - Sequence duration: ~6 seconds
  - Uses sessionStorage to show once per session
  - **Mobile Responsive**: SVG scales with viewport (max-w-[320px] sm:max-w-[400px])
  - Width: 100%, height: auto for fluid scaling
  - Horizontal padding (px-4) to prevent edge overflow
- **Typewriter text effect** for hero content
  - Handwritten appearance with animated cursor
  - Progressive text reveal with configurable speed
  - Staged text animation (each paragraph waits for previous)
  - Smooth fade-in transitions between text blocks
- **Background music**
  - Continuous looping romantic instrumental music
  - Aggressive autoplay: tries 3 times immediately (100ms, 500ms, 1000ms)
  - If blocked, starts on ANY interaction: mouse movement, mouse wheel, scroll, touch, click, keyboard, tab focus
  - Listens on both document and window for maximum coverage
  - No visible controls (seamless background experience)
  - Volume set to 30% by default
  - Guaranteed to start with minimal user interaction

### Hero Section (Wedding Invitation)
- **Modern two-column layout** with photo as prominent element (not background)
- **Photo displayed as framed element** (`/images/main photo.jpg`)
  - 3:4 aspect ratio on desktop, 4:5 on mobile (better mobile framing)
  - Responsive rounded corners (rounded-2xl on mobile, rounded-3xl on desktop)
  - Shadow and white ring border for depth (smaller ring on mobile)
  - Scale-in animation on load
  - Optimized image loading with responsive `sizes` attribute
- **Clean gradient background** (off-white tones)
- **Invitation Content (i18n):**
  - Greeting: "Урматтуу коноктор!" / "Уважаемые гости!" (text-xl on mobile → text-3xl on desktop)
  - Invitation message with cultural respect and honor (text-base → text-2xl)
  - Names: Мырзабек & Айгерим (text-4xl → text-7xl with fluid scaling)
  - Honor message about sharing joy and blessings (text-base → text-xl)
- **Design Elements:**
  - Navy text on light background (elegant Playfair Display serif)
  - NO blackish overlays or boxes - clean, minimalist design
  - Two-column grid: Photo left, text right (stacked on mobile with photo AFTER text)
  - Gold divider lines with max-width constraint on mobile
  - Animated scroll indicator (mobile only, responsive sizing)
  - Scroll-triggered animations (fade-in, stagger, scale)
  - NO date/time/location in hero (moved to EventDetails section)
  - Responsive padding (py-12 sm:py-16 md:py-20)

### Event Details Section (Premium Design)
- **Full-screen section with sunset background** (`/images/sunset.jpg`)
- **Parallax scrolling effect** (desktop only for performance)
  - Disabled on mobile: `isMobile ? {} : { y }` 
  - Reduced parallax distance on mobile (5% vs 15%)
- **Two-card grid layout** (responsive: md:grid-cols-2, base: grid-cols-1)
- **Mobile Performance Optimizations:**
  - Image quality: 75% on mobile, 90% on desktop
  - Lazy loading enabled for background image
  - Mobile detection via useEffect and window resize listener
  - Reduced animation complexity on touch devices
- **Advanced animations:**
  - Staggered reveal animations with custom cubic-bezier easing
  - Floating entrance effects for cards
  - Ornamental line expansions (80px on mobile, 120px desktop)
- **Card 1: Date & Time (i18n)**
  - Unified glassmorphism card (bg-black/60 with backdrop blur)
  - Gold gradient calendar icon (w-16 mobile → w-24 desktop)
  - "Датаны сактаңыз" / "Сохраните дату" heading (text-2xl → text-4xl)
  - 2026-жылдын 6-январы / 6 января 2026 года (text-xl → text-3xl)
  - Убакыт: 16:00 / Время: 16:00 (text-lg → text-2xl)
  - Responsive padding (p-6 sm:p-8 md:p-10)
  - Responsive border radius (rounded-xl sm:rounded-2xl)
- **Card 2: Venue Information (i18n)**
  - Same responsive treatment as Card 1
  - Gold gradient location icon with border
  - "Дарек" / "Адрес" heading (text-2xl → text-4xl)
  - Ресторан "..." (text-lg → text-2xl)
  - Бишкек шаары / г. Бишкек (text-base → text-xl)
- **Design Elements:**
  - Clean card-based layout (no scattered backgrounds)
  - Gradient overlays for readability (black/40-60%)
  - Frosted glass effect on cards (backdrop-blur-md)
  - Responsive typography scaling at 4 breakpoints
  - Bottom gradient fade transition (h-24 sm:h-32)

### Footer
- **Invitation closing message (i18n)**: "Урматтоо менен той ээлери:" / "С уважением, той ээси:" (text-base → text-xl)
- **Parents' names**: Кенжебек & Жылдыз (text-4xl → text-7xl, fluid scaling)
- Decorative divider with gold accents (responsive widths)
- Copyright text with gratitude message (text-xs → text-sm)
- Navy background (#2c3e50)
- Responsive padding (py-12 sm:py-16 md:py-20)

## Design System

### Colors
- Background: `#faf9f6` (off-white)
- Foreground: `#2c3e50` (navy)
- Accent: `#d4af37` (gold)
- Text muted: `#5a6c7d`

### Typography System (lib/theme.ts)
**Centralized theme configuration for all text styles. No hardcoded fonts in components.**

#### Script Font (Great Vibes - for names)
- Family: `var(--font-great-vibes), cursive`
- Sizes: sm (3xl-4xl), md (5xl-7xl), lg (7xl-9xl), xl (8xl-10rem)
- Colors: gold, white
- Usage: Couple names (XL - very large), parents' names (MD - large)

#### Serif Font (Playfair Display - for headings and elegant text)
- Family: `var(--font-playfair), serif`
- Sizes: sm (xl-2xl), md (2xl-3xl), lg (3xl-4xl), body (lg-2xl), bodyMd (lg-xl)
- Weights: light, normal, medium, semibold
- Colors: navy, white, muted
- Styles: italic support
- Leading: relaxed, loose
- Tracking: wide, wider
- Usage: Section titles ("Dear Guests", "Save the Date", "The Grand Estate"), invitation messages (all long fancy text)

#### Body Font (Inter - for practical information)
- Family: `var(--font-inter), sans-serif`
- Sizes: sm (base-lg), md (lg-xl), lg (lg-2xl), xl (xl-2xl), xxl (2xl-3xl)
- Weights: light, normal, medium
- Colors: navy, white, whiteOpaque, muted, gray
- Leading: relaxed, loose
- Tracking: wide, wider
- Usage: Practical information (dates, times, addresses, copyright text)

#### Helper Functions
- `getScriptStyle(size, color)` - Returns complete className for script text
- `getSerifStyle(size, weight, color, options)` - Returns complete className for serif text with optional italic/leading/tracking
- `getBodyStyle(size, weight, color, options)` - Returns complete className for body text with optional leading/tracking

#### Typography Philosophy
- **Script (Great Vibes)**: Names only - highly decorative
- **Serif (Playfair Display)**: Invitation messages, headings - elegant and fancy but readable
- **Sans-serif (Inter)**: Practical details - clean and modern

### Animations
- **fadeInUp**: Vertical entrance animation (0.6s)
- **fadeIn**: Simple opacity fade (0.8s)
- **staggerContainer**: Stagger children (0.15s delay)
- **staggerContainerFast**: Quick stagger (0.1s delay)
- **scaleIn**: Scale entrance (0.5s)
- **scaleInDelayed**: Smooth spring scale with custom easing (0.8s)
- **slideInLeft/Right**: Horizontal entrances (0.6s)
- **floatIn**: Combined float + scale (0.8s, custom cubic-bezier)
- **expandWidth**: Width expansion (1s)
- **revealFromCenter**: Scale + opacity + vertical (0.7s, expo easing)
- **Typewriter Effect**: Progressive character-by-character text reveal with blinking cursor
- **Envelope Sequence**: Complex SVG animation with opening flap and flying paper plane
- All animations GPU-accelerated (transform, opacity)
- Custom cubic-bezier easing for premium feel
- Reduced motion support built-in

## Mobile Optimization
### Industry Best Practices Implemented
- **Mobile-First Breakpoints**: Uses Tailwind's mobile-first approach (base → sm → md → lg)
- **Responsive Typography**: Fluid text sizing from `text-base` on mobile to larger sizes on desktop
- **Touch-Friendly**: All interactive elements minimum 44x44px (iOS guideline)
- **Safe Area Support**: Handles iPhone notches and home indicators via `env(safe-area-inset-*)`
- **Performance Optimizations**:
  - Parallax effects disabled/reduced on mobile
  - Image quality reduced on mobile (75% vs 90% on desktop)
  - Lazy loading for below-fold images
  - Mobile detection to conditionally disable heavy animations
- **Responsive Images**: Proper `sizes` attribute for optimal image loading per viewport
- **Aspect Ratio Adjustments**: Photo changes from 3:4 to 4:5 on mobile for better mobile viewing
- **Spacing Optimization**: Reduced padding/margins on mobile (py-12 → sm:py-16 → md:py-20)
- **Viewport Handling**: Prevents zoom issues, horizontal scroll, and supports notched devices
- **Font Smoothing**: Antialiased text rendering for better mobile readability
- **Image Rendering**: Backface visibility hidden to prevent mobile rendering glitches

### Responsive Breakpoints Used
- **Base (< 640px)**: Mobile phones - smallest text, compact spacing
- **sm (≥ 640px)**: Large phones - slightly larger text
- **md (≥ 768px)**: Tablets - medium text and spacing
- **lg (≥ 1024px)**: Desktop - full text sizes, two-column layouts
- **Grid Behavior**: Single column on mobile, 2 columns on md/lg

## Configuration
- `next.config.mjs`: WebP image format optimization
- `lib/theme.ts`: Centralized typography configuration
- No linter errors
- Mobile-first responsive design (fully optimized for all screen sizes)
- All font styles controlled via theme (no hardcoded values)
- Viewport meta tags configured for mobile browsers
- Safe area support for notched devices (iPhone X+)

## Run Commands
```bash
npm run dev    # Start dev server on localhost:3000
npm run build  # Production build
npm start      # Start production server
```

## Notes
- All animations GPU-accelerated (transform, opacity)
- Images optimized via Next.js Image component
- Viewport-based animations trigger at 10-20% visibility
- EventDetails uses parallax scrolling with Framer Motion's useScroll and useTransform
- Glassmorphism effects use backdrop-blur-xl and white/10 backgrounds
- Custom cubic-bezier easing for premium animation feel
- Shadow and gradient hierarchies create depth perception
- **Typography centralized**: All font families, sizes, weights, and colors defined in `lib/theme.ts`
- Components use theme helper functions (`getScriptStyle`, `getSerifStyle`, `getBodyStyle`)
- No hardcoded font styles in components - all controlled via theme configuration
- **Opening sequence**: Plays once per session (tracked via sessionStorage)
- **Typewriter effect**: Configurable speed and delay, with blinking cursor animation
- **Hero supports dual modes**: Normal animations (returning visitors) and typewriter mode (first visit)
- **Background music**: Royalty-free music from Incompetech (Creative Commons license)
- **Music playback**: Automatic on page load, continuous loop, no visible controls
- **Audio file size**: 8.4MB MP3, optimized for web streaming
- **Internationalization**: All text content managed through JSON translation files
- **Language switching**: Instant language switching without page reload
- **Default language**: Kyrgyz (kgz) - loads automatically on first visit
- **Language persistence**: User's language choice saved to localStorage

