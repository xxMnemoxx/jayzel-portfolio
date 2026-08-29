import React from 'react';
import Image from 'next/image';
import { Terminal, Briefcase, Mail, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="game-panel relative overflow-hidden rounded-[0.5rem] p-5 md:p-8 lg:p-10">
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="game-chip">
              <Sparkles size={10} className="text-gold" />
              Available for new quests
            </div>

            <div className="space-y-5">
              <h1 className="game-heading text-4xl leading-none text-amber-50 md:text-5xl lg:text-7xl">
                Jayzel <span className="text-teal">Llanasas</span>
              </h1>

              <div className="flex items-center gap-4 text-lg text-stone-300 md:text-2xl">
                <span className="game-ornament" />
                <span className="game-heading italic text-amber-200">Full-Stack Developer</span>
              </div>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-stone-300 md:text-lg">
              I build immersive digital experiences by joining <span className="font-semibold text-amber-200">system architecture</span> with <span className="font-semibold text-cyan-200">creative product craft</span>.
              My work blends performance, logic, and storytelling for modern web products.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="game-badge">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Online
              </span>
              <span className="game-badge">
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                8+ years craft
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 lg:items-end">
            <div className="relative w-full max-w-sm">
              <div className="game-panel-alt w-full rounded-[0.3rem] p-2">
                <div className="overflow-hidden border border-slate-700 bg-slate-900">
                  <Image
                    src="/llanasas.JPG"
                    alt="Jayzel Llanasas"
                    width={800}
                    height={800}
                    className="h-72 w-full object-cover object-center md:h-80"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="quest-panel w-full max-w-sm rounded-[0.3rem] p-3">
              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
                <p className="pixel-font text-[7px] text-amber-200">Party</p>
                <span className="pixel-font text-[7px] text-cyan-200">Lv. 28</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[7px]">
                <div className="progress-box rounded-[0.2rem] p-2">
                  <div className="mb-1 flex items-center justify-between text-stone-300">
                    <span>Quest</span>
                    <span className="text-amber-200">Live</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-slate-800">
                    <div className="h-full w-[88%] bg-amber-300" />
                  </div>
                </div>
                <div className="progress-box rounded-[0.2rem] p-2">
                  <div className="mb-1 flex items-center justify-between text-stone-300">
                    <span>Build</span>
                    <span className="text-emerald-300">92%</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-slate-800">
                    <div className="h-full w-[92%] bg-emerald-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a href="#contact" className="group flex items-center gap-2 text-stone-300 transition-colors hover:text-amber-200" title="Contact">
                <Mail size={18} className="group-hover:text-amber-200" />
                <span className="text-[9px] font-bold uppercase tracking-[0.25em]">Contact</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-stone-300 transition-colors hover:text-cyan-200" title="GitHub">
                <Terminal size={18} className="group-hover:text-cyan-200" />
                <span className="text-[9px] font-bold uppercase tracking-[0.25em]">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-stone-300 transition-colors hover:text-amber-200" title="LinkedIn">
                <Briefcase size={18} className="group-hover:text-amber-200" />
                <span className="text-[9px] font-bold uppercase tracking-[0.25em]">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
