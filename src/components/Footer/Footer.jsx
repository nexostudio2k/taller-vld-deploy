import { Link } from 'react-router-dom'
import { MessageCircle, MapPin } from 'lucide-react'
import s from './Footer.module.css'

function InstagramIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

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
            <a href="https://instagram.com/carlab" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={22} /></a>
            <a href="https://wa.me/34983123456" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={22} strokeWidth={1.5} /></a>
            <a href="https://maps.google.com/?q=Calle+Esperanza+12+Valladolid" target="_blank" rel="noopener noreferrer" aria-label="Google Maps"><MapPin size={22} strokeWidth={1.5} /></a>
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
