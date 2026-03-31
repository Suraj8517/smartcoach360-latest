import { useRef } from 'react'
import { useInView } from 'framer-motion'


export default function ComparisonHero() {
  const linesRef = useRef([])
  const inView = useInView(linesRef, { once: true, margin: '-60px' })

  return (
    <section
      className="relative overflow-hidden noise"
      style={{ paddingTop: 64, borderBottom: '1px solid var(--rule)', background: '#080808' }}
    >
      <div className="absolute inset-0 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 px-4 sm:px-6 md:px-10 pointer-events-none z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="h-full" style={{ borderLeft: '1px solid rgba(240,237,232,0.03)' }} />
        ))}
      </div>

      {/* label bar */}
      <div className="relative z-10" style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex items-stretch min-h-[50px]">
            <div className="flex items-center gap-2.5 pr-6 sm:pr-8 font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase" style={{ color: 'var(--green)', borderRight: '1px solid var(--rule)' }}>
              <div className="pulse-dot w-[5px] h-[5px] rounded-full" style={{ background: 'var(--green)' }} />
              Platform Comparison
            </div>
            <div className="ml-auto flex items-center gap-6 px-4">
              {['TrueCoach', 'Mindbody', 'PTDistinction'].map(c => (
                <span key={c} className="font-mono text-[8px] tracking-[0.1em] uppercase" style={{ color: 'var(--muted2)' }}>vs {c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* headline */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 pt-14 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
        <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-6 flex items-center gap-4" style={{ color: 'var(--muted)' }}>
          <span>005 / Why SmartCoach360</span>
          <span className="w-14 h-px flex-shrink-0" style={{ background: 'var(--muted2)' }} />
        </div>

        {[
          { text: 'SMARTCOACH360', color: 'var(--green)' },
          { text: 'VS', color: 'var(--muted2)' },
          { text: 'THE REST.', color: 'var(--text)' },
        ].map((line, i) => (
          <div key={line.text} className="overflow-hidden" style={{ lineHeight: 0.88 }}>
            <span
              ref={el => { linesRef.current[i] = el; if (!el) return; el.style.transform = 'translateY(110%)'; el.style.opacity = '1'; setTimeout(() => { el.style.transition = 'transform 0.9s cubic-bezier(0.16,1,0.3,1)'; el.style.transform = 'translateY(0)'; }, 200 + i * 110) }}
              className="block font-display font-black tracking-[-0.03em]"
              style={{ fontSize: 'clamp(44px,9.5vw,160px)', color: line.color, opacity: 0 }}
            >
              {line.text}
            </span>
          </div>
        ))}
      </div>

      {/* bottom strip */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3" style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="px-4 sm:px-6 md:px-10 py-6 sm:py-8" style={{ borderRight: '1px solid var(--rule)' }}>
          <p className="text-[13px] sm:text-[14px] leading-[1.7] max-w-sm" style={{ color: 'var(--muted)' }}>
            Many coaching platforms excel in one area but leave critical operational gaps elsewhere. SmartCoach360 was designed as a complete, end-to-end platform — coaching delivery and business operations built to work together.
          </p>
        </div>
        <div className="px-4 sm:px-6 md:px-10 py-6 sm:py-8 flex flex-col gap-3 justify-center" style={{ borderRight: '1px solid var(--rule)' }}>
          <a href="#table" className="self-start inline-flex items-center gap-2.5 font-mono text-[10px] sm:text-[11px] tracking-[0.12em] uppercase font-medium px-5 sm:px-7 py-3 transition-all duration-200" style={{ background: 'var(--green)', color: '#080808', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.background = '#fff'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--green)'}
          >
            See the comparison ↓
          </a>
        </div>
        <div className="hidden md:flex px-4 sm:px-6 md:px-10 py-6 sm:py-8 items-center justify-end">
          <div className="font-mono text-[8px] tracking-[0.12em] uppercase" style={{ color: 'var(--muted2)' }}>19 features compared</div>
        </div>
      </div>
    </section>
  )
}