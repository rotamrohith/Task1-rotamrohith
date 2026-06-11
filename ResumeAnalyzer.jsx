import { FileUp, Sparkles } from "lucide-react";
import DashboardShell from "../components/DashboardShell.jsx";
import { jobs } from "../data/mockData.js";
import { Badge, GlassCard, JobCard, ProgressBar, SectionTitle } from "../components/ui.jsx";

export default function ResumeAnalyzer() {
  return (
    <DashboardShell title="Resume Analyzer">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <GlassCard className="flex min-h-72 flex-col items-center justify-center border-dashed text-center">
          <div className="mb-5 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 p-5 text-white"><FileUp size={34} /></div>
          <h2 className="text-2xl font-black">Upload resume</h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-300">Drag your resume here or browse a PDF/DOCX file to generate ATS insights and role matches.</p>
          <button className="mt-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-black text-white">Choose File</button>
        </GlassCard>
        <GlassCard>
          <div className="mb-5 flex items-center gap-3">
            <Sparkles className="text-cyan-500" />
            <h2 className="text-2xl font-black">ATS Score Card</h2>
          </div>
          <ProgressBar value={78} label="ATS compatibility" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/50 p-4 dark:bg-white/10"><p className="text-sm text-slate-500">Keyword match</p><p className="text-3xl font-black">84%</p></div>
            <div className="rounded-2xl bg-white/50 p-4 dark:bg-white/10"><p className="text-sm text-slate-500">Formatting score</p><p className="text-3xl font-black">72%</p></div>
          </div>
        </GlassCard>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <GlassCard>
          <h2 className="mb-4 text-xl font-black">Missing skills</h2>
          <div className="flex flex-wrap gap-2">{["TypeScript", "Testing", "GraphQL", "System Design"].map((skill) => <Badge key={skill} tone="purple">{skill}</Badge>)}</div>
        </GlassCard>
        <GlassCard>
          <h2 className="mb-4 text-xl font-black">Suggested improvements</h2>
          <ul className="grid gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            <li>Add quantified impact for projects and internships.</li>
            <li>Move technical skills closer to the top of the resume.</li>
            <li>Include links to deployed projects and GitHub repositories.</li>
          </ul>
        </GlassCard>
      </div>
      <div className="mt-8">
        <SectionTitle title="Matching jobs" />
        <div className="grid gap-4 lg:grid-cols-2">{jobs.slice(0, 2).map((job) => <JobCard key={job.id} job={job} compact />)}</div>
      </div>
    </DashboardShell>
  );
}
