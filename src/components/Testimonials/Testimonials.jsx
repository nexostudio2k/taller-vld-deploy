import { Star } from 'lucide-react'
import s from './Testimonials.module.css'

const TESTIMONIALS = [
  {
    quote: 'Llevé mi coche por un problema en el motor y lo solucionaron en el mismo día. Presupuesto justo y sin sorpresas. No voy a ningún otro sitio.',
    name: 'Carlos M.',
    meta: 'Cliente desde 2021 · Golf VII',
  },
  {
    quote: 'Trato excelente y muy profesionales. Me explicaron todo lo que había que hacer sin intentar venderme nada innecesario. 100% recomendable.',
    name: 'Laura P.',
    meta: 'Cliente desde 2019 · Seat León',
  },
  {
    quote: 'Reparación de chapa y pintura impecable. El coche quedó como nuevo. Tiempo de entrega cumplido al día. Muy contento con el resultado.',
    name: 'Andrés F.',
    meta: 'Cliente desde 2022 · Kia Sportage',
  },
]

export default function Testimonials() {
  return (
    <section id="opiniones" className={s.section}>
      <div className={s.header}>
        <span className={s.label}>// Lo que dicen</span>
        <h2 className={s.title}>Opiniones<br />Reales</h2>
      </div>

      <div className={s.grid}>
        {TESTIMONIALS.map(({ quote, name, meta }) => (
          <div key={name} className={s.card}>
            <div className={s.stars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className={s.quote}>{quote}</p>
            <div className={s.author}>
              <span className={s.name}>{name}</span>
              <span className={s.meta}>{meta}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
