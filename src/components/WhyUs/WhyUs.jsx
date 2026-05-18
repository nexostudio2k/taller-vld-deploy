import { Microscope, Shield, Clock } from 'lucide-react'
import s from './WhyUs.module.css'

const CARDS = [
  {
    icon: Microscope,
    title: 'Diagnóstico Digital',
    desc: 'Escáner OBD avanzado y análisis en tiempo real para detectar cualquier fallo en tu vehículo.',
  },
  {
    icon: Shield,
    title: 'Garantía 2 Años',
    desc: 'Todas las reparaciones con garantía oficial. Tu tranquilidad es nuestra responsabilidad.',
  },
  {
    icon: Clock,
    title: 'Entrega Puntual',
    desc: 'Tiempos de entrega garantizados. Sin sorpresas ni esperas innecesarias.',
  },
]

export default function WhyUs() {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <p className={s.caption}>// Por qué nosotros</p>
        <h2 className={s.heading}>Excelencia en cada revisión.</h2>
        <div className={s.grid}>
          {CARDS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className={s.card}>
              <Icon size={28} strokeWidth={1.5} className={s.icon} />
              <h3 className={s.cardTitle}>{title}</h3>
              <p className={s.cardDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
