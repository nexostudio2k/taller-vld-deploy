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
      { name: 'Revisión completa',       desc: 'Inspección de 50+ puntos, niveles y sistemas',   range: '150 – 300 €' },
      { name: 'Cambio aceite + filtros', desc: 'Aceite sintético homologado + filtro de aceite',  range: '80 – 120 €'  },
      { name: 'Frenos pastillas',        desc: 'Sustitución delantera o trasera, incluye purga',  range: '120 – 250 €' },
      { name: 'Distribución',            desc: 'Kit completo, tensor y bomba de agua si procede', range: '400 – 800 €' },
      { name: 'Amortiguadores',          range: '300 – 600 €', desc: 'Par delantero o trasero, incluye geometría' },
    ],
  },
  electronica: {
    title: 'Electrónica',
    num: 'Servicio 02',
    img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80',
    items: [
      { name: 'Diagnóstico OBD', desc: 'Lectura y borrado de códigos de avería DTC',     range: '60 – 90 €'   },
      { name: 'Batería',         desc: 'Sustitución y registro en centralita del vehículo', range: '150 – 300 €'  },
      { name: 'Alternador',      desc: 'Revisión del sistema de carga y sustitución',     range: '250 – 450 €'  },
      { name: 'Centralita',      desc: 'Programación, actualización de software y flasheo', range: '300 – 800 €'  },
      { name: 'Sensores',        desc: 'ABS, oxígeno, temperatura, presión de neumáticos', range: '80 – 200 €'   },
    ],
  },
  chapa: {
    title: 'Chapa y Pintura',
    num: 'Servicio 03',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80',
    items: [
      { name: 'Abolladuras pequeñas',    desc: 'Técnica PDR sin pintura cuando es posible',        range: '150 – 300 €'    },
      { name: 'Pintura panel completo',  desc: 'Igualación de color con cabina climatizada',        range: '300 – 600 €'    },
      { name: 'Paragolpes',              desc: 'Desmontaje, reparación, pintura y montaje',         range: '200 – 400 €'    },
      { name: 'Rayadas',                 desc: 'Pulido o retoque localizado según profundidad',     range: '80 – 150 €'     },
      { name: 'Carrocería completa',     desc: 'Tratamiento integral con preparación de superficie', range: '2.000 – 5.000 €'},
    ],
  },
  neumaticos: {
    title: 'Neumáticos',
    num: 'Servicio 04',
    img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&q=80',
    items: [
      { name: 'Cambio 4 neumáticos turismo', desc: 'Montaje, equilibrado y válvulas incluidos',   range: '200 – 400 €' },
      { name: 'Cambio 4 neumáticos SUV',     desc: 'Montaje, equilibrado y válvulas incluidos',   range: '300 – 600 €' },
      { name: 'Equilibrado',                 desc: 'Equilibrado dinámico en máquina láser 3D',    range: '40 – 80 €'   },
      { name: 'Alineación',                  desc: 'Dirección y geometría en 4 ruedas',           range: '50 – 90 €'   },
      { name: 'Pinchazos',                   desc: 'Reparación con parche interior homologado',   range: '20 – 40 €'   },
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
            {data.items.map(({ name, desc, range }) => (
              <div key={name} className={s.tableRow}>
                <div className={s.tableLeft}>
                  <span className={s.tableService}>{name}</span>
                  {desc && <span className={s.tableDesc}>{desc}</span>}
                </div>
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
