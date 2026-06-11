import { BellRing } from "lucide-react";
import DashboardShell from "../components/DashboardShell.jsx";
import { notifications } from "../data/mockData.js";
import { GlassCard } from "../components/ui.jsx";

export default function Notifications() {
  return (
    <DashboardShell title="Notifications">
      <div className="grid gap-4">
        {notifications.map((item) => (
          <GlassCard key={item.id}>
            <div className="flex gap-4">
              <div className="h-fit rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 p-3 text-white"><BellRing size={20} /></div>
              <div>
                <h2 className="font-black">{item.type}</h2>
                <p className="mt-1 text-slate-600 dark:text-slate-300">{item.text}</p>
                <p className="mt-3 text-xs font-bold text-blue-600 dark:text-cyan-300">{item.time}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </DashboardShell>
  );
}
