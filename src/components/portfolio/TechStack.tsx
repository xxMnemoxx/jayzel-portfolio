import { Code2, Server, Database } from 'lucide-react';

const TechStack = () => {
  const capabilities = [
    {
      title: 'Frontend Architecture',
      description: 'React, Next.js App Router, TypeScript, Tailwind CSS, responsive systems.',
      icon: <Code2 size={24} />,
      accent: 'text-amber-200',
      bg: 'bg-game-gold',
    },
    {
      title: 'Backend Systems',
      description: 'Node.js, RESTful APIs, auth flows, validation logic, and scalable server behaviors.',
      icon: <Server size={24} />,
      accent: 'text-cyan-200',
      bg: 'bg-game-teal',
    },
    {
      title: 'Database Management',
      description: 'PostgreSQL, Prisma ORM, Supabase, schema design, and reliable data modeling.',
      icon: <Database size={24} />,
      accent: 'text-amber-100',
      bg: 'bg-slate-900/80',
    },
  ];

  return (
    <section id="stack" className="py-20 md:py-24">
      <div className="mb-10 space-y-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-200/90">Skillset</p>
        <div className="flex items-center gap-4">
          <h2 className="game-heading text-3xl text-amber-50 md:text-4xl">Technical <span className="text-teal italic">Capabilities</span></h2>
          <span className="game-ornament" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {capabilities.map((cap, idx) => (
          <div key={idx} className="game-panel-alt rounded-[0.4rem] p-6 transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-5 flex items-center justify-between">
              <div className={`flex h-14 w-14 items-center justify-center rounded-[0.2rem] border border-white/10 ${cap.bg} ${cap.accent}`}>
                {cap.icon}
              </div>
              <span className="pixel-font text-[7px] text-stone-400">0{idx + 1}</span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-amber-50">{cap.title}</h3>
            <p className="text-sm leading-relaxed text-stone-300">{cap.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
