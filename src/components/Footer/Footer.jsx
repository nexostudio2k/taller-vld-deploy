import s from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={s.footer}>
      <div className={s.top}>
        <div className={s.brand}>
          <span className={s.logo}>Taller VLD</span>
          <span className={s.address}>Calle Industria 47, Valladolid 47009</span>
          <span className={s.hours}>Lun–Vie 08:00–20:00 · Sáb 09:00–14:00</span>
        </div>

        <div className={s.right}>
          <span className={s.phone}>+34 983 000 000</span>
          <nav className={s.footerNav}>
            <a href="#servicios">Servicios</a>
            <a href="/matricula">Presupuesto</a>
            <a href="#contacto" id="contacto">Contacto</a>
          </nav>
        </div>
      </div>

      <div className={s.bottom}>
        <span className={s.copy}>© {year} Taller VLD · Todos los derechos reservados</span>
        <span className={s.copy}>Valladolid, España</span>
      </div>
    </footer>
  )
}
