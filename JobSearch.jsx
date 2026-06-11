import DashboardShell from "../components/DashboardShell.jsx";
import { jobs } from "../data/mockData.js";
import { Badge, GlassCard, JobCard, SearchBox } from "../components/ui.jsx";

const filters = ["Full-time", "Part-time", "Internship", "Remote", "Hybrid"];

export default function JobSearch() {
  return (
    <DashboardShell title="Job Search">
      <SearchBox placeholder="Search by job title, company, skills" />
      <div className="mt-5 grid gap-4 lg:grid-cols-[280px_1fr]">
        <GlassCard className="h-fit">
          <h2 className="mb-4 text-lg font-black">Search filters</h2>
          <div className="grid gap-3">
            {["Job title", "Company", "Location", "Skills"].map((field) => <input key={field} className="input" placeholder={field} />)}
          </div>
          <h3 className="mb-3 mt-6 font-black">Work type</h3>
          <div className="flex flex-wrap gap-2">{filters.map((filter) => <Badge key={filter} tone={filter === "Remote" ? "cyan" : "blue"}>{filter}</Badge>)}</div>
          <h3 className="mb-3 mt-6 font-black">Sort by</h3>
          <select className="input"><option>Newest</option><option>Salary</option><option>Relevance</option></select>
        </GlassCard>
        <div className="grid gap-4 xl:grid-cols-2">{jobs.map((job) => <JobCard key={job.id} job={job} />)}</div>
      </div>
    </DashboardShell>
  );
}
