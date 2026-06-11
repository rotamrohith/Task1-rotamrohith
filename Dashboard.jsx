import { Bell, Bookmark, Briefcase, GraduationCap } from "lucide-react";
import DashboardShell from "../components/DashboardShell.jsx";
import { applications, internships, jobs, notifications, profile } from "../data/mockData.js";
import { GlassCard, InternshipCard, JobCard, MiniChart, ProgressBar, SectionTitle, StatCard } from "../components/ui.jsx";

export default function Dashboard() {
  return (
    <DashboardShell title={`Welcome, ${profile.name.split(" ")[0]}`}>
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard icon={Briefcase} label="Recommended Jobs" value="24" />
        <StatCard icon={GraduationCap} label="Internship Matches" value="16" />
        <StatCard icon={Bookmark} label="Saved Jobs" value="9" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <GlassCard>
          <h2 className="mb-4 text-xl font-black">Profile completion</h2>
          <ProgressBar value={profile.completion} label="Career profile" />
          <div className="mt-6"><MiniChart /></div>
        </GlassCard>
        <GlassCard>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-black"><Bell size={20} /> Notifications</h2>
          <div className="grid gap-3">
            {notifications.slice(0, 3).map((item) => <div key={item.id} className="rounded-xl bg-white/50 p-3 dark:bg-white/10"><p className="font-bold">{item.type}</p><p className="text-sm text-slate-600 dark:text-slate-300">{item.text}</p></div>)}
          </div>
        </GlassCard>
      </div>
      <div className="mt-8">
        <SectionTitle title="Recommended jobs" />
        <div className="grid gap-4 xl:grid-cols-2">{jobs.slice(0, 2).map((job) => <JobCard key={job.id} job={job} compact />)}</div>
      </div>
      <div className="mt-8">
        <SectionTitle title="Recommended internships" />
        <div className="grid gap-4 lg:grid-cols-2">{internships.slice(0, 2).map((internship) => <InternshipCard key={internship.id} internship={internship} />)}</div>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <GlassCard>
          <h2 className="mb-4 text-xl font-black">Recent applications</h2>
          {applications.slice(0, 4).map((app) => <div key={app.id} className="flex items-center justify-between border-b border-slate-200/60 py-3 last:border-0 dark:border-white/10"><div><p className="font-bold">{app.role}</p><p className="text-sm text-slate-500">{app.company}</p></div><span className="text-sm font-bold text-blue-600">{app.status}</span></div>)}
        </GlassCard>
        <GlassCard>
          <h2 className="mb-4 text-xl font-black">Saved jobs</h2>
          {jobs.slice(1, 4).map((job) => <div key={job.id} className="flex items-center justify-between border-b border-slate-200/60 py-3 last:border-0 dark:border-white/10"><div><p className="font-bold">{job.title}</p><p className="text-sm text-slate-500">{job.company}</p></div><Bookmark className="text-purple-500" size={18} /></div>)}
        </GlassCard>
      </div>
    </DashboardShell>
  );
}
