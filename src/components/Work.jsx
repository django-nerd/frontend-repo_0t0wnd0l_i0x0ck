function ProjectCard({ title, tags, image }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
      <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
        <img src={image} alt={title} className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          {tags.map((t) => (
            <span key={t} className="text-[11px] uppercase tracking-wide text-slate-400 bg-white/5 rounded-full px-2 py-1">{t}</span>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
    </div>
  )
}

function Work() {
  const projects = [
    {
      title: 'Monochrome Camera Brand',
      tags: ['Branding', 'Art Direction'],
      image: 'https://images.unsplash.com/photo-1586204919642-969572bf22e2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb25vY2hyb21lJTIwQ2FtZXJhJTIwQnJhbmR8ZW58MHwwfHx8MTc2MzQ2MTQzMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Studio Portfolio Editorial',
      tags: ['Editorial', 'Layout'],
      image: 'https://images.unsplash.com/photo-1762395500039-213dff6f8395?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkaW8lMjBQb3J0Zm9saW8lMjBFZGl0b3JpYWx8ZW58MHwwfHx8MTc2MzQ2MTQzMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Minimal Product Shots',
      tags: ['Art Direction', 'Retouch'],
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Experimental Typography',
      tags: ['Type', 'Poster'],
      image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Lookbook Campaign',
      tags: ['Campaign', 'Art Direction'],
      image: 'https://images.unsplash.com/photo-1760337934036-83d1dd595378?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMb29rYm9vayUyMENhbXBhaWdufGVufDB8MHx8fDE3NjM0NjE0MzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Studio Identity System',
      tags: ['Identity', 'Guidelines'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_90%_0%,rgba(147,51,234,0.08),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Selected Work</h2>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-full bg-white/10 text-white px-5 py-2">Availability</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
