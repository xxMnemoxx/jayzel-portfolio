import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full px-3 pt-4 sm:px-6">
      <div className="game-panel mx-auto flex max-w-6xl items-center justify-between rounded-[0.3rem] px-3 py-2.5 sm:px-5">
        <a href="#" className="flex items-center gap-2 uppercase text-amber-100">
          <span className="game-heading text-2xl italic tracking-tight text-gold not-italic">Jayzel</span>
          <span className="pixel-font text-[8px] text-teal">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {['About', 'Experience', 'Stack', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase() === 'about' ? 'about' : item.toLowerCase() === 'experience' ? 'experience' : item.toLowerCase() === 'stack' ? 'stack' : item.toLowerCase() === 'projects' ? 'projects' : 'contact'}`}
              className="pixel-font border-b border-transparent pb-1 text-[8px] text-stone-300 transition-colors hover:border-amber-300 hover:text-gold"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="pixel-font rounded-[0.2rem] border border-amber-300/60 bg-amber-300 px-3 py-2 text-[8px] text-slate-950 transition-transform hover:translate-y-[-1px]"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
