# Wedding Invite - Current Status

## Tech Stack
- Next.js 14.2.33 (App Router)
- React 18.3.1
- TypeScript 5.6.3
- Tailwind CSS 3.4.14
- Framer Motion 11.11.17
- react-intersection-observer 9.13.1

## Font Configuration
- **Inter**: Latin + Cyrillic subsets (body text, practical information)
- **Playfair Display**: Latin + Cyrillic subsets (headings, elegant text)
- **Great Vibes**: Script font for intro heading and names

## Family Configuration (Multi-Deployment Support)
- **Purpose**: Support separate deployments for groom's and bride's families
- **Configuration file**: `/config/family.config.ts`
- **How it works**:
  - Defines parent names for both groom's and bride's families
  - `FAMILY_SIDE` setting controls which family names to use ('groom' or 'bride')
  - Each deployment uses the same codebase but different configuration
- **Parent Names**:
  - **Groom's Parents**: Кенжебек & Жылдыз (used in wedding-groom deployment)
  - **Bride's Parents**: Кубанычбек & Венера (used in wedding-bride deployment)
- **Deployment Strategy**:
  - Update locale files (`kgz.json`, `ru.json`) with appropriate parent names
  - Update `FAMILY_SIDE` in `family.config.ts` before pushing to each repository
  - Push to `origin` (wedding-groom) for groom's version
  - Push to `bride` (wedding-bride) for bride's version
- **Current Configuration**: Set to 'bride' (Кубанычбек & Венера)

## Project Structure
```
/app
  layout.tsx          # Root layout with fonts (Inter, Playfair Display, Great Vibes) + Cyrillic support + LanguageProvider
  page.tsx            # Main page orchestration (EnvelopeIntro → Hero → EventDetails → PhotoGallery → Countdown → Footer)
                      # Note: HeroWithPhoto currently commented out/hidden
  globals.css         # Global styles, color palette, custom scrollbar
/components
  EnvelopeIntro.tsx   # Opening animation with envelope and paper plane
  TypewriterText.tsx  # Reusable typewriter text effect component
  BackgroundMusic.tsx # Automatic background music with mute control via MusicContext
  MusicControl.tsx    # Music mute/unmute button at top-left corner
  LanguageSwitcher.tsx # Language toggle button (KGZ/RU) at top-right corner
  HeroWithPhoto.tsx   # CURRENTLY HIDDEN: Full-screen hero with main photo.jpg + minimal event details (i18n)
  Hero.tsx            # First page: Text-only wedding invitation section with intro heading (i18n)
  PhotoGallery.tsx    # Photo section with cute.jpg + quote (picnic.jpg section currently hidden)
  EventDetails.tsx    # Premium event details with sunset background, glassmorphism, parallax (i18n)
  Countdown.tsx       # Real-time countdown timer with grad.jpg background (i18n)
  Footer.tsx          # Minimal footer with names (i18n)
/contexts
  LanguageContext.tsx # Language state management and translation provider
  MusicContext.tsx    # Music state management (mute/unmute control)
/config
  family.config.ts    # Family configuration for multi-deployment support (groom/bride)
/locales
  kgz.json            # Kyrgyz translations (default language)
  ru.json             # Russian translations
/lib
  animations.ts       # Framer Motion variants
  theme.ts            # Centralized typography theme configuration
/public/images
  main photo.jpg      # Proposal photo used as hero background
  sunset.png          # Sunset photo for EventDetails background
  grad.jpg            # Gradient photo for Countdown background
  picnic.jpg          # Additional photo asset
  cute.jpg            # Additional photo asset
/public/audio
  wedding-background.mp3  # Royalty-free romantic background music (8.4MB)
next.config.mjs       # Next.js config (converted from .ts)
```

## Implemented Features

