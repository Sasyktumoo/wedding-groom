# Mobile Testing Guide

## How to Test Mobile Design

### Option 1: Chrome DevTools (Recommended for Quick Testing)
1. Run `npm run dev`
2. Open `http://localhost:3000` in Chrome
3. Press `F12` or `Cmd+Option+I` (Mac) / `Ctrl+Shift+I` (Windows)
4. Click the device toggle icon (or press `Cmd+Shift+M`)
5. Test these device presets:
   - iPhone SE (375px)
   - iPhone 12/13/14 (390px)
   - iPhone 14 Pro Max (430px)
   - iPad Mini (768px)
   - iPad Pro (1024px)
6. **Important**: Use "Responsive" mode and manually test these widths:
   - 375px (small phone)
   - 639px (just before `sm` breakpoint)
   - 640px (`sm` breakpoint)
   - 767px (just before `md` breakpoint)
   - 768px (`md` breakpoint)
   - 1023px (just before `lg` breakpoint)
   - 1024px (`lg` breakpoint)

### Option 2: Real Device Testing (Best for Production)
1. Build production version: `npm run build && npm start`
2. Find your local IP: `ifconfig | grep "inet " | grep -v 127.0.0.1`
3. Access from mobile: `http://YOUR_IP:3000`
4. Test on:
   - iPhone (Safari)
   - Android (Chrome)
   - iPad (Safari)

### Option 3: ngrok (Test on Remote Devices)
1. Install ngrok: `brew install ngrok` (Mac)
2. Run dev server: `npm run dev`
3. In another terminal: `ngrok http 3000`
4. Use the generated URL to test on any device

## What to Check

### Visual Testing
- [ ] Text is readable at all sizes (not too small on mobile)
- [ ] Images don't overflow on mobile
- [ ] No horizontal scrolling at any width
- [ ] Spacing looks balanced (not too cramped on mobile)
- [ ] Typography scales smoothly from mobile to desktop
- [ ] Colors and contrast are good on mobile screens

### Layout Testing
- [ ] Hero section stacks properly (text first, then photo on mobile)
- [ ] Event cards stack vertically on mobile, side-by-side on tablet+
- [ ] Envelope animation scales to fit mobile screen
- [ ] Footer content is readable and not cramped

### Interaction Testing
- [ ] Scroll is smooth (no animation jank)
- [ ] Background music starts after user interaction
- [ ] Touch targets are easy to tap (not too small)
- [ ] No accidental zooming when tapping
- [ ] Safe areas respected on iPhone X+ (no content under notch)

### Performance Testing
- [ ] Page loads quickly on 3G connection
- [ ] Images load progressively
- [ ] Animations are smooth (60fps)
- [ ] No layout shift during page load
- [ ] Parallax disabled on mobile (doesn't cause slowdown)

### Breakpoint Testing
Test at exactly these widths to verify breakpoint transitions:
- **639px → 640px**: Text should get slightly larger
- **767px → 768px**: Cards should go from 1 column to 2 columns
- **1023px → 1024px**: Layout should expand to full desktop

## Expected Behavior at Each Breakpoint

### Mobile (< 640px)
- Single column layout
- Smallest text sizes
- Compact spacing
- Photo aspect ratio: 3:4 or 4:5
- Envelope max-width: 320px
- Parallax: disabled
- Image quality: 75%

### Small (640px - 767px)
- Still single column
- Slightly larger text
- Photo aspect ratio: 4:5
- Envelope max-width: 400px
- Parallax: disabled
- Image quality: 75%

### Medium (768px - 1023px)
- Two columns for event cards
- Medium text sizes
- Photo aspect ratio: 3:4
- Parallax: reduced (5% movement)
- Image quality: 90%

### Large (1024px+)
- Full desktop layout
- Two columns for hero (photo + text)
- Largest text sizes
- Generous spacing
- Parallax: full (15% movement)
- Image quality: 90%

## Common Issues to Look For

### ❌ Text Too Small on Mobile
Should see: `text-base` or `text-lg` minimum on mobile
Font should be at least 16px for body text

### ❌ Horizontal Scroll
Test by swiping left/right - page should not scroll horizontally
Check for: images, dividers, or padding causing overflow

### ❌ Layout Breaking at Specific Widths
Test carefully at 639px, 767px, and 1023px (right before breakpoints)
Layout should not "break" or look weird at any width

### ❌ Animations Causing Jank on Mobile
Scroll should be smooth at 60fps
If stuttering, parallax or animations may need further optimization

### ❌ Images Not Loading or Wrong Size
Check Network tab for image sizes
Mobile should load smaller images than desktop

### ❌ Touch Targets Too Small
All buttons/links should be at least 44x44px
Test by trying to tap with your thumb

## Performance Benchmarks

Use Chrome DevTools Lighthouse (mobile mode):
- **Performance**: Should be > 90
- **Accessibility**: Should be > 95
- **Best Practices**: Should be > 90
- **SEO**: Should be > 90

## Browser Testing Priority

1. **High Priority** (80% of users):
   - Chrome Android
   - Safari iOS
   - Chrome iOS

2. **Medium Priority**:
   - Samsung Internet
   - Firefox Android

3. **Low Priority**:
   - Opera Mobile
   - Edge Mobile

## Questions to Ask During Testing

1. Can I read all text without zooming?
2. Can I tap all interactive elements easily?
3. Does the page feel smooth when scrolling?
4. Do images load quickly?
5. Does the layout look intentional at all sizes?
6. Is there any weird behavior at breakpoint transitions?
7. Does the design feel premium on mobile?

## After Testing

Once you've tested and verified everything works:
1. Note any issues found
2. Test on at least 2 real devices before launch
3. Consider A/B testing if making major changes
4. Monitor real-user performance with analytics

## Quick Test Script

Run this in terminal to check all breakpoints quickly:
```bash
# Start dev server
npm run dev

# Open in Chrome with DevTools
open -a "Google Chrome" http://localhost:3000
```

Then in DevTools Console, run:
```javascript
// Cycle through breakpoints
const widths = [375, 640, 768, 1024, 1920];
let i = 0;
setInterval(() => {
  window.resizeTo(widths[i], 800);
  console.log('Width:', widths[i]);
  i = (i + 1) % widths.length;
}, 3000);
```

