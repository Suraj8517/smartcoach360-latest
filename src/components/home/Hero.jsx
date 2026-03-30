import { useEffect, useRef } from 'react'
import video from '../../assets/logo.mp4'

const STATS = [
  { val: '2,800+', lbl: 'Coaches' },
  { val: '140k+',  lbl: 'Clients' },
  { val: '15+',    lbl: 'Integrations' },
]

const LINES = ['RUN YOUR', 'COACHING BUSINESS', 'ON ONE PLATFORM.']

export default function Hero() {
  const linesRef = useRef([])
  const videoRef = useRef(null)

  useEffect(() => {
    linesRef.current.forEach((el, i) => {
      if (!el) return
      el.style.transform = 'translateY(110%)'
      el.style.opacity = '1'

      setTimeout(() => {
        el.style.transition = 'transform 0.9s cubic-bezier(0.16,1,0.3,1)'
        el.style.transform = 'translateY(0)'
      }, 1000 + i * 120)
    })
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col noise bg-black"
      style={{ paddingTop: '64px', borderBottom: '1px solid var(--rule)' }}
    >
      {/*Background Video */}
      <div
        className="absolute inset-0 md:inset-y-0 md:left-[50%] md:w-[55%] pointer-events-none"
        style={{ zIndex: 0, overflow: 'hidden' }}
      >
       <video
  ref={videoRef}
  src={video}
  autoPlay
  loop
  muted
  playsInline
  className="w-[80%] h-[80%] object-contain absolute top-1/2 left-[70%] md:left-[40%] -translate-x-1/2 -translate-y-1/2 opacity-40 md:opacity-90 xl:opacity-70 mix-blend-lighten"
/>

        {/* Gradient overlay for readability */}
<div className="absolute inset-0 bg-gradient-to-r 
  from-black/90 via-black/70 to-transparent 
  md:from-black/80 md:via-black/30 
  xl:from-black/90 xl:via-black/80" /></div>
        {/* Grid lines */}
      <div className="absolute inset-0 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 px-4 sm:px-6 md:px-1 pointer-events-none" style={{ zIndex: 1 }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="h-full" style={{ borderLeft: '1px solid rgba(240,237,232,0.03)' }} />
        ))}
      </div>

      {/* Corner label */}
      <div
        className="absolute top-16 sm:top-20 right-4 sm:right-10 font-mono text-[9px] sm:text-[10px] tracking-[0.12em] uppercase hidden lg:block"
        style={{ color: 'var(--muted2)', writingMode: 'vertical-rl', zIndex: 10 }}
      >
        SmartCoach360 · 2026
      </div>

      {/* Top bar */}
      <div className="relative" style={{ borderBottom: '1px solid var(--rule)', zIndex: 10 }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-stretch min-h-[52px]">

            <div
              className="flex items-center gap-2.5 pr-4 sm:pr-8 py-2 sm:py-0 font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase justify-center md:justify-start"
              style={{ color: 'var(--green)', borderRight: '1px solid var(--rule)' }}
            >
              <div className="pulse-dot w-[5px] h-[5px] rounded-full" style={{ background: 'var(--green)' }} />
              All-in-One Fitness CRM
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-stretch sm:ml-auto">
              {STATS.map(s => (
                <div key={s.lbl} className="flex items-center gap-2 sm:gap-3 px-4 sm:px-7 py-2 sm:py-0" style={{ borderLeft: '1px solid var(--rule)' }}>
                  <span className="font-mono text-[12px] sm:text-[13px] font-medium" style={{ color: 'var(--text)' }}>{s.val}</span>
                  <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Headline */}
      <div className="relative flex-1 flex flex-col justify-center py-10 sm:py-14" style={{ zIndex: 10 }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 w-full">

          <div
            className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-5 sm:mb-7 flex items-center gap-4"
            style={{ color: 'var(--muted)' }}
          >
            <span>001 / SmartCoach360</span>
            <span className="flex-shrink-0 w-14 sm:w-20 h-px" style={{ background: 'var(--muted2)' }} />
          </div>

          <div className="overflow-hidden">
            {LINES.map((line, i) => (
              <div key={line} className="overflow-hidden leading-[0.9] sm:leading-[0.88]">
                <span
                  ref={el => linesRef.current[i] = el}
                  className="block font-display font-black tracking-[-0.03em]"
                  style={{
                    fontSize: 'clamp(42px,10vw,150px)',
                    color: i === 1 ? 'var(--green)' : 'var(--text)',
                    opacity: 0,
                  }}
                >
                  {line}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div
        className="relative grid grid-cols-1 md:grid-cols-3"
        style={{ borderTop: '1px solid var(--rule)', zIndex: 10 }}
      >

        <div className="px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:border-r" style={{ borderRight: '1px solid var(--rule)' }}>
          <p className="text-[14px] sm:text-[15px] leading-[1.65] max-w-full sm:max-w-xs" style={{ color: 'var(--muted)' }}>
            Stop juggling apps to manage clients, programmes, nutrition, payments, and messages.{' '}
  <strong className="font-medium" style={{ color: 'var(--text)' }}>
SmartCoach360 brings your entire coaching operation into one platform </strong>{' '}
so you spend less time on admin, never miss a follow-up, and deliver a consistent client experience at scale. 
Whether you’re a solo personal trainer or managing a multi-coach team across multiple locations, SmartCoach360 adapts to your model and scales as you grow.  
          </p>
        </div>

        <div className="px-4 sm:px-6 md:px-10 py-6 sm:py-8 flex flex-col gap-4 justify-center md:border-r" style={{ borderRight: '1px solid var(--rule)' }}>
          <a
            href="#cta"
            className="inline-flex items-center gap-2.5 font-mono text-[10px] sm:text-[11px] tracking-[0.12em] uppercase font-medium px-5 sm:px-7 py-3 transition-all duration-200"
            style={{ background: 'var(--green)', color: '#080808', textDecoration: 'none', alignSelf: 'flex-start' }}
          >
            Book a Free Demo
          </a>

          <a
            href="#features"
            className="inline-flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.1em] uppercase transition-colors duration-200 py-1"
            style={{ color: 'var(--muted)', textDecoration: 'none', borderBottom: '1px solid var(--muted2)', alignSelf: 'flex-start' }}
          >
            Explore the system
          </a>
        </div>

        <div className="px-4 sm:px-6 md:px-10 py-6 sm:py-8 hidden md:flex items-end justify-end">
          <div className="flex items-center gap-3 font-mono text-[9px] sm:text-[10px] tracking-[0.12em] uppercase" style={{ color: 'var(--muted2)' }}>
            <div className="w-px h-10 sm:h-12 relative overflow-hidden" style={{ background: 'var(--muted2)' }}>
              <div className="scroll-drop absolute top-0 left-0 right-0 h-1/2" style={{ background: 'var(--green)' }} />
            </div>
            <span>Scroll</span>
          </div>
        </div>

      </div>
    </section>
  )
}