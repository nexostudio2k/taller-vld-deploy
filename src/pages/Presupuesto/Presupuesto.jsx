import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import s from './Presupuesto.module.css'

/* ── Vehicle data (same logic as /matricula) ── */
const VEHICLES = [
  {
    name: 'Volkswagen Golf',
    spec: '2.0 TDI · 150 CV · 2018',
    detail: 'Diesel · Hatchback · 1968 cc',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2017_Volkswagen_Golf_GTD_5-door_%28facelift%2C_grey%29%2C_front_8.15.19.jpg/1280px-2017_Volkswagen_Golf_GTD_5-door_%28facelift%2C_grey%29%2C_front_8.15.19.jpg',
  },
  {
    name: 'Seat León',
    spec: '1.5 TSI · 130 CV · 2019',
    detail: 'Gasolina · Hatchback · 1498 cc',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/2017_SEAT_Le%C3%B3n_FR_TDI_150_5-door_2.0.jpg/1280px-2017_SEAT_Le%C3%B3n_FR_TDI_150_5-door_2.0.jpg',
  },
  {
    name: 'Toyota Corolla',
    spec: '1.8 Hybrid · 122 CV · 2020',
    detail: 'Híbrido · Sedan · 1798 cc',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1280px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg',
  },
  {
    name: 'Renault Megane',
    spec: '1.5 dCi · 110 CV · 2017',
    detail: 'Diesel · Hatchback · 1461 cc',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/2016_Renault_M%C3%A9gane_IV_GT_Line_TCe_130.jpg/1280px-2016_Renault_M%C3%A9gane_IV_GT_Line_TCe_130.jpg',
  },
  {
    name: 'Ford Focus',
    spec: '1.0 EcoBoost · 125 CV · 2021',
    detail: 'Gasolina · Hatchback · 999 cc',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/2018_Ford_Focus_ST-Line_1.5.jpg/1280px-2018_Ford_Focus_ST-Line_1.5.jpg',
  },
]

function pickVehicle(plate) {
  const sum = plate.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
  return VEHICLES[sum % VEHICLES.length]
}

/* ── Category price ranges ── */
const CATEGORIES = [
  { key: 'frenos',       label: 'Frenos / Suspensión',    min: 120, max: 280 },
  { key: 'motor',        label: 'Motor / Refrigeración',  min: 300, max: 900 },
  { key: 'electrico',    label: 'Eléctrico',              min: 150, max: 500 },
  { key: 'transmision',  label: 'Transmisión',            min: 200, max: 700 },
  { key: 'luces',        label: 'Luces',                  min: 60,  max: 180 },
  { key: 'fugas',        label: 'Fugas',                  min: 100, max: 350 },
  { key: 'mantenimiento',label: 'Mantenimiento',          min: 80,  max: 200 },
  { key: 'nose',         label: 'No sé',                  min: 60,  max: 150 },
]

function calcRange(keys) {
  if (!keys.length) return { min: 60, max: 150 }
  const sel = CATEGORIES.filter(c => keys.includes(c.key))
  return {
    min: sel.reduce((s, c) => s + c.min, 0),
    max: sel.reduce((s, c) => s + c.max, 0),
  }
}

const STEP_LABELS = ['Tu vehículo', 'Tipo de avería', 'Describe el problema', 'Resultado']

