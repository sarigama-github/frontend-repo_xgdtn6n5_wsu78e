import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSpline({ name, tagline }) {
  return (
    <section id="era-6" className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Neon gradient veil to boost contrast without blocking pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#a46bff22,transparent_50%),radial-gradient(circle_at_80%_30%,#ff008c22,transparent_40%),radial-gradient(circle_at_50%_80%,#4cc9f022,transparent_45%)]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="backdrop-blur-md/0"
        >
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
              style={{ textShadow: '0 0 30px rgba(164,107,255,0.6)' }}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a46bff] via-[#4cc9f0] to-[#ff008c]">
                {name}
              </span>
            </motion.h1>
            <p className="mt-4 text-lg md:text-2xl text-white/90" style={{ textShadow: '0 0 10px rgba(76,201,240,0.4)' }}>
              {tagline}
            </p>
            <motion.p
              className="mt-8 inline-block rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm md:text-base text-white shadow-[0_0_30px_rgba(255,0,140,0.25)]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              I build the future.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
