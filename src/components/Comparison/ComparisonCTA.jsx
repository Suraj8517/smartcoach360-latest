import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function ComparisonCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative overflow-hidden" style={{ background: '#080808' }}>
      <div className="absolute font-display font-black leading-none tracking-[-0.06em] select-none pointer-events-none whitespace-nowrap" style={{ fontSize: 'clamp(80px,16vw,240px)', color: 'rgba(240,237,232,0.02)', bottom: -30, left: '50%', transform: 'translateX(-50%)' }}>
        SC360
      </div>
      <div ref={ref} className="relative z-10 px-4 sm:px-6 md:px-10 py-20 sm:py-24 md:py-28 text-center">
        <div
          className="inline-flex items-center gap-2.5 font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase px-[18px] py-2 mb-10 border"
          style={{ color: 'var(--green)', borderColor: 'var(--green-border)', opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)', transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
        >
          <div className="pulse-dot w-[5px] h-[5px] rounded-full" style={{ background: 'var(--green)' }} />
          See it for yourself
        </div>

        <h2
          className="font-display font-black tracking-[-0.03em] leading-[0.88] mb-10"
          style={{ fontSize: 'clamp(48px,9vw,130px)', color: 'var(--text)', opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)', transition: 'opacity 0.7s 0.08s cubic-bezier(0.16,1,0.3,1), transform 0.7s 0.08s cubic-bezier(0.16,1,0.3,1)' }}
        >
          THE COMPLETE<br />COACHING<br /><em style={{ fontStyle: 'normal', color: 'var(--green)' }}>PLATFORM.</em>
        </h2>

        <div
          className="flex flex-wrap items-center justify-center gap-4"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(16px)', transition: 'opacity 0.7s 0.2s cubic-bezier(0.16,1,0.3,1), transform 0.7s 0.2s cubic-bezier(0.16,1,0.3,1)' }}
        >
          <a href="#"
            className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-[12px] tracking-[0.12em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 font-medium transition-all duration-200"
            style={{ background: 'var(--green)', color: '#080808', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.transform = 'none' }}
          >
            Book Your Free Demo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a href="/"
            className="font-mono text-[10px] sm:text-[11px] tracking-[0.1em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 transition-all duration-200"
            style={{ color: 'var(--muted)', border: '1px solid var(--rule-bright)', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.background = 'transparent' }}
          >
            Back to home
          </a>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-7 font-mono text-[9px] sm:text-[10px] tracking-[0.1em] uppercase"
          style={{ color: 'var(--muted2)', opacity: inView ? 1 : 0, transition: 'opacity 0.7s 0.32s ease' }}
        >
          {['Free 20-min demo', 'No credit card', 'No commitment'].map(t => (
            <span key={t} className="flex items-center gap-2">
              <span style={{ color: 'var(--green)' }}>✓</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}