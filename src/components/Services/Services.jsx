import { ArrowUpRight } from 'lucide-react'
import s from './Services.module.css'

const SERVICES = [
  { slug: 'mecanica',    label: 'Servicio 01', title: 'Mecánica General',  cls: s.cardMecanica },
  { slug: 'electronica', label: 'Servicio 02', title: 'Electrónica',        cls: s.cardElectronica },
  { slug: 'chapa',       label: 'Servicio 03', title: 'Chapa y Pintura',    cls: s.cardChapa },
  { slug: 'neumaticos',  label: 'Servicio 04', title: 'Neumáticos',         cls: s.cardNeumaticos },
]

export default function Services() {
  return (
    <section id="servicios" className={s.section}>
      <div className={s.inner}>
        <h2 className={s.heading}>Lo que hacemos.</h2>
        <div className={s.grid}>
          {SERVICES.map(({ slug, label, title, cls }) => (
            <a key={slug} href={`/servicios/${slug}`} className={`${s.card} ${cls}`}>
              <div className={s.cardArrow}>
                <ArrowUpRight size={16} strokeWidth={1.75} />
              </div>
              <div className={s.cardContent}>
                <span className={s.cardLabel}>{label}</span>
                <h3 className={s.cardTitle}>{title}</h3>
                <span className={s.cardCta}>Ver precios →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
