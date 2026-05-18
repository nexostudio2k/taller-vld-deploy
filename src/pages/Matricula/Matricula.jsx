import { useState } from 'react'
import { Check } from 'lucide-react'
import s from './Matricula.module.css'

const MOCK_VEHICLE = {
  plate: '1234 ABC',
  name: 'Volkswagen Golf',
  spec: '2.0 TDI · 150 CV · 2018',
  detail: 'Diesel · Hatchback · 1968 cc',
}

const BRANDS = ['Abarth','Alfa Romeo','Audi','BMW','Chevrolet','Citroën','Dacia','Fiat','Ford','Honda','Hyundai','Kia','Mazda','Mercedes-Benz','MINI','Mitsubishi','Nissan','Opel','Peugeot','Renault','SEAT','Skoda','Suzuki','Toyota','Volkswagen','Volvo']
const MODELS = { Volkswagen: ['Golf','Polo','Passat','Tiguan','T-Roc','T-Cross','Touareg'], default: ['Modelo 1','Modelo 2','Modelo 3'] }
const YEARS = Array.from({ length: 25 }, (_, i) => 2025 - i)

function MatriculaNav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className={s.nav}>
        <a href="/" className={s.navLogo}>Taller VLD</a>
        <div className={s.navLinks}>
          <a href="/#servicios">Servicios</a>
          <a href="/presupuesto">Presupuesto</a>
          <a href="/cliente/dashboard">Mi Portal</a>
        </div>
        <a href="/#contacto" className={s.navCta}>Contacto</a>
        <button
          className={`${s.navHamburger} ${open ? s.open : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </nav>
      <div className={`${s.mobileMenu} ${open ? s.open : ''}`}>
        <a href="/#servicios" onClick={() => setOpen(false)}>Servicios</a>
        <a href="/presupuesto" onClick={() => setOpen(false)}>Presupuesto</a>
        <a href="/cliente/dashboard" onClick={() => setOpen(false)}>Mi Portal</a>
        <a href="/#contacto" className={s.mobileCta} onClick={() => setOpen(false)}>Contacto</a>
      </div>
    </>
  )
}

function HeroSection() {
  return (
    <>
      <div className={s.divider} />
      <section className={s.hero}>
        <div className={s.heroInner}>
          <p className={s.heroTag}>Consulta Instantánea DGT · Matrícula Española</p>
          <h1 className={s.heroTitle}>Identifica tu&nbsp;Vehículo</h1>
        </div>
      </section>
      <div className={s.divider} />
    </>
  )
}

function SearchSection({ onSearch }) {
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (value.trim()) onSearch(value.trim().toUpperCase())
  }

  return (
    <section className={s.searchSection}>
      <form className={s.searchRow} onSubmit={handleSubmit}>
        <input
          className={s.searchInput}
          type="text"
          placeholder="Introduce tu matrícula · Ej: 1234 ABC"
          value={value}
          onChange={e => setValue(e.target.value)}
          maxLength={10}
        />
        <button type="submit" className={s.searchBtn}>
          Identificar Vehículo
        </button>
      </form>
      <span className={s.searchHint}>
        Formato: 1234 ABC · Soporta matrículas antiguas provinciales
      </span>
    </section>
  )
}

function ResultSection({ plate, vehicle }) {
  return (
    <>
      <div className={s.divider} />
      <section className={s.resultSection}>
        <div className={s.resultInner}>
          <div className={s.badges}>
            <span className={s.plateBadge}>{plate}</span>
            <span className={s.statusBadge}>
              <Check size={12} strokeWidth={3} />
              Vehículo Localizado
            </span>
          </div>
          <h2 className={s.vehicleName}>{vehicle.name}</h2>
          <p className={s.vehicleSpec}>{vehicle.spec}</p>
          <p className={s.vehicleDetail}>{vehicle.detail}</p>
        </div>
      </section>
      <div className={s.divider} />
    </>
  )
}

function ManualSection() {
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')

  const models = brand && MODELS[brand] ? MODELS[brand] : (brand ? MODELS.default : [])

  return (
    <>
      <div className={s.divider} />
      <section className={s.manualSection}>
        <div className={s.manualInner}>
          <h2 className={s.manualTitle}>¿Sin Resultado?</h2>
          <p className={s.manualSub}>Selecciona tu vehículo manualmente</p>

          <div className={s.dropdowns}>
            <select
              className={s.select}
              value={brand}
              onChange={e => { setBrand(e.target.value); setModel('') }}
            >
              <option value="">Marca</option>
              {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
            </select>

            <select
              className={s.select}
              value={model}
              onChange={e => setModel(e.target.value)}
              disabled={!brand}
            >
              <option value="">Modelo</option>
              {models.map(m => <option key={m} value={m}>{m}</option>)}
            </select>

            <select
              className={s.select}
              value={year}
              onChange={e => setYear(e.target.value)}
            >
              <option value="">Año</option>
              {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          <button className={s.continueBtn}>Continuar</button>
        </div>
      </section>
      <div className={s.divider} />
    </>
  )
}

function MatriculaFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className={s.footer}>
      <div className={s.footerTop}>
        <div className={s.footerBrand}>
          <span className={s.footerLogo}>Taller VLD</span>
          <span className={s.footerAddress}>Calle Industria 47, Madrid 28001</span>
          <span className={s.footerHours}>Lun–Vie 08:00–20:00 · Sáb 09:00–14:00</span>
        </div>
        <div className={s.footerRight}>
          <span className={s.footerPhone}>+34 91 234 56 78</span>
          <nav className={s.footerNav}>
            <a href="/#servicios">Servicios</a>
            <a href="/presupuesto">Presupuesto</a>
            <a href="/#contacto">Contacto</a>
          </nav>
        </div>
      </div>
      <div className={s.footerBottom}>
        <span className={s.footerCopy}>© {year} Taller VLD · Todos los derechos reservados</span>
        <span className={s.footerCopy}>© {year} Taller VLD · Contacto</span>
      </div>
    </footer>
  )
}

export default function Matricula() {
  const [result, setResult] = useState(null) // null | { plate, vehicle } | { plate, vehicle: null }

  function handleSearch(plate) {
    // Normalize: strip spaces for comparison
    const normalized = plate.replace(/\s+/g, '')
    const mockNorm = MOCK_VEHICLE.plate.replace(/\s+/g, '')
    if (normalized === mockNorm) {
      setResult({ plate, vehicle: MOCK_VEHICLE })
    } else {
      setResult({ plate, vehicle: null })
    }
  }

  return (
    <>
      <MatriculaNav />
      <HeroSection />
      <SearchSection onSearch={handleSearch} />
      {result?.vehicle && <ResultSection plate={result.plate} vehicle={result.vehicle} />}
      <ManualSection />
      <MatriculaFooter />
    </>
  )
}
