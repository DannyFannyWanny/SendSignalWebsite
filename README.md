# Signal Website

A modern, luxury-focused marketing website for Signal, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimal aesthetic with luxury vibes using slate/zinc neutrals
- **Responsive Layout**: Mobile-first design with generous whitespace and proper gutters
- **Typography**: Inter for UI text, Plus Jakarta Sans for headings (SF Pro Display-like feel)
- **Color System**: 
  - Icy blue accent (#0EA5E9) for primary actions
  - Muted gold (#CBA35C) for subtle highlights
  - Slate/zinc neutrals for the main palette
- **Animations**: Smooth Framer Motion animations throughout
- **Background**: Subtle noise texture with soft radial vignette for depth
- **Components**: Built with shadcn/ui components for consistency

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Inter + Plus Jakarta Sans (Google Fonts)

## Pages

- `/` - Homepage with hero, features, and CTA
- `/how-it-works` - Technical details and architecture
- `/safety` - Security features and best practices
- `/press` - Press releases and media resources
- `/legal/privacy` - Privacy policy
- `/legal/terms` - Terms of service

## Components

- `Header` - Navigation with mobile menu
- `Footer` - Site footer with links
- `WaitlistDialog` - Email collection modal
- UI components from shadcn/ui

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd signal-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Homepage
│   ├── how-it-works/      # How it works page
│   ├── safety/            # Safety page
│   ├── press/             # Press page
│   └── legal/             # Legal pages
│       ├── privacy/       # Privacy policy
│       └── terms/         # Terms of service
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx        # Site header
│   ├── Footer.tsx        # Site footer
│   └── WaitlistDialog.tsx # Waitlist modal
└── lib/                  # Utility functions
    └── utils.ts          # shadcn/ui utilities
```

## Design System

### Colors

- **Background**: Very light slate with subtle blue tint
- **Foreground**: Deep slate
- **Accent**: Icy blue (#0EA5E9)
- **Gold**: Muted gold (#CBA35C) for subtle highlights
- **Borders**: Light slate with hover states

### Typography

- **UI Text**: Inter (sans-serif)
- **Headings**: Plus Jakarta Sans (SF Pro Display alternative)
- **Font Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Spacing

- **Container**: max-w-7xl (80rem) centered
- **Mobile Gutters**: 12-16px (px-3 sm:px-6)
- **Desktop Gutters**: 24-40px (px-6 lg:px-10)
- **Section Padding**: py-20 (80px) for major sections

### Utilities

- `.container-max` - Max width container with responsive gutters
- `.gutter-mobile` - Mobile gutter utilities
- `.gutter-desktop` - Desktop gutter utilities
- `.text-balance` - Balanced text wrapping

## Customization

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Import and use the `Header` and `Footer` components
4. Follow the existing page structure and styling patterns

### Modifying Colors

Update the CSS variables in `src/app/globals.css`:

```css
:root {
  --accent: oklch(0.65 0.15 200); /* Icy blue */
  --gold: oklch(0.75 0.12 85); /* Muted gold */
}
```

### Adding Components

1. Create new components in `src/components/`
2. Use shadcn/ui components as building blocks
3. Follow the existing component patterns and styling

## Contributing

1. Follow the existing code style and patterns
2. Use TypeScript for all new code
3. Ensure responsive design works on all screen sizes
4. Test animations and interactions
5. Update this README for any new features

## License

This project is proprietary and confidential.

## Support

For questions or support, contact the development team.
