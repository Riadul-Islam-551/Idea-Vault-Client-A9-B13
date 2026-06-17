# Idea Vault - Share Your Startup Ideas
[Live site](https://idea-vault-client-lovat.vercel.app)

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## About

IdeaVault is a web-based platform where users can share innovative startup ideas, explore ideas posted by others and engage through comments and discussions. The system encourages creativity, collaboration and validation of ideas through community interaction.
Instead of booking or scheduling, the platform focuses on idea validation and engagement, allowing users to discover trending ideas, provide feedback and refine concepts collectively.


## Tech Stack

- Next.js 13+
- React 19
- Tailwind CSS + DaisyUI + HeroUI
- Node.js
- Express.js
- MongoDB (backend)

## Features

- Sign up / Login flow
- Create, edit, delete ideas
- Commenting and interactions
- User profiles and activity pages
- Responsive UI and dark/light theme support

## Getting Started

Prerequisites

- Node.js 18+ or newer
- npm (or yarn)

Installation

```bash
npm install
```

Run locally

```bash
npm run dev
```

Build for production

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file in the project root and add values used by your API/backend. Common variables this client expects:

- `NEXT_PUBLIC_API_URL` — Base URL of the backend API (e.g. `http://localhost:4000`)
- `NEXT_PUBLIC_PROXY` — (optional) Proxy URL if you run a dev proxy

Adjust names and values to match your backend implementation.

## Project Structure

- `src/app/` — Next.js app routes and pages
- `src/component/` — Reusable React components
- `src/lib/` — Client helpers for auth and session
- `public/` — Static assets
- `package.json` — Project metadata and scripts

See the codebase for more details on components and API routes.

## Scripts

The available npm scripts are:

- `npm run dev` — Run development server
- `npm run build` — Build for production
- `npm run start` — Start built app
- `npm run lint` — Run ESLint checks

These are defined in [package.json](package.json).

## Deployment

This project is compatible with Vercel or any Node.js hosting that supports Next.js. Typical steps:

1. Create a production build with `npm run build`.
2. Set environment variables on the hosting platform.
3. Run `npm run start` (if not using serverless/standalone hosting).

For Vercel, connect the repository and set the build command to `npm run build` and the output to the default Next.js settings.

## Contributing

Contributions are welcome. Please open issues for bugs or feature requests and submit PRs for improvements. Keep changes focused and add relevant tests where applicable.

## License

This project is provided under the MIT License.

---

If you want, I can expand sections (environment, screenshots, API docs) or add badges and examples. 
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
