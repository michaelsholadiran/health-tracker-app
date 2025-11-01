# Health Tracker Application

A modern, single-page React web application for tracking medications and logging daily vital signs with user authentication. Built with React, Tailwind CSS, and Local Storage for data persistence.

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Configuration](#configuration)
- [Browser Support](#browser-support)

## ✨ Features

### Medication Management
- ✅ Add medications with name, dosage, and frequency
- ✅ View list of all medications
- ✅ Remove medications from the list
- ✅ Data persists in browser Local Storage

### Vital Signs Logging
- ✅ Log blood pressure (systolic and diastolic), heart rate, and weight
- ✅ View history of all logged vital signs
- ✅ Entries automatically include timestamps
- ✅ History sorted in reverse chronological order (newest first)
- ✅ View averages for blood pressure, heart rate, and weight

### User Authentication
- ✅ Simple username-based login (no password required)
- ✅ User-specific data storage
- ✅ Manual logout functionality
- ✅ Auto-logout after 10 minutes of inactivity

### User Interface
- ✅ Modern, professional UI with Tailwind CSS
- ✅ Responsive design
- ✅ Sidebar navigation
- ✅ Modal forms for data entry
- ✅ SVG icons throughout

## 🛠 Technology Stack

- **React** 18.3.1 - UI library
- **React Router** 6.26.1 - Client-side routing
- **Tailwind CSS** 4.1.16 - Utility-first CSS framework
- **Vite** 5.4.2 - Build tool and dev server
- **Local Storage** - Client-side data persistence

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 14 or higher)
  - Check your version: `node --version`
  - Download from: [nodejs.org](https://nodejs.org/)
  
- **npm** (comes with Node.js) or **yarn**
  - Check npm version: `npm --version`
  - npm is automatically installed with Node.js

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone git@github.com:michaelsholadiran/health-tracker-app.git
cd health-tracker-app
```

Or if you prefer HTTPS:

```bash
git clone https://github.com/michaelsholadiran/health-tracker-app.git
cd health-tracker-app
```

### Step 2: Install Dependencies

Install all required npm packages:

```bash
npm install
```

This will install all dependencies listed in `package.json`, including:
- React and React DOM
- React Router DOM
- Tailwind CSS and PostCSS
- Vite and related plugins

**Expected output:** You should see a message like:
```
added 89 packages, and audited 89 packages in 5s
```

### Step 3: Verify Installation

Check that all dependencies are installed correctly:

```bash
npm list --depth=0
```

## ▶️ Running the Project

### Development Mode

Start the development server:

```bash
npm run dev
```

**What happens:**
- Vite starts a local development server
- The project is bundled and served
- Hot Module Replacement (HMR) is enabled for instant updates
- The terminal will display the local URL

**Expected output:**
```
  VITE v5.4.21  ready in 399 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Access the Application

1. Open your web browser
2. Navigate to: `http://localhost:5173`
3. If port 5173 is in use, Vite will automatically use the next available port (e.g., 5174)

### Testing the Application

1. **Login:** Enter any username (e.g., `testuser`, `john`, `user1`)
   - No password is required
   - Click "Sign In"

2. **Add Medications:**
   - Click "Medications" in the sidebar
   - Click "Add Medication" button
   - Fill in the form (e.g., Name: "Lisinopril", Dosage: "20mg", Frequency: "Once daily")
   - Click "Add Medication"

3. **Log Vital Signs:**
   - Click "Vital Signs" in the sidebar
   - Click "Log Vital Signs" button
   - Enter your vital signs
   - Click "Log Vital Signs"

4. **View Dashboard:**
   - Click "Dashboard" to see statistics and overview

5. **Test Data Persistence:**
   - Refresh the browser
   - Your data should still be there!

## 🏗 Building for Production

### Create Production Build

Build the project for production:

```bash
npm run build
```

**What happens:**
- Vite creates an optimized production build
- Files are minified and optimized
- Output is placed in the `dist` directory

**Expected output:**
```
vite v5.4.21 building for production...
✓ 24 modules transformed.
dist/index.html                   0.52 kB
dist/assets/index-[hash].js       45.23 kB
dist/assets/index-[hash].css      8.12 kB
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

This serves the production build on a local server (usually `http://localhost:4173`)

### Deploy

The `dist` folder contains all files needed for deployment. You can deploy to:

- **Netlify:** Drag and drop the `dist` folder
- **Vercel:** Connect your GitHub repo or deploy the `dist` folder
- **GitHub Pages:** Push the `dist` folder contents
- **Any static hosting service**

## 📁 Project Structure

```
health-tracker-app/
├── public/                    # Public assets (if any)
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Login.jsx        # Login page component
│   │   ├── Layout.jsx       # Main layout wrapper
│   │   ├── Sidebar.jsx      # Navigation sidebar
│   │   ├── Modal.jsx        # Reusable modal component
│   │   ├── Icons.jsx        # SVG icon components
│   │   ├── MedicationForm.jsx
│   │   ├── MedicationList.jsx
│   │   ├── VitalsForm.jsx
│   │   └── VitalsLog.jsx
│   ├── pages/               # Page components
│   │   ├── Dashboard.jsx    # Dashboard page
│   │   ├── Medications.jsx # Medications page
│   │   └── Vitals.jsx       # Vital signs page
│   ├── hooks/              # Custom React hooks
│   │   └── useInactivity.js # Auto-logout hook
│   ├── utils/              # Utility functions
│   │   └── storage.js      # Local Storage helpers
│   ├── App.jsx            # Main app component with routes
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles and Tailwind imports
├── index.html             # HTML template
├── package.json          # Dependencies and scripts
├── package-lock.json    # Locked dependency versions
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 💡 Usage

### Adding a Medication

1. Navigate to "Medications" page
2. Click "Add Medication" button
3. Fill in:
   - **Medication Name:** e.g., "Lisinopril"
   - **Dosage:** e.g., "20mg"
   - **Frequency:** e.g., "Once daily in the morning"
4. Click "Add Medication"
5. The medication appears in your list immediately

### Logging Vital Signs

1. Navigate to "Vital Signs" page
2. Click "Log Vital Signs" button
3. Enter:
   - **Blood Pressure (Systolic):** e.g., 120
   - **Blood Pressure (Diastolic):** e.g., 80
   - **Heart Rate (BPM):** e.g., 65
   - **Weight:** e.g., 150
4. Click "Log Vital Signs"
5. The entry is added to your history with a timestamp

### Viewing Statistics

The Dashboard displays:
- Total number of medications
- Total vital signs logs
- Latest vital signs entry
- Average blood pressure (if you have 2+ entries)
- Average heart rate (if you have 2+ entries)
- Average weight (if you have 2+ entries)

### Data Persistence

- All data is stored in your browser's Local Storage
- Data is user-specific (different usernames = different data)
- Data persists across browser sessions
- Data is cleared when you log out

## ⚙️ Configuration

### Changing Auto-Logout Time

The auto-logout timeout is set to 10 minutes (600,000 milliseconds). To change it:

1. Open `src/hooks/useInactivity.js`
2. Change the default delay value:
   ```javascript
   export const useInactivity = (callback, delay = 600000) => {
     // 600000 = 10 minutes in milliseconds
   }
   ```

3. Or update it where used:
   - `src/components/Layout.jsx`
   - `src/pages/Dashboard.jsx`

### Customizing Colors

The primary color is defined in `src/index.css`:

```css
@theme {
  --color-primary: #6366f1;        /* Indigo-600 */
  --color-primary-dark: #4f46e5;  /* Indigo-700 */
  --color-primary-light: #818cf8; /* Indigo-400 */
}
```

Change these values to customize the color scheme.

### Port Configuration

If you need to use a specific port, modify `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000  // Your desired port
  }
})
```

## 🌐 Browser Support

This application works in all modern browsers that support:

- ES6+ JavaScript (ECMAScript 2015+)
- Local Storage API
- React 18
- CSS Grid and Flexbox

**Tested browsers:**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🐛 Troubleshooting

### Port Already in Use

**Problem:** `Port 5173 is in use`

**Solution:** Vite will automatically use the next available port. Check the terminal output for the new port number.

Or manually specify a port:
```bash
npm run dev -- --port 3000
```

### Dependencies Not Installing

**Problem:** `npm install` fails

**Solutions:**
1. Clear npm cache: `npm cache clean --force`
2. Delete `node_modules` and `package-lock.json`: 
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
3. Update npm: `npm install -g npm@latest`

### Build Fails

**Problem:** `npm run build` shows errors

**Solutions:**
1. Ensure all dependencies are installed: `npm install`
2. Clear Vite cache: `rm -rf node_modules/.vite`
3. Check for TypeScript or linting errors
4. Verify all imports are correct

### Data Not Persisting

**Problem:** Data disappears after refresh

**Solutions:**
1. Check browser console for Local Storage errors
2. Ensure Local Storage is enabled in your browser
3. Check if you're using the same username
4. Try clearing browser cache and cookies (carefully!)

### Tailwind CSS Not Working

**Problem:** Styles not applying

**Solutions:**
1. Verify Tailwind is installed: `npm list tailwindcss`
2. Check `src/index.css` has `@import "tailwindcss";`
3. Restart the dev server
4. Clear browser cache

## 📝 Testing Credentials

For testing purposes, you can use any username. No password is required.

**Example usernames:**
- `user1`
- `john`
- `testuser`
- `admin`

Each username will have its own separate data storage in Local Storage.

## 📄 License

This project is part of an assessment case study.

## 👤 Author

**Michael Sholadiran**
- GitHub: [@michaelsholadiran](https://github.com/michaelsholadiran)
- Email: sholadiranmichael@gmail.com

## 🤝 Contributing

This is a case study project. Contributions are welcome! Please feel free to submit issues or pull requests.

## 🙏 Acknowledgments

- React Team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vite for the fast build tool

---

**Happy Tracking! 📊💊**
