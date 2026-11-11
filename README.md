# Fibermax Internet

Fibermax Internet is a modern fiber internet marketing and service website built with React and Vite. The project presents Fibermax as a high-speed internet provider serving homes and businesses in Nakuru and surrounding areas, with sections for plans, coverage, about, contact, and service information.

## Overview

This website is designed to help potential customers:

- discover Fibermax broadband plans and pricing
- view network coverage areas and supported estates
- understand the company story and value proposition
- contact the support team or request a connection
- browse service terms and policy information

## Tech Stack

- React 18
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- React Icons

## Features

- responsive landing page and marketing design
- multi-page navigation with route-based sections
- dark mode toggle for the site header/navigation
- coverage search and filter experience
- plan comparison with monthly and annual billing options
- call-to-action contact flow for new customers

## Project Structure

```text
fibermax-internet/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ NavBar.jsx
│  │  ├─ hero.jsx
│  │  ├─ features.jsx
│  │  ├─ plans.jsx
│  │  ├─ footer.jsx
│  │  └─ testimonials.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ About.jsx
│  │  ├─ Coverage.jsx
│  │  ├─ Contact.jsx
│  │  ├─ terms.jsx
│  │  └─ plansPage.jsx
│  ├─ Layouts/
│  │  └─ MainLayout.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
├─ package-lock.json
└─ README.md
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Installation

```bash
npm install
```

### Run the app in development mode

```bash
npm run dev
```

This will start the Vite dev server, usually at:

```text
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Preview production build locally

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Available Routes

The app includes the following primary pages:

- `/` — home page
- `/about` — company story and values
- `/plans` — service plans and pricing
- `/coverage` — coverage areas and estate listings
- `/contact` — contact details and support information
- `/terms` — service and policy terms

## Branding and Service Focus

The brand messaging in this project highlights:

- reliable fiber connectivity
- no-downtime service experience
- high-speed internet for homes and businesses
- coverage across key neighborhoods in Nakuru
- customer support and fast connection setup

## Notes

This project is a front-end marketing website and does not include a backend service or database. If you plan to extend it into a live ISP platform, the next useful additions would be:

- forms connected to an email or CRM backend
- real coverage data via API or CMS
- order/lead generation flow
- admin dashboard for plan management

## License

This project is for demo and business use within the Fibermax Internet brand. Please confirm copyright and usage rights before deploying to production or sharing publicly beyond the project owner’s scope.

