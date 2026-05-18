import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import s from './ClienteNav.module.css'

export default function ClienteNav({ active }) {
  const [open, setOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const firstName = user ? user.nombre.split(' ')[0] : 'Cliente'

  const links = [
    { label: 'Mi Reparación', href: '/cliente/dashboard', key: 'dashboard' },
    { label: 'Historial',     href: '/cliente/historial',  key: 'historial' },
    { label: 'Puntos',        href: '/cliente/puntos',     key: 'puntos' },
  ]

  function handleLogout() {
    logout()
    navigate('/cliente')
  }

  return (
    <>
      <nav className={s.nav}>
        <a href="/" className={s.logo}>CAR LAB</a>

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

          <div className={s.userWrapper}>
            <button
              className={s.user}
              onClick={() => setDropOpen(v => !v)}
            >
              {firstName}
            </button>
            {dropOpen && (
              <div className={s.dropdown}>
                <button className={s.dropdownItem} onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>

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
        <button className={s.mobileLogout} onClick={() => { setOpen(false); handleLogout() }}>
          Cerrar sesión
        </button>
      </div>
    </>
  )
}
