import DashboardShell from "../components/DashboardShell.jsx";
import { companies } from "../data/mockData.js";
import { CompanyCard, GlassCard, SearchBox } from "../components/ui.jsx";

export default function Companies() {
  return (
    <DashboardShell title="Companies">
      <SearchBox placeholder="Search companies, industries, hiring status" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {companies.map((company) => <CompanyCard key={company.id} company={company} />)}
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {companies.map((company) => (
          <GlassCard key={company.name}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-black">{company.name}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-300">{company.domain} company profile</p>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-bold text-emerald-600 dark:text-emerald-300">{company.status}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Open positions across engineering, design, data, and early-career internships for students with strong portfolios.</p>
            <p className="mt-4 font-black text-blue-600 dark:text-cyan-300">{company.open} open positions</p>
          </GlassCard>
        ))}
      </div>
    </DashboardShell>
  );
}
