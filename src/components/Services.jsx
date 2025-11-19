export default function Services(){
  const items = [
    {title:'Maçonnerie & Gros œuvre', desc:'Fondations, dalles, murs porteurs, extensions et surélévations.'},
    {title:'Rénovation complète', desc:'Appartements, maisons, commerces : démolition, restructuration, finitions.'},
    {title:'Salle de bain & Cuisine', desc:'Création et rénovation clés en main : plomberie, carrelage, mobilier.'},
    {title:'Isolation & Plâtrerie', desc:'Cloisons, faux plafonds, isolation thermique et acoustique.'},
    {title:'Carrelage & Revêtements', desc:'Pose soignée de carrelage, faïence, parquet et sols techniques.'},
    {title:'Terrasse & Piscine', desc:'Béton décoratif, margelles, plages de piscine, murets et clôtures.'},
  ]
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Nos services</h2>
        <p className="mt-2 text-blue-200/80">Un interlocuteur unique pour coordonner tous vos travaux.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it,idx)=> (
            <div key={idx} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition">
              <div className="text-white font-semibold text-lg">{it.title}</div>
              <div className="mt-2 text-blue-200/80 text-sm">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
