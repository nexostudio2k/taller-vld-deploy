import { ArrowRight } from 'lucide-react'
import ClienteNav from '../../components/ClienteNav/ClienteNav'
import Footer from '../../components/Footer/Footer'
import s from './ClienteHistorial.module.css'

const REPAIRS = [
  {
    date: '05 May 2024',
    type: 'Sustitución pastillas + discos de freno',
    ref: 'TLR-2024-0891',
    cost: '€ 340',
  },
  {
    date: '12 Feb 2024',
    type: 'Cambio de aceite y filtros',
    ref: 'TLR-2024-0412',
    cost: '€ 89',
  },
  {
    date: '20 Oct 2023',
    type: 'Revisión completa + ITV',
    ref: 'TLR-2023-1087',
    cost: '€ 210',
  },
  {
    date: '03 Jun 2023',
    type: 'Reparación sistema de frenos ABS',
    ref: 'TLR-2023-0634',
    cost: '€ 480',
  },
]

export default function ClienteHistorial() {
  return (
    <>
      <ClienteNav active="historial" />

      <section className={s.hero}>
        <div className={s.heroInner}>
          <p className={s.heroTag}>Portal del Cliente · Seat Leon · 4567 XYZ</p>
          <h1 className={s.heroHeading}>
            Historial de<br />Reparaciones
          </h1>
        </div>
      </section>

      <section className={s.listSection}>
        <div className={s.listInner}>
          <div className={s.listHeader}>
            <span>Fecha</span>
            <span>Servicio</span>
            <span>Coste</span>
            <span>Estado</span>
            <span></span>
          </div>

          {REPAIRS.map(({ date, type, ref, cost }) => (
            <div key={ref} className={s.repairRow}>
              <span className={s.repairDate}>{date}</span>
              <div>
                <p className={s.repairType}>{type}</p>
                <p className={s.repairRef}>{ref}</p>
              </div>
              <span className={s.repairCost}>{cost}</span>
              <span className={s.completedBadge}>✓ Completado</span>
              <a href="#" className={s.detailLink}>
                Ver detalle <ArrowRight size={12} strokeWidth={2.5} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
