import { useState, useEffect } from 'react'
import { Menu, Moon, Sun, Brain, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur border-b border-white/10 bg-black/30 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-fuchsia-500 to-amber-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Brain size={20} />
          </div>
          <span className="font-semibold tracking-tight">MentorAI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Funzionalità</a>
          <a href="#widgets" className="hover:text-white transition">Widget</a>
          <a href="#pricing" className="hover:text-white transition">Prezzi</a>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setDark(v => !v)} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90">
            <Sparkles size={16} /> Prova gratis
          </button>
          <button className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
