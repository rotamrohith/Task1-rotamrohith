export const companies = [
  { id: 1, name: "NovaTech", logo: "NT", domain: "Cloud AI", open: 14, status: "Actively hiring", gradient: "from-blue-500 to-cyan-400" },
  { id: 2, name: "PixelForge", logo: "PF", domain: "Product Design", open: 8, status: "New roles", gradient: "from-purple-500 to-pink-400" },
  { id: 3, name: "FinEdge", logo: "FE", domain: "Fintech", open: 11, status: "Campus drive", gradient: "from-emerald-500 to-cyan-400" },
  { id: 4, name: "HealthSync", logo: "HS", domain: "Healthtech", open: 6, status: "Remote friendly", gradient: "from-indigo-500 to-sky-400" }
];

export const jobs = [
  {
    id: "job-1",
    title: "Frontend Developer",
    company: "NovaTech",
    logo: "NT",
    location: "Bengaluru",
    type: "Full-time",
    mode: "Hybrid",
    salary: "12-18 LPA",
    posted: "2 days ago",
    skills: ["React", "Tailwind", "TypeScript"],
    description: "Build polished customer dashboards, reusable component systems, and data-rich workflows for AI operations teams."
  },
  {
    id: "job-2",
    title: "Product Analyst",
    company: "FinEdge",
    logo: "FE",
    location: "Mumbai",
    type: "Full-time",
    mode: "Remote",
    salary: "10-14 LPA",
    posted: "Today",
    skills: ["SQL", "Python", "Dashboards"],
    description: "Turn product usage signals into actionable insights and partner with product managers on growth experiments."
  },
  {
    id: "job-3",
    title: "UX Designer",
    company: "PixelForge",
    logo: "PF",
    location: "Delhi NCR",
    type: "Part-time",
    mode: "Remote",
    salary: "6-9 LPA",
    posted: "5 days ago",
    skills: ["Figma", "Research", "Prototyping"],
    description: "Design intuitive interfaces for early-stage SaaS teams with a strong focus on systems thinking and accessibility."
  },
  {
    id: "job-4",
    title: "Backend Engineer",
    company: "HealthSync",
    logo: "HS",
    location: "Hyderabad",
    type: "Full-time",
    mode: "Hybrid",
    salary: "14-22 LPA",
    posted: "1 week ago",
    skills: ["Node.js", "PostgreSQL", "APIs"],
    description: "Own secure healthcare APIs, database design, and service reliability for patient engagement products."
  }
];

export const internships = [
  { id: 1, title: "React Intern", company: "NovaTech", duration: "6 months", stipend: "25k/month", location: "Remote", skills: ["React", "CSS", "Git"] },
  { id: 2, title: "Data Science Intern", company: "FinEdge", duration: "4 months", stipend: "30k/month", location: "Mumbai", skills: ["Python", "ML", "SQL"] },
  { id: 3, title: "UI Design Intern", company: "PixelForge", duration: "3 months", stipend: "18k/month", location: "Delhi NCR", skills: ["Figma", "Wireframes", "UX"] },
  { id: 4, title: "QA Automation Intern", company: "HealthSync", duration: "5 months", stipend: "22k/month", location: "Hyderabad", skills: ["Playwright", "Testing", "JS"] }
];

export const applications = [
  { id: 1, role: "Frontend Developer", company: "NovaTech", status: "Applied", date: "Jun 9" },
  { id: 2, role: "Product Analyst", company: "FinEdge", status: "Under Review", date: "Jun 7" },
  { id: 3, role: "React Intern", company: "NovaTech", status: "Interview Scheduled", date: "Jun 12" },
  { id: 4, role: "UX Designer", company: "PixelForge", status: "Selected", date: "Jun 5" },
  { id: 5, role: "Backend Engineer", company: "HealthSync", status: "Rejected", date: "Jun 1" }
];

export const notifications = [
  { id: 1, type: "Application update", text: "NovaTech moved your application to Under Review.", time: "15 min ago" },
  { id: 2, type: "Job alert", text: "8 new remote React jobs match your profile.", time: "1 hour ago" },
  { id: 3, type: "Interview reminder", text: "React Intern interview starts tomorrow at 11:00 AM.", time: "Yesterday" },
  { id: 4, type: "Resume tip", text: "Add measurable project outcomes to improve your ATS score.", time: "2 days ago" }
];

export const profile = {
  name: "Aarav Mehta",
  title: "Computer Science Student",
  location: "Pune, India",
  email: "aarav.mehta@example.com",
  completion: 82,
  skills: ["React", "JavaScript", "Python", "SQL", "Figma", "Node.js"],
  education: ["B.Tech Computer Science, 2023-2027", "Cloud Foundations Certificate"],
  projects: ["AI Resume Matcher", "Campus Placement Portal", "Expense Analytics Dashboard"],
  certifications: ["Meta Front-End Developer", "Google Data Analytics"]
};
