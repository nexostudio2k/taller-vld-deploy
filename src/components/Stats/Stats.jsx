import s from './Stats.module.css'

const STATS = [
  { number: '15', suffix: '+', label: 'Años de experiencia' },
  { number: '2.800', suffix: '+', label: 'Clientes satisfechos' },
  { number: '98', suffix: '%', label: 'Valoración media' },
  { number: '24h', suffix: '', label: 'Respuesta garantizada' },
]

export default function Stats() {
  return (
    <div id="nosotros" className={s.strip}>
      <div className={s.inner}>
        {STATS.map(({ number, suffix, label }) => (
          <div key={label} className={s.stat}>
            <div className={s.number}>
              {number}<span>{suffix}</span>
            </div>
            <div className={s.label}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
