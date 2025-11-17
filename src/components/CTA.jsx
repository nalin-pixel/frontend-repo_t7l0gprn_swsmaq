export default function CTA() {
  return (
    <section id="pricing" className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h3 className="text-3xl font-bold">Inizia gratis. Sblocca la potenza completa quando vuoi.</h3>
        <p className="text-white/70">Piano Premium a partire da 3,99€/mese con accesso completo all’assistente AI, planner intelligente, area creativa e musica.</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-semibold mb-2">Free</h4>
            <p className="text-sm text-white/70">Assistente base, timer focus, note limitate</p>
            <p className="text-3xl font-extrabold mt-3">0€</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/30 to-fuchsia-500/30 p-6">
            <h4 className="font-semibold mb-2">Premium</h4>
            <p className="text-sm text-white/90">Assistente completo, planner intelligente, musica e area creativa</p>
            <p className="text-3xl font-extrabold mt-3">3,99€/mese</p>
          </div>
        </div>
        <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-white/90">Crea il tuo spazio</a>
      </div>
    </section>
  )
}
