import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../../assets/logo.png'
import title from '../../assets/title.png'

export default function Loader({ done }) {
  const [count, setCount] = useState(0)
  const [phase, setPhase] = useState('logo')

  useEffect(() => {
    const toWordmark = setTimeout(() => setPhase('wordmark'), 900)
    const toExpand   = setTimeout(() => setPhase('expand'),   1700)

    const id = setInterval(() => {
      setCount(c => {
        const next = c + Math.random() * 5 + 1
        if (next >= 100) { clearInterval(id); return 100 }
        return next
      })
    }, 80)

    return () => { clearInterval(id); clearTimeout(toWordmark); clearTimeout(toExpand) }
  }, [])

  const expanded = phase === 'expand'
  const visible  = phase !== 'logo'

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9000,
            background: '#080808',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }}
        >

          {/* ── Scan-line grid overlay ── */}
          <div aria-hidden style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)',
          }} />

          {/* ── Green ambient glow behind center ── */}
          <div aria-hidden style={{
            position: 'absolute',
            width: '520px', height: '260px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(0,255,148,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(30px)',
          }} />

          {/* ── Corner marks ── */}
          {[
            { top: 32, left: 32, borderTop: '1px solid', borderLeft: '1px solid' },
            { top: 32, right: 32, borderTop: '1px solid', borderRight: '1px solid' },
            { bottom: 32, left: 32, borderBottom: '1px solid', borderLeft: '1px solid' },
            { bottom: 32, right: 32, borderBottom: '1px solid', borderRight: '1px solid' },
          ].map((style, i) => (
            <motion.div
              key={i}
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
              style={{
                position: 'absolute', width: 20, height: 20,
                borderColor: 'rgba(0,255,148,0.25)',
                ...style,
              }}
            />
          ))}

          {/* ── Main content ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: 0,
              position: 'relative',
            }}
          >

            {/* Logo mark + wordmark row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
              <img
                src={title}
                alt="logo"
                style={{ width: 52, height: 58, objectFit: 'contain', mixBlendMode: 'lighten' }}
              />

              {/* Wordmark */}
              <div
                className="font-display font-black leading-none tracking-tight"
                style={{
                  fontSize: 'clamp(36px, 6vw, 76px)',
                  color: '#f0ede8',
                  display: 'flex',
                  alignItems: 'baseline',
                  overflow: 'hidden',
                }}
              >
                <span>S</span>
                <span style={{
                  display: 'inline-block',
                  maxWidth: expanded ? '5em' : '0',
                  opacity: expanded ? 1 : 0,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  transition: expanded
                    ? 'max-width 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.35s 0.08s ease'
                    : 'none',
                }}>MART</span>

                <span style={{ color: '#00FF94' }}>C</span>

                <span style={{
                  display: 'inline-block',
                  maxWidth: expanded ? '5em' : '0',
                  opacity: expanded ? 1 : 0,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  color: '#00FF94',
                  transition: expanded
                    ? 'max-width 0.55s 0.06s cubic-bezier(0.16,1,0.3,1), opacity 0.35s 0.16s ease'
                    : 'none',
                }}>OACH</span>

                <span>360</span>
              </div>
            </div>

            {/* Progress track */}
            <div style={{ width: 'clamp(200px, 28vw, 320px)', position: 'relative' }}>

              {/* Label row above bar */}
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                marginBottom: 10,
              }}>
                <span className="font-mono" style={{
                  fontSize: 10, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: '#3a3836',
                }}>
                  INITIALISING
                </span>
                <span className="font-mono" style={{
                  fontSize: 10, letterSpacing: '0.12em',
                  color: count === 100 ? '#00FF94' : '#6b6760',
                  transition: 'color 0.3s',
                }}>
                  {Math.floor(count).toString().padStart(3, '0')}
                </span>
              </div>

              {/* Track */}
              <div style={{
                position: 'relative', height: 2,
                background: '#1e1d1b',
                overflow: 'hidden',
              }}>
                {/* Fill */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: '#00FF94',
                  transform: `translateX(${count - 100}%)`,
                  transition: 'transform 0.08s linear',
                }} />
                {/* Shimmer on fill */}
                <div style={{
                  position: 'absolute', top: 0, bottom: 0,
                  width: '40px',
                  left: `calc(${count}% - 40px)`,
                  background: 'linear-gradient(90deg, transparent, rgba(0,255,148,0.6), transparent)',
                  transition: 'left 0.08s linear',
                }} />
              </div>

              {/* Tick marks */}
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                marginTop: 6, paddingLeft: 1, paddingRight: 1,
              }}>
                {[0, 25, 50, 75, 100].map(t => (
                  <div key={t} style={{
                    width: 1, height: 4,
                    background: count >= t ? 'rgba(0,255,148,0.5)' : '#2a2927',
                    transition: 'background 0.3s',
                  }} />
                ))}
              </div>
            </div>

          </motion.div>

          {/* ── Bottom status line ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              position: 'absolute', bottom: 36,
              display: 'flex', alignItems: 'center', gap: 20,
            }}
          >
            <span className="font-mono" style={{
              fontSize: 10, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#2e2c2a',
            }}>
              SMARTCOACH360 © 2025
            </span>
            <span style={{ width: 1, height: 10, background: '#2e2c2a' }} />
            <span className="font-mono" style={{
              fontSize: 10, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#2e2c2a',
            }}>
              V 2.0
            </span>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}