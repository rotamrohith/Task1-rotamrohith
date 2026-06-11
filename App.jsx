import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Toast } from "./components/ui.jsx";
import Landing from "./pages/Landing.jsx";
import Auth from "./pages/Auth.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import JobSearch from "./pages/JobSearch.jsx";
import JobDetails from "./pages/JobDetails.jsx";
import Internships from "./pages/Internships.jsx";
import ResumeAnalyzer from "./pages/ResumeAnalyzer.jsx";
import ApplicationTracker from "./pages/ApplicationTracker.jsx";
import Profile from "./pages/Profile.jsx";
import Companies from "./pages/Companies.jsx";
import Notifications from "./pages/Notifications.jsx";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.28),transparent_34%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.20),transparent_30%),linear-gradient(135deg,rgba(6,182,212,0.09),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.22),transparent_30%),linear-gradient(135deg,rgba(2,6,23,1),rgba(15,23,42,1))]" />
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Auth mode="login" />} />
          <Route path="/signup" element={<Auth mode="signup" />} />
          <Route path="/forgot-password" element={<Auth mode="forgot" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<JobSearch />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
          <Route path="/tracker" element={<ApplicationTracker />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </main>
      <Footer />
      <Toast />
    </div>
  );
}
