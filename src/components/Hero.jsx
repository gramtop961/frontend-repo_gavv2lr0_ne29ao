import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(59,130,246,0.15),transparent),radial-gradient(600px_300px_at_90%_20%,rgba(34,197,94,0.15),transparent)]" />
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Entreprise générale de bâtiment à Montpellier
          </motion.h1>
          <p className="mt-5 text-lg text-blue-100/90">
            Construction, rénovation, maçonnerie et second œuvre. Qualité artisanale, délais tenus, interlocuteur unique.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 transition">Demander un devis</a>
            <a href="#services" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition">Nos services</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-blue-200/80">
            <div className="text-3xl font-bold text-white">15+ ans</div>
            <div>Garantie décennale • Assurance RC Pro • Devis gratuit</div>
          </div>
        </div>
        <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} transition={{duration:0.6, delay:0.1}} className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop" alt="Chantier TerreBat" className="w-full h-[360px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white font-medium">Chantiers livrés dans l'Hérault</div>
        </motion.div>
      </div>
    </section>
  )
}
