import ClienteNav from '../../components/ClienteNav/ClienteNav'
import Footer from '../../components/Footer/Footer'
import { useAuth } from '../../context/AuthContext'
import s from './ClientePuntos.module.css'

const LEVELS = [
  { key: 'bronce',  name: 'Bronce',  range: '0 – 500 pts',       benefits: '—',                    active: false },
  { key: 'acero',   name: 'Acero',   range: '500 – 2.000 pts',   benefits: '5% · Prioridad',        active: true  },
  { key: 'cromo',   name: 'Cromo',   range: '2.000 – 5.000 pts', benefits: '10% · Visitas Express', active: false },
  { key: 'titanio', name: 'Titanio', range: '5.000+ pts',         benefits: '15% · VIP · Gratis ITV',active: false },
]

const EARN_ROWS = [
  { label: 'ITV pasada',            pts: '+10 pts'   },
  { label: 'Reparación e historial', pts: '+599 pts'  },
  { label: 'Cambio de aceite',       pts: '+150 pts'  },
  { label: 'Próxima cita activa',    pts: '+500 pts'  },
  { label: 'Traer un amigo',         pts: '+200 pts'  },
]

const MOVEMENTS = [
  { label: 'Reparación #TLR-2024-0891', date: '05 May 2024', pts: '+1.240 pts', positive: true  },
  { label: 'Visita con taller autorizado', date: '15 Ene 2024', pts: '-450 pts',  positive: false },
  { label: 'Reserva → Visita',          date: '20 Oct 2024', pts: '-300 pts',  positive: false },
  { label: 'Cambio de aceite',          date: '10 Ene 2024', pts: '+150 pts',  positive: true  },
]

const REDEEM = [
  {
    pts: '500',
    desc: '10% de descuento en tu próxima revisión completa.',
    cta: 'Canjear ahora',
  },
  {
    pts: '1.000',
    desc: 'Cambio de aceite + filtro completamente gratuito.',
    cta: 'Canjear ahora',
  },
  {
    pts: '2.000',
    desc: 'Neumático de regalo en tu próxima visita al taller.',
    cta: 'Canjear ahora',
  },
]

export default function ClientePuntos() {
  const { user } = useAuth()
  const nombre = user?.nombre?.split(' ')[0] || 'Carlos'

  return (
    <>
      <ClienteNav active="puntos" />

      {/* Hero — level card + membership table */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <p className={s.heroTag}>Portal del Cliente · Car Lab Points</p>
          <h1 className={s.heroHeading}>Car Lab Points</h1>
          <div className={s.heroBadgeRow}>
            <span className={s.heroBadge}>NIVEL ACERO</span>
            <span className={s.heroAccum}>1.240 PTS ACUMULADOS</span>
          </div>

          {/* Credit card */}
          <div className={s.memberCard}>
            <div className={s.memberCardTop}>
              <span className={s.memberCardBrand}>CAR LAB POINTS</span>
              <span className={s.memberCardLevel}>★ ACERO</span>
            </div>
            <div className={s.memberCardPts}>1.240</div>
            <p className={s.memberCardCaption}>PUNTOS DISPONIBLES</p>
            <div className={s.memberCardBar}>
              <div className={s.memberCardBarFill} />
            </div>
            <span className={s.memberCardHolder}>CARLOS R. · 4567 XYZ</span>
          </div>

          {/* Membership levels */}
          <div className={s.membershipRight}>
            <h2 className={s.membershipTitle}>Niveles de Membresía</h2>
            <p className={s.membershipSub}>
              Acumula puntos en cada servicio y desbloquea beneficios exclusivos.
            </p>
            <div className={s.levels}>
              {LEVELS.map(({ key, name, range, benefits, active }) => (
                <div key={key} className={`${s.levelRow} ${active ? s.levelRowActive : ''}`}>
                  <div className={s.levelRowLeft}>
                    <span className={`${s.levelDot} ${active ? s.levelDotActive : ''}`} />
                    <span className={`${s.levelName} ${active ? s.levelNameActive : ''}`}>{name}</span>
                    <span className={s.levelRange}>{range}</span>
                  </div>
                  <span className={`${s.levelBenefits} ${active ? s.levelBenefitsActive : ''}`}>
                    {benefits}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Earn Points */}
      <section className={s.earnSection}>
        <div className={s.earnInner}>
          <p className={s.earnTag}>Cómo ganar puntos</p>
          <h2 className={s.earnHeading}>Acumula<br />Puntos</h2>
          <div className={s.earnList}>
            {EARN_ROWS.map(({ label, pts }) => (
              <div key={label} className={s.earnRow}>
                <span className={s.earnRowLabel}>{label}</span>
                <span className={s.earnRowPts}>{pts}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Movements */}
      <section className={s.movSection}>
        <div className={s.movInner}>
          <p className={s.movTag}>Historial de puntos</p>
          <h2 className={s.movHeading}>Movimientos</h2>
          <div className={s.movList}>
            {MOVEMENTS.map(({ label, date, pts, positive }) => (
              <div key={label + date} className={s.movRow}>
                <div className={s.movLeft}>
                  <span className={s.movLabel}>{label}</span>
                  <span className={s.movDate}>{date}</span>
                </div>
                <span className={`${s.movPts} ${positive ? s.movPtsPos : s.movPtsNeg}`}>
                  {pts}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redeem */}
      <section className={s.redeemSection}>
        <div className={s.redeemInner}>
          <h2 className={s.redeemHeading}>Canjear Puntos</h2>
          <div className={s.redeemGrid}>
            {REDEEM.map(({ pts, desc, cta }) => (
              <div key={pts} className={s.redeemCard}>
                <div className={s.redeemPts}>
                  {pts} <span>PTS</span>
                </div>
                <p className={s.redeemDesc}>{desc}</p>
                <button className={s.redeemBtn}>{cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
