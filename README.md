# Health Tracker App

A React web application for tracking medications and logging vital signs.

## Quick Start

### 1. Prerequisites

Make sure you have **Node.js** installed (version 14 or higher).

Check if you have it:
```bash
node --version
```

If you don't have Node.js, download it from: https://nodejs.org/

### 2. Clone the Repository

```bash
git clone git@github.com:michaelsholadiran/health-tracker-app.git
cd health-tracker-app
```

### 3. Install Dependencies

```bash
npm install
```

Wait for this to finish. It might take a minute or two.

### 4. Run the Project

```bash
npm run dev
```

### 5. Open in Browser

The terminal will show you a URL like:
```
➜  Local:   http://localhost:5173/
```

Open this URL in your browser (Chrome, Firefox, Safari, etc.)

### 6. Test the App

1. **Login:** Enter any username (e.g., "testuser") - no password needed
2. **Add Medications:** Click "Medications" → "Add Medication"
3. **Log Vital Signs:** Click "Vital Signs" → "Log Vital Signs"
4. **View Dashboard:** Click "Dashboard" to see statistics

That's it! 🎉

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/    # Reusable components (Login, Sidebar, Modal, etc.)
├── pages/        # Page components (Dashboard, Medications, Vitals)
├── hooks/        # Custom React hooks
├── utils/        # Helper functions (storage utilities)
└── App.jsx       # Main app with routes
```

## Technology Stack

- **React** 18.3.1
- **React Router** - For navigation
- **Tailwind CSS** - For styling
- **Vite** - Build tool

## Troubleshooting

### Port Already in Use?

If port 5173 is in use, Vite will automatically use the next available port. Check your terminal for the new URL.

### Dependencies Won't Install?

Try this:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors?

Make sure all dependencies are installed:
```bash
npm install
```

## Features

- ✅ Add and remove medications
- ✅ Log vital signs (blood pressure, heart rate, weight)
- ✅ View statistics on dashboard
- ✅ Data persists in browser (survives refresh)
- ✅ User-specific data storage
- ✅ Auto-logout after 10 minutes of inactivity

## Notes

- Data is stored in your browser's Local Storage
- Each username has separate data
- No password required for login (username only)

## License

This project is part of an assessment case study.
