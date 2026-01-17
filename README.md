# Blonde Entertainment - Website Rebuild

A modern, premium rebuild of the Blonde Entertainment website using React and Vite. This project showcases the agency's bands, acoustics, photos, and booking services with a focus on elegant design and performance.

## Why This Rebuild?

Blonde Entertainment is a reputable agency with **25+ years** of professional experience representing live entertainment across Indiana and the Midwest. Unfortunately, their existing Wix-based website didn't reflect that level of quality or professionalism.

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

- **Premium Design**: Custom typography with Playfair Display and Outfit fonts
- **Responsive Layout**: Mobile-first design with Bootstrap utilities
- **Image Gallery**: Curated photos from Unsplash with lightbox functionality
- **Band Showcase**: Dynamic band listings with detail modals
- **Fast Performance**: Built with Vite for lightning-fast development and production builds

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **React Bootstrap** - UI components
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

## License

This is a custom rebuild project for Blonde Entertainment.

## Contact

For questions about this project or booking information, visit the Connect page on the site.
