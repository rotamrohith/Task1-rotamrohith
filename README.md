# CareerConnect

CareerConnect is a modern, responsive Job & Internship Finder Portal built with React, Tailwind CSS, React Router, and Framer Motion. It includes a professional glassmorphism interface, dark/light mode, dashboard views, job search, internship listings, resume analysis, application tracking, company profiles, and notification screens.

## Features

- Modern landing page with hero search, statistics, featured companies, and calls to action
- Authentication screens for login, signup, and forgot password
- Student dashboard with profile completion, recommendations, saved jobs, recent applications, notifications, and analytics chart
- Job search page with keyword/location search, filters, and sorting UI
- Job details page with company logo, description, skills, salary, location, apply modal, save button, and similar jobs
- Internship listings with duration, stipend, skills, and apply actions
- Resume analyzer with upload area, ATS score card, missing skills, suggestions, and matching jobs
- Application tracker with Kanban columns
- Profile page with personal information, education, skills, certifications, projects, and resume upload
- Company directory with company profiles, open positions, and hiring status
- Notifications page for application updates, job alerts, and interview reminders
- Responsive navbar, dashboard sidebar, cards, badges, progress bars, charts, toast, and modal dialog
- Fully responsive layouts for mobile, tablet, and desktop
- Dummy JSON data for easy customization

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React Icons

## Project Structure

```text
careerconnect/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── preview.html
├── serve-preview.ps1
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components/
    │   ├── DashboardShell.jsx
    │   ├── Footer.jsx
    │   ├── Navbar.jsx
    │   └── ui.jsx
    ├── data/
    │   └── mockData.js
    └── pages/
        ├── ApplicationTracker.jsx
        ├── Auth.jsx
        ├── Companies.jsx
        ├── Dashboard.jsx
        ├── Internships.jsx
        ├── JobDetails.jsx
        ├── JobSearch.jsx
        ├── Landing.jsx
        ├── Notifications.jsx
        ├── Profile.jsx
        └── ResumeAnalyzer.jsx
```

## Getting Started

### Prerequisites

Install Node.js and npm.

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Routes

```text
/                  Landing page
/login             Login page
/signup            Signup page
/forgot-password   Forgot password page
/dashboard         Student dashboard
/jobs              Job search page
/jobs/:id          Job details page
/internships       Internship listings
/resume-analyzer   Resume analyzer
/tracker           Application tracker
/profile           Student profile
/companies         Company directory
/notifications     Notifications
```

## Preview Without npm

This project also includes a standalone `preview.html` and `serve-preview.ps1` for quick local preview in restricted environments. The full React/Vite app remains the main source code.

```powershell
powershell -ExecutionPolicy Bypass -File .\serve-preview.ps1
```

Then open:

```text
http://127.0.0.1:5173/
```

## Customization

- Update sample jobs, internships, companies, applications, notifications, and profile data in `src/data/mockData.js`.
- Modify shared UI components in `src/components/ui.jsx`.
- Adjust global styles and glassmorphism effects in `src/styles.css`.
- Add or update pages in `src/pages/`.

## Design Highlights

- Primary color: Blue
- Secondary color: Purple
- Accent color: Cyan
- Glassmorphism cards and panels
- Gradient buttons and highlights
- Dark/light mode toggle
- Smooth motion interactions
- Dashboard-first layout for productivity workflows

## Author
    
    Rotam Rohith

## License

This project is open for learning, portfolio, and customization use.
