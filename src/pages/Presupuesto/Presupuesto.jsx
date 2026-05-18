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

          </div>
        </div>
      </section>

      {/* Desglose */}
      <section className={s.desglose}>
        <div className={s.desgloseInner}>

          {/* Left — itemized breakdown */}
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
              <span className={s.totalPrice}>180€ – 339€</span>
            </div>
          </div>

          {/* Right — actions */}
          <div className={s.desgloseRight}>
            <button className={s.btnReservar}>
              Reservar cita con este presupuesto →
            </button>
            <button
              className={s.btnWhatsapp}
              onClick={() => window.open('https://wa.me/34983123456?text=Hola, quiero enviar mi presupuesto ref. %23VLD-2024-0391', '_blank')}
            >
              Enviar por WhatsApp
            </button>
            <p className={s.validNote}>Presupuesto válido 15 días · Sin compromiso</p>
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
