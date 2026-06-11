import { Bell, Briefcase, Building2, FileSearch, LayoutDashboard, ListChecks, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  ["Dashboard", "/dashboard", LayoutDashboard],
  ["Jobs", "/jobs", Briefcase],
  ["Internships", "/internships", Building2],
  ["Resume", "/resume-analyzer", FileSearch],
  ["Tracker", "/tracker", ListChecks],
  ["Profile", "/profile", UserRound],
  ["Notifications", "/notifications", Bell]
];

export default function DashboardShell({ title, children }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
      <aside className="glass sticky top-24 hidden h-fit rounded-2xl border border-white/20 p-3 lg:block">
        {items.map(([label, path, Icon]) => (
          <NavLink key={path} to={path} className={({ isActive }) => `mb-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition ${isActive ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20" : "text-slate-600 hover:bg-white/60 dark:text-slate-300 dark:hover:bg-white/10"}`}>
            <Icon size={18} /> {label}
          </NavLink>
        ))}
      </aside>
      <div>
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Career workspace</p>
            <h1 className="text-3xl font-black md:text-4xl">{title}</h1>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
