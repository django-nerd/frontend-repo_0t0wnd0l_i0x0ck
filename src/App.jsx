import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main className="relative">
        <Hero />
        <Work />
        <About />
        <Contact />

        <footer className="py-10 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
            <p>© {new Date().getFullYear()} Baun. All rights reserved.</p>
            <div className="text-sm">Art direction, identity, editorial.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
