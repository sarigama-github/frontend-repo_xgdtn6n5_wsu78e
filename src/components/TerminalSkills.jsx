import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const linesBase = [
  'boot> INIT BIOS...',
  'boot> LOAD drivers [ok]',
  'sys> HANDOFF -> tty0',
  'login: sharan',
  'welcome, user',
  '',
];

const skills = [
  'JavaScript / TypeScript',
  'React, Vite, Tailwind',
  'FastAPI, Node.js',
  'MongoDB',
  'Three.js, Framer Motion, GSAP',
  'CI/CD, GitHub Actions',
];

export default function TerminalSkills({ github }) {
  const [lines, setLines] = useState(linesBase);
  const [repos, setRepos] = useState([]);
  const boxRef = useRef(null);

  useEffect(() => {
    const t1 = setTimeout(() => setLines((l) => [...l, 'tty0> listing skills…']), 600);
    const t2 = setTimeout(() => {
      setLines((l) => [...l, ...skills.map((s) => ` • ${s}`), '']);
    }, 1200);
    const t3 = setTimeout(() => setLines((l) => [...l, 'tty0> fetching GitHub repositories…']), 1800);

    fetch('https://api.github.com/users/' + (github?.split('/').pop() || 'octocat') + '/repos?sort=updated&per_page=5')
      .then((r) => r.json())
      .then((data) => {
        const items = (Array.isArray(data) ? data : []).slice(0, 5);
        setRepos(items);
        setLines((l) => [
          ...l,
          ...items.map((r) => ` repo> ${r.name} — ${r.stargazers_count}★`),
          '',
          'press J/K or scroll to continue…',
        ]);
      })
      .catch(() => {
        setLines((l) => [...l, ' error: cannot reach GitHub', '']);
      });

    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [github]);

  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [lines]);

  return (
    <section className="relative min-h-screen bg-black py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-lg ring-1 ring-green-500/30 bg-[#001100] shadow-[0_0_40px_rgba(0,255,0,0.08)]"
        >
          <div className="border-b border-green-500/20 px-4 py-2 text-green-300 font-mono text-sm">CRT//SKILLS.TERM</div>
          <div ref={boxRef} className="h-[50vh] overflow-auto p-4 font-mono text-green-400 text-sm leading-6 [text-shadow:0_0_8px_rgba(0,255,0,0.6)]">
            {lines.map((ln, i) => (
              <div key={i} className="whitespace-pre-wrap">{ln}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
