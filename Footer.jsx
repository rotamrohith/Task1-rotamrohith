import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/20 bg-white/40 backdrop-blur-xl dark:bg-slate-950/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <h2 className="text-xl font-black">CareerConnect</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">A focused portal for students to discover jobs, internships, applications, resume insights, and hiring companies in one workspace.</p>
        </div>
        <div>
          <h3 className="mb-3 font-black">Company</h3>
          <div className="grid gap-2 text-sm text-slate-600 dark:text-slate-300">
            <Link to="/">About Us</Link>
            <Link to="/companies">Contact</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms & Conditions</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-black">Social</h3>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Github, Mail].map((Icon, index) => <span key={index} className="rounded-full bg-white/70 p-3 text-blue-600 dark:bg-white/10 dark:text-cyan-300"><Icon size={18} /></span>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