### Internationalization (i18n)
- **Multi-language support**: Kyrgyz (default) and Russian
- **Language switcher**: Fixed button at top-right corner
  - Animated entrance (fade-in from top)
  - Toggle between KGZ and RU buttons
  - Active language highlighted with gold gradient background
  - Smooth hover and transition effects
  - Glassmorphic design (white/90 with backdrop blur)
- **Language persistence**: Selection saved to localStorage, persists across page reloads
- **Translation system**:
  - JSON-based translation files (kgz.json, ru.json)
  - React Context API for state management
  - useLanguage custom hook for accessing translations
  - TypeScript type safety via inferred types from JSON
- **Content coverage** (all sections fully internationalized):
  - **Hero section**: Intro heading, greeting, invitation message, names, wedding text continuation, honor message
  - **EventDetails**: "Save the Date" heading, full date, arrival time, ceremony start time, venue label, venue name, full address, map link
  - **Countdown**: Title, time unit labels (days/hours/minutes/seconds), subtitle
  - **Footer**: Invitation closing message, parents' names, gratitude text
- **Wedding details**:
  - Date: 06.01.2026 (January 6, 2026)
  - Arrival time: 15:00 (3:00 PM)
  - Ceremony start time: 17:00 (5:00 PM)
  - Countdown target: 18:00 (6:00 PM) Kyrgyz time (UTC+6)
  - Venue: Ресторан "Ак Булут" (Ak Bulut Restaurant)
  - Full address: Микрорайон Улан 7/1, г. Бишкек / Улан Кичи Району 7/1, Бишкек шаары
  - 2GIS map link: https://2gis.kg/bishkek/geo/70000001101581212
- **Names**:
  - Couple: Мырзабек & Айгерим (Russian) / Мырзабек & Aйгеримдин (Kyrgyz)
  - Parents (той ээси): Кенжебек & Жылдыз

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
  - **Music control button** (top-left corner):
    - Mute/unmute toggle
    - Glassmorphic design matching language switcher
    - Gold speaker icon when playing, muted icon with X when muted
    - Smooth fade-in animation
    - Managed via React Context (MusicContext)
  - Volume set to 30% by default
  - Guaranteed to start with minimal user interaction

### HeroWithPhoto Section - CURRENTLY HIDDEN
**Note: This component is currently commented out in page.tsx and not displayed on the website.**

- **Full-screen hero section** with main photo.jpg (heart3.jpg) as background
- **Minimal, elegant design**:
  - Full-viewport background image with dark overlay (opacity-40)
  - Gradient overlay for text readability (black/60 via black/40)
  - Content centered vertically and horizontally
- **Content (i18n)** (when enabled):
  - **Names**: Мырзабек & Айгерим in gold script font (text-6xl → text-9xl - extra large)
  - **Decorative divider**: Gold lines with center dot
  - **Date**: "6 января 2026 года" / "2026-жылдын 6-январы" (text-2xl → text-4xl)
  - **Arrival time**: "Время сбора: 15:00" / "Чакыруу убактысы: 15:00" (text-lg → text-2xl)
  - **Ceremony start**: "Начало торжества: 17:00" / "Башталуу убактысы: 17:00" (text-lg → text-2xl, with mt-2 spacing)
  - **Venue**: "Ресторан 'Ак Булут'" and full address (text-lg → text-2xl)
- **Animations**:
  - Scale-in animation for background image
  - Staggered fade-in for text elements
  - Animated scroll indicator at bottom
- **Typography**: White text on dark background with strong text shadows for contrast
- **Responsive**: Scales beautifully from mobile to desktop

### Hero Section (First Page - Text-Only Invitation)
- **Clean single-column centered layout** (no photos)
- **Text-focused design**:
  - Maximum width container (max-w-4xl) for optimal readability
  - All content centered on page
  - Clean gradient background (off-white tones: faf9f6 → f5f4f1 → faf9f6)
