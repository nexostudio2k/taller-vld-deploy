import { useState } from 'react'
import s from './ClienteNav.module.css'

export default function ClienteNav({ active }) {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Mi Reparación', href: '/cliente/dashboard', key: 'dashboard' },
    { label: 'Historial',     href: '#',                   key: 'historial' },
    { label: 'Puntos',        href: '/cliente/puntos',      key: 'puntos' },
  ]

  return (
    <>
      <nav className={s.nav}>
        <a href="/" className={s.logo}>
          Taller <span className={s.logoAccent}>VLD</span>
        </a>

        <div className={s.right}>
          {links.map(({ label, href, key }) => (
            <a
              key={key}
              href={href}
              className={`${s.link} ${active === key ? s.linkActive : ''}`}
            >
              {label}
            </a>
          ))}
          <a href="#" className={s.user}>Carlos R</a>
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
        {links.map(({ label, href, key }) => (
          <a key={key} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href="#" className={s.mobileUser} onClick={() => setOpen(false)}>Carlos R</a>
      </div>
    </>
  )
}
