import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../../assets/logo.png'

export default function Loader({ done }) {
  const [count, setCount] = useState(0)
  const [phase, setPhase] = useState('logo')  

  useEffect(() => {
    const toWordmark = setTimeout(() => setPhase('wordmark'), 900)
    const toExpand   = setTimeout(() => setPhase('expand'),   1700)

   const id = setInterval(() => {
  setCount(c => {
    const next = c + Math.random() * 5 + 1   
    if (next >= 100) {
      clearInterval(id)
      return 100
    }
    return next
  })
}, 80)

    return () => {
      clearInterval(id)
      clearTimeout(toWordmark)
      clearTimeout(toExpand)
    }
  }, [])

  const expanded = phase === 'expand'

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9000] flex flex-col items-center justify-center"
          style={{ background: '#080808' }}
        >
          <img
              src={logo}
              alt="SmartCoach360 logo"
              style={{
                width: 'clamp(88px, 13vw, 140px)',
                height: 'clamp(88px, 13vw, 140px)',
                objectFit: 'contain',
                mixBlendMode: 'lighten',
              }}
            />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              phase === 'logo'
                ? { opacity: 0, y: 20 }
                : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-10"
          >
            <div
              className="font-display font-black leading-none tracking-tight text-[#f0ede8] flex items-baseline"
              style={{ fontSize: 'clamp(40px, 7vw, 88px)', overflow: 'hidden' }}
            >
              <span>S</span>

              <span
                style={{
                  display: 'inline-block',
                  maxWidth: expanded ? '5em' : '0',
                  opacity: expanded ? 1 : 0,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  transition: expanded
                    ? 'max-width 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.35s 0.08s ease'
                    : 'none',
                }}
              >
                MART
              </span>

              <span style={{ color: '#00FF94' }}>C</span>

              <span
                style={{
                  display: 'inline-block',
                  maxWidth: expanded ? '5em' : '0',
                  opacity: expanded ? 1 : 0,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  color: '#00FF94',
                  transition: expanded
                    ? 'max-width 0.55s 0.06s cubic-bezier(0.16,1,0.3,1), opacity 0.35s 0.16s ease'
                    : 'none',
                }}
              >
                OACH
              </span>

              <span>360</span>
            </div>

            <div
              className="relative overflow-hidden"
              style={{ width: 'clamp(160px, 20vw, 240px)', height: '1px', background: '#2e2c2a' }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: '#00FF94',
                  transform: `translateX(${count - 100}%)`,
                  transition: 'transform 0.08s linear',
                }}
              />
            </div>

            <div
              className="font-mono text-[12px] tracking-[0.15em] uppercase"
              style={{ color: '#6b6760' }}
            >
              {Math.floor(count).toString().padStart(3, '0')}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}