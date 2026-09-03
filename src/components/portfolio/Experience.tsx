const Experience = () => {
  const milestones = [
    {
      category: 'Web Frameworks & Ecosystems',
      skills: 'Laravel, React, Next.js, Vue.js',
      description: 'Focused on building modern, reactive interfaces and resilient backend systems for products that need to scale without losing clarity.',
      element: 'element-fire',
    },
    {
      category: 'Core Web Technologies',
      skills: 'HTML5, CSS3, JavaScript, PHP',
      description: 'Designing semantic, maintainable front ends and performant server-side logic across responsive, product-driven experiences.',
      element: 'element-wind',
    },
    {
      category: 'Programming Foundations',
      skills: 'C++, Java, Python',
      description: 'Built a strong algorithmic foundation and a disciplined approach to structure, debugging, and problem-solving across varied stacks.',
      element: 'element-earth',
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-24">
      <div className="mb-10 space-y-4">
        <div className="flex items-center gap-4">
          <h2 className="game-heading text-3xl text-amber-50 md:text-4xl">Technical <span className="text-gold italic">Journey</span></h2>
          <span className="game-ornament" />
        </div>
      </div>

      <div className="space-y-6">
        {milestones.map((item, idx) => (
          <div key={idx} className="game-panel-alt rounded-[1.2rem] p-5 md:p-7">
            <div className="grid gap-4 md:grid-cols-[1fr_3fr] md:gap-8">
              <div className="flex items-center md:items-start">
                <div className={`element-tag ${item.element} px-3`}>{idx + 1}</div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-amber-100 transition-colors md:text-2xl">
                  {item.category}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-200">
                  {item.skills}
                </p>
                <p className="max-w-2xl text-sm leading-relaxed text-stone-300 md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
