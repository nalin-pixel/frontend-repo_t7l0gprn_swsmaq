import { Brain, BookOpen, Timer, Music2, NotebookText, Target, Palette, Users } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Assistente AI personalizzato',
    desc: 'Risponde alle domande, spiega concetti, crea schemi, mappe mentali, riassunti e quiz.'
  },
  {
    icon: BookOpen,
    title: 'Pianificatore intelligente',
    desc: 'Organizza giornate, integra studio/lavoro, pause e riflessioni. Si adatta ai tuoi progressi.'
  },
  { icon: Timer, title: 'Modalità Focus', desc: 'Pomodoro e sessioni di deep work con timer integrato.' },
  { icon: Music2, title: 'Musica Binaurale', desc: 'Suoni e musica per concentrarti meglio.' },
  { icon: NotebookText, title: 'Taccuino AI', desc: 'Appunti smart che diventano riassunti, domande ed elenchi. Dettatura vocale.' },
  { icon: Target, title: 'Obiettivi & Motivazione', desc: 'Tracciamento progressi e frasi motivazionali generate da AI.' },
  { icon: Palette, title: 'Area Creativa', desc: 'Scrivi testi, poesie, progetti e ricevi feedback AI. Salva bozze.' },
  { icon: Users, title: 'Comunità', desc: 'Gruppi di studio e condivisione risultati (opzionale).' }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Tutto ciò che ti serve per imparare meglio</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-fuchsia-500 flex items-center justify-center mb-4">
                <f.icon size={18} />
              </div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-white/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
