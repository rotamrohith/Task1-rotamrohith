import { motion } from "framer-motion";
import { Briefcase, FileUp, GraduationCap, Search, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { companies, jobs } from "../data/mockData.js";
import { CompanyCard, JobCard, SearchBox, SectionTitle, StatCard } from "../components/ui.jsx";

export default function Landing() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:min-h-[calc(100vh-76px)] lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}>
          <span className="mb-5 inline-flex rounded-full border border-white/30 bg-white/60 px-4 py-2 text-sm font-bold text-blue-700 backdrop-blur-xl dark:bg-white/10 dark:text-cyan-200">Student careers, organized beautifully</span>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-slate-950 dark:text-white md:text-7xl">Find Your Dream Job & Internship</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Search curated roles, track applications, analyze resumes, and discover companies that match your skills and ambitions.</p>
          <div className="mt-8 max-w-3xl"><SearchBox /></div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to="/jobs" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 font-black text-white shadow-xl shadow-blue-500/25"><Search size={18} /> Find Jobs</Link>
            <Link to="/resume-analyzer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/70 px-6 py-4 font-black backdrop-blur-xl transition hover:bg-white dark:bg-white/10 dark:hover:bg-white/20"><FileUp size={18} /> Upload Resume</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="relative">
          <div className="glass rounded-[2rem] border border-white/20 p-4 shadow-glow">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 p-5 text-white">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-cyan-200">Top match</p>
                  <h3 className="text-2xl font-black">Frontend Developer</h3>
                </div>
                <div className="rounded-2xl bg-white/10 p-3"><Briefcase /></div>
              </div>
              <div className="grid gap-3">
                {jobs.slice(0, 3).map((job) => (
                  <div key={job.id} className="rounded-2xl bg-white/10 p-4 backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-bold">{job.title}</p>
                        <p className="text-sm text-slate-300">{job.company} - {job.location}</p>
                      </div>
                      <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-black text-slate-950">{job.salary}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard icon={Briefcase} label="Jobs Available" value="12,480" />
          <StatCard icon={GraduationCap} label="Internships Available" value="4,920" />
          <StatCard icon={Users} label="Registered Students" value="86K+" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Featured companies" title="Hiring teams students love" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((company) => <CompanyCard key={company.id} company={company} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Recommended" title="Fresh opportunities" action={<Link to="/jobs" className="text-sm font-black text-blue-600 dark:text-cyan-300">Explore all</Link>} />
        <div className="grid gap-4 lg:grid-cols-2">
          {jobs.slice(0, 2).map((job) => <JobCard key={job.id} job={job} />)}
        </div>
      </section>
    </div>
  );
}
