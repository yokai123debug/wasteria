# Wasteria Client Website

A modern, animated website for the Wasteria Minecraft ghost client.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Extract the ZIP file
2. Open a terminal in the project directory
3. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

### Running Locally

Start the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

The site will automatically reload when you make changes to the code.

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles and custom font
│   └── community/         # Community page
├── components/            # React components
│   ├── hero-section.tsx   # Hero with WASTERIA title
│   ├── clickgui-section.tsx  # Main Client showcase
│   ├── features-section.tsx  # Addons Category showcase
│   └── ui/                # Reusable UI components
├── public/                # Static assets
│   ├── fonts/
│   │   └── wasteria.ttf   # Custom Wasteria font
│   ├── logo.png           # Wasteria logo
│   ├── clickgui.png       # Main client screenshot
│   └── addons.png         # Addons screenshot
└── package.json           # Dependencies and scripts
\`\`\`

## Features

- **Custom Wasteria Font**: Glowing purple text effect for branding
- **Animated Hero Section**: Floating gradient orbs and smooth animations
- **Interactive Showcases**: 3D tilt effects on hover for image cards
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Dark Theme**: Black background with purple accent colors
- **Performance Optimized**: Fast loading with Next.js Image optimization

## Tech Stack

- **Next.js 15**: React framework with App Router
- **React 19**: Latest React features
- **TypeScript**: Type-safe code
- **Tailwind CSS v4**: Utility-first styling
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icons

## Customization

### Changing Colors

Edit \`app/globals.css\` to modify the purple accent colors:

\`\`\`css
/* Find and replace purple color values */
rgba(139, 92, 246, 0.8)  /* Purple glow */
\`\`\`

### Updating Images

Replace files in the \`public/\` directory:
- \`logo.png\` - Site logo (512x512px recommended)
- \`clickgui.png\` - Main client screenshot (1920x1080px recommended)
- \`addons.png\` - Addons screenshot (1920x1080px recommended)

### Modifying Content

- **Hero text**: Edit \`components/hero-section.tsx\`
- **Features**: Edit \`components/clickgui-section.tsx\` and \`components/features-section.tsx\`
- **Metadata**: Edit \`app/layout.tsx\` for SEO and social sharing

## Troubleshooting

### Font not loading
- Ensure \`public/fonts/wasteria.ttf\` exists
- Clear browser cache and restart dev server
- Check browser console for font loading errors

### Images not showing
- Verify images exist in \`public/\` directory
- Check file names match exactly (case-sensitive)
- Ensure Next.js dev server is running

### Build errors
- Delete \`.next\` folder and \`node_modules\`
- Run \`npm install\` again
- Try \`npm run build\` to see detailed errors

## License

All rights reserved.
\`\`\`
# wasteria
# wasteria
