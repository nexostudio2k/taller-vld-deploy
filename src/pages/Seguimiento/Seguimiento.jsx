import { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './Seguimiento.module.css'

const CASES = {
  'TLR-2024-0891': {
    status: 'EN REPARACIÓN',
    statusClass: 'statusRed',
    fillClass: 'stepFillRed',
    activeClass: 'stepActiveRed',
    descClass: '',
    step: 3,
    vehicle: 'Seat León · 4567 XYZ',
    mechanic: 'Javier R.',
    updated: 'hace 23 min',
    delivery: '17:00 HOY',
    desc: 'El mecánico está trabajando en tu vehículo ahora mismo. Sustitución pastillas + discos de freno en curso.',
  },
  'TLR-2024-0892': {
    status: 'EN DIAGNÓSTICO',
    statusClass: 'statusRed',
    fillClass: 'stepFillRed',
    activeClass: 'stepActiveRed',
    descClass: '',
    step: 1,
    vehicle: 'Volkswagen Golf · 2341 KPL',
    mechanic: 'Miguel A.',
    updated: 'hace 5 min',
    delivery: 'Pendiente',
    desc: 'Tu vehículo está siendo inspeccionado por nuestro equipo. Te enviaremos el presupuesto por WhatsApp en breve.',
  },
  'TLR-2024-0893': {
    status: 'LISTO PARA RECOGER',
    statusClass: 'statusGreen',
    fillClass: 'stepFillGreen',
    activeClass: 'stepActiveGreen',
    descClass: 'resultDescGreen',
    step: 4,
    vehicle: 'Toyota Corolla · 8812 MNQ',
    mechanic: 'Luis P.',
    updated: 'hace 1 hora',
    delivery: 'DISPONIBLE',
    desc: 'Tu vehículo está listo. Puedes recogerlo en horario de taller: Lun–Vie 08:00–20:00 · Sáb 09:00–14:00.',
  },
  'TLR-2024-0894': {
    status: 'PRESUPUESTO PENDIENTE',
    statusClass: 'statusAmber',
    fillClass: 'stepFillAmber',
    activeClass: 'stepActiveAmber',
    descClass: 'resultDescAmber',
    step: 2,
    vehicle: 'Renault Megane · 5590 RTY',
    mechanic: 'Carlos M.',
    updated: 'hace 48 min',
    delivery: 'Pendiente aprobación',
    desc: 'El diagnóstico ha finalizado. Revisa el presupuesto enviado por WhatsApp y confírmalo para iniciar la reparación.',
  },
}

const STEPS = ['Recepción', 'Diagnóstico', 'Reparación', 'Control', 'Entrega']

function getCase(ref) {
  const key = ref.toUpperCase()
  if (CASES[key]) return { ref: key, ...CASES[key] }
  return {
    ref: key,
    status: 'RECEPCIÓN',
    statusClass: 'statusRed',
    fillClass: 'stepFillRed',
    activeClass: 'stepActiveRed',
    descClass: '',
    step: 0,
    vehicle: 'Vehículo en recepción',
    mechanic: '—',
    updated: 'Recién registrado',
    delivery: 'Por determinar',
    desc: 'Tu vehículo ha sido registrado en nuestro sistema. Pronto recibirás actualizaciones sobre el diagnóstico.',
  }
}

function StepBar({ step, activeClass, fillClass }) {
  const fillPct = STEPS.length > 1 ? (step / (STEPS.length - 1)) * 100 : 0
  return (
    <div className={s.stepBar}>
      <div className={s.stepTrack}>
        <div
          className={`${s.stepFill} ${s[fillClass]}`}
          style={{ width: `${fillPct}%` }}
        />
      </div>
      {STEPS.map((label, i) => {
        const isDone = i < step
        const isActive = i === step
        const circleClass = isDone
          ? s.stepDone
          : isActive
          ? s[activeClass]
          : s.stepPending
        const labelClass = isActive ? `${s.stepLabel} ${s.stepLabelActive}` : s.stepLabel
        return (
          <div key={label} className={s.step}>
            <div className={`${s.stepCircle} ${circleClass}`}>
              {isDone ? '✓' : i + 1}
            </div>
            <span className={labelClass}>{label}</span>
          </div>
        )
      })}
    </div>
  )
}

function ResultSection({ data }) {
  return (
    <section className={s.resultSection}>
      <div className={s.resultInner}>
        <div className={s.resultHeader}>
          <span className={s.refBadge}>REF: {data.ref}</span>
          <span className={`${s.statusBadge} ${s[data.statusClass]}`}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'currentColor', flexShrink: 0 }} />
            {data.status}
          </span>
        </div>

        <div className={s.resultTitle}>
          <h2 className={s.resultHeading}>Seguimiento de Reparación</h2>
          <span className={s.resultVehicle}>{data.vehicle}</span>
        </div>

        <StepBar step={data.step} activeClass={data.activeClass} fillClass={data.fillClass} />

        <div className={s.infoGrid}>
          <div className={s.infoCell}>
            <span className={s.infoCellLabel}>Mecánico</span>
            <span className={s.infoCellValue}>{data.mechanic}</span>
          </div>
          <div className={s.infoCell}>
            <span className={s.infoCellLabel}>Última actualización</span>
            <span className={s.infoCellValue}>{data.updated}</span>
          </div>
          <div className={s.infoCell}>
            <span className={s.infoCellLabel}>Entrega estimada</span>
            <span className={s.infoCellValue}>{data.delivery}</span>
          </div>
        </div>

        <p className={`${s.resultDesc} ${data.descClass ? s[data.descClass] : ''}`}>
          {data.desc}
        </p>

        <div className={s.resultActions}>
          <Link to="/cliente/dashboard" className={s.btnPortal}>
            Abrir Portal Cliente
          </Link>
          <Link to="/presupuesto" className={s.btnPresupuesto}>
            Solicitar Presupuesto
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Seguimiento() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState(null)

  function handleSearch(e) {
    e.preventDefault()
    if (query.trim()) setResult(getCase(query.trim()))
  }

  return (
    <>
      <div className={s.backBar}>
        <a href="/" className={s.backLink}>← VOLVER AL INICIO</a>
      </div>

      <section className={s.searchSection}>
        <div className={s.searchInner}>
          <p className={s.searchTag}>Seguimiento de Reparación · Car Lab</p>
          <h1 className={s.searchHeading}>
            Estado de<br />tu vehículo
          </h1>
          <form className={s.searchRow} onSubmit={handleSearch}>
            <input
              className={s.searchInput}
              type="text"
              placeholder="Introduce tu nº de referencia · Ej: TLR-2024-0891"
              value={query}
              onChange={e => setQuery(e.target.value)}
              maxLength={20}
            />
            <button type="submit" className={s.searchBtn}>Consultar</button>
          </form>
          <span className={s.searchHint}>
            Encontrarás tu referencia en el SMS o WhatsApp de confirmación
          </span>
        </div>
      </section>

      {result && <ResultSection data={result} />}
    </>
  )
}
