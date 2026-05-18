import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import s from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { user } = useAuth()

  const portalHref = user ? '/cliente/dashboard' : '/cliente'

  const NAV_LINKS = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Presupuesto', href: '/presupuesto' },
    { label: 'Mi Portal', href: portalHref },
  ]

  return (
    <>
      <nav className={s.nav}>
        <a href="/" className={s.logo}>CAR LAB</a>

        <div className={s.links}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>

        <div className={s.navRight}>
          <a href="/#contacto" className={s.cta}>Contacto</a>
          <button
            className={`${s.hamburger} ${open ? s.open : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label="Menú"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`${s.mobileMenu} ${open ? s.visible : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href="/#contacto" className={s.mobileCta} onClick={() => setOpen(false)}>Contacto</a>
      </div>
    </>
  )
}
