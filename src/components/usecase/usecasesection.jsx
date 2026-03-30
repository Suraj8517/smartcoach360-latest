import { useRef } from 'react'
import { useInView } from 'framer-motion'

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Challenge({ text, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })
  return (
    <div
      ref={ref}
      className="flex items-start gap-4 py-4 sm:py-5"
      style={{
        borderTop: '1px solid var(--rule)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(14px)',
        transition: `opacity 0.6s ${index * 0.07}s cubic-bezier(0.16,1,0.3,1), transform 0.6s ${index * 0.07}s cubic-bezier(0.16,1,0.3,1)`,
      }}
    >
      <span className="font-mono text-[9px] tracking-[0.1em] mt-0.5 flex-shrink-0" style={{ color: 'var(--green)' }}>
        0{index + 1}
      </span>
      <span className="text-[13px] sm:text-[14px] leading-[1.65]" style={{ color: 'var(--muted)' }}>
        {text}
      </span>
    </div>
  )
}

/* ── solution card ── */
function SolutionCard({ title, desc, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className="p-6 sm:p-8 group transition-colors duration-300"
      style={{
        borderRight: isEven ? '1px solid var(--rule)' : 'none',
        borderBottom: '1px solid var(--rule)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(20px)',
        transition: `opacity 0.65s ${index * 0.08}s cubic-bezier(0.16,1,0.3,1), transform 0.65s ${index * 0.08}s cubic-bezier(0.16,1,0.3,1), background 0.25s ease`,
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,255,148,0.04)'}
      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h4
          className="font-display font-bold text-[17px] sm:text-[19px] tracking-[-0.01em] leading-[1.15]"
          style={{ color: 'var(--text)' }}
        >
          {title}
        </h4>
        <span
          className="mt-0.5 transition-colors duration-200"
          style={{ color: 'var(--muted2)' }}
          ref={el => {
            if (!el) return
            const p = el.closest('.group')
            if (!p) return
            p.addEventListener('mouseenter', () => el.style.color = 'var(--green)')
            p.addEventListener('mouseleave', () => el.style.color = 'var(--muted2)')
          }}
        >
          
        </span>
      </div>
      <p className="text-[12px] sm:text-[13px] leading-[1.65]" style={{ color: 'var(--muted)' }}>{desc}</p>
    </div>
  )
}

export default function UseCaseSection({ id, num, audience, headline, subhead, tagline, challenges, solutions, accent = 'var(--green)' }) {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section
      id={id}
      style={{ borderBottom: '1px solid var(--rule)' }}
    >
      <div style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex items-center min-h-[48px] gap-0">
            <div
              className="flex items-center gap-3 pr-6 sm:pr-8 font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase"
              style={{ color: accent, borderRight: '1px solid var(--rule)' }}
            >
              <span>{num}</span>
              <span style={{ width: 12, height: 1, background: accent, display: 'inline-block' }} />
              {audience}
            </div>
            <div
              className="ml-auto font-mono text-[8px] sm:text-[9px] tracking-[0.1em] uppercase pl-6"
              style={{ color: 'var(--muted2)' }}
            >
              {tagline}
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div
            ref={headerRef}
            className="px-4 sm:px-6 md:px-10 pt-12 sm:pt-14 md:pt-16 pb-8 sm:pb-10"
            style={{ borderRight: '1px solid var(--rule)' }}
          >
            <h2
              className="font-display font-black tracking-[-0.03em] leading-[0.9]"
              style={{
                fontSize: 'clamp(36px,5.5vw,80px)',
                color: 'var(--text)',
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
              }}
              dangerouslySetInnerHTML={{ __html: headline }}
            />
          </div>

          <div
            className="px-4 sm:px-6 md:px-10 pt-8 lg:pt-16 pb-8 sm:pb-10 flex flex-col justify-between gap-8"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? 'none' : 'translateY(16px)',
              transition: 'opacity 0.7s 0.1s cubic-bezier(0.16,1,0.3,1), transform 0.7s 0.1s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <p className="text-[14px] sm:text-[15px] leading-[1.75] max-w-md" style={{ color: 'var(--muted)' }}>
              {subhead}
            </p>
            <a
              href="#cta"
              className="inline-flex items-center gap-2.5 font-mono text-[9px] sm:text-[10px] tracking-[0.12em] uppercase font-medium px-5 sm:px-6 py-2.5 self-start transition-all duration-200"
              style={{ background: 'var(--green)', color: '#080808', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.transform = 'none' }}
            >
              Book a Demo <Arrow />
            </a>
          </div>
        </div>
      </div>

      {/* ── Challenges + Solutions ── */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[440px_1fr]">

        {/* Left — challenges */}
        <div
          className="px-4 sm:px-6 md:px-10 py-10 sm:py-12"
          style={{ borderRight: '1px solid var(--rule)' }}
        >
          <div
            className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] uppercase mb-6 flex items-center gap-3"
            style={{ color: 'var(--muted)' }}
          >
            <span style={{ display: 'inline-block', width: 16, height: 1, background: accent }} />
            Challenges
          </div>
          <div>
            {challenges.map((c, i) => (
              <Challenge key={i} text={c} index={i} />
            ))}
            <div style={{ borderTop: '1px solid var(--rule)' }} />
          </div>
        </div>

        {/* Right — solutions grid */}
        <div className="px-4 sm:px-6 md:px-10 py-10 sm:py-12">
          <div
            className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] uppercase mb-6 flex items-center gap-3"
            style={{ color: 'var(--muted)' }}
          >
            <span style={{ display: 'inline-block', width: 16, height: 1, background: accent }} />
            How SmartCoach360 Helps
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2"
            style={{ border: '1px solid var(--rule)', borderBottom: 'none', borderRight: 'none' }}
          >
            {solutions.map((s, i) => (
              <SolutionCard key={s.title} title={s.title} desc={s.desc} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}