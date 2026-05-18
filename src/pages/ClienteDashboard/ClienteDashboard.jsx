import { ArrowRight } from 'lucide-react'
import ClienteNav from '../../components/ClienteNav/ClienteNav'
import Footer from '../../components/Footer/Footer'
import { useAuth } from '../../context/AuthContext'
import s from './ClienteDashboard.module.css'

const STEPS = [
  { label: 'Revisión', state: 'done' },
  { label: 'Diagnóstico', state: 'done' },
  { label: 'En Reparación', state: 'active' },
  { label: 'Control', state: 'pending' },
  { label: 'Listo', state: 'pending' },
]

const TIMELINE = [
  { time: '09:15', event: 'Vehículo recibido en taller', active: false },
  { time: '10:30', event: 'Diagnóstico completado', active: false },
  { time: '10:45', event: 'Presupuesto enviado por WhatsApp', active: false },
  { time: '11:02', event: 'Presupuesto', badge: 'ACEPTADO', active: false },
  { time: '11:10', event: 'Inició la reparación', active: true },
]

export default function ClienteDashboard() {
  const { user } = useAuth()
  const nombre = user?.nombre?.split(' ')[0] || 'Carlos'
  const matricula = user?.matricula || '4567 XYZ'

  return (
    <>
      <ClienteNav active="dashboard" />

      {/* Welcome Hero */}
      <section className={s.welcome}>
        <div className={s.welcomeInner}>
          <p className={s.welcomeTag}>Portal del Cliente</p>
          <h1 className={s.welcomeHeading}>
            Bienvenido,<br />{nombre}
          </h1>
          <span className={s.vehiclePill}>Seat León · {matricula}</span>
        </div>
      </section>

      {/* Active Repair */}
      <section className={s.repairSection}>
        <div className={s.repairInner}>
          <div className={s.repairLeft}>
            <p className={s.repairTag}>Reparación Activa</p>
            <h2 className={s.repairId}>Reparación #TLR-2024-0891</h2>
            <p className={s.repairDesc}>Sustitución pastillas + discos freno</p>

            <div className={s.steps}>
              {STEPS.map(({ label, state }) => (
                <span
                  key={label}
                  className={`${s.step} ${
                    state === 'done'    ? s.stepDone    :
                    state === 'active' ? s.stepActive  :
                    s.stepPending
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>

            <div className={s.repairMeta}>
              <span>Mecánico: <strong>Javier R.</strong></span>
              <span>Actualizado: <strong>hace 23 min</strong></span>
              <span>Entrega: <strong>17:00 HOY</strong></span>
            </div>
          </div>

          <div className={s.statusCard}>
            <span className={s.statusCardLabel}>Estado actual</span>
            <span className={s.statusValue}>En Reparación</span>
            <span className={s.statusTime}>Inicio: 11:10 · Hoy</span>
            <p className={s.statusDesc}>
              El mecánico está trabajando en tu vehículo ahora mismo.
            </p>
            <span className={s.statusAutoUpdate}>
              Actualización automática cada 60 seg.
            </span>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className={s.activitySection}>
        <div className={s.activityInner}>
          <div className={s.activityLeft}>
            <h2 className={s.activityHeading}>
              Actividad<br />Reciente
            </h2>
            <p className={s.activitySub}>
              Seguimiento completo de tu reparación en tiempo real.
            </p>
          </div>

          <div className={s.timeline}>
            {TIMELINE.map(({ time, event, badge, active }) => (
              <div
                key={time}
                className={`${s.timelineItem} ${active ? s.timelineItemActive : ''}`}
              >
                <span className={s.timelineTime}>{time}</span>
                <span className={`${s.timelineEvent} ${active ? s.timelineEventActive : ''}`}>
                  {event}
                  {badge && <span className={s.acceptedBadge}>{badge}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Taller Points */}
      <section className={s.pointsSection}>
        <div className={s.pointsInner}>
          <div className={s.pointsLeft}>
            <p className={s.pointsTag}>Car Lab Points</p>
            <div className={s.pointsCount}>
              1.240 <span>PTS</span>
            </div>
            <div className={s.progressBar}>
              <div className={s.progressFill} />
            </div>
            <p className={s.pointsNext}>760 pts para nivel CROMO</p>
          </div>

          <div className={s.pointsRight}>
            <h3 className={s.levelLabel}>Nivel actual: Acero</h3>
            <p className={s.levelDesc}>
              5% descuento en todos los servicios. Prioridad en citas.
            </p>
            <a href="/cliente/puntos" className={s.levelCta}>
              Ver mis puntos
              <ArrowRight size={13} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
