import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import s from './CtaPortal.module.css'

export default function CtaPortal() {
  return (
    <div className={s.strip}>
      <span className={s.label}>Portal del cliente</span>
      <h2 className={s.heading}>Sigue tu reparación en tiempo real</h2>
      <Link to="/cliente" className={s.btn}>
        Acceder
        <ArrowRight size={14} strokeWidth={2.5} />
      </Link>
    </div>
  )
}
