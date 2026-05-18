import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import s from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  function handleServicios(e) {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  const NAV_LINKS = [
    { label: 'Presupuesto', href: '/presupuesto' },
    { label: 'Mi Portal', href: '/cliente' },
  ]

  return (
    <>
      <nav className={s.nav}>
        <a href="/" className={s.logo}>CAR LAB</a>

        <div className={s.links}>
          <a href="#servicios" onClick={handleServicios}>Servicios</a>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>

        <div className={s.navRight}>
          <a href="/contacto" className={s.cta}>Contacto</a>
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
        <a href="#servicios" onClick={e => { handleServicios(e); setOpen(false) }}>Servicios</a>
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href="/contacto" className={s.mobileCta} onClick={() => setOpen(false)}>Contacto</a>
      </div>
    </>
  )
}
