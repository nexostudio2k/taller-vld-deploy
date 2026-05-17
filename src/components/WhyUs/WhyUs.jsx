import s from './WhyUs.module.css'

const CARDS = [
  {
    num: '01',
    title: 'Diagnóstico Avanzado',
    desc: 'Escáner multimarca de última generación. Detectamos cualquier avería antes de tocar una pieza.',
  },
  {
    num: '02',
    title: 'Mecánicos Certificados',
    desc: 'Equipo con más de 15 años de experiencia y formación continua en las últimas tecnologías del automóvil.',
  },
  {
    num: '03',
    title: 'Garantía en Piezas',
    desc: 'Todas las reparaciones incluyen garantía. Trabajamos solo con recambios de primera calidad.',
  },
]

export default function WhyUs() {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <h2 className={s.heading}>Excelencia en cada revisión.</h2>
        <div className={s.grid}>
          {CARDS.map(({ num, title, desc }) => (
            <div key={num} className={s.card}>
              <span className={s.num}>{num}</span>
              <h3 className={s.cardTitle}>{title}</h3>
              <p className={s.cardDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
