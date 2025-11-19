import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', phone:'', subject:'', message:''})
  const [status, setStatus] = useState(null)
  const backend = import.meta.env.VITE_BACKEND_URL || ''

  const onChange = (e)=> setForm({...form, [e.target.name]: e.target.value})

  const onSubmit = async (e)=>{
    e.preventDefault()
    setStatus({type:'loading', msg:'Envoi en cours...'})
    try{
      const res = await fetch(`${backend}/api/contact`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      if(!res.ok){
        const data = await res.json().catch(()=>({detail:'Erreur'}))
        throw new Error(data.detail || 'Erreur serveur')
      }
      setForm({name:'', email:'', phone:'', subject:'', message:''})
      setStatus({type:'success', msg:'Merci ! Nous vous recontactons sous 24h.'})
    }catch(err){
      setStatus({type:'error', msg: err.message})
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Demander un devis</h2>
        <p className="mt-2 text-blue-200/80">Expliquez votre projet, nous revenons vers vous rapidement.</p>
        <form onSubmit={onSubmit} className="mt-8 grid sm:grid-cols-2 gap-6 bg-white/5 ring-1 ring-white/10 p-6 rounded-2xl">
          <div className="sm:col-span-1">
            <label className="block text-sm text-blue-200/80">Nom</label>
            <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-blue-200/80">Email</label>
            <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="vous@mail.com" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-blue-200/80">Téléphone</label>
            <input name="phone" value={form.phone} onChange={onChange} className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="06 00 00 00 00" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-blue-200/80">Sujet</label>
            <input name="subject" value={form.subject} onChange={onChange} className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Type de travaux" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-blue-200/80">Message</label>
            <textarea name="message" value={form.message} onChange={onChange} required rows={5} className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Décrivez votre projet..." />
          </div>
          <div className="sm:col-span-2 flex items-center gap-4">
            <button type="submit" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 transition">Envoyer</button>
            {status?.type==='loading' && <span className="text-blue-200/80">{status.msg}</span>}
            {status?.type==='success' && <span className="text-green-300">{status.msg}</span>}
            {status?.type==='error' && <span className="text-red-300">{status.msg}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
