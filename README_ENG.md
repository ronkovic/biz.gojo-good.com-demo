# GOJO Demo Project

## 📚 Project Overview

This is a modern web application built with Next.js 15.1.6. It utilizes the latest React (v19) and TypeScript, with Tailwind CSS as the UI framework.

## 🛠 Technology Stack

- **Framework**: Next.js 15.1.6
- **Language**: TypeScript
- **UI Library**: React 19.0.0
- **Styling**: Tailwind CSS
- **Charts**: Chart.js, Recharts
- **Date Manipulation**: date-fns
- **UI Components**: Headless UI
- **Icons**: Heroicons
- **Others**: QR Code Generation (qrcode.react)

## 🚀 Development Environment Setup

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation Steps

1. Clone the repository:
```bash
git clone [repository URL]
cd gojo-demo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at http://localhost:3000

## 📂 Project Structure

```
gojo-demo/
├── .next/               # Next.js build output
├── public/             # Static files
├── scripts/            # Build scripts
├── src/                # Source code
│   ├── app/           # Next.js 13+ App Router
│   ├── components/    # Common components
│   ├── styles/        # Global styles
│   └── types/         # TypeScript type definitions
├── .gitignore         # Git ignore settings
├── next.config.js     # Next.js configuration
├── package.json       # Project configuration
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## 🔧 Development Guidelines

### Git Branch Strategy

- `main`: Production release branch
- `develop`: Development branch
- `feature/*`: New feature development branches
- `release/*`: Release preparation branches
- `hotfix/*`: Emergency bug fix branches

### Coding Standards

1. **TypeScript**:
   - Enable strict type checking
   - Actively use interfaces and types
   - Avoid using any type

2. **Components**:
   - Use functional components and Hooks
   - Explicitly define Props types
   - Appropriate component separation and reuse

3. **Styling**:
   - Use Tailwind CSS classes
   - Manage custom utilities in `tailwind.config.ts`
   - Manage component-specific styles with `clsx`/`tailwind-merge`

### Commit Convention

Commit messages should follow this format:

```
<emoji> <type>: <title>

<body>

<footer>
```

Examples of emojis and types:
- 🎉 feat: New feature
- 🐛 fix: Bug fix
- 📝 docs: Documentation
- 💄 style: Styling
- ♻️ refactor: Refactoring
- 🚀 perf: Performance improvement
- ✅ test: Testing
- 📦 chore: Build/dependency

## 🔍 Quality Assurance

### Testing

- Create component tests
- Implement E2E tests (as needed)
- Maintain test coverage

### Code Quality

- Static analysis with ESLint
- Code formatting with Prettier
- Strict TypeScript checking

## 📦 Build and Deploy

### Build

```bash
npm run build
# or
yarn build
```

### Deployment

- Vercel platform recommended
- Proper configuration of production environment variables
- Pre-deployment build verification

## 🤝 Contributing

1. Create appropriate branch (`feature/*` etc.)
2. Implement changes
3. Add/update tests
4. Create pull request
5. Undergo code review
6. Merge

## 📝 License

This project is private and all rights are reserved.

## 🆘 Support

If you have issues or questions, please check:
- Issue tracker
- Project Wiki
- Team communication channels
