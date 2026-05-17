import { ArrowUpRight } from 'lucide-react'
import s from './Services.module.css'

const SERVICES = [
  { key: 'Mecanica',    label: 'Servicio 01', title: 'Mecánica General',  cls: s.cardMecanica },
  { key: 'Electronica', label: 'Servicio 02', title: 'Electrónica',        cls: s.cardElectronica },
  { key: 'Chapa',       label: 'Servicio 03', title: 'Chapa y Pintura',    cls: s.cardChapa },
  { key: 'Neumaticos',  label: 'Servicio 04', title: 'Neumáticos',         cls: s.cardNeumaticos },
]

export default function Services() {
  return (
    <section id="servicios" className={s.section}>
      <div className={s.inner}>
        <h2 className={s.heading}>Lo que hacemos.</h2>
        <div className={s.grid}>
          {SERVICES.map(({ key, label, title, cls }) => (
            <div key={key} className={`${s.card} ${cls}`}>
              <div className={s.cardArrow}>
                <ArrowUpRight size={16} strokeWidth={1.75} />
              </div>
              <div className={s.cardContent}>
                <span className={s.cardLabel}>{label}</span>
                <h3 className={s.cardTitle}>{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
