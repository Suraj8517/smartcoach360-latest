import { useEffect, useRef } from 'react'

const AUDIENCE = ['Personal Trainers', 'Gym Owners', 'Nutrition Coaches', 'Large Organisations']

export default function UseCaseHero() {
  const linesRef = useRef([])

  useEffect(() => {
    linesRef.current.forEach((el, i) => {
      if (!el) return
      el.style.transform = 'translateY(110%)'
      el.style.opacity = '1'
      setTimeout(() => {
        el.style.transition = 'transform 0.9s cubic-bezier(0.16,1,0.3,1)'
        el.style.transform = 'translateY(0)'
      }, 200 + i * 100)
    })
  }, [])

  return (
    <section
      className="relative min-h-[60vh] flex flex-col noise"
      style={{ paddingTop: '64px', borderBottom: '1px solid var(--rule)' }}
    >

      {/* Grid lines */}
      <div className="absolute inset-0 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 px-4 sm:px-6 md:px-10 pointer-events-none z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="h-full" style={{ borderLeft: '1px solid rgba(240,237,232,0.03)' }} />
        ))}
      </div>

      {/* Corner label */}
      <div
        className="absolute top-20 right-10 font-mono text-[9px] tracking-[0.12em] uppercase z-10 hidden lg:block"
        style={{ color: 'var(--muted2)', writingMode: 'vertical-rl' }}
      >
        SmartCoach360 · Use Cases
      </div>

      {/* Top bar */}
      <div className="relative z-10" style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-stretch min-h-[52px]">
            <div
              className="flex items-center gap-2.5 pr-4 sm:pr-8 py-2 sm:py-0 font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase"
              style={{ color: 'var(--green)', borderRight: '1px solid var(--rule)' }}
            >
              <div className="pulse-dot w-[5px] h-[5px] rounded-full" style={{ background: 'var(--green)' }} />
              Built for every fitness professional
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-stretch sm:ml-auto">
              {AUDIENCE.map((a, i) => (
                <div
                  key={a}
                  className="flex items-center px-4 sm:px-6 py-2 sm:py-0 font-mono text-[8px] sm:text-[9px] tracking-[0.1em] uppercase"
                  style={{ color: 'var(--muted)', borderLeft: '1px solid var(--rule)' }}
                >
                  <span style={{ color: 'var(--green)', marginRight: 6 }}>0{i + 1}</span>
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Headline */}
      <div className="relative z-10 flex-1 flex flex-col justify-center py-10 sm:py-14">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 w-full">
          <div
            className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-5 sm:mb-7 flex items-center gap-4"
            style={{ color: 'var(--muted)' }}
          >
            <span>Use Cases</span>
            <span className="flex-shrink-0 w-14 sm:w-20 h-px" style={{ background: 'var(--muted2)' }} />
          </div>

          <div className="overflow-hidden">
            {['BUILT FOR', 'EVERY KIND', 'OF COACH.'].map((line, i) => (
              <div key={line} className="overflow-hidden leading-[0.9]">
                <span
                  ref={el => linesRef.current[i] = el}
                  className="block font-display font-black tracking-[-0.03em]"
                  style={{
                    fontSize: 'clamp(42px,9vw,160px)',
                    color: i === 1 ? 'var(--green)' : 'var(--text)',
                    opacity: 0,
                  }}
                >
                  {line}
                </span>
              </div>
            ))}
          </div>

          <p
            className="mt-8 text-[13px] sm:text-[14px] leading-[1.7] max-w-md"
            style={{
              color: 'var(--muted)',
              opacity: 0,
              animation: 'loaderWordmark 0.7s 0.8s ease forwards',
            }}
          >
            Whether you coach one-on-one, run a busy gym, deliver online nutrition programmes, or manage a national fitness organisation — SmartCoach360 fits the way you operate.
          </p>
        </div>
      </div>
    </section>
  )
}