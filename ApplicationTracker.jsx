import DashboardShell from "../components/DashboardShell.jsx";
import { applications } from "../data/mockData.js";
import { Badge, GlassCard } from "../components/ui.jsx";

const columns = ["Applied", "Under Review", "Interview Scheduled", "Selected", "Rejected"];

export default function ApplicationTracker() {
  return (
    <DashboardShell title="Application Tracker">
      <div className="grid gap-4 xl:grid-cols-5">
        {columns.map((column) => (
          <GlassCard key={column} className="min-h-80">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-black">{column}</h2>
              <Badge tone={column === "Rejected" ? "red" : column === "Selected" ? "green" : "blue"}>{applications.filter((item) => item.status === column).length}</Badge>
            </div>
            <div className="grid gap-3">
              {applications.filter((item) => item.status === column).map((item) => (
                <div key={item.id} className="rounded-2xl bg-white/60 p-4 shadow-sm dark:bg-white/10">
                  <p className="font-black">{item.role}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.company}</p>
                  <p className="mt-3 text-xs font-bold text-blue-600 dark:text-cyan-300">{item.date}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </DashboardShell>
  );
}
