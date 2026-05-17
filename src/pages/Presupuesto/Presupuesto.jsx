import { Check } from 'lucide-react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import s from './Presupuesto.module.css'

const LINE_ITEMS = [
  {
    label: 'Diagnóstico inicial',
    desc: 'Escáner OBD + inspección visual completa',
    price: '35€',
  },
  {
    label: 'Mano de obra',
    desc: 'Desmontaje, reparación y montaje estimado',
    price: '65€ – 120€',
  },
  {
    label: 'Recambios estimados',
    desc: 'Piezas de primera calidad homologadas',
    price: '20€ – 125€',
  },
  {
    label: 'IVA (21%)',
    desc: 'Aplicado sobre el total sin impuestos',
    price: '25€ – 59€',
  },
]

export default function Presupuesto() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroBadges}>
            <span className={s.statusBadge}>
              <Check size={13} strokeWidth={3} />
              Diagnóstico completado
            </span>
            <span className={s.plateBadge}>1234 ABC</span>
          </div>
          <p className={s.heroMeta}>
            Volkswagen Golf · 2.0 TDI · 2018<br />
            Ref. presupuesto: #VLD-2024-0391
          </p>
        </div>
      </section>

      {/* Estimate Section */}
      <section className={s.estimateSection}>
        <div className={s.estimateInner}>
          {/* Service photo card */}
          <div className={s.serviceCard}>
            <span className={s.serviceCardLabel}>Servicio asignado</span>
            <h2 className={s.serviceCardTitle}>Revisión<br />completa</h2>
          </div>

          {/* Pricing + CTA */}
          <div className={s.estimateRight}>
            <span className={s.vehicleTag}>
              VW Golf 2018 · 2.0 TDI 150 CV · 142.000 km
            </span>

            <h2 className={s.serviceName}>Revisión completa<br />+ Diagnóstico avanzado</h2>

            <p className={s.serviceDesc}>
              Revisión de frenos, suspensión, distribución y diagnosis electrónica completa.
              Presupuesto orientativo sujeto a confirmación tras inspección física del vehículo.
            </p>

            <div>
              <div className={s.priceRange}>
                <span className={s.price}>120€</span>
                <span className={s.priceSep}>–</span>
                <span className={s.price}>280€</span>
              </div>
              <p className={s.priceNote}>Estimación · IVA incluido</p>
            </div>

            <div className={s.actions}>
              <button className={s.btnAccept}>Aceptar presupuesto</button>
              <button className={s.btnReject}>Rechazar / Solicitar cambios</button>
              <span className={s.validNote}>// Presupuesto válido 15 días · Ref. #VLD-2024-0391</span>
            </div>
          </div>
        </div>
      </section>

      {/* Desglose */}
      <section className={s.desglose}>
        <div className={s.desgloseInner}>
          <div className={s.desgloseHeader}>
            <h2 className={s.desgloseTitle}>Desglose estimado</h2>
            <div className={s.desgloseMeta}>
              <span className={s.desgloseShop}>Taller VLD</span>
              <span className={s.desgloseTotal}>
                Estimación total: <span>180€ – 339€</span>
              </span>
            </div>
          </div>

          <div className={s.lineItems}>
            {LINE_ITEMS.map(({ label, desc, price }) => (
              <div key={label} className={s.lineItem}>
                <div className={s.lineLeft}>
                  <span className={s.lineLabel}>{label}</span>
                  <span className={s.lineDesc}>{desc}</span>
                </div>
                <span className={s.linePrice}>{price}</span>
              </div>
            ))}
          </div>

          <div className={s.divider} />

          <div className={s.lineItemTotal}>
            <span className={s.totalLabel}>Total estimado (IVA incl.)</span>
            <span className={s.totalPrice}>180€ – 339€</span>
          </div>
        </div>
      </section>

      {/* Completion Stamp */}
      <div className={s.stamp}>
        <span className={s.stampTag}>Estado del vehículo</span>
        <p className={s.stampText}>
          Diagnóstico<br />
          <span>Completado</span>
        </p>
      </div>

      <Footer />
    </>
  )
}
