# Blonde Entertainment - Website Rebuild

**TARGET URL:** https://blondeentertainment.com

A modern, premium rebuild of the Blonde Entertainment website using React and Vite. This project showcases the agency's bands, acoustics, photos, and booking services with a focus on elegant design, accessibility, and performance.

## Background

A friend was recently contacted by a promoter for this entertainment company to perform later in the year. While Blonde Entertainment is a reputable company with **25+ years** of professional experience representing live entertainment across Indiana and the Midwest, their existing Wix-based website didn't reflect that level of quality or professionalism.

## Why This Rebuild?

The original site suffered from several critical issues:

- **Broken functionality**: The Photos and Saucey Hippie pages displayed "widget didn't load" errors instead of content
- **Poor user experience**: The bands page had broken scrolling behavior, stopping mid-page and requiring users to close modals just to continue browsing
- **Performance overhead**: Heavy Wix dependencies and third-party widgets created measurable lag without improving the user experience
- **Console pollution**: The site was riddled with JavaScript errors, 404s, and warnings that made debugging and maintenance difficult
- **Lack of branding**: Key pages used unbranded embeds (Google Calendar) and generic widgets instead of custom-designed experiences
- **Questionable URL structure**: Internal links like `/copy-of-blonde-bands` for the Acoustics page revealed poor site architecture
- **Unnecessary friction**: Modal popups that displayed the same information already visible on cards, creating extra clicks for no benefit
- **Desktop responsiveness issues**: The site didn't scale properly on larger screens despite being the primary platform for event coordinators

This rebuild addresses all of these issues with a clean, maintainable React codebase that's fast, fully responsive, and properly branded. Most importantly, it reflects the premium quality that 25 years of professional entertainment experience deserves.

## Features

### Pages & Functionality

**Home Page**
- Hero section with branded typography and call-to-action buttons
- "The Blonde Standard" about section with value propositions
- Statistics dashboard (15+ active bands, 500+ events yearly, 25+ years experience)
- Featured artists grid with dynamic data from bands.json
- Booking call-to-action section

**Bands Page**
- Dual-view interface: "Browse Bands" grid and "Watch & Listen" video player
- Accessible tab navigation with ARIA roles and keyboard support
- Band cards with hover effects and detail modals
- Integrated YouTube video previews for each band
- Keyboard navigation guide for video grid (arrow keys, Home/End)
- Screen reader announcements for view changes
- Direct booking links from band details

**Blonde Acoustics Page**
- Filtered view of acoustic/solo acts
- Horizontal card layout with images and descriptions
- Quick booking links

**Photos Page**
- Responsive image gallery grid (4 columns on desktop, 2 on mobile)
- Lightbox modal for full-size image viewing
- Hover effects with zoom and overlay
- Curated placeholder images from Unsplash

**Connect Page**
- Professional booking inquiry form
- Contact sidebar with email, phone, and location
- Form sections: Contact Information, Event Details
- Band selection dropdown populated from bands.json
- Success confirmation state with option to submit another request
- Social media links

**Calendar Page**
- Google Calendar embed for event scheduling
- Instructions for adding events to personal calendars

**Talent Page**
- Musician/performer recruitment information
- Link to sister agency Blonde Talent (blondetalent.com)
- Career advancement call-to-action

**Blonde Hope Page**
- Community initiatives showcase (Charity Concerts, Community Outreach, Nonprofit Support)
- Annual impact statistics
- Partnership inquiry for nonprofits

**Saucey Hippie Page**
- Featured artist/brand showcase
- Hero image with description
- Vibe gallery with hover zoom effects
- Instagram link and booking CTA

### Design & UX

- **Premium Typography**: Playfair Display (serif) for headings, Outfit (sans-serif) for body
- **Custom Color Palette**: Blonde Gold (#c5a059), Blonde Cream (#faf9f6), Blonde Dark (#121212), Blonde Accent (#e5d1b0)
- **Responsive Layout**: Mobile-first design with Bootstrap 5 utilities
- **Sticky Navigation**: Fixed header with active state indicators
- **Smooth Transitions**: CSS transitions on hover states, card animations, and view changes
- **Custom Logo**: Branded "BLONDE" text with gold accent "O"

### Accessibility

- ARIA roles and labels throughout (tablist, tabpanel, gridcell, etc.)
- Screen reader announcements for dynamic content changes
- Full keyboard navigation for video grid (arrow keys, Enter/Space, Home/End)
- Visible focus indicators
- Alt text for images
- Semantic HTML structure

### Technical

- **Fast Performance**: Vite build system with hot module replacement
- **Data-Driven**: Band information stored in JSON for easy updates
- **Error Handling**: Graceful fallbacks for missing images
- **Clean URLs**: Proper routing structure (no `/copy-of-*` endpoints)

## Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool and dev server
- **React Router 7** - Client-side routing
- **React Bootstrap 2** - UI components
- **Bootstrap 5** - CSS utilities and grid
- **CSS Custom Properties** - Design system tokens

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will run at `http://localhost:5173`

## Project Structure

```
rebuild/
├── public/              # Static assets
│   └── bands/          # Band images (*.png, *.jpg)
├── src/
│   ├── components/     # Reusable components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Route pages
│   │   ├── Home.jsx
│   │   ├── Bands.jsx
│   │   ├── Acoustics.jsx
│   │   ├── Photos.jsx
│   │   └── ...
│   ├── data/           # JSON data files
│   │   └── bands.json
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles & design tokens
└── package.json
```

## Adding Band Images

1. Place image files in `public/bands/`
2. Ensure the filename matches the `image` field in `src/data/bands.json`

Example:

```json
{
  "id": "the-doo-band",
  "name": "The Doo! Band",
  "image": "/bands/doo-band.png"
}
```

The image path should start with `/bands/` and the file should be at `public/bands/doo-band.png`

## Design System

### Colors

- **Blonde Gold**: `#c5a059` - Primary accent color
- **Blonde Cream**: `#faf9f6` - Light background
- **Blonde Dark**: `#121212` - Dark text and backgrounds
- **Blonde Accent**: `#e5d1b0` - Secondary accent

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Outfit (sans-serif)

## Development

### Available Scripts

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Hot Module Replacement

Vite provides fast HMR during development. Changes to React components will update instantly without full page reload.

## Deployment

Build the project and deploy the `dist/` folder to any static hosting service:

```bash
npm run build
```

Compatible with:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## Related Links

- **Blonde Entertainment**: https://blondeentertainment.com (original site)
- **Blonde Talent**: https://www.blondetalent.com (sister modeling/talent agency)
- **Linktree**: https://linktr.ee/BlondeEntertainment
- **Mobile App**: Available on the [App Store](https://apps.apple.com/us/app/blonde-entertainment/id1593749525) (wrapper for mobile site)

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Landing page with hero, about, and featured bands |
| `/bands` | Bands | Full band roster with browse/watch views |
| `/blonde-acoustics` | Acoustics | Acoustic and solo acts |
| `/photos` | Photos | Image gallery with lightbox |
| `/connect` | Connect | Booking inquiry form |
| `/calendar` | Calendar | Google Calendar embed |
| `/talent` | Talent | Performer recruitment |
| `/blonde-hope` | Hope | Community initiatives |
| `/saucey-hippie` | Saucey | Featured artist showcase |

## License

This is a custom rebuild project for Blonde Entertainment.

## Contact

For questions about this project or booking information, visit the Connect page on the site.
