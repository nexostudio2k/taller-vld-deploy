import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import s from './ServicioDetalle.module.css'

const DATA = {
  mecanica: {
    title: 'Mecánica General',
    num: 'Servicio 01',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
    items: [
      { name: 'Revisión completa',       range: '150 – 300 €' },
      { name: 'Cambio aceite + filtros', range: '80 – 120 €'  },
      { name: 'Frenos pastillas',        range: '120 – 250 €' },
      { name: 'Distribución',            range: '400 – 800 €' },
      { name: 'Amortiguadores',          range: '300 – 600 €' },
    ],
  },
  electronica: {
    title: 'Electrónica',
    num: 'Servicio 02',
    img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80',
    items: [
      { name: 'Diagnóstico OBD', range: '60 – 90 €'   },
      { name: 'Batería',         range: '150 – 300 €'  },
      { name: 'Alternador',      range: '250 – 450 €'  },
      { name: 'Centralita',      range: '300 – 800 €'  },
      { name: 'Sensores',        range: '80 – 200 €'   },
    ],
  },
  chapa: {
    title: 'Chapa y Pintura',
    num: 'Servicio 03',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80',
    items: [
      { name: 'Abolladuras pequeñas',    range: '150 – 300 €'    },
      { name: 'Pintura panel completo',  range: '300 – 600 €'    },
      { name: 'Paragolpes',              range: '200 – 400 €'    },
      { name: 'Rayadas',                 range: '80 – 150 €'     },
      { name: 'Carrocería completa',     range: '2.000 – 5.000 €'},
    ],
  },
  neumaticos: {
    title: 'Neumáticos',
    num: 'Servicio 04',
    img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&q=80',
    items: [
      { name: 'Cambio 4 neumáticos turismo', range: '200 – 400 €' },
      { name: 'Cambio 4 neumáticos SUV',     range: '300 – 600 €' },
      { name: 'Equilibrado',                 range: '40 – 80 €'   },
      { name: 'Alineación',                  range: '50 – 90 €'   },
      { name: 'Pinchazos',                   range: '20 – 40 €'   },
    ],
  },
}

export default function ServicioDetalle() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const data = DATA[slug]

  if (!data) {
    navigate('/')
    return null
  }

  return (
    <>
      <Navbar />
      <section className={s.hero}>
        <div className={s.heroBg} style={{ backgroundImage: `url('${data.img}')` }} />
        <div className={s.heroInner}>
          <a href="/" className={s.heroBack}>
            <ArrowLeft size={12} strokeWidth={2} /> Volver al inicio
          </a>
          <p className={s.heroNum}>{data.num}</p>
          <h1 className={s.heroTitle}>{data.title}</h1>
        </div>
      </section>

      <section className={s.tableSection}>
        <div className={s.tableInner}>
          <p className={s.tableTag}>Precios orientativos · IVA no incluido</p>
          <div className={s.table}>
            {data.items.map(({ name, range }) => (
              <div key={name} className={s.tableRow}>
                <span className={s.tableService}>{name}</span>
                <span className={s.tableRange}>{range}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.ctaSection}>
        <div className={s.ctaInner}>
          <h2 className={s.ctaHeading}>¿Necesitas este<br />servicio?</h2>
          <a
            href={`/presupuesto?categoria=${slug}`}
            className={s.ctaBtn}
          >
            Pedir presupuesto ahora
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
