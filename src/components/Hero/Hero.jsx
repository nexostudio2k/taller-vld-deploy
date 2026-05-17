import { ArrowRight } from 'lucide-react'
import s from './Hero.module.css'

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.inner}>
        <div className={s.tag}>
          <span className={s.tagDot} />
          Taller Certificado · Valladolid
        </div>

        <h1 className={s.heading}>
          Tu coche.<br />
          Nuestra precisión.
        </h1>

        <div className={s.actions}>
          <a href="/matricula" className={s.btnPrimary}>
            Pedir Presupuesto
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
          <a href="/matricula" className={s.btnSecondary}>
            Ver mi reparación
          </a>
        </div>
      </div>
    </section>
  )
}
