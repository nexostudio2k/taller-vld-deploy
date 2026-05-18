import { useState } from 'react'
import s from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Presupuesto', href: '/presupuesto' },
  { label: 'Mi Portal', href: '/cliente/dashboard' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className={s.nav}>
        <a href="/" className={s.logo}>
          CAR LAB
        </a>

        <div className={s.links}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>

        <button
          className={`${s.hamburger} ${open ? s.open : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${s.mobileMenu} ${open ? s.visible : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </div>
    </>
  )
}
