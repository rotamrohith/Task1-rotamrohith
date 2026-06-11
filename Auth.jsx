import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { GlassCard } from "../components/ui.jsx";

export default function Auth({ mode }) {
  const isSignup = mode === "signup";
  const isForgot = mode === "forgot";
  const title = isForgot ? "Reset your password" : isSignup ? "Create your account" : "Welcome back";
  return (
    <section className="mx-auto grid min-h-[calc(100vh-180px)] max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">CareerConnect access</p>
        <h1 className="mt-3 text-4xl font-black md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-md text-slate-600 dark:text-slate-300">Keep your profile, applications, resume analysis, saved jobs, and hiring alerts synced in one clean dashboard.</p>
      </div>
      <GlassCard className="mx-auto w-full max-w-md">
        <h2 className="mb-6 text-2xl font-black">{title}</h2>
        <div className="grid gap-3">
          {isSignup && <input className="input" placeholder="Full name" />}
          <input className="input" placeholder="Email address" type="email" />
          {!isForgot && <input className="input" placeholder="Password" type="password" />}
          {isSignup && <input className="input" placeholder="Confirm password" type="password" />}
          <button className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 font-black text-white">{isForgot ? "Send Reset Link" : isSignup ? "Create Account" : "Login"}</button>
        </div>
        {!isForgot && (
          <>
            <div className="my-5 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-400"><span className="h-px flex-1 bg-slate-200 dark:bg-white/10" /> or continue with <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" /></div>
            <div className="grid gap-3 sm:grid-cols-2">
              <button className="rounded-xl border border-white/20 bg-white/60 px-4 py-3 font-bold dark:bg-white/10">G Google</button>
              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/60 px-4 py-3 font-bold dark:bg-white/10"><Linkedin size={18} /> LinkedIn</button>
            </div>
          </>
        )}
        <div className="mt-5 text-center text-sm text-slate-600 dark:text-slate-300">
          {isForgot ? <Link className="font-bold text-blue-600" to="/login">Back to login</Link> : isSignup ? <>Already registered? <Link className="font-bold text-blue-600" to="/login">Login</Link></> : <>New here? <Link className="font-bold text-blue-600" to="/signup">Create account</Link> - <Link className="font-bold text-blue-600" to="/forgot-password">Forgot password?</Link></>}
        </div>
      </GlassCard>
    </section>
  );
}
