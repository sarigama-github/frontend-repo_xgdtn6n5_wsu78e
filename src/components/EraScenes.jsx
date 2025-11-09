import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import HeroSpline from './HeroSpline';

const beat = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.15,
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function EraScenes({ name, tagline }) {
  const ctrls = useAnimation();

  // Gentle scroll snap on supported browsers
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="w-full">
      {/* Era 1: Medieval Kingdom */}
      <section id="era-1" className="relative min-h-screen snap-start bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2MDI3MTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-yellow-900/30 mix-blend-multiply" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h1
              className="text-4xl md:text-6xl font-serif text-yellow-100 drop-shadow-2xl"
              custom={0}
              variants={beat}
              style={{
                textShadow: '0 0 14px rgba(255,215,0,0.35)',
              }}
            >
              Welcome, traveler
            </motion.h1>
            <motion.p className="mt-4 max-w-2xl text-lg md:text-2xl text-yellow-100/90" custom={1} variants={beat}>
              I am {name}, a seeker of craft and code. This crest marks my path.
            </motion.p>
            <motion.div className="mt-10 inline-flex items-center gap-3 rounded-full bg-yellow-50/10 px-6 py-3 ring-1 ring-yellow-200/30 backdrop-blur-sm" custom={2} variants={beat}>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-200/20 text-yellow-100 font-black text-2xl shadow-[0_0_40px_rgba(255,215,0,0.2)]">S</span>
              <span className="text-yellow-100/90 font-medium">House of Sharan — Crest of the Initial</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Era 2: Industrial Revolution */}
      <section id="era-2" className="relative min-h-screen snap-start bg-gradient-to-b from-zinc-900 to-black text-zinc-100">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_30%,#d4af37_1px,transparent_1px)] [background-size:30px_30px]" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
          <motion.h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22,1,0.36,1] }}>
            Brass, Steam, and Gears
          </motion.h2>
          <motion.p className="mt-4 max-w-3xl text-zinc-300" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.9 }}>
            I forged discipline in systems thinking: precision, mechanisms, and reliable delivery.
          </motion.p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Systems Design","Performance","Reliability"].map((t,i)=> (
              <motion.div key={t} className="rounded-lg bg-zinc-800/60 p-6 ring-1 ring-zinc-700/60 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i*0.2, duration: 0.8 }}>
                <div className="h-2 w-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-4" />
                <p className="text-zinc-200">{t}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Era 3: DOS / CRT Skills (separate component appears later) + lightweight nav hint */}
      <section id="era-3" className="relative min-h-screen snap-start bg-black text-green-400">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0a0f0a_0%,#000_70%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24">
          <motion.div className="mb-6 inline-flex items-center gap-3 rounded bg-green-500/10 px-4 py-2 ring-1 ring-green-500/30" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-green-300">Navigation unlocked</span>
          </motion.div>
          <motion.h2 className="font-mono text-3xl md:text-5xl tracking-tight text-green-300" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            Skills Terminal
          </motion.h2>
          <p className="mt-2 text-green-400/80 font-mono">Scroll to open the console…</p>
        </div>
      </section>

      {/* Era 4: Early Web — About Me lives at the edge of this transition */}
      <section id="era-4" className="relative min-h-screen snap-start bg-gradient-to-br from-blue-100 to-sky-200 text-slate-800">
        <div className="relative mx-auto max-w-5xl px-6 py-24">
          <motion.h2 className="text-3xl md:text-5xl font-bold" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            About Me
          </motion.h2>
          <motion.p className="mt-4 max-w-3xl text-lg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.9 }}>
            I turn ideas into thoughtfully engineered experiences. I blend storytelling, animation, and systems to make interfaces that feel alive.
          </motion.p>
          <motion.div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }}>
            {['Frontend', 'Backend', '3D & Motion'].map((k,i)=> (
              <motion.div key={k} custom={i} variants={beat} className="rounded-xl bg-white shadow-lg ring-1 ring-sky-300/40 p-6">
                <p className="text-sky-700 font-semibold">{k}</p>
                <p className="text-slate-600 mt-2 text-sm">Crafting usable and resilient systems with a love for polish.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Era 5: Modern AI — glass panels, used again in projects section */}
      <section id="era-5" className="relative min-h-screen snap-start bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.18),transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
          <motion.h2 className="text-3xl md:text-5xl font-semibold" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Present: Minimal, Intelligent, Calm
          </motion.h2>
          <motion.p className="mt-4 max-w-3xl text-slate-300" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            Certifications, research, and professional work organized with clarity.
          </motion.p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((n)=> (
              <motion.div key={n} className="rounded-2xl bg-white/5 backdrop-blur-xl p-6 ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <p className="text-slate-200">Research / Paper {n}</p>
                <p className="text-slate-400 text-sm mt-2">Add later via Markdown upload.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Era 6: Cyberpunk Hero with Spline */}
      <HeroSpline name={name} tagline={tagline} />
    </div>
  );
}
