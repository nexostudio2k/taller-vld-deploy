import { Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import MatriculaBar from './components/MatriculaBar/MatriculaBar'
import WhyUs from './components/WhyUs/WhyUs'
import Services from './components/Services/Services'
import CtaPortal from './components/CtaPortal/CtaPortal'
import Footer from './components/Footer/Footer'
import Matricula from './pages/Matricula/Matricula'
import Presupuesto from './pages/Presupuesto/Presupuesto'
import ClienteDashboard from './pages/ClienteDashboard/ClienteDashboard'
import ClientePuntos from './pages/ClientePuntos/ClientePuntos'
import Seguimiento from './pages/Seguimiento/Seguimiento'
import ClienteHistorial from './pages/ClienteHistorial/ClienteHistorial'
import ClienteLogin from './pages/ClienteLogin/ClienteLogin'
import ServicioDetalle from './pages/Servicios/ServicioDetalle'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
          <main>
            <Hero />
            <MatriculaBar />
            <WhyUs />
            <Services />
            <CtaPortal />
          </main>
          <Footer />
        </>
      } />
      <Route path="/matricula" element={<Matricula />} />
      <Route path="/presupuesto" element={<Presupuesto />} />
      <Route path="/cliente/dashboard" element={<ClienteDashboard />} />
      <Route path="/cliente/puntos" element={<ClientePuntos />} />
      <Route path="/seguimiento" element={<Seguimiento />} />
      <Route path="/cliente/historial" element={<ClienteHistorial />} />
      <Route path="/cliente" element={<ClienteLogin />} />
      <Route path="/servicios/:slug" element={<ServicioDetalle />} />
    </Routes>
  )
}
