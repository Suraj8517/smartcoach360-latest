import { useInView } from 'framer-motion'
import { useRef } from 'react'

const WHY_ITEMS = [
  'The only platform with workout programming AND nutrition tracking built in together',
  'The only coaching CRM with native WhatsApp automation',
  'A female health tracker no other coaching platform offers',
  'Lab integration for coaches who work with clinical health data',
  'Fully automated lead and client allocation — so your business keeps moving when you\'re away',
  'A dedicated Customer Success Manager, not just a support ticket system',
  'Personalised onboarding — guided setup with a specialist, not just help articles',
  'SSO and role-based access that scales from solo coaches to national organisations',
  'Built for fitness professionals — not a generic CRM adapted for coaching',
]


export default function WhySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{ borderBottom: '1px solid var(--rule)' }}>
      <div style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pt-12 sm:pt-14 pb-8 sm:pb-10">
            <h2 className="font-display font-black tracking-[-0.03em] leading-[0.9]" style={{ fontSize: 'clamp(32px,5vw,72px)', color: 'var(--text)' }}>
              WHY COACHES<br /><em style={{ fontStyle: 'normal', color: 'var(--green)' }}>CHOOSE US</em>
            </h2>
            <p className="max-w-xs text-[13px] sm:text-[14px] leading-[1.65] md:text-right" style={{ color: 'var(--muted)' }}>
              9 reasons SmartCoach360 is the complete platform — not just another tool.
            </p>
          </div>
        </div>
      </div>

      <div ref={ref} className="max-w-[1600px] mx-auto">
        {WHY_ITEMS.map((item, i) => (
          <div
            key={i}
            className="group flex items-start gap-5 sm:gap-8 px-4 sm:px-6 md:px-10 py-5 sm:py-6 transition-colors duration-200"
            style={{
              borderBottom: i < WHY_ITEMS.length - 1 ? '1px solid var(--rule)' : 'none',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateX(-16px)',
              transition: `opacity 0.6s ${i * 0.06}s cubic-bezier(0.16,1,0.3,1), transform 0.6s ${i * 0.06}s cubic-bezier(0.16,1,0.3,1), background 0.2s ease`,
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,255,148,0.03)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            {/* Index */}
            <div className="flex-shrink-0 flex items-center gap-3 w-16 sm:w-20">
              <span
                className="font-display font-black leading-none tracking-[-0.04em] transition-colors duration-200"
                style={{ fontSize: 'clamp(22px,3vw,40px)', color: 'var(--muted2)' }}
                ref={el => {
                  if (!el) return
                  const p = el.closest('.group')
                  if (!p) return
                  p.addEventListener('mouseenter', () => el.style.color = 'var(--green)')
                  p.addEventListener('mouseleave', () => el.style.color = 'var(--muted2)')
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Text */}
            <p className="text-[14px] sm:text-[15px] leading-[1.7] pt-0.5" style={{ color: 'var(--muted)' }}>
              {item}
            </p>

            {/* Arrow */}
            <span
              className="ml-auto flex-shrink-0 mt-1 transition-colors duration-200 hidden sm:block"
              style={{ color: 'var(--muted2)' }}
              ref={el => {
                if (!el) return
                const p = el.closest('.group')
                if (!p) return
                p.addEventListener('mouseenter', () => el.style.color = 'var(--green)')
                p.addEventListener('mouseleave', () => el.style.color = 'var(--muted2)')
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}