import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import { useEffect, useState } from 'react'

function App() {
  const [motivation, setMotivation] = useState(null)
  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${baseUrl}/api/motivation`).then(r => r.json()).then(setMotivation).catch(() => {})
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <section className="bg-black py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/80">{motivation ? `“${motivation.text}” — ${motivation.author || 'MentorAI'}` : 'Caricamento frase motivazionale...'}</p>
          </div>
        </div>
      </section>
      <CTA />
      <footer className="bg-black/90 border-t border-white/10 py-10 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} MentorAI. Tutti i diritti riservati.
      </footer>
    </div>
  )
}

export default App
