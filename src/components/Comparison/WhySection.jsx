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

  const leftItems = WHY_ITEMS.filter((_, i) => i % 2 === 0)
  const rightItems = WHY_ITEMS.filter((_, i) => i % 2 !== 0)

  return (
    <section style={{ borderBottom: '1px solid var(--rule)', position: 'relative', overflow: 'hidden' }}>

      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: '-0.05em',
          top: '-0.15em',
          fontSize: 'clamp(160px, 22vw, 340px)',
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          letterSpacing: '-0.06em',
          lineHeight: 1,
          color: 'transparent',
          WebkitTextStroke: '1px var(--rule)',
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        09
      </div>

      <div style={{ borderBottom: '1px solid var(--rule)', position: 'relative', zIndex: 1 }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pt-12 sm:pt-14 pb-8 sm:pb-10">
            <h2
              className="font-display font-black tracking-[-0.03em] leading-[0.9]"
              style={{ fontSize: 'clamp(32px,5vw,72px)', color: 'var(--text)' }}
            >
              WHY COACHES<br />
              <em style={{ fontStyle: 'normal', color: 'var(--green)' }}>CHOOSE US</em>
            </h2>
            <p
              className="max-w-xs text-[13px] sm:text-[14px] leading-[1.65] md:text-right"
              style={{ color: 'var(--muted)' }}
            >
              9 reasons SmartCoach360 is the complete platform — not just another tool.
            </p>
          </div>
        </div>
      </div>

      <div ref={ref} className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-14" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: '1px',
            background: 'var(--rule)',
            border: '1px solid var(--rule)',
          }}
        >
          {WHY_ITEMS.map((item, i) => (
            <WhyCard key={i} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyCard({ item, index, inView }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <div
      className="group"
      style={{
        background: 'var(--bg, #0a0a0a)',
        padding: 'clamp(20px, 3vw, 36px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        cursor: 'default',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(20px)',
        transition: `opacity 0.55s ${index * 0.055}s cubic-bezier(0.16,1,0.3,1), transform 0.55s ${index * 0.055}s cubic-bezier(0.16,1,0.3,1)`,
        position: 'relative',
        overflow: 'hidden',
      }}
     
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span
          className="font-display font-black"
          style={{
            fontSize: 'clamp(13px, 1.4vw, 17px)',
            letterSpacing: '0.08em',
            color: 'var(--green)',
            lineHeight: 1,
          }}
        >
          {num}
        </span>

      </div>

      <div style={{ height: '1px', background: 'var(--rule)' }} />

      <p
        className="text-[14px] sm:text-[15px] leading-[1.7]"
        style={{ color: 'var(--muted)', flex: 1 }}
      >
        {item}
      </p>
    </div>
  )
}

