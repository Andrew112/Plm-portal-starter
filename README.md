# PLM Portal Starter 🚀

A modern, production-ready **Product Lifecycle Management (PLM) Portal** starter template built with React, Material-UI, and Vite. Perfect for quickly bootstrapping enterprise dashboards and monitoring applications.

---

## 🎯 Overview

**PLM Portal Starter** is a scaffolded web application designed to accelerate development of enterprise-grade portals. It provides a clean, responsive dashboard interface with reusable components, theming support, and modern development tooling.

### ✨ Key Features

- **📊 Dashboard Interface** - Pre-built grid layout with customizable widget cards
- **🎨 Material-UI Components** - Professional UI with Google's Material Design
- **⚡ Vite Build System** - Lightning-fast hot module replacement (HMR) and builds
- **🔌 API Service Layer** - Ready-to-connect API wrapper for backend integration
- **📚 Storybook Integration** - Component development and documentation
- **🧪 Testing Setup** - Jest & React Testing Library pre-configured
- **📱 Responsive Design** - Mobile-first approach with flexible layouts
- **🎭 Theming Support** - Customizable Material-UI theme configuration

---

## 🏗️ Architecture

```
plm-portal-starter/
├── public/              # Static assets
├── src/
│   ├── app/            # Main application component
│   ├── components/     # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── DashboardGrid.jsx
│   │   └── WidgetCard.jsx
│   ├── services/       # API services and data fetching
│   ├── theme/          # MUI theme configuration & Storybook
│   └── main.jsx        # Application entry point
├── package.json
└── vite.config.js
```

---

## 🛠️ Tech Stack

### Core Technologies
- **React 19.2** - Latest React with concurrent features
- **Material-UI 5.14** - Comprehensive component library
- **Vite 5.0** - Next-generation frontend tooling
- **React Router 6.20** - Client-side routing

### State & Data Management
- **TanStack Query 4.35** - Powerful async state management
- **Emotion** - CSS-in-JS styling solution

### Development Tools
- **Storybook 8.0** - UI component explorer
- **React Testing Library** - Modern testing utilities
- **Jest DOM** - Custom Jest matchers

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Andrew112/Plm-portal-starter.git

# Navigate to project directory
cd Plm-portal-starter

# Install dependencies
npm install
```

### Development

```bash
# Start development server (http://localhost:5173)
npm run dev

# Run Storybook for component development
npm run storybook

# Run tests
npm test
```

### Build & Deploy

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📊 Dashboard Features

The starter includes a fully functional dashboard with:

### Widget Cards
- **Active Devices Monitoring** - Track connected devices in real-time
- **Incident Tracking** - 24-hour incident counter
- **Performance Metrics** - Average response time display
- **Utilization Stats** - System utilization percentage
- **Alert Feed** - Recent alerts with expandable details

### Navigation
- **App Bar** - Top navigation with menu controls
- **Sidebar** - Persistent drawer with quick links: 
  - Overview
  - Assets
  - Alerts
  - Settings

---

## 🔌 API Integration

The project includes a service layer ready for backend connection:

```javascript
// src/services/api.js
export const api = {
  baseURL: process.env.VITE_API_BASE || 'https://api.example.com',
  async fetchDashboard() {
    // Replace with your API calls
    return fetch(`${this.baseURL}/dashboard`)
  }
}
```

### Environment Variables
Configure your API endpoint using `.env`:
```
VITE_API_BASE=https://your-api-endpoint.com
```

---

## 🎨 Customization

### Theme Configuration
Customize the Material-UI theme in `src/theme/muiTheme.js`:

```javascript
const theme = createTheme({
  palette: { 
    mode: 'light', 
    primary: { main:  '#0b5fff' } 
  },
  typography: { 
    fontFamily:  'Inter, Roboto, Arial, sans-serif' 
  }
})
```

### Component Development
Use Storybook for isolated component development: 
```bash
npm run storybook
```
Stories are located in `src/theme/.storybook/stories. jsx/`

---

## 🧪 Testing

The project is configured with Jest and React Testing Library:

```bash
# Run test suite
npm test

# Run tests in watch mode
npm test -- --watch
```

Test files are co-located with components using the `*.test.jsx` naming convention.

---

## 📈 Performance

- **Vite HMR** - Instant hot module replacement during development
- **Code Splitting** - Automatic route-based code splitting with React Router
- **Tree Shaking** - Unused code elimination in production builds
- **Web Vitals** - Performance monitoring built-in

---

## 🤝 Contributing

Contributions are welcome! This starter is designed to be extended:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 Use Cases

This starter is ideal for: 

- **Manufacturing PLM Portals** - Track production lifecycle stages
- **Asset Management Dashboards** - Monitor equipment and resources
- **Monitoring & Analytics Platforms** - Display KPIs and metrics
- **Admin Panels** - Enterprise application management
- **IoT Device Dashboards** - Connected device monitoring

---

## 📄 License

This project is open source and available for use.

---

## 📬 Contact

**Repository**: [Andrew112/Plm-portal-starter](https://github.com/Andrew112/Plm-portal-starter)

**Created**:  December 2025

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev/)
- [Material-UI Documentation](https://mui.com/)
- [Vite Guide](https://vitejs.dev/guide/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Storybook Documentation](https://storybook.js.org/)

---

**Ready to build your next enterprise portal?** Star ⭐ this repo and start developing! 