- **Invitation Content (i18n):**
  - **Intro heading**: "Чакыруу барагы" / "Приглашение на свадьбу" (text-3xl → text-5xl, heading-script/Great Vibes font, black color, italic)
  - **Greeting**: Currently empty in both languages (text-xl → text-3xl)
  - **Invitation message**: "Сиздерди, балдарыбыз" / "С безграничным уважением приглашаем Вас на торжество, посвящённое свадьбе наших детей —" (text-base → text-2xl)
  - **Names**: Мырзабек & Aйгеримдин (Kyrgyz) / Мырзабек & Айгерим (Russian) in gold script font (text-4xl → text-7xl)
  - **Wedding text** (Kyrgyz only): "үйлөнүү үлпөт тоюна арналган салтанатка чексиз урмат жана ызат менен чакырабыз."
  - **Decorative divider**: Gold lines with center dot (fixed width: w-16 → w-24)
  - **Honor message**: "Бул өзгөчө күнү биздин кубанычыбызды тең бөлүшүп..." / "В этот особенный день будем рады..."
- **Animation system**:
  - All text sections use fade-in animations
  - Smooth staggered entrance animations with updated text stages (1-6 to accommodate new intro element)
  - TypewriterText component support (currently disabled by default)
  - Progressive reveal: Intro → Greeting → Invitation → Names → Wedding Text → Divider → Honor Message
