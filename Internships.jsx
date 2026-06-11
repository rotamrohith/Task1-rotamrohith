import DashboardShell from "../components/DashboardShell.jsx";
import { internships } from "../data/mockData.js";
import { InternshipCard, SearchBox } from "../components/ui.jsx";

export default function Internships() {
  return (
    <DashboardShell title="Internships">
      <SearchBox placeholder="Search internships, duration, stipend, skills" />
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {internships.map((internship) => <InternshipCard key={internship.id} internship={internship} />)}
      </div>
    </DashboardShell>
  );
}
