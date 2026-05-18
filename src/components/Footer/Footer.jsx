import { Link } from 'react-router-dom'
import { Camera, MessageCircle, MapPin } from 'lucide-react'
import s from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={s.footer}>
      <div className={s.top}>

        {/* Left */}
        <div className={s.col}>
          <span className={s.logo}>CAR LAB</span>
          <span className={s.address}>Calle Esperanza, 12 · 47001 Valladolid, España</span>
          <span className={s.since}>Taller oficial certificado desde 2005</span>
        </div>

        {/* Center */}
        <div className={s.col}>
          <span className={s.colLabel}>Navegación</span>
          <nav className={s.navLinks}>
            <a href="/">Inicio</a>
            <a href="/presupuesto">Presupuesto</a>
            <a href="/matricula">Matrícula</a>
            <a href="/cliente">Portal Cliente</a>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </div>

        {/* Right */}
        <div className={s.col}>
          <span className={s.colLabel}>Contacto</span>
          <span className={s.phone}>+34 983 123 456</span>
          <span className={s.colLabel} style={{ marginTop: 20 }}>Horario</span>
          <span className={s.hours}>LUN–VIE 08:00–19:00 · SAB 09:00–14:00</span>
          <div className={s.icons}>
            <a href="#" aria-label="Instagram"><Camera size={18} strokeWidth={1.5} /></a>
            <a href="#" aria-label="WhatsApp"><MessageCircle size={18} strokeWidth={1.5} /></a>
            <a href="#" aria-label="Google Maps"><MapPin size={18} strokeWidth={1.5} /></a>
          </div>
        </div>

      </div>

      <div className={s.bottom}>
        <span className={s.copy}>© {year} Car Lab · Todos los derechos reservados</span>
        <span className={s.copy}>Valladolid, España</span>
      </div>
    </footer>
  )
}
