# Karamveer Singh — Portfolio

A responsive personal portfolio for Karamveer Singh, a software engineer and creative technologist. It presents selected projects, skills, experience, achievements, an about section, and contact links in a dark interface with an optional light theme.

## Features

- Responsive navigation and page sections
- Dark and light themes; the selected theme is saved in local storage
- Animated hero scene with a floating 3D-style code terminal and circuit details
- Draggable project carousel with previous/next controls
- Skills, work experience, achievements, competitions, workshops, and contact information
- Motion effects that respect the user's reduced-motion preference

## Tech stack

- React 19 and TypeScript
- Vite
- Framer Motion
- Lucide icons
- CSS animations and 3D transforms

## Getting started

Install a recent Node.js LTS release and npm, then run:

```sh
npm install
npm run dev
```

Vite prints a local development URL in the terminal.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Type-check the project and create a production build |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

To review the production build locally:

```sh
npm run build
npm run preview
```

The production site is written to `dist/`. Deploy that directory using your static hosting provider.

## Project structure

```text
src/
  App.tsx          Page content, project data, theme control, and interactions
  index.css        Theme tokens, layout, responsive styles, and animations
  main.tsx         React entry point and motion feature loading
  assets/          Portfolio images
public/            Static files served from the site root
index.html         Page title and metadata
```

## Updating portfolio content

- Edit the `projects`, `skills`, `profileSections`, and `socials` data near the top of `src/App.tsx`.
- Update the hero, about, or contact content in the corresponding sections in `src/App.tsx`.
- Adjust theme colors and layout in `src/index.css`. The theme tokens are defined near the top of that file.
- Replace or add images in `src/assets/` and update their imports in `src/App.tsx`.

## Metadata and static files

The page title, description, viewport, and favicon are configured in `index.html`. Files in `public/` are copied to the root of the production site.
