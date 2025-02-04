# Project Directory Structure

## Root Directory: `codershubinc-open-api-docs/`

This is the main project folder containing all the essential files and directories for the API documentation.

### Root Files:

- **README.md** - Project documentation and guidelines.
- **components.json** - Configuration for components.
- **next.config.mjs** - Next.js configuration file.
- **package.json** - Project dependencies and scripts.
- **postcss.config.mjs** - PostCSS configuration file.
- **tailwind.config.ts** - Tailwind CSS configuration.
- **tsconfig.json** - TypeScript configuration.
- **.eslintrc.json** - ESLint configuration.

---

## `app/` - Main Application Directory

Contains the core application files, including API routes and global styles.

### Files:

- **globals.css** - Global styles for the project.
- **layout.tsx** - Layout component for the application.
- **page.tsx** - Main entry point for the application.

### API Routes:

#### `v0.1/`

- **random_image/**
  - `autoImage.tsx` - Handles auto image generation.
  - `autoImageDocs.tsx` - Documentation for `autoImage.tsx`.
  - `page.tsx` - API entry point.
- **random_user/**
  - `autoUser.tsx` - Handles automatic user data.
  - `big0User.tsx` - Alternative user data handler.
  - `bigUser.tsx` - Another variation of user data.
  - `page.tsx` - API entry point.

#### `v1.0/`

- **saavnCDN/** - Contains files for handling music API related to Saavn.
  - `artists.tsx`
  - `featuredArtists.tsx`
  - `image.tsx`
  - `music.tsx`
  - `other.tsx`
  - `page.tsx`

---

## `components/` - UI Components

Contains reusable UI components.

- **accordian.tsx** - Accordion component.
- **copy_btn.tsx** - Copy button component.
- **divUi.tsx** - UI wrapper component.
- **pageUi.tsx** - Page UI component.
- **ui/** (Sub-directory)
  - `accordion.tsx` - Accordion UI component.
  - `button.tsx` - Button UI component.
  - `input.tsx` - Input UI component.

---

## `lib/`

- **utils.ts** - Utility functions for the project.

---

## `public/`

Static assets and public resources.

---

## `utils/` - Utility Functions

### `func/` - Function Utilities

- **htmlDecode.ts** - Handles HTML decoding.
- **localStorage.ts** - Manages local storage interactions.
- **saavnCDN/fetchApi.ts** - Fetch API functions for Saavn CDN.

---

## Notes

- The `app/` directory follows the Next.js App Router structure.
- API routes are categorized under different versions (e.g., `v0.1/`, `v1.0/`).
- The `components/` directory contains reusable UI elements.
- `utils/` houses various utility functions.
- `lib/` includes shared libraries for the application.

This documentation provides a structured overview of the project directories and files, making it easier to navigate and understand the codebase.
