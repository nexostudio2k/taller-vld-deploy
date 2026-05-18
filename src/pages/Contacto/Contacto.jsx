import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import s from './Contacto.module.css'

const INFO = [
  { icon: MapPin,  label: 'Dirección', value: 'Calle Esperanza, 12 · 47001 Valladolid' },
  { icon: Phone,   label: 'Teléfono',  value: '+34 983 123 456', href: 'tel:+34983123456' },
  { icon: Mail,    label: 'Email',     value: 'info@carlab.es',  href: 'mailto:info@carlab.es' },
  { icon: Clock,   label: 'Horario',   value: 'LUN–VIE 08:00–19:00 · SAB 09:00–14:00' },
]

export default function Contacto() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', matricula: '', mensaje: '' })

  function handle(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function submit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <Navbar />

      <section className={s.hero}>
        <div className={s.heroInner}>
          <p className={s.heroTag}>// Estamos en Valladolid</p>
          <h1 className={s.heroHeading}>Hablemos.</h1>
        </div>
      </section>

      <section className={s.body}>
        <div className={s.bodyInner}>

          {/* Left — info card */}
          <div className={s.infoCard}>
            <p className={s.infoLabel}>Información de contacto</p>
            <div className={s.infoList}>
              {INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className={s.infoRow}>
                  <Icon size={18} strokeWidth={1.5} className={s.infoIcon} />
                  <div>
                    <p className={s.infoRowLabel}>{label}</p>
                    {href
                      ? <a href={href} className={s.infoValue}>{value}</a>
                      : <p className={s.infoValue}>{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form card */}
          <div className={s.formCard}>
            {sent ? (
              <div className={s.success}>
                <p className={s.successMsg}>// MENSAJE RECIBIDO — Te contactaremos en menos de 24h</p>
              </div>
            ) : (
              <form className={s.form} onSubmit={submit}>
                <div className={s.row2}>
                  <div className={s.field}>
                    <label className={s.label}>Nombre</label>
                    <input className={s.input} name="nombre" type="text" placeholder="Carlos García" value={form.nombre} onChange={handle} required />
                  </div>
                  <div className={s.field}>
                    <label className={s.label}>Email</label>
                    <input className={s.input} name="email" type="email" placeholder="tu@email.com" value={form.email} onChange={handle} required />
                  </div>
                </div>
                <div className={s.row2}>
                  <div className={s.field}>
                    <label className={s.label}>Teléfono</label>
                    <input className={s.input} name="telefono" type="tel" placeholder="+34 600 000 000" value={form.telefono} onChange={handle} />
                  </div>
                  <div className={s.field}>
                    <label className={s.label}>Matrícula <span className={s.optional}>(opcional)</span></label>
                    <input className={s.input} name="matricula" type="text" placeholder="Ej: 4567 XYZ" value={form.matricula} onChange={handle} />
                  </div>
                </div>
                <div className={s.field}>
                  <label className={s.label}>¿En qué podemos ayudarte?</label>
                  <textarea className={s.textarea} name="mensaje" rows={5} placeholder="Describe brevemente tu consulta o avería..." value={form.mensaje} onChange={handle} required />
                </div>
                <button type="submit" className={s.submitBtn}>
                  Enviar Mensaje
                  <ArrowRight size={14} strokeWidth={2.5} />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
