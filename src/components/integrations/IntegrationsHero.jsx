import { useEffect, useRef } from 'react'

import whatsapp   from '../../assets/integrations/whatsapp.png'
import zoom       from '../../assets/integrations/zoom.png'
import teams      from '../../assets/integrations/teams.png'
import gsheets    from '../../assets/integrations/sheets.png'
import gforms     from '../../assets/integrations/google-forms.png'
import zoho       from '../../assets/integrations/zoho.png'
import apple      from '../../assets/integrations/apple.png'
import gfit       from '../../assets/integrations/gfit.png'
import telephony  from '../../assets/integrations/call.png'
import lab        from '../../assets/integrations/lab.png'
import web        from '../../assets/integrations/web.png'

const ALL_LOGOS = [
  { id: 'whatsapp',  name: 'WhatsApp',              src: whatsapp,  color: '#25D366' },
  { id: 'zoom',      name: 'Zoom',                  src: zoom,      color: '#2D8CFF' },
  { id: 'teams',     name: 'Microsoft Teams',        src: teams,     color: '#6264A7' },
  { id: 'gsheets',   name: 'Google Sheets',          src: gsheets,   color: '#34A853' },
  { id: 'gforms',    name: 'Google Forms',           src: gforms,    color: '#7248B9' },
  { id: 'zoho',      name: 'Zoho Forms',             src: zoho,      color: '#E42527' },
  { id: 'apple',     name: 'Apple Health',           src: apple,     color: '#FC3158' },
  { id: 'gfit',      name: 'Google Fit',             src: gfit,      color: '#4285F4' },
  { id: 'telephony', name: 'Telephony',              src: telephony, color: '#00FF94' },
  { id: 'lab',       name: 'Lab Integration',        src: lab,       color: '#00FF94' },
  { id: 'web',       name: 'Web Content Builder',    src: web,       color: '#00FF94' },
]

/* ── single card with image inside ── */
function LogoCard({ logo }) {
  return (
    <div
      className="group flex-shrink-0 flex items-center justify-center"
      style={{
        width: 64,
        height: 64,
        borderRadius: 14,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(8px)',
        transition: 'background 0.25s ease, border-color 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(0,255,148,0.08)'
        e.currentTarget.style.borderColor = 'rgba(0,255,148,0.3)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
      }}
    >
      <img
        src={logo.src}
        alt={logo.name}
        style={{
          width: 32,
          height: 32,
          objectFit: 'contain',
          filter: 'grayscale(30%) brightness(0.9)',
          transition: 'filter 0.25s ease, transform 0.25s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.filter = 'grayscale(0%) brightness(1)'
          e.currentTarget.style.transform = 'scale(1.1)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.filter = 'grayscale(30%) brightness(0.9)'
          e.currentTarget.style.transform = 'scale(1)'
        }}
      />
    </div>
  )
}

