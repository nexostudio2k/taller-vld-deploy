import { useState, useEffect } from 'react'
import s from './LoadingScreen.module.css'

const LINES = [
  '// INICIANDO SISTEMAS...',
  '// CONECTANDO CON DGT...',
  '// CARGANDO PORTAL...',
  '// LISTO.',
]

export default function LoadingScreen({ onDone }) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timers = []
    LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), (i + 1) * 300))
    })
    timers.push(setTimeout(() => setFading(true), 2000))
    timers.push(setTimeout(() => onDone(), 2400))
    return () => timers.forEach(clearTimeout)
  }, [onDone])

  return (
    <div className={`${s.overlay} ${fading ? s.fading : ''}`}>
      <div className={s.content}>
        <p className={s.logo}>CAR LAB</p>
        <div className={s.lines}>
          {LINES.map((line, i) => (
            <span
              key={line}
              className={`${s.line} ${i < visibleLines ? s.lineVisible : ''}`}
            >
              {line}
            </span>
          ))}
        </div>
        <div className={s.barTrack}>
          <div className={`${s.barFill} ${visibleLines > 0 ? s.barAnimate : ''}`} />
        </div>
      </div>
    </div>
  )
}
