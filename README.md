# 🌟 Zenkly

Zenkly is a modern web application designed to streamline project ideation and management. Whether you're crafting a new blog idea, generating suggestions, or upgrading your plan — Zenkly provides a clean, intuitive experience with a robust and responsive interface.

---

## 🚀 Live Preview

👉 [Zenkly Live](https://zenkly-update-hvxdm8xyz-raima-aftabs-projects.vercel.app)

---

## 📁 Project Structure

```
Zenkly/
├── husky/                    # Git hooks (e.g., for pre-commit)
├── node_modules/             # Dependencies
├── public/                   # Static assets
├── src/
│   ├── assets/               # Images and static resources
│   ├── components/           # Reusable UI components
│   │   ├── Footer.jsx
│   │   ├── GetGeneralSuggestions.jsx
│   │   ├── LoginForm.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProgressBox.jsx
│   │   ├── QuoteBox.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Signup.jsx
│   │   └── SignUoForm.jsx
│   ├── context/
│   │   └── AuthContext.jsx   # Authentication context
│   ├── hooks/                # Custom React hooks
│   │   ├── useAuthContext.jsx
│   │   ├── useLogin.jsx
│   │   ├── useLogout.jsx
│   │   └── useRegister.jsx
│   ├── pages/                # Page components
│   │   ├── AccountSettings.jsx
│   │   ├── CreateProject.jsx
│   │   ├── GeneratedIdea.jsx
│   │   ├── GenerateIdeaChooseBlogs.jsx
│   │   ├── Layout.jsx
│   │   ├── Login.jsx
│   │   ├── SavedIdeas.jsx
│   │   ├── Signup.jsx
│   │   └── UpgradeAccount.jsx
│   ├── utils/
│   │   └── translate-api-errors.js
│   ├── index.css
│   ├── main.jsx
│   └── Router.jsx
├── .env
├── .env.sample
├── .gitignore
├── .lintstagedrc.js
├── .nvmrc
├── .prettierrc.json
├── eslint.config.js
├── eslint.config.mjs
├── index.html
├── jsconfig.json
├── package-lock.json
├── postcss.config.js
├── readme.md
└── vite.config.js
```

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**:
  - [Tailwind CSS v4](https://tailwindcss.com/)
  - [DaisyUI](https://daisyui.com/)
- **Routing**: `react-router-dom`
- **Authentication**: Custom Context + Hooks (`useAuthContext`, `useLogin`, `useLogout`, `useRegister`)
- **Deployment**: [Vercel](https://vercel.com/)

---

## ✨ Key Features

- 🔐 **Authentication**: Login, Register, Logout with context & custom hooks  
- 🧠 **Idea Generation**: Form-based guided blog/project ideas  
- 📝 **Project Management**: Start, save, manage ideas  
- 🎨 **Responsive UI**: Tailwind CSS v4 + DaisyUI  
- ⚙️ **Clean Architecture**: Modular file structure with hooks & pages

---

## 📦 Getting Started

### Prerequisites

- Node.js >= 18  
- npm >= 9  

### Installation

```bash
git clone https://github.com/RaimaAftab95/ZenklyUpdate.git
cd ZenklyUpdate
npm install

---
