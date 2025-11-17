import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black text-white flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Online, intelligente, personalizzata
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            MentorAI – La tua mente organizzata, la tua guida intelligente
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Studia meglio, organizza le tue giornate e resta motivato con un mentore virtuale che si adatta al tuo stile, ai tuoi obiettivi e al tuo tempo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#features" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-white/90">Scopri le funzionalità</a>
            <a href="#pricing" className="px-5 py-3 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15">Piani e prezzi</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
