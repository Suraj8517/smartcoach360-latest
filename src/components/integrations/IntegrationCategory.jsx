import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import whatsapp from '../../assets/integrations/whatsapp.png'
import zoom from '../../assets/integrations/zoom.png'
import teams from '../../assets/integrations/teams.png'
import gsheets from '../../assets/integrations/sheets.png'
import gforms from '../../assets/integrations/google-forms.png'
import zoho from '../../assets/integrations/zoho.png'
import apple from '../../assets/integrations/apple.png'
import gfit from '../../assets/integrations/gfit.png'
import telephony from '../../assets/integrations/call.png'
import lab from '../../assets/integrations/lab.png'
import web from '../../assets/integrations/web.png'

const LOGO_MAP = {
  whatsapp,
  zoom,
  teams,
  gsheets,
  gforms,
  zoho,
  apple,
  gfit,
  telephony,
  lab,
  web,
}

function getLogo(id) {
  return LOGO_MAP[id] || null
}

function IntegrationCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 p-5 sm:p-6 md:p-7 group transition-all duration-300"
      style={{
        border: '1px solid var(--rule)',
        borderRadius: 2,
        background: hovered ? 'rgba(255,255,255,0.025)' : 'transparent',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(20px)',
        transition: `opacity 0.6s ${index * 0.07}s cubic-bezier(0.16,1,0.3,1), transform 0.6s ${index * 0.07}s cubic-bezier(0.16,1,0.3,1), background 0.25s ease, border-color 0.25s ease`,
        borderColor: hovered ? 'rgba(0,255,148,0.2)' : 'var(--rule)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      
      <div className="flex items-start justify-between">
        <img
  src={getLogo(item.id)}
  alt={item.name}
  style={{
    width: 26,
    height: 26,
    objectFit: 'contain',
    filter: ' opacity(0.9)',
    transition: 'all 0.25s ease',
  }}
  className="group-hover:grayscale-0 group-hover:opacity-100"
/>
        <span
          className="font-mono text-[7px] sm:text-[8px] tracking-[0.12em] uppercase px-2 py-1 transition-colors duration-200"
          style={{
            color: hovered ? item.color : 'var(--muted2)',
            border: `1px solid ${hovered ? item.color + '44' : 'var(--rule)'}`,
            transition: 'color 0.25s, border-color 0.25s',
          }}
        >
          {item.badge}
        </span>
      </div>

      {/* Name */}
      <div>
        <h4
          className="font-display font-bold tracking-[-0.01em] leading-[1.15] mb-2 transition-colors duration-200"
          style={{
            fontSize: 'clamp(15px,1.6vw,19px)',
            color: 'var(--text)',
          }}
        >
          {item.name}
        </h4>
        <p className="text-[12px] sm:text-[13px] leading-[1.65]" style={{ color: 'var(--muted)' }}>
          {item.summary}
        </p>
      </div>

      {/* Bullets */}
      <ul className="flex flex-col gap-2 mt-auto pt-2" style={{ borderTop: '1px solid var(--rule)' }}>
        {item.bullets.map((b, bi) => (
          <li key={bi} className="flex items-start gap-2.5">
            <span className="font-mono text-[9px] mt-0.5 flex-shrink-0" style={{ color: item.color }}>→</span>
            <span className="text-[11px] sm:text-[12px] leading-[1.6]" style={{ color: 'var(--muted)' }}>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function IntegrationCategory({ category, globalIndex }) {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section
      id={category.id}
      style={{ borderBottom: '1px solid var(--rule)' }}
    >
      {/* ── Category header strip ── */}
      <div style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex items-center min-h-[52px] gap-0">
            {/* Num + label */}
            <div
              ref={headerRef}
              className="flex items-center gap-4 pr-6 sm:pr-8"
              style={{ borderRight: '1px solid var(--rule)' }}
            >
              <span
                className="font-mono text-[9px] sm:text-[10px] tracking-[0.14em] uppercase"
                style={{
                  color: 'var(--green)',
                  opacity: headerInView ? 1 : 0,
                  transition: 'opacity 0.5s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {category.num}
              </span>
              <h2
                className="font-display font-black tracking-[-0.02em]"
                style={{
                  fontSize: 'clamp(18px,2.5vw,32px)',
                  color: 'var(--text)',
                  opacity: headerInView ? 1 : 0,
                  transform: headerInView ? 'none' : 'translateX(-10px)',
                  transition: 'opacity 0.6s 0.05s cubic-bezier(0.16,1,0.3,1), transform 0.6s 0.05s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {category.label}
              </h2>
            </div>

            {/* Tagline */}
            <div
              className="hidden sm:block px-6 font-mono text-[8px] sm:text-[9px] tracking-[0.1em] uppercase"
              style={{ color: 'var(--muted2)' }}
            >
              {category.tagline}
            </div>

            {/* Count pill — right */}
            <div className="ml-auto">
              <span
                className="font-mono text-[8px] sm:text-[9px] tracking-[0.1em] uppercase px-3 py-1.5"
                style={{ color: 'var(--green)', border: '1px solid rgba(0,255,148,0.25)' }}
              >
                {category.integrations.length} integration{category.integrations.length > 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Card grid ── */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12">
        <div className={`grid gap-4 sm:gap-5 ${
          category.integrations.length === 2
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl'
            : category.integrations.length === 3
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'
        }`}>
          {category.integrations.map((item, i) => (
            <IntegrationCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}