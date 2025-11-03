# Wedding Invitation Website - Technical Plan

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + Framer Motion
- **Fonts**: Google Fonts (Playfair Display, Cormorant, Great Vibes for headers / Inter, Montserrat for body)
- **Animations**: Framer Motion + CSS animations
- **Deployment**: Vercel

## Project Structure
```
/app
  /page.tsx                 # Main invitation page
  /layout.tsx               # Root layout
  /fonts                    # Custom fonts
/components
  /Hero.tsx                 # Names + Save the Date
  /Details.tsx              # Date, Time, Location
  /Venue.tsx                # Map/venue info
  /Schedule.tsx             # Timeline of events
  /DressCode.tsx            # Attire guidelines
  /RSVP.tsx                 # RSVP form/button
  /Gallery.tsx              # Optional photo carousel
  /Footer.tsx               # Contact info
/lib
  /animations.ts            # Reusable animation variants
/public
  /images                   # Photos, patterns, backgrounds
```

## Core Sections (Order)
1. **Hero** - Couple names, date, location (hero statement)
2. **Details** - Date, time, venue address
3. **Schedule** - Ceremony, reception, dinner timings
4. **Venue** - Embedded map (Google Maps iframe or static image)
5. **Dress Code** - Formal/semi-formal/colors to avoid
6. **RSVP** - Link/form (optional: integrate with Google Forms or Typeform)
7. **Travel/Accommodation** - Hotel recommendations, parking info
8. **Registry** - Gift registry links (optional)

## Design Principles (Industry Standard)
- **Single Page Layout** - Smooth scroll, no navigation needed
- **Mobile-First** - 60%+ guests access via mobile
- **Minimal Color Palette** - 2-3 colors max (neutrals + accent)
- **High Contrast** - Ensure text readability
- **White Space** - Generous padding between sections
- **Typography Hierarchy** - Clear heading/body distinction
- **Loading Speed** - <2s FCP, optimize images (WebP, lazy load)

## Animation Strategy
1. **Scroll Animations** (Framer Motion + `useInView`)
   - Fade in + slide up on sections
   - Stagger child elements (0.1s delay)
   
2. **Hero Animations**
   - Text fade-in sequence (names → date → location)
   - Subtle parallax on background
   
3. **Micro-interactions**
   - Button hover states (scale, color shift)
   - Card hover effects (shadow, lift)
   
4. **Performance**
   - Use `will-change` sparingly
   - GPU-accelerated properties (transform, opacity)
   - Disable animations on `prefers-reduced-motion`

## Color Palette Examples
- **Classic Elegant**: Off-white (#FAF9F6), Navy (#2C3E50), Gold (#D4AF37)
- **Romantic**: Blush (#F7E7DC), Sage Green (#9CAF88), Ivory (#FFFFF0)
- **Modern Minimal**: White (#FFFFFF), Charcoal (#36454F), Terracotta (#E27B58)

## Typography Pairing
- Headers: Playfair Display / Cormorant / Great Vibes (serif/script)
- Body: Inter / Montserrat / Lato (sans-serif)

## Key Libraries
```json
{
  "next": "^14.2.0",
  "react": "^18.3.0",
  "framer-motion": "^11.0.0",
  "tailwindcss": "^3.4.0",
  "react-intersection-observer": "^9.10.0"
}
```

## Implementation Notes
- Use `next/font` for optimized font loading
- Implement viewport-based animations (trigger on 20% visibility)
- Add meta tags for social sharing (Open Graph)
- Create favicon + Apple touch icon
- Add Google Analytics (optional)
- Test on iOS Safari, Chrome mobile
- Optimize images: max 1920px width, WebP format

## Performance Targets
- Lighthouse Score: >95
- FCP: <1.5s
- LCP: <2.5s
- CLS: <0.1

## Optional Enhancements
- Photo gallery with lightbox
- Countdown timer
- Spotify playlist embed
- Guest photo upload feature
- Multi-language support

