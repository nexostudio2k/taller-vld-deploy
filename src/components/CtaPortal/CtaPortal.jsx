import { ArrowRight } from 'lucide-react'
import s from './CtaPortal.module.css'

export default function CtaPortal() {
  return (
    <div className={s.strip}>
      <span className={s.label}>Portal del cliente</span>
      <h2 className={s.heading}>Sigue tu reparación en tiempo real</h2>
      <a href="/matricula" className={s.btn}>
        Acceder
        <ArrowRight size={14} strokeWidth={2.5} />
      </a>
    </div>
  )
}
