import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import s from './MatriculaBar.module.css'

export default function MatriculaBar() {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/matricula')
  }

  return (
    <div className={s.bar}>
      <span className={s.label}>Consulta instantánea DGT · Matrícula española</span>
      <form className={s.row} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          placeholder="Introduce tu matrícula · Ej: 1234 ABC"
          value={value}
          onChange={e => setValue(e.target.value)}
          maxLength={10}
        />
        <button type="submit" className={s.btn}>Identificar Vehículo</button>
      </form>
    </div>
  )
}
