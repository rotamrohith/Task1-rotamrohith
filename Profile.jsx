import { Edit3, FileUp } from "lucide-react";
import DashboardShell from "../components/DashboardShell.jsx";
import { profile } from "../data/mockData.js";
import { Badge, GlassCard, ProgressBar } from "../components/ui.jsx";

export default function Profile() {
  return (
    <DashboardShell title="Profile">
      <GlassCard>
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black">{profile.name}</h2>
            <p className="text-slate-600 dark:text-slate-300">{profile.title} - {profile.location}</p>
            <p className="text-sm text-slate-500">{profile.email}</p>
          </div>
          <button className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-black text-white"><Edit3 size={18} className="inline" /> Edit Profile</button>
        </div>
        <div className="mt-6"><ProgressBar value={profile.completion} label="Profile completion" /></div>
      </GlassCard>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Info title="Education details" items={profile.education} />
        <Info title="Certifications" items={profile.certifications} />
        <Info title="Projects" items={profile.projects} />
        <GlassCard>
          <h2 className="mb-4 text-xl font-black">Skills section</h2>
          <div className="flex flex-wrap gap-2">{profile.skills.map((skill) => <Badge key={skill} tone="cyan">{skill}</Badge>)}</div>
        </GlassCard>
      </div>
      <GlassCard className="mt-6">
        <h2 className="mb-4 text-xl font-black">Resume upload</h2>
        <button className="rounded-xl border border-dashed border-blue-400 bg-blue-500/10 px-5 py-4 font-black text-blue-700 dark:text-cyan-200"><FileUp size={18} className="inline" /> Upload latest resume</button>
      </GlassCard>
    </DashboardShell>
  );
}

function Info({ title, items }) {
  return (
    <GlassCard>
      <h2 className="mb-4 text-xl font-black">{title}</h2>
      <div className="grid gap-3">{items.map((item) => <div key={item} className="rounded-xl bg-white/50 p-3 text-sm font-semibold dark:bg-white/10">{item}</div>)}</div>
    </GlassCard>
  );
}
