import { motion } from "framer-motion";
import { Bookmark, Briefcase, Building2, Calendar, CheckCircle2, MapPin, Send, Sparkles, X } from "lucide-react";
import { Link } from "react-router-dom";

export function GlassCard({ children, className = "" }) {
  return <div className={`glass rounded-2xl border border-white/20 p-5 shadow-glow ${className}`}>{children}</div>;
}

export function Badge({ children, tone = "blue" }) {
  const tones = {
    blue: "bg-blue-500/15 text-blue-700 dark:text-blue-200",
    purple: "bg-purple-500/15 text-purple-700 dark:text-purple-200",
    cyan: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-200",
    green: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-200",
    red: "bg-rose-500/15 text-rose-700 dark:text-rose-200"
  };
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}

export function ProgressBar({ value, label }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm font-semibold">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-200/70 dark:bg-white/10">
        <motion.div initial={{ width: 0 }} animate={{ width: `${value}%` }} className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400" />
      </div>
    </div>
  );
}

export function SectionTitle({ eyebrow, title, action }) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && <p className="mb-1 text-sm font-bold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">{eyebrow}</p>}
        <h2 className="text-2xl font-black text-slate-950 dark:text-white md:text-3xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}

export function JobCard({ job, compact = false }) {
  return (
    <motion.article whileHover={{ y: -5 }} className="glass rounded-2xl border border-white/20 p-5 transition">
      <div className="mb-4 flex items-start gap-4">
        <Logo text={job.logo} />
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-black text-slate-950 dark:text-white">{job.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">{job.company}</p>
        </div>
        <button className="rounded-full p-2 text-slate-500 transition hover:bg-white/40 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-white/10" aria-label="Save job">
          <Bookmark size={18} />
        </button>
      </div>
      {!compact && <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{job.description}</p>}
      <div className="mb-4 flex flex-wrap gap-2">
        {job.skills.map((skill) => <Badge key={skill} tone="cyan">{skill}</Badge>)}
      </div>
      <div className="grid gap-2 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
        <Meta icon={MapPin} text={`${job.location} - ${job.mode}`} />
        <Meta icon={Briefcase} text={`${job.type} - ${job.salary}`} />
      </div>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{job.posted}</span>
        <Link to={`/jobs/${job.id}`} className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-600 dark:bg-white dark:text-slate-950">View Details</Link>
      </div>
    </motion.article>
  );
}

export function InternshipCard({ internship }) {
  return (
    <motion.article whileHover={{ y: -5 }} className="glass rounded-2xl border border-white/20 p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-black">{internship.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">{internship.company}</p>
        </div>
        <Badge tone="purple">Internship</Badge>
      </div>
      <div className="mb-4 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
        <Meta icon={Calendar} text={internship.duration} />
        <Meta icon={Send} text={internship.stipend} />
        <Meta icon={MapPin} text={internship.location} />
      </div>
      <div className="mb-5 flex flex-wrap gap-2">
        {internship.skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}
      </div>
      <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20">Apply Now</button>
    </motion.article>
  );
}

export function Logo({ text, className = "" }) {
  return <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 font-black text-white shadow-lg shadow-blue-500/25 ${className}`}>{text}</div>;
}

export function Meta({ icon: Icon, text }) {
  return <span className="flex min-w-0 items-center gap-2"><Icon className="shrink-0 text-blue-500" size={16} /><span className="truncate">{text}</span></span>;
}

export function StatCard({ icon: Icon = Sparkles, label, value }) {
  return (
    <GlassCard>
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-3 text-white"><Icon size={22} /></div>
        <div>
          <p className="text-3xl font-black text-slate-950 dark:text-white">{value}</p>
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{label}</p>
        </div>
      </div>
    </GlassCard>
  );
}

export function Toast() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="fixed bottom-5 right-5 z-40 hidden rounded-2xl border border-white/20 bg-white/80 px-4 py-3 text-sm font-semibold shadow-2xl backdrop-blur-xl dark:bg-slate-950/80 md:flex">
      <CheckCircle2 className="mr-2 text-emerald-500" size={18} /> Profile matched with 12 new openings
    </motion.div>
  );
}

export function MiniChart() {
  const bars = [42, 75, 56, 88, 64, 95, 70];
  return (
    <div className="flex h-36 items-end gap-3">
      {bars.map((bar, index) => (
        <motion.div key={bar + index} initial={{ height: 0 }} animate={{ height: `${bar}%` }} transition={{ delay: index * 0.07 }} className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-600 via-purple-500 to-cyan-300" />
      ))}
    </div>
  );
}

export function ModalDialog({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 px-4 backdrop-blur-sm">
      <motion.div initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="glass w-full max-w-lg rounded-2xl border border-white/20 p-5 shadow-2xl">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-xl font-black">{title}</h2>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-white/60 dark:hover:bg-white/10" aria-label="Close dialog"><X size={18} /></button>
        </div>
        {children}
      </motion.div>
    </div>
  );
}

export function CompanyCard({ company }) {
  return (
    <GlassCard className="transition hover:-translate-y-1">
      <div className="mb-4 flex items-center gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${company.gradient} font-black text-white`}>{company.logo}</div>
        <div>
          <h3 className="font-black">{company.name}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">{company.domain}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Badge tone="green">{company.status}</Badge>
        <span className="text-sm font-bold">{company.open} roles</span>
      </div>
    </GlassCard>
  );
}

export function SearchBox({ placeholder = "Search jobs, skills, companies, locations" }) {
  return (
    <div className="glass flex flex-col gap-3 rounded-2xl border border-white/20 p-3 shadow-glow md:flex-row">
      <input className="min-h-12 flex-1 rounded-xl bg-white/70 px-4 text-sm outline-none ring-blue-500/0 transition placeholder:text-slate-400 focus:ring-4 dark:bg-slate-950/50" placeholder={placeholder} />
      <input className="min-h-12 rounded-xl bg-white/70 px-4 text-sm outline-none ring-blue-500/0 transition placeholder:text-slate-400 focus:ring-4 dark:bg-slate-950/50 md:w-52" placeholder="Location" />
      <button className="min-h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 text-sm font-black text-white shadow-lg shadow-blue-500/25">Search</button>
    </div>
  );
}
