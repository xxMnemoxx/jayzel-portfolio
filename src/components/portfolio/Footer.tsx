import { Terminal, Briefcase, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-amber-200/10 bg-slate-950/70 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 text-center md:flex-row md:text-left sm:px-6 lg:px-8">
        <div className="space-y-2">
          <p className="game-heading text-3xl italic text-amber-50">
            Jayzel<span className="text-gold">.</span>
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-400">Full-Stack Software Engineer</p>
        </div>

        <div className="flex items-center gap-8">
          <a href="https://github.com/xxMnemoxx" target="_blank" rel="noreferrer" className="text-stone-400 transition-colors hover:text-cyan-200">
            <Terminal size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-stone-400 transition-colors hover:text-amber-200">
            <Briefcase size={18} />
          </a>
          <a href="mailto:jayzelmaellanasas@gmail.com" className="text-stone-400 transition-colors hover:text-amber-200">
            <Mail size={18} />
          </a>
        </div>

        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
