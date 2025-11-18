import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-end">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="max-w-2xl">
            <p className="text-slate-300 text-sm uppercase tracking-[0.35em] mb-6">Graphic Designer</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white">
              Baun — visual stories crafted with precision
            </h1>
            <p className="mt-6 text-slate-300/90 max-w-xl">
              Branding, editorial, and digital assets that feel modern, minimal, and unmistakably you.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a href="#work" className="inline-flex items-center rounded-full bg-white text-slate-900 font-medium px-6 py-3">See work</a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-white/10 text-white px-6 py-3">Get in touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
