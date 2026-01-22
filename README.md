# Network Technician Portfolio

A clean, responsive React portfolio website for a Network Technician, built with Vite and TypeScript. Features a dark blue theme, minimalist design, and sections showcasing professional growth and skills.

## Features

- **Dark Blue Theme**: Modern, professional color scheme
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Smooth Scrolling**: Seamless navigation between sections
- **Growth-Focused Content**: Highlights current skills, learning, and aspirations
- **Clean Architecture**: Functional React components with reusable structure

## Sections

1. **Hero**: Professional introduction with profile picture placeholder
2. **Projects**: Three growth-oriented project cards (What I Know, What I Learned, What I'm Aspiring To)
3. **Growth**: Continuous learning section with current focus areas
4. **Contact**: Simple contact information
5. **Footer**: Basic footer with copyright

## Tech Stack

- React 19
- TypeScript
- Vite 5
- CSS3 (no external libraries)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Build

```bash
npm run build
```

## Customization

- Update contact information in `src/components/Contact.tsx`
- Replace profile picture placeholder in `src/components/Hero.tsx`
- Modify project details in `src/components/Projects.tsx`
- Adjust learning items in `src/components/Growth.tsx`
- Customize colors and styles in respective CSS files
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
