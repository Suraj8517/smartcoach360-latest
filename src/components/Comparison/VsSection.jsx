import { useRef } from 'react'
import { useInView } from 'framer-motion'


const VS_ITEMS = [
  {
    competitor: 'TrueCoach',
    body: 'TrueCoach does workout delivery well. But if you need nutrition tracking, automated messaging, multi-coach management, or broader business automation, you\'ll quickly hit its limits. SmartCoach360 covers workout delivery — and extends into operations, engagement, and revenue tools.',
  },
  {
    competitor: 'Mindbody',
    body: 'Mindbody is designed primarily around class bookings and memberships. It wasn\'t built for the individual coaching relationship — limited nutrition tracking, limited automated engagement, and less support for one-on-one coaching workflows.',
  },
  {
    competitor: 'PTDistinction',
    body: 'PTDistinction provides solid workout and nutrition programming. But for scaling a business — multi-branch management, WhatsApp integration, automated lead allocation, and enterprise-grade security — there are gaps. SmartCoach360 is the more complete operations platform.',
  },
]





export default function VsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{ borderBottom: '1px solid var(--rule)' }}>
      <div style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="pt-12 sm:pt-14 pb-8 sm:pb-10">
            <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-4 flex items-center gap-4" style={{ color: 'var(--muted)' }}>
              <span>Head to head</span>
              <span className="w-12 h-px flex-shrink-0" style={{ background: 'var(--muted2)' }} />
            </div>
            <h2 className="font-display font-black tracking-[-0.03em] leading-[0.9]" style={{ fontSize: 'clamp(32px,5vw,72px)', color: 'var(--text)' }}>
              THE BREAKDOWN
            </h2>
          </div>
        </div>
      </div>

      <div ref={ref} className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3" style={{ borderBottom: 'none' }}>
        {VS_ITEMS.map((item, i) => (
          <div
            key={item.competitor}
            className="px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 group transition-colors duration-300"
            style={{
              borderRight: i < VS_ITEMS.length - 1 ? '1px solid var(--rule)' : 'none',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(24px)',
              transition: `opacity 0.7s ${i * 0.1}s cubic-bezier(0.16,1,0.3,1), transform 0.7s ${i * 0.1}s cubic-bezier(0.16,1,0.3,1), background 0.25s ease`,
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,255,148,0.025)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            {/* Competitor label */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div
                className="font-display font-black tracking-[-0.04em] leading-none"
                style={{ fontSize: 'clamp(42px,6vw,80px)', color: 'rgba(255,255,255,0.06)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <div className="font-mono text-[8px] sm:text-[9px] tracking-[0.12em] uppercase mb-0.5" style={{ color: 'var(--muted2)' }}>
                  SC360 vs
                </div>
                <div
                  className="font-display font-bold tracking-[-0.02em] leading-none transition-colors duration-200"
                  style={{ fontSize: 'clamp(18px,2vw,26px)', color: 'var(--text)' }}
                >
                  {item.competitor}
                </div>
              </div>
            </div>

            <div style={{ width: '100%', height: 1, background: 'var(--rule)', marginBottom: 20 }} />

            <p className="text-[13px] sm:text-[14px] leading-[1.75]" style={{ color: 'var(--muted)' }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}