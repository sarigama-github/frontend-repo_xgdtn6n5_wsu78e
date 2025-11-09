import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectsShowcase({ github }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const user = github?.split('/').pop() || 'octocat';
    fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=6`)
      .then((r) => r.json())
      .then((data) => setProjects(Array.isArray(data) ? data : []))
      .catch(() => setProjects([]));
  }, [github]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-100 to-sky-200 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 className="text-3xl md:text-5xl font-bold text-slate-800" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Projects
        </motion.h2>
        <p className="mt-2 text-slate-600">Pulled live from GitHub.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.a
              key={p.id}
              href={p.html_url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl bg-white/80 backdrop-blur-xl p-6 ring-1 ring-sky-300/40 shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-sky-700">{p.name}</h3>
                <span className="text-xs text-slate-500">★ {p.stargazers_count}</span>
              </div>
              <p className="mt-3 text-sm text-slate-600 line-clamp-3">{p.description || 'No description provided.'}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                {p.language && <span className="rounded bg-sky-100 px-2 py-1">{p.language}</span>}
                {p.topics?.slice(0,3).map((t) => (
                  <span key={t} className="rounded bg-slate-100 px-2 py-1">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
