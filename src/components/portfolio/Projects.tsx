import { Terminal, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Project Alpha: TaskSync',
      description: 'A collaborative workspace tool featuring full CRUD flows, real-time board updates, and secure user sessions for team-based workflows.',
      tags: ['Vite', 'JavaScript', 'Tailwind CSS', 'Supabase'],
      github: 'https://github.com/xxMnemoxx/TaskSync.git',
      live: '#',
    },
    {
      title: 'Project Beta: SUBLI',
      description: 'A web-based platform that connects renters with local rental shops, making it easier to search, reserve, and manage rental products online. It also helps shop owners manage their products, orders, and transactions efficiently.',
      tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
      reward: 'Weapon upgrade',
      github: 'https://github.com/Amaro018/react-subli.git',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="mb-10 space-y-4">
        <div className="flex items-center gap-4">
          <h2 className="game-heading text-3xl text-amber-50 md:text-4xl">Selected <span className="text-gold italic">Works</span></h2>
          <span className="game-ornament" />
        </div>
      </div>

      <div className="space-y-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`game-panel-alt grid gap-8 rounded-[0.4rem] p-5 md:p-8 ${idx % 2 === 0 ? 'md:grid-cols-[1.05fr_1fr]' : 'md:grid-cols-[1fr_1.05fr]'}`}
          >
            <div className="game-card-glow flex min-h-60 items-center justify-center overflow-hidden rounded-[0.2rem] border border-white/10 bg-slate-950/80">
              <Terminal size={52} className="text-stone-400" />
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-200">Featured Project</p>
                <h3 className="game-heading text-3xl text-amber-50 md:text-4xl">{project.title}</h3>
              </div>

              <p className="text-sm leading-relaxed text-stone-300 md:text-base">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="rounded-full border border-cyan-300/25 bg-slate-900/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-100">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-8 pt-2">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-200 transition-colors hover:text-amber-200">
                  <Terminal size={14} /> Source
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 border-b border-amber-300/30 pb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-200 transition-colors hover:text-amber-100">
                  <ExternalLink size={14} /> View Case Study
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
