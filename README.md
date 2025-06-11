# Telusko AI Learning Platform

 

> Your AI-powered guide to personalized learning journeys tailored specifically for you

## 🌟 Overview

Telusko AI Learning is a cutting-edge education platform that leverages artificial intelligence to create personalized learning experiences in technology and coding. Our platform analyzes your skills, learning style, and goals to create custom learning paths that maximize your growth and understanding.

Whether you're a beginner looking to start your coding journey or an experienced developer wanting to master new technologies, Telusko AI Learning adapts to your needs and guides you every step of the way.

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm (version 9 or higher)

## 🛠️ Technical Setup Guide

### System Requirements
- **Node.js**: Version 18.0.0 or higher (recommended: 20.x)
- **npm**: Version 9.0.0 or higher
- **Memory**: 4GB RAM minimum recommended
- **Disk Space**: At least 1GB of free space for node_modules and build artifacts

### Development Environment Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/telusko/telusko-ai-learning.git
   cd telusko-ai-learning
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
  

3. **Start the development server**
   ```bash
   npm run dev
   ```
   This will start the Vite development server with hot module replacement.
   
4. **Access the application**
   Open your browser and navigate to `http://localhost:5173`

### Build for Production

1. **Create a production build**
   ```bash
   npm run build
   ```
   This will:
   - Run TypeScript compilation (`tsc -b`)
   - Generate optimized assets in the `dist` folder

2. **Preview the production build locally**
   ```bash
   npm run preview
   ```
   This will serve the production build on `http://localhost:4173`


### Troubleshooting Common Issues

- **Node version conflicts**: Use `nvm` (Node Version Manager) to switch to the required Node version
  ```bash
  nvm use 20
  ```

- **Port conflicts**: If port 5173 is already in use, Vite will automatically try to use the next available port

- **TypeScript errors**: Run TypeScript compiler to check for type errors
  ```bash
  npx tsc --noEmit
  ```

- **ESLint issues**: Fix linting errors automatically
  ```bash
  npm run lint -- --fix
  ```

## 🧰 Project Structure Explained

```
telusko-ai-learning/
├── node_modules/       # Installed dependencies
├── public/             # Static assets served as-is
│   ├── fonts/          # Custom font files
│   └── images/         # Static images and icons
├── src/                # Application source code
│   ├── components/     # Reusable React components
│   │   ├── common/     # Shared UI components (buttons, inputs, etc.)
│   │   ├── layouts/    # Page layout components
│   │   └── ui/         # Specialized UI components
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components for each route
│   │   ├── Home/
│   │   ├── Dashboard/
│   │   ├── GeneratePath/
│   │   └── AskAI/
│   ├── services/       # API and external service integrations
│   ├── store/          # State management
│   ├── styles/         # Global styles and theme definitions
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Helper functions and utilities
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── .eslintrc.js        # ESLint configuration
├── .gitignore          # Files ignored by Git
├── index.html          # HTML entry point
├── package.json        # Project metadata and dependencies
├── postcss.config.js   # PostCSS configuration 
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── tsconfig.app.json   # App-specific TypeScript config
├── tsconfig.node.json  # Node-specific TypeScript config
└── vite.config.ts      # Vite build tool configuration
```

## 🔧 Technical Stack Details

### Core Technologies
- **React 19**: Using the latest features including concurrent rendering
- **TypeScript**: For type safety and improved developer experience
- **Vite**: For fast development and optimized builds

### UI Components and Styling
- **Tailwind CSS**: For utility-first styling
- **Framer Motion**: For animations and transitions
- **React Hot Toast**: For notification system

### Routing and Navigation
- **React Router DOM v7**: For client-side routing

### Content Rendering
- **React Markdown**: For rendering markdown content

### 3D Graphics
- **OGL**: WebGL framework for 3D graphics rendering

### Development Tools
- **ESLint**: For code linting
- **TypeScript-ESLint**: For TypeScript-specific linting rules

## 🔄 Development Workflow

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create production build (runs TypeScript compilation first) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

### Development Best Practices

1. **Branch Management**
   - `main`: Production-ready code
   - `dev`: Development branch
   - Feature branches: `feature/feature-name`
   - Bug fixes: `fix/issue-description`

2. **Code Style**
   - The project uses ESLint for code style enforcement
   - Run `npm run lint` before committing changes
   - Most rules are automatically fixable with `npm run lint -- --fix`

3. **Component Development**
   - Place new components in the appropriate directory under `src/components/`
   - Create a directory for each component with its TypeScript file and any related files
   - Export components from an `index.ts` file for cleaner imports

4. **State Management**
   - Use React's built-in hooks for local state
   - For shared state, use context providers

5. **Responsive Design**
   - Use Tailwind's responsive classes (sm, md, lg, xl, 2xl)
   - Test all UI changes across different viewport sizes

### Performance Considerations

- Use React.memo() for components that render often but rarely change
- Implement code-splitting at the route level for smaller initial load
- Use image optimization for any included images
- Minimize third-party dependencies where possible

## ⚙️ Configuration Options

### Environment Variables

The application uses environment variables for configuration. Create a `.env` file in the project root with the following variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:3000/api` |
| `VITE_AI_SERVICE_KEY` | API key for AI services | - |
| `VITE_ENABLE_ANALYTICS` | Enable/disable analytics | `false` |
| `VITE_LOG_LEVEL` | Logging level | `error` |

### Tailwind Configuration

The `tailwind.config.js` file contains the theme configuration. You can customize:

- Color palette
- Typography
- Spacing
- Breakpoints
- Animations

### TypeScript Configuration

Multiple TypeScript configuration files are used:
- `tsconfig.json`: Base configuration
- `tsconfig.app.json`: Application-specific settings
- `tsconfig.node.json`: Node-specific settings (for build scripts)

### Vite Configuration

The `vite.config.ts` file contains build and development server settings:

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    chunkSizeWarningLimit: 1000
  }
})
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

