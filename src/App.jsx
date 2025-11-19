import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-bold text-lg">TerreBat</a>
          <nav className="hidden sm:flex gap-6 text-sm text-blue-200/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Devis</a>
          </nav>
          <a href="#contact" className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 transition">Devis gratuit</a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Contact />
      </main>

      <footer className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-blue-200/70 text-sm flex flex-wrap items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} TerreBat. Tous droits réservés.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Mentions légales</a>
            <a href="#" className="hover:text-white">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
