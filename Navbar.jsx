import { BriefcaseBusiness, Menu, Moon, Search, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  ["Jobs", "/jobs"],
  ["Internships", "/internships"],
  ["Resume Analyzer", "/resume-analyzer"],
  ["Companies", "/companies"],
  ["Dashboard", "/dashboard"]
];

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-white/20 bg-white/60 backdrop-blur-2xl dark:bg-slate-950/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-400 p-2 text-white"><BriefcaseBusiness size={22} /></span>
          <span className="text-xl font-black">CareerConnect</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-bold transition ${isActive ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "text-slate-600 hover:bg-white/70 dark:text-slate-300 dark:hover:bg-white/10"}`}>{label}</NavLink>
          ))}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <button className="rounded-full p-3 transition hover:bg-white/70 dark:hover:bg-white/10" aria-label="Search"><Search size={18} /></button>
          <button onClick={() => setDark(!dark)} className="rounded-full p-3 transition hover:bg-white/70 dark:hover:bg-white/10" aria-label="Toggle theme">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <Link to="/login" className="rounded-full px-4 py-2 text-sm font-bold hover:bg-white/70 dark:hover:bg-white/10">Login</Link>
          <Link to="/signup" className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-sm font-black text-white shadow-lg shadow-blue-500/20">Sign Up</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="rounded-full p-2 lg:hidden" aria-label="Open menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <div className="mx-4 mb-4 rounded-2xl border border-white/20 bg-white/80 p-3 shadow-xl backdrop-blur-xl dark:bg-slate-900/90 lg:hidden">
          {links.map(([label, path]) => <NavLink onClick={() => setOpen(false)} key={path} to={path} className="block rounded-xl px-4 py-3 text-sm font-bold hover:bg-blue-500/10">{label}</NavLink>)}
          <div className="mt-2 flex gap-2">
            <button onClick={() => setDark(!dark)} className="flex-1 rounded-xl bg-slate-100 px-4 py-3 font-bold dark:bg-white/10">{dark ? "Light" : "Dark"} Mode</button>
            <Link to="/login" className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-center font-bold text-white">Login</Link>
          </div>
        </div>
      )}
    </header>
  );
}
