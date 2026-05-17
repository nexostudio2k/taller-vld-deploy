import { Phone, MapPin, Clock, Send } from 'lucide-react'
import s from './Contact.module.css'

const INFO = [
  { icon: Phone, label: 'Teléfono', value: '+34 983 000 000' },
  { icon: MapPin, label: 'Dirección', value: 'Calle Industria 47, Valladolid' },
  { icon: Clock, label: 'Horario', value: 'Lun–Vie 8:00–19:00 · Sáb 9:00–14:00' },
]

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <section id="contacto" className={s.section}>
      <div className={s.inner}>
        <div className={s.left}>
          <span className={s.label}>// Contacto</span>
          <h2 className={s.title}>Pide tu<br />Cita Hoy</h2>

          <div className={s.infoList}>
            {INFO.map(({ icon: Icon, label, value }) => (
              <div key={label} className={s.infoItem}>
                <div className={s.infoIcon}>
                  <Icon size={16} strokeWidth={1.75} />
                </div>
                <div className={s.infoText}>
                  <span className={s.infoLabel}>{label}</span>
                  <span className={s.infoValue}>{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.row}>
            <div className={s.field}>
              <label className={s.fieldLabel}>Nombre</label>
              <input className={s.input} type="text" placeholder="Tu nombre" required />
            </div>
            <div className={s.field}>
              <label className={s.fieldLabel}>Teléfono</label>
              <input className={s.input} type="tel" placeholder="600 000 000" required />
            </div>
          </div>

          <div className={s.field}>
            <label className={s.fieldLabel}>Vehículo</label>
            <input className={s.input} type="text" placeholder="Marca, modelo y año" />
          </div>

          <div className={s.field}>
            <label className={s.fieldLabel}>Descripción del problema</label>
            <textarea className={s.textarea} placeholder="Cuéntanos qué le pasa a tu coche…" />
          </div>

          <button type="submit" className={s.submit}>
            Enviar solicitud
            <Send size={15} strokeWidth={2} />
          </button>
        </form>
      </div>
    </section>
  )
}
