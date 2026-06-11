import { useParams } from "react-router-dom";
import { useState } from "react";
import DashboardShell from "../components/DashboardShell.jsx";
import { jobs } from "../data/mockData.js";
import { Badge, GlassCard, JobCard, Logo, Meta, ModalDialog, SectionTitle } from "../components/ui.jsx";
import { Banknote, Bookmark, MapPin, Send } from "lucide-react";

export default function JobDetails() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const job = jobs.find((item) => item.id === id) || jobs[0];
  return (
    <DashboardShell title="Job Details">
      <GlassCard>
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-4">
            <Logo text={job.logo} className="h-16 w-16 text-xl" />
            <div>
              <h2 className="text-3xl font-black">{job.title}</h2>
              <p className="text-slate-600 dark:text-slate-300">{job.company}</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
                <Meta icon={MapPin} text={`${job.location} - ${job.mode}`} />
                <Meta icon={Banknote} text={job.salary} />
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="rounded-xl border border-white/20 bg-white/60 px-5 py-3 font-black dark:bg-white/10"><Bookmark size={18} className="inline" /> Save Job</button>
            <button onClick={() => setOpen(true)} className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-black text-white"><Send size={18} className="inline" /> Apply</button>
          </div>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <h3 className="mb-3 text-xl font-black">Job description</h3>
            <p className="leading-8 text-slate-600 dark:text-slate-300">{job.description} You will collaborate across design, engineering, and business teams to ship reliable user-facing features, maintain quality standards, and continuously improve product outcomes.</p>
            <h3 className="mb-3 mt-6 text-xl font-black">Required skills</h3>
            <div className="flex flex-wrap gap-2">{job.skills.map((skill) => <Badge key={skill} tone="cyan">{skill}</Badge>)}</div>
          </div>
          <GlassCard className="shadow-none">
            <h3 className="mb-4 text-xl font-black">Role snapshot</h3>
            <div className="grid gap-3 text-sm text-slate-600 dark:text-slate-300">
              <p><b>Package:</b> {job.salary}</p>
              <p><b>Location:</b> {job.location}</p>
              <p><b>Type:</b> {job.type}</p>
              <p><b>Work mode:</b> {job.mode}</p>
            </div>
          </GlassCard>
        </div>
      </GlassCard>
      <div className="mt-8">
        <SectionTitle title="Similar jobs" />
        <div className="grid gap-4 lg:grid-cols-2">{jobs.filter((item) => item.id !== job.id).slice(0, 2).map((item) => <JobCard key={item.id} job={item} compact />)}</div>
      </div>
      <ModalDialog open={open} onClose={() => setOpen(false)} title={`Apply to ${job.company}`}>
        <div className="grid gap-3">
          <input className="input" placeholder="Portfolio URL" />
          <textarea className="input min-h-28 py-3" placeholder="Short cover note" />
          <button onClick={() => setOpen(false)} className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-black text-white">Submit Application</button>
        </div>
      </ModalDialog>
    </DashboardShell>
  );
}
