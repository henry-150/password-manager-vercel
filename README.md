**Live Demo:** [https://henry-150.github.io/password-manager-LS/](https://henry-150.github.io/password-manager-LS/)

# PassOP - Secure Password Manager


![React](https://img.shields.io/badge/React-19.2-blue?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2-purple?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?style=flat&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)


## 📋 Project Overview

PassOP is a **modern, secure password management application** built with React and Vite. It provides users with a seamless interface to store, manage, and organize their passwords locally with an intuitive UI and real-time updates.

The application demonstrates proficiency in:
- **React Hooks** (useState, useEffect, useRef)
- **State Management** with localStorage persistence
- **Modern UI/UX** with Tailwind CSS
- **Code Quality** with ESLint configuration
- **Build Optimization** with Vite

## ✨ Key Features

- 🔐 **Secure Password Storage** - Store passwords locally in browser
- 📋 **CRUD Operations** - Create, Read, Update, Delete passwords
- 🔍 **Copy to Clipboard** - One-click password copy functionality
- 👁️ **Show/Hide Password** - Toggle password visibility
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 💾 **LocalStorage Persistence** - Data persists across browser sessions
- 🎯 **Clean UI** - Modern gradient backgrounds with Tailwind CSS
- ⏬ **Toast Notifications** - Real-time user feedback with react-toastify
- 🎨 **Interactive Icons** - Animated icons using Lord Icon library

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19.2** | UI library and component framework |
| **Vite 7.2** | Lightning-fast build tool and dev server |
| **Tailwind CSS 4.1** | Utility-first CSS framework |
| **React Toastify 11.0** | Toast notifications |
| **UUID 13.0** | Unique ID generation for passwords |
| **ESLint** | Code quality and consistency |

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/henry-150/password-manager.git
   cd password-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
passop/
├── public/                 # Static assets (images, icons)
├── src/
│   ├── components/
│   │   ├── Manager.jsx    # Main password manager component
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Footer.jsx     # Footer component
│   │   └── MainLogo.jsx   # Logo component
│   ├── assets/            # Images and icons
│   ├── App.jsx            # Root application component
│   ├── App.css            # Global styles
│   ├── main.jsx           # Application entry point
│   └── index.css          # Base styles
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
└── package.json           # Dependencies and scripts
```

## 💡 Key Implementation Highlights

### State Management
- Uses React Hooks (`useState`, `useEffect`) for state management
- Implements localStorage for data persistence
- Efficient filtering and UUID generation for password records

### Performance Optimizations
- Vite for fast build times and development experience
- React Hooks for optimal re-render management
- Tailwind CSS for minimal CSS bundle size

### Code Quality
- ESLint configuration for consistent code style
- Component-based architecture for maintainability
- Separation of concerns with dedicated components

### User Experience
- Real-time toast notifications for user feedback
- Copy-to-clipboard functionality
- Show/hide password toggle
- Responsive design with Tailwind CSS
- Smooth animations and hover effects

## 🎯 Core Features Explained

### Password Manager Component
The `Manager.jsx` component handles:
- **Add Passwords** - Validates input before saving to localStorage
- **Edit Passwords** - Allows users to modify existing password entries
- **Delete Passwords** - Remove passwords with unique ID tracking
- **Copy Functionality** - One-click copying to clipboard
- **Password Visibility** - Toggle between plain text and masked input

### Data Persistence
```javascript
// Passwords are stored in localStorage as JSON
localStorage.setItem("passwords", JSON.stringify(passwordArray))
```

## 🔄 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run deploy    # Deploy to GitHub Pages
npm run lint      # Run ESLint
```

## 🐛 Bug Fixes & Improvements

- ✅ Fixed empty table row issue with form validation
- ✅ Corrected localStorage parsing from string literals
- ✅ Implemented UUID generation for unique password identification
- ✅ Proper state synchronization in add/edit operations
- ✅ Form field clearing after successful password save

## 🚀 Future Enhancements

- [ ] Add password strength indicator
- [ ] Implement password encryption
- [ ] Add search/filter functionality
- [ ] Support for password categories/tags
- [ ] Dark mode toggle
- [ ] Export passwords as CSV
- [ ] Import passwords from file
- [ ] Cloud sync capability
- [ ] User authentication

## 📝 Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Henry** - [GitHub Profile](https://github.com/henry-150)

---

**⭐ If you found this project helpful, please consider giving it a star!**
