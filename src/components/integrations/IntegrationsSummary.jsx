import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { SUMMARY_TABLE } from './IntegrationsData'

export default function IntegrationsSummary() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{ borderBottom: '1px solid var(--rule)' }}>

      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pt-14 sm:pt-16 pb-8 sm:pb-10">
            <div>
              <div
                className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-5 flex items-center gap-4"
                style={{ color: 'var(--muted)' }}
              >
                <span>005 / Integration Summary</span>
                <span className="flex-shrink-0 w-12 h-px" style={{ background: 'var(--muted2)' }} />
              </div>
              <h2
                className="font-display font-black tracking-[-0.03em] leading-[0.9]"
                style={{ fontSize: 'clamp(36px,6vw,80px)', color: 'var(--text)' }}
              >
                ALL<br />
                <em style={{ fontStyle: 'normal', color: 'var(--green)' }}>INTEGRATIONS</em>
              </h2>
            </div>
            <p
              className="max-w-xs text-[13px] sm:text-[14px] leading-[1.65] md:text-right"
              style={{ color: 'var(--muted)' }}
            >
              11 integrations across 4 categories — everything you need to run a modern coaching business.
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div ref={ref} className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ borderLeft: '1px solid var(--rule)', borderTop: '1px solid var(--rule)' }}>
          {SUMMARY_TABLE.map((item, i) => (
            <div
              key={item.name}
              className="group flex flex-col gap-2 p-5 sm:p-6 md:p-7 transition-colors duration-200"
              style={{
                borderRight: '1px solid var(--rule)',
                borderBottom: '1px solid var(--rule)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(16px)',
                transition: `opacity 0.55s ${i * 0.05}s cubic-bezier(0.16,1,0.3,1), transform 0.55s ${i * 0.05}s cubic-bezier(0.16,1,0.3,1), background 0.2s ease`,
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,255,148,0.03)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-200 group-hover:scale-125"
                  style={{ background: item.color }}
                />
                <span
                  className="font-display font-bold text-[15px] sm:text-[17px] tracking-[-0.01em] transition-colors duration-200"
                  style={{ color: 'var(--text)' }}
                >
                  {item.name}
                </span>
              </div>
              <p className="text-[12px] sm:text-[13px] leading-[1.6] pl-5" style={{ color: 'var(--muted)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
