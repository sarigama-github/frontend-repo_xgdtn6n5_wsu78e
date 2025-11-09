import React from 'react';
import { motion } from 'framer-motion';
import EraScenes from './components/EraScenes';
import TerminalSkills from './components/TerminalSkills';
import ProjectsShowcase from './components/ProjectsShowcase';

function App() {
  const name = 'Sharan S';
  const tagline = 'Not alcoholic but techoholic';
  const github = 'https://github.com/Devil1716';
  const linkedin = 'https://www.linkedin.com/in/sharan-s-01a949297/';

  return (
    <main className="min-h-screen w-full snap-y snap-mandatory overflow-x-hidden text-slate-900">
      {/* Era story rail */}
      <EraScenes name={name} tagline={tagline} />

      {/* Skills terminal (Era 3 details) */}
      <TerminalSkills github={github} />

      {/* Projects (Era 4 → 5 bridge) */}
      <ProjectsShowcase github={github} />

      {/* Contact + Resume in cyberpunk neon */}
      <section id="contact" className="relative min-h-[80vh] bg-black text-white py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,#a46bff22,transparent_40%),radial-gradient(circle_at_80%_20%,#ff008c22,transparent_40%),radial-gradient(circle_at_50%_80%,#4cc9f022,transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <motion.h2 className="text-3xl md:text-5xl font-extrabold" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Connect
          </motion.h2>
          <p className="mt-2 text-white/70">Let’s build something remarkable together.</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href={github} target="_blank" rel="noreferrer" className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6 hover:scale-[1.02] transition-transform">GitHub</a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6 hover:scale-[1.02] transition-transform">LinkedIn</a>
            <a href="#" className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6 hover:scale-[1.02] transition-transform">Download Resume</a>
          </div>

          <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="rounded-lg bg-white/10 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Your name" />
            <input className="rounded-lg bg-white/10 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Email" />
            <textarea rows={5} className="md:col-span-2 rounded-lg bg-white/10 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Message" />
            <button type="button" className="md:col-span-2 rounded-lg bg-gradient-to-r from-[#a46bff] via-[#4cc9f0] to-[#ff008c] px-6 py-3 font-semibold text-black shadow-[0_10px_40px_rgba(164,107,255,0.35)] hover:brightness-110 transition">Send</button>
          </form>
        </div>
      </section>

      <footer className="bg-black text-white/70 py-10 text-center text-sm">
        © {new Date().getFullYear()} {name}. Crafted with motion and code.
      </footer>
    </main>
  );
}

export default App;