- **Design Elements:**
  - Navy text (#2c3e50) on light background
  - Centered text alignment throughout
  - Gold divider lines with precise sizing
  - Scroll-triggered animations
  - Responsive padding (py-12 sm:py-16 md:py-20)

### PhotoGallery Section (Our Story in Pictures)
- **One full-screen photo section** showcasing cute.jpg (picnic.jpg section currently hidden)
- **Section 1 - Picnic Photo - CURRENTLY HIDDEN**:
  - Two-column grid: Photo left, quote right
  - Landscape aspect ratio (4:3 on mobile, 3:2 on larger screens)
  - Kyrgyz quote: "Жашообуз бир бири менен өткөргөн ар бир учурда кубаныч менен толот."
  - Russian translation: "Каждое мгновение, проведённое вместе, наполняет нашу жизнь счастьем."
  - Slide-in from left animation
- **Section 2 - Cute Photo (Currently the only visible section)**:
  - Two-column grid: Quote left, photo right (reversed layout)
  - Landscape aspect ratio (4:3 on mobile, 3:2 on larger screens)
  - Kyrgyz quote: "Сүйүү - бул биз менен бирге каралган келечек."
  - Russian translation: "Любовь - это будущее, которое мы строим вместе."
  - Slide-in from right animation
- **Design Elements**:
  - Alternating gradient backgrounds (off-white variations)
  - Photos with rounded corners (rounded-2xl → rounded-3xl)
  - Shadow and white ring borders for depth
  - Gold decorative dividers above quotes
  - Responsive typography (text-xl → text-3xl for quotes)
  - Scroll-triggered animations with IntersectionObserver
  - Stacked layout on mobile, side-by-side on desktop

### Event Details Section (Premium Design)
- **Full-screen section with sunset background** (`/images/sunset.png`)
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
  - 2026-жылдын 6-январы / 6 января 2026 года (text-lg → text-2xl, font-light)
  - Чакыруу убактысы: 15:00 / Время сбора: 15:00 (text-lg → text-2xl, font-light)
  - Башталуу убактысы: 17:00 / Начало торжества: 17:00 (text-lg → text-2xl, font-light)
  - All content text now uses consistent sizing: text-lg sm:text-xl md:text-2xl font-light
  - Responsive padding (p-6 sm:p-8 md:p-10)
  - Responsive border radius (rounded-xl sm:rounded-2xl)
- **Card 2: Venue Information (i18n)**
  - Same responsive treatment as Card 1
  - Gold gradient location icon with border
  - "Дарек" / "Адрес" heading (text-2xl → text-4xl)
  - Микрорайон Улан 7/1, г. Бишкек / Улан Кичи Району 7/1, Бишкек шаары (text-lg → text-2xl, font-light) - displayed first
  - Ресторан "Ак Булут" (text-lg → text-2xl, font-light) - displayed second
  - All content text now uses consistent sizing: text-lg sm:text-xl md:text-2xl font-light
  - **Interactive 2GIS map link button**:
    - Text: "Картада көрүү" / "Посмотреть на карте"
    - Gold border and text with hover effect
    - Map icon with responsive sizing (w-4 h-4 sm:w-5 sm:h-5)
    - Opens in new tab: https://2gis.kg/bishkek/geo/70000001101581212
    - Styling: border, rounded-lg, px-4 py-2, transition on hover
- **Design Elements:**
  - Clean card-based layout (no scattered backgrounds)
  - Gradient overlays for readability (black/40-60%)
  - Frosted glass effect on cards (backdrop-blur-md)
  - Responsive typography scaling at 4 breakpoints
  - Bottom gradient fade transition to next section (h-24 sm:h-32)

### Countdown Section (Wedding Countdown Timer)
- **Full-width section with gradient background** (`/images/grad.jpg`)
- **Real-time countdown timer** to wedding date
  - Target: January 6, 2026 at 18:00 (6:00 PM) Kyrgyz time (UTC+6)
  - Updates every second in real-time
  - Timezone-aware calculation
- **Four countdown cards** (Days, Hours, Minutes, Seconds)
  - Glassmorphic design (white/10 with backdrop blur)
  - Gold numbers (text-5xl → text-7xl) with bold weight
  - White labels with uppercase tracking
  - Grid layout: 2 columns on mobile, 4 columns on desktop
  - Border: white/20 with shadow-2xl
  - Responsive padding (p-6 sm:p-8)
  - Rounded corners (rounded-xl sm:rounded-2xl)
- **Content (i18n)**:
  - Title: "Үлкөн күнгө чейин" / "До великого дня" (text-3xl → text-6xl)
  - Labels: Күн/Дней, Саат/Часов, Мүнөт/Минут, Секунд/Секунд
  - Subtitle: "Биз менен бирге бул өзгөчө күндү белгилеңиз" / "Отметьте этот особенный день вместе с нами"
- **Design Elements:**
  - Dark gradient overlay (black/60 to black/70) for text contrast
  - Smooth fade-in animations with scroll trigger
  - Staggered entrance for cards
  - Bottom gradient fade to footer (h-24 sm:h-32 from #2c3e50)
  - Centered content with max-width constraint
- **Placement**: Between EventDetails and Footer sections

### Footer
- **Invitation closing message (i18n)**: "Урматтоо менен той ээлери:" / "С уважением, той ээси:" (text-base → text-xl)
- **Parents' names (i18n)**: Dynamic based on family configuration
  - Groom's deployment: Кенжебек & Жылдыз
  - Bride's deployment: Кубанычбек & Венера
  - Font: Gold script font (text-4xl → text-7xl, fluid scaling)
  - Configured via `config/family.config.ts` and locale files
- Decorative divider with gold accents (responsive widths: w-10 → w-12)
- Copyright text with gratitude message (text-xs → text-sm) - displays "© [gratitude text]" without year
- Navy background (#2c3e50)
- Responsive padding (py-12 sm:py-16 md:py-20)
- Fade-in animation with scroll trigger

## Design System

### Colors
- Background: `#faf9f6` (off-white)
- Foreground: `#2c3e50` (navy)
- Accent: `#d4af37` (gold)
- Text muted: `#5a6c7d`

### Typography System (lib/theme.ts)
**Centralized theme configuration for all text styles. No hardcoded fonts in components.**

#### Script Font (Great Vibes - for intro and names)
- Family: `var(--font-great-vibes), cursive`
- Sizes: sm (3xl-4xl), md (5xl-7xl), lg (7xl-9xl), xl (8xl-10rem)
- Colors: black/navy, gold, white
- Usage: Intro heading (text-3xl → text-5xl, black), couple names (XL - very large, gold), parents' names (MD - large, gold)

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
- **Script (Great Vibes)**: Intro heading and names - highly decorative gold script
- **Serif (Playfair Display)**: Invitation messages, headings - elegant and fancy but readable with Cyrillic support
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
- **Typewriter effect**: DISABLED - removed for better reliability and user experience
- **Hero animations**: All sections use immediate fade-in animations (no progressive typing)
- **Background music**: Royalty-free music from Incompetech (Creative Commons license)
- **Music playback**: Automatic on page load, continuous loop, no visible controls
- **Audio file size**: 8.4MB MP3, optimized for web streaming
- **Internationalization**: All text content managed through JSON translation files
- **Language switching**: Instant language switching without page reload
- **Default language**: Kyrgyz (kgz) - loads automatically on first visit
- **Language persistence**: User's language choice saved to localStorage
- **Cyrillic support**: Both Inter and Playfair Display fonts include Cyrillic subset for proper Russian and Kyrgyz text rendering
- **Page flow**: EnvelopeIntro → Hero → EventDetails → PhotoGallery (cute.jpg only) → Countdown → Footer (HeroWithPhoto and picnic.jpg section currently hidden)
- **Responsive images**: All images use Next.js Image component with proper sizing
- **Real-time updates**: Countdown timer updates every second using JavaScript intervals
- **Photo sections**: cute.jpg displayed with romantic quote (picnic.jpg section currently hidden)

## Recent Changes (Latest Commit)
### Commit: "change text+add music+add address link"

**Font Updates:**
- Added Cyrillic subset support to Inter and Playfair Display fonts for proper Russian and Kyrgyz text rendering

**Page Layout:**
- HeroWithPhoto component temporarily hidden (commented out in page.tsx)
- Website now starts directly with Hero (invitation text) section

**Hero Section Enhancements:**
- Added new `intro` field: "Чакыруу барагы" / "Приглашение на свадьбу" (displays before greeting)
- Updated text flow with new animation stages (1-6) to accommodate intro element
- Updated Kyrgyz bride name: "Aйгеримдин" (possessive form)
- Greeting field now empty in current version

**EventDetails Improvements:**
- **Two-time system implemented**: 
  - Arrival time (15:00): "Чакыруу убактысы" / "Время сбора"
  - Ceremony start (17:00): "Башталуу убактысы" / "Начало торжества"
- **Consistent typography**: All content text unified to `text-lg sm:text-xl md:text-2xl font-light`
- **Actual venue details added**: 
  - Restaurant name: "Ак Булут"
  - Full address: "Микрорайон Улан 7/1, г. Бишкек" / "Улан Кичи Району 7/1, Бишкек шаары"
- **Interactive 2GIS map link**: 
  - Clickable button: "Картада көрүү" / "Посмотреть на карте"
  - Direct link to venue location: https://2gis.kg/bishkek/geo/70000001101581212
  - Styled with gold border, map icon, and hover effects

**Translation Updates:**
- Both locale files (kgz.json, ru.json) updated with all new fields
- Added `intro`, `time2`, `venueMapLink`, and `viewOnMap` keys
- Updated existing text content for accuracy

## Recent Updates (After Commit)

**Typography & Styling Changes:**
- **Intro heading styled**: 
  - Font: Great Vibes (script) via `heading-script` class
  - Size: `text-3xl sm:text-4xl md:text-5xl`
  - Color: Black/navy `#2c3e50` for contrast on light background
  - Style: Italic for added elegance

**Layout Adjustments:**
- **EventDetails venue card**: Swapped order of address and restaurant name (address now displays first)
- **PhotoGallery**: Hidden picnic.jpg section (only cute.jpg section visible)
- **Footer**: Removed year from copyright text (now displays "© [gratitude text]" instead of "© 2025 [gratitude text]")