/* ── Progress Bar ── */
function ProgressBar({ step }) {
  return (
    <div className={s.progressBar}>
      <div className={s.progressInner}>
        {STEP_LABELS.map((label, i) => {
          const n = i + 1
          const done = n < step
          const active = n === step
          return (
            <div key={n} className={`${s.progressStep} ${active ? s.progressActive : ''} ${done ? s.progressDone : ''}`}>
              <div className={s.progressCircle}>
                {done ? <Check size={11} strokeWidth={3} /> : n}
              </div>
              <span className={s.progressLabel}>{label}</span>
              {i < STEP_LABELS.length - 1 && <div className={`${s.progressLine} ${done ? s.progressLineDone : ''}`} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ── Step 1: Tu vehículo ── */
function Step1({ onNext }) {
  const [plate, setPlate] = useState('')
  const [vehicle, setVehicle] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  function identify(e) {
    e.preventDefault()
    if (plate.trim()) {
      setVehicle(pickVehicle(plate.trim().toUpperCase()))
      setSubmitted(true)
    }
  }

  return (
    <section className={s.stepSection}>
      <div className={s.stepInner}>
        <p className={s.stepTag}>Paso 1 · Tu vehículo</p>
        <h2 className={s.stepHeading}>Identifica tu<br />vehículo</h2>

        <form className={s.searchRow} onSubmit={identify}>
          <input
            className={s.searchInput}
            type="text"
            placeholder="Matrícula · Ej: 1234 ABC"
            value={plate}
            onChange={e => { setPlate(e.target.value); setSubmitted(false); setVehicle(null) }}
            maxLength={10}
          />
          <button type="submit" className={s.searchBtn}>Identificar</button>
        </form>

        {vehicle && submitted && (
          <div className={s.vehicleCard}>
            <img className={s.vehicleCardImg} src={vehicle.img} alt={vehicle.name} />
            <div className={s.vehicleCardInfo}>
              <div className={s.vehicleCardBadges}>
                <span className={s.plateBadge}>{plate.trim().toUpperCase()}</span>
                <span className={s.statusBadge}><Check size={11} strokeWidth={3} /> Vehículo localizado</span>
              </div>
              <h3 className={s.vehicleCardName}>{vehicle.name}</h3>
              <p className={s.vehicleCardSpec}>{vehicle.spec}</p>
              <p className={s.vehicleCardDetail}>{vehicle.detail}</p>
            </div>
          </div>
        )}

        <div className={s.stepActions}>
          <button
            className={s.btnPrimary}
            onClick={() => onNext({ plate: plate.trim().toUpperCase(), vehicle })}
            disabled={!vehicle}
          >
            Continuar <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ── Step 2: Tipo de avería ── */
function Step2({ onNext }) {
  const [selected, setSelected] = useState([])

  function toggle(key) {
    setSelected(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key])
  }

  return (
    <section className={s.stepSection}>
      <div className={s.stepInner}>
        <p className={s.stepTag}>Paso 2 · Tipo de avería</p>
        <h2 className={s.stepHeading}>¿Qué tipo de<br />problema tienes?</h2>
        <p className={s.stepSub}>Puedes seleccionar varias opciones.</p>

        <div className={s.categoryGrid}>
          {CATEGORIES.map(({ key, label }) => (
            <button
              key={key}
              className={`${s.categoryBtn} ${selected.includes(key) ? s.categoryBtnActive : ''}`}
              onClick={() => toggle(key)}
            >
              {selected.includes(key) && <Check size={12} strokeWidth={3} className={s.categoryCheck} />}
              {label}
            </button>
          ))}
        </div>

        <div className={s.stepActions}>
          <button
            className={s.btnPrimary}
            onClick={() => onNext({ categories: selected })}
            disabled={!selected.length}
          >
            Continuar <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ── Step 3: Describe el problema ── */
function Step3({ onNext }) {
  const [description, setDescription] = useState('')
  const [canMove, setCanMove] = useState(true)

  return (
    <section className={s.stepSection}>
      <div className={s.stepInner}>
        <p className={s.stepTag}>Paso 3 · Describe el problema</p>
        <h2 className={s.stepHeading}>Cuéntanos<br />qué ocurre</h2>

        <textarea
          className={s.descTextarea}
          rows={5}
          placeholder="Describe con tus palabras qué ocurre con tu vehículo..."
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <label className={s.checkLabel}>
          <input
            type="checkbox"
            className={s.checkbox}
            checked={canMove}
            onChange={e => setCanMove(e.target.checked)}
          />
          <span>¿El vehículo puede moverse?</span>
        </label>

        {!canMove && (
          <div className={s.gruaNote}>
            // NOTA: Podemos coordinar el servicio de grúa. Indícalo al contactarnos.
          </div>
        )}

        <div className={s.stepActions}>
          <button
            className={s.btnPrimary}
            onClick={() => onNext({ description, canMove })}
          >
            Ver Presupuesto <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ── Step 4: Resultado ── */
function Step4({ plate, vehicle, categories }) {
  const { min, max } = calcRange(categories)
  const veh = vehicle || VEHICLES[0]

  const diagMin = 35
  const diagMax = 35
  const laborMin = Math.round((min - diagMin) * 0.45)
  const laborMax = Math.round((max - diagMax) * 0.45)
  const partsMin = Math.round((min - diagMin) * 0.35)
  const partsMax = Math.round((max - diagMax) * 0.35)
  const ivaMin = Math.round((laborMin + partsMin) * 0.21)
  const ivaMax = Math.round((laborMax + partsMax) * 0.21)

  const ref = `#VLD-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`

  const LINE_ITEMS = [
    { label: 'Diagnóstico inicial',   price: `${diagMin}€` },
    { label: 'Mano de obra',          price: `${laborMin}€ – ${laborMax}€` },
    { label: 'Recambios estimados',   price: `${partsMin}€ – ${partsMax}€` },
    { label: 'IVA (21%)',             price: `${ivaMin}€ – ${ivaMax}€` },
  ]

  return (
    <>
      {/* Hero Banner */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroBadges}>
            <span className={s.statusBadge}>
              <Check size={13} strokeWidth={3} />
              Diagnóstico completado
            </span>
            <span className={s.plateBadge}>{plate}</span>
          </div>
          <p className={s.heroMeta}>
            {veh.name} · {veh.spec}<br />
            Ref. presupuesto: {ref}
          </p>
        </div>
      </section>

      {/* Estimate Section */}
      <section className={s.estimateSection}>
        <div className={s.estimateInner}>
          <div className={s.serviceCard}>
            <span className={s.serviceCardLabel}>Vehículo</span>
            <h2 className={s.serviceCardTitle}>{veh.name}</h2>
          </div>
          <div className={s.estimateRight}>
            <span className={s.vehicleTag}>{veh.spec} · {veh.detail}</span>
            <h2 className={s.serviceName}>
              {categories.length
                ? CATEGORIES.filter(c => categories.includes(c.key)).map(c => c.label).join(' + ')
                : 'Diagnóstico general'}
            </h2>
            <p className={s.serviceDesc}>
              Presupuesto orientativo basado en la información facilitada.
              Sujeto a confirmación tras inspección física del vehículo.
            </p>
            <div>
              <div className={s.priceRange}>
                <span className={s.price}>{min}€</span>
                <span className={s.priceSep}>–</span>
                <span className={s.price}>{max}€</span>
              </div>
              <p className={s.priceNote}>Estimación · IVA incluido</p>
            </div>
          </div>
        </div>
      </section>

      {/* Desglose */}
      <section className={s.desglose}>
        <div className={s.desgloseInner}>
          <div className={s.desgloseLeft}>
            <h2 className={s.desgloseTitle}>Desglose estimado</h2>
            <div className={s.lineItems}>
              {LINE_ITEMS.map(({ label, price }) => (
                <div key={label} className={s.lineItem}>
                  <span className={s.lineLabel}>{label}</span>
                  <span className={s.linePrice}>{price}</span>
                </div>
              ))}
            </div>
            <div className={s.divider} />
            <div className={s.lineItemTotal}>
              <span className={s.totalLabel}>TOTAL</span>
              <span className={s.totalPrice}>{min}€ – {max}€</span>
            </div>
          </div>
          <div className={s.desgloseRight}>
            <Link to="/contacto" className={s.btnReservar}>
              Reservar cita con este presupuesto →
            </Link>
            <button
              className={s.btnWhatsapp}
              onClick={() => window.open(`https://wa.me/34983123456?text=Hola, quiero enviar mi presupuesto ref. ${ref}`, '_blank')}
            >
              Enviar por WhatsApp
            </button>
            <p className={s.validNote}>Presupuesto válido 15 días · Sin compromiso</p>
          </div>
        </div>
      </section>

      {/* Stamp */}
      <div className={s.stamp}>
        <span className={s.stampTag}>Estado del vehículo</span>
        <p className={s.stampText}>Diagnóstico<br /><span>Completado</span></p>
      </div>
    </>
  )
}

/* ── Main component ── */
export default function Presupuesto() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({ plate: '', vehicle: null, categories: [], description: '', canMove: true })

  function advance(newData) {
    setData(prev => ({ ...prev, ...newData }))
    setStep(s => s + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Navbar />
      <ProgressBar step={step} />

      {step === 1 && <Step1 onNext={advance} />}
      {step === 2 && <Step2 onNext={advance} />}
      {step === 3 && <Step3 onNext={advance} />}
      {step === 4 && (
        <Step4
          plate={data.plate}
          vehicle={data.vehicle}
          categories={data.categories}
        />
      )}

      <Footer />
    </>
  )
}
