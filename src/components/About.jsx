function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5">
          <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-slate-800/60 border border-slate-700">
            <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop" alt="Portrait" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-7">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">About</p>
          <h3 className="text-3xl md:text-4xl text-white font-semibold tracking-tight mb-6">I craft identities and visuals that move people</h3>
          <p className="text-slate-300 leading-relaxed">
            I’m Baun, a graphic designer focused on camera, technology, and contemporary culture. My work blends clean systems with expressive moments, creating brand worlds that feel precise, minimal, and human.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              { k: 'Expertise', v: 'Branding, Editorial, Art Direction' },
              { k: 'Location', v: 'Remote / Worldwide' },
              { k: 'Availability', v: 'Q1 2025' },
            ].map(({ k, v }) => (
              <div key={k} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="text-xs text-slate-400 mb-1">{k}</p>
                <p className="text-sm text-white">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
