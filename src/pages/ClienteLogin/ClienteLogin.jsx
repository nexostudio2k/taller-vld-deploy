import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import s from './ClienteLogin.module.css'

export default function ClienteLogin() {
  const [tab, setTab] = useState('login')
  const { login, register } = useAuth()
  const navigate = useNavigate()

  const [loginMat, setLoginMat] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginError, setLoginError] = useState('')

  const [regNombre, setRegNombre] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [regMat, setRegMat] = useState('')
  const [regTel, setRegTel] = useState('')

  function handleLogin(e) {
    e.preventDefault()
    const result = login(loginMat, loginEmail)
    if (result.success) {
      navigate('/cliente/dashboard')
    } else {
      setLoginError('Credenciales incorrectas. Prueba con los datos demo.')
    }
  }

  function handleRegister(e) {
    e.preventDefault()
    register(regNombre, regEmail, regMat, regTel)
    navigate('/cliente/dashboard')
  }

  return (
    <>
      <div className={s.backBar}>
        <a href="/" className={s.backLink}>← VOLVER AL INICIO</a>
      </div>

      <section className={s.hero}>
        <div className={s.heroInner}>
          <p className={s.heroTag}>Portal del Cliente · Car Lab</p>
          <h1 className={s.heroHeading}>Accede a<br />tu Portal</h1>
        </div>
      </section>

      <section className={s.formSection}>
        <div className={s.formInner}>
          <div className={s.tabs}>
            <button
              className={`${s.tab} ${tab === 'login' ? s.tabActive : ''}`}
              onClick={() => setTab('login')}
            >
              Iniciar Sesión
            </button>
            <button
              className={`${s.tab} ${tab === 'register' ? s.tabActive : ''}`}
              onClick={() => setTab('register')}
            >
              Registrarse
            </button>
          </div>

          {tab === 'login' ? (
            <form className={s.form} onSubmit={handleLogin}>
              <div className={s.field}>
                <label className={s.label}>Matrícula</label>
                <input
                  className={s.input}
                  type="text"
                  placeholder="Ej: 4567 XYZ"
                  value={loginMat}
                  onChange={e => { setLoginMat(e.target.value); setLoginError('') }}
                  required
                />
              </div>
              <div className={s.field}>
                <label className={s.label}>Email</label>
                <input
                  className={s.input}
                  type="email"
                  placeholder="tu@email.com"
                  value={loginEmail}
                  onChange={e => { setLoginEmail(e.target.value); setLoginError('') }}
                  required
                />
              </div>
              {loginError && <p className={s.error}>{loginError}</p>}
              <button type="submit" className={s.submitBtn}>Acceder</button>
              <p className={s.demo}>// DEMO: matrícula 4567 XYZ · email carlos@demo.com</p>
            </form>
          ) : (
            <form className={s.form} onSubmit={handleRegister}>
              <div className={s.field}>
                <label className={s.label}>Nombre completo</label>
                <input
                  className={s.input}
                  type="text"
                  placeholder="Carlos García"
                  value={regNombre}
                  onChange={e => setRegNombre(e.target.value)}
                  required
                />
              </div>
              <div className={s.field}>
                <label className={s.label}>Email</label>
                <input
                  className={s.input}
                  type="email"
                  placeholder="tu@email.com"
                  value={regEmail}
                  onChange={e => setRegEmail(e.target.value)}
                  required
                />
              </div>
              <div className={s.field}>
                <label className={s.label}>Matrícula</label>
                <input
                  className={s.input}
                  type="text"
                  placeholder="Ej: 4567 XYZ"
                  value={regMat}
                  onChange={e => setRegMat(e.target.value)}
                  required
                />
              </div>
              <div className={s.field}>
                <label className={s.label}>Teléfono</label>
                <input
                  className={s.input}
                  type="tel"
                  placeholder="+34 600 000 000"
                  value={regTel}
                  onChange={e => setRegTel(e.target.value)}
                />
              </div>
              <button type="submit" className={s.submitBtn}>Crear Cuenta</button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
