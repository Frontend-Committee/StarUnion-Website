# 🌟 Star Union - Website

Welcome to the **Star Union Website**, a modern, high-performance web platform built with React and Vite. This project delivers a professional, animated, and responsive interface for managing community features, events, committees, and more.

## 🚀 Overview

The Star Union Website is designed with a **feature-first architecture**, ensuring scalability and maintainability. It leverages the latest web technologies to provide a seamless user experience with smooth transitions and a premium look and feel.

---

## ✨ Key Features

- **Authentication System**: Complete user flow including login, registration, password recovery, and secure state management.
- **Profile Management**: Personalized user dashboards and profile customization.
- **Event Coordination**: Browse and sign up for upcoming events, workshops, and community gatherings.
- **Committee Ecosystem**: Detailed views for different committees, board members, and their specific projects.
- **Services & Projects**: Showcasing the various services provided and ongoing/completed projects by the union.
- **Fully Responsive**: Optimized for all devices, from mobile phones to high-resolution desktops.
- **Smooth Animations**: Powered by Framer Motion for a fluid, interactive feel.

---

## 🛠 Tech Stack

### Frontend Core

- **React 19**: Using the latest features for optimal performance and component architecture.
- **Vite 7**: Lightning-fast build tool and development server.
- **React Router DOM v7**: Robust routing and navigation management.

### Styling & UI

- **Tailwind CSS**: Utility-first styling for precise design control.
- **shadcn/ui**: High-quality, accessible UI components built on **Radix UI**.
- **Framer Motion**: Powering modern animations and transitions.
- **Lucide React**: Beautifully crafted open-source icons.

### Data & State Management

- **TanStack Query v5**: Efficient server-state management, caching, and data fetching.
- **Axios**: Promise-based HTTP client for API interactions.
- **React Hook Form**: Performant and flexible form handling with built-in validation.

---

## 📂 Project Structure

The project follows a **Feature-Based** directory structure for better organization:

```text
src/
├── features/        # Business logic & components grouped by feature
│   ├── auth/        # Login, Register, Forgot Password
│   ├── profile/     # User profile components
│   ├── events/      # Event listing and management
│   ├── committees/  # Committee-specific pages
│   └── ...          # home, board, projects, services, etc.
├── components/      # Shared UI components (shadcn/ui)
├── layouts/         # Page layout wrappers
├── hooks/           # Shared custom hooks
├── lib/             # Utility tool configurations (axios, utils)
├── store/           # Global state management
├── assets/          # Static images, icons, etc.
└── routes/          # Application routing configuration
```

---

## 🏁 Getting Started

### Prerequisites

- **Node.js**: v18.x or higher
- **npm** or **pnpm**

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-repo/star-union-website.git
    cd star-union-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running Locally

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist/` folder.

---

## 🐳 Deployment

### Vercel

This project is configured for seamless deployment on **Vercel**. Simply connect your repository to Vercel and it will automatically detect the Vite configuration.

### Docker

For containerized environments, use the provided Dockerfiles:

- **Development**: `Dockerfile`
- **Production**: `Dockerfile.prod` (uses Nginx to serve the build)

---

## 📄 License

This project is private and intended for use by Star Union.

---

_Built with ❤️ by the Star Union Development Team._
