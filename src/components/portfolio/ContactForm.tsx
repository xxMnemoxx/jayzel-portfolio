const ContactForm = () => {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="mb-8 space-y-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-200/90">Send a message</p>
        <div className="flex items-center gap-4">
          <h2 className="game-heading text-3xl text-amber-50 md:text-4xl">Let&apos;s <span className="text-gold italic">Connect</span></h2>
          <span className="game-ornament" />
        </div>
      </div>

      <form className="game-panel rounded-[0.4rem] p-6 md:p-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-300">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full rounded-[0.5rem] border border-white/10 bg-slate-950/70 px-5 py-4 text-sm text-amber-50 placeholder:text-stone-500 outline-none transition-all focus:border-amber-300/70"
            />
          </div>

          <div className="space-y-3">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-300">Email Address</label>
            <input
              type="email"
              placeholder="email@example.com"
              required
              className="w-full rounded-[0.5rem] border border-white/10 bg-slate-950/70 px-5 py-4 text-sm text-amber-50 placeholder:text-stone-500 outline-none transition-all focus:border-amber-300/70"
            />
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-300">Message Content</label>
          <textarea
            rows={5}
            placeholder="Tell me about your project..."
            required
            className="w-full resize-none rounded-[0.5rem] border border-white/10 bg-slate-950/70 px-5 py-4 text-sm text-amber-50 placeholder:text-stone-500 outline-none transition-all focus:border-amber-300/70"
          />
        </div>

        <button
          type="submit"
          className="pixel-font mt-8 rounded-[0.5rem] border border-amber-300/60 bg-gradient-to-r from-amber-300 to-yellow-500 px-8 py-4 text-[8px] text-slate-950 shadow-[0_0_25px_rgba(246,199,106,0.25)] transition-transform hover:scale-[1.02]"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
