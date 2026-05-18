import { createContext, useContext, useState } from 'react'

const DEMO_USER = { nombre: 'Carlos', matricula: '4567 XYZ', email: 'carlos@demo.com' }

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('carlab_user')
      return stored ? JSON.parse(stored) : null
    } catch { return null }
  })

  function login(matricula, email) {
    const m = matricula.trim().toUpperCase()
    const e = email.trim().toLowerCase()
    if (m === DEMO_USER.matricula && e === DEMO_USER.email) {
      setUser(DEMO_USER)
      localStorage.setItem('carlab_user', JSON.stringify(DEMO_USER))
      return { success: true }
    }
    return { success: false }
  }

  function register(nombre, email, matricula, telefono) {
    const u = {
      nombre: nombre.trim(),
      email: email.trim().toLowerCase(),
      matricula: matricula.trim().toUpperCase(),
      telefono: telefono.trim(),
    }
    setUser(u)
    localStorage.setItem('carlab_user', JSON.stringify(u))
    return { success: true }
  }

  function logout() {
    setUser(null)
    localStorage.removeItem('carlab_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