function LogoRow({ logos, reverse = false, speed = 6 }) {
  const tripled = [...logos, ...logos, ...logos]
  const duration = `${logos.length * speed}s`

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          gap: 12,
          width: 'max-content',
          animation: `${reverse ? 'intMarqueeRev' : 'intMarquee'} ${duration} linear infinite`,
        }}
      >
        {tripled.map((logo, i) => (
          <LogoCard key={`${logo.id}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  )
}

/* ── hero ── */
export default function IntegrationsHero() {
  const linesRef = useRef([])

  useEffect(() => {
    linesRef.current.forEach((el, i) => {
      if (!el) return
      el.style.transform = 'translateY(110%)'
      el.style.opacity = '1'
      setTimeout(() => {
        el.style.transition = 'transform 0.9s cubic-bezier(0.16,1,0.3,1)'
        el.style.transform = 'translateY(0)'
      }, 200 + i * 110)
    })
  }, [])

  const row1 = [...ALL_LOGOS]
  const row2 = [...ALL_LOGOS.slice(4), ...ALL_LOGOS.slice(0, 4)]
  const row3 = [...ALL_LOGOS.slice(7), ...ALL_LOGOS.slice(0, 7)]

  return (
    <>
      <style>{`
        @keyframes intMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes intMarqueeRev {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <section
        className="relative overflow-hidden noise pb-12"
        style={{
          paddingTop: '64px',
          borderBottom: '1px solid var(--rule)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: '#080808',
        }}
      >

        <div className="absolute inset-0 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 px-4 sm:px-6 md:px-10 pointer-events-none z-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="h-full" style={{ borderLeft: '1px solid rgba(240,237,232,0.03)' }} />
          ))}
        </div>

        <div
          className="absolute pointer-events-none"
          style={{
            top: '15%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90vw',
            height: '45vh',
            background: 'radial-gradient(ellipse at center, rgba(0,255,148,0.08) 0%, transparent 68%)',
            zIndex: 1,
          }}
        />

        {/* Corner label */}
        <div
          className="absolute top-20 right-10 font-mono text-[9px] tracking-[0.12em] uppercase hidden lg:block"
          style={{ color: 'var(--muted2)', writingMode: 'vertical-rl', zIndex: 20 }}
        >
          SmartCoach360 · Integrations
        </div>

        <div className="relative" style={{ borderBottom: '1px solid var(--rule)', zIndex: 20 }}>
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
            <div className="flex flex-col sm:flex-row sm:items-stretch min-h-[52px]">
              <div
                className="flex items-center gap-2.5 pr-4 sm:pr-8 py-2 sm:py-0 font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase"
                style={{ color: 'var(--green)', borderRight: '1px solid var(--rule)' }}
              >
                <div className="pulse-dot w-[5px] h-[5px] rounded-full" style={{ background: 'var(--green)' }} />
                Integrations · Page 003
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-stretch sm:ml-auto">
                {[
                  { val: '15+', lbl: 'Integrations' },
                  { val: '4',   lbl: 'Categories'   },
                  { val: '0',   lbl: 'Extra tools'  },
                ].map(s => (
                  <div
                    key={s.lbl}
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-7 py-2 sm:py-0"
                    style={{ borderLeft: '1px solid var(--rule)' }}
                  >
                    <span className="font-mono text-[12px] sm:text-[13px] font-medium" style={{ color: 'var(--text)' }}>{s.val}</span>
                    <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>{s.lbl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative text-center px-4 sm:px-6 md:px-10 pt-14 sm:pt-20 pb-8 sm:pb-10" style={{ zIndex: 10 }}>

          <div
            className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-5 flex items-center justify-center gap-4"
            style={{ color: 'var(--muted)' }}
          >
            <span className="w-10 h-px flex-shrink-0" style={{ background: 'var(--muted2)' }} />
            003 / Integrations
            <span className="w-10 h-px flex-shrink-0" style={{ background: 'var(--muted2)' }} />
          </div>

          {['CONNECT YOUR', 'FAVOURITE', 'TOOLS.'].map((line, i) => (
            <div key={line} className="overflow-hidden" style={{ lineHeight: 0.9 }}>
              <span
                ref={el => linesRef.current[i] = el}
                className="block font-display font-black tracking-[-0.03em]"
                style={{
                  fontSize: 'clamp(36px,8vw,118px)',
                  color: i === 1 ? 'var(--green)' : 'var(--text)',
                  opacity: 0,
                  marginBottom: 4,
                }}
              >
                {line}
              </span>
            </div>
          ))}

          <p
            className="text-[13px] sm:text-[15px] leading-[1.7] max-w-lg mx-auto mt-7 sm:mt-8"
            style={{
              color: 'var(--muted)',
              opacity: 0,
              animation: 'loaderWordmark 0.7s 0.9s ease forwards',
            }}
          >
            SmartCoach360 connects the tools you already rely on — reducing handoffs, eliminating duplication, and creating a consistent experience from first enquiry to long-term retention.
          </p>
        </div>

        <div
          className="relative flex-1 flex flex-col justify-center gap-3 py-4 w-[900px] mx-auto"
          style={{
            zIndex: 5,
            opacity: 0,
            animation: 'loaderWordmark 0.8s 1.1s ease forwards',
          }}
        >
          <div className="absolute inset-y-0 left-0 pointer-events-none z-10" style={{ width: '12vw', background: 'linear-gradient(to right, #0B0B0B 40%, transparent)' }} />
          <div className="absolute inset-y-0 right-0 pointer-events-none z-10" style={{ width: '12vw', background: 'linear-gradient(to left, #0B0B0B 40%, transparent)' }} />

          <LogoRow logos={row1} reverse={false} speed={7} />
          <LogoRow logos={row2} reverse={true}  speed={6} />
          <LogoRow logos={row3} reverse={false} speed={8} />
        </div>

      </section>
    </>
  )
}