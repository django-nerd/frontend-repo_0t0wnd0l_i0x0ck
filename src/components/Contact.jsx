import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const formData = Object.fromEntries(new FormData(e.currentTarget))

      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thanks — I will get back to you soon!')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-3">Contact</p>
          <h3 className="text-3xl text-white font-semibold tracking-tight mb-8">Let’s build something beautiful</h3>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
            </div>
            <input name="subject" placeholder="Subject" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <textarea name="message" required rows="5" placeholder="Say hello" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />

            <div className="flex items-center justify-between gap-4">
              <button type="submit" className="inline-flex items-center rounded-full bg-white text-slate-900 font-medium px-6 py-3">Send</button>
              <p className="text-sm text-slate-300">{status}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
