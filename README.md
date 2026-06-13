# Creativity - Premium Stationery Portal

**[View Live Demo](https://creativity-theta-seven.vercel.app/gallery)**

Welcome to **Creativity**, a high-end, dynamically styled stationery portal built for production. This application emphasizes beautiful, robust user experiences, top-tier SEO optimizations, and type-safe front-end architecture.

## 🌟 Features

- **Dynamic SEO Optimization**: Integrated `react-helmet-async` for tailored metadata per page.
- **Premium UI/UX**: Built with Tailwind CSS, utilizing curated modern design tokens, sleek typography (Poppins & Nunito), and Framer Motion for fluid micro-animations.
- **Accessible Components**: Harnessing the power of Radix UI primitives.
- **Robust Form Validation**: Client-side validation managed by React Hook Form & Zod for optimal data integrity.
- **Responsive Design**: Flawless experience across desktops, tablets, and mobile devices.

## 💻 Tech Stack

- **Framework**: [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Routing**: [React Router](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO**: [React Helmet Async](https://github.com/staylor/react-helmet-async)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd Creativity
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 📂 Project Structure

```text
src/
├── components/       # Reusable UI components (buttons, inputs, cards, etc.)
│   ├── layout/       # Layout specific components (Navbar, Footer, etc.)
│   └── ui/           # Base UI primitives
├── layouts/          # Page layout wrappers (MainLayout, etc.)
├── pages/            # Page components corresponding to routes (Home, About, Services, etc.)
├── main.tsx          # Application entry point
└── index.css         # Global styles and Tailwind directives
```

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Type-checks the TypeScript code and bundles the app for production.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to catch formatting or type issues.

## 🎨 Design Aesthetics

This project prioritizes visual excellence. We utilize curated color palettes, glassmorphism, dynamic animations, and optimal typography.
