import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import logobg from '../assets/logo-scatter.png'

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const CASES = [
  {
    num: '001',
    type: 'Personal Trainer',
    label: 'Independent PT — Online & In-person',
    quote: 'I Went From 12 Clients to 35 in 6 Months Without Burning Out',
    challenge: 'Tracking clients through spreadsheets and WhatsApp worked at first, but as the roster grew, things started slipping. Check-ins became inconsistent, payments were delayed, and there was no reliable way to monitor progress.',
    change: 'After moving to SmartCoach360, everything consolidated into one platform. Automated check-ins reduced manual follow-ups, clients received weekly programmes in the mobile app, and payments ran automatically through session packs.',
    results: [
      { label: 'Client base growth',        value: '12→35',  sub: 'in 6 months' },
      { label: 'Admin time saved',           value: '12hrs',  sub: 'back every week' },
      { label: 'Payment collection',         value: '+21%',   sub: '78% → 99%' },
      { label: 'Client retention',           value: '+40%',   sub: 'improvement' },
      { label: 'Client satisfaction',        value: '4.9★',   sub: 'out of 5' },
    ],
    accent: '#00FF94',
  },
  {
    num: '002',
    type: 'Gym Owner',
    label: 'Fitness Studio — 3 Locations, 8 Coaches',
    quote: 'SmartCoach360 Gave Me Real Visibility Across All 3 Gyms for the First Time',
    challenge: 'Three locations, eight coaches, and no single source of truth. Every studio operated slightly differently—the client experience depended too much on which coach they worked with and which location they visited.',
    change: 'SmartCoach360 brought all three locations into one platform. Master programmes helped every coach deliver a consistent experience, automated client allocation matched new members to the right coach, and the owner had a real-time dashboard across all three sites.',
    results: [
      { label: 'Admin overhead',            value: '-35%',   sub: 'across all locations' },
      { label: 'Client onboarding',         value: '2d→2h',  sub: 'time reduction' },
      { label: 'Revenue visibility',        value: 'Live',   sub: 'across 3 branches' },
      { label: 'Coach performance',         value: '100%',   sub: 'automated tracking' },
      { label: 'Client satisfaction',       value: '+28%',   sub: 'score improvement' },
    ],
    accent: '#00FF94',
  },
  {
    num: '003',
    type: 'Nutrition Coach',
    label: 'Online Nutrition & Wellness — 60+ Remote Clients',
    quote: 'My Clients Are Hitting Their Macro Goals 3× More Consistently Since I Switched',
    challenge: 'Manually tracking macro compliance for 60+ clients across WhatsApp and spreadsheets was messy, error-prone, and unsustainable. Between check-in calls, clients had no system keeping them on track.',
    change: 'With SmartCoach360, nutrition data moved into one central platform. Automated daily check-ins created consistent accountability, the female health tracker supported more nuanced coaching, and compliance data stayed visible in real time.',
    results: [
      { label: 'Macro compliance',          value: '+108%',  sub: '38% → 79%' },
      { label: 'Manual tracking time',      value: '-90%',   sub: 'reduction' },
      { label: 'Programme completion',      value: '+55%',   sub: 'improvement' },
      { label: 'Client referral rate',      value: '2×',     sub: 'in 4 months' },
      { label: 'Monthly recurring rev.',    value: '+45%',   sub: 'growth' },
    ],
    accent: '#00FF94',
  },
  {
    num: '004',
    type: 'Large Organisation',
    label: 'National Fitness Org — 20+ Branches, 50+ Coaches',
    quote: 'We Finally Have One System That Works Across Our Entire Organisation',
    challenge: 'With more than 20 branches and 50+ coaches, the cracks in the organisation\'s systems were getting harder to ignore. Disconnected tools meant inconsistent client experiences, poor visibility into performance, and slow lead response times.',
    change: 'SmartCoach360 became the single operational platform across all branches. SSO provided secure, centralised access, role-based permissions were configured by team level, and automated lead allocation reduced response times from days to minutes.',
    results: [
      { label: 'Lead response time',        value: '48h→4m', sub: 'reduction' },
      { label: 'Operational cost savings',  value: '-22%',   sub: 'year-on-year' },
      { label: 'Client data accuracy',      value: '99.8%',  sub: 'data quality' },
      { label: 'Cross-branch consistency',  value: '100%',   sub: 'standardised' },
      { label: 'Team productivity',         value: '+31%',   sub: 'increase' },
    ],
    accent: '#00FF94',
  },
]

/* ─── HERO ───────────────────────────────────────────────────────────────── */
function CaseStudiesHero() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section
      className="relative noise"
      style={{ paddingTop: 64, borderBottom: '1px solid var(--rule)', background: '#080808' }}
    >

      {/* grid lines */}
      <div className="absolute inset-0 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 px-4 sm:px-6 md:px-10 pointer-events-none z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="h-full" style={{ borderLeft: '1px solid rgba(240,237,232,0.03)' }} />
        ))}
      </div>

      {/* label bar */}
      <div className="relative z-10" style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex items-center min-h-[50px] gap-0">
            <div
              className="flex items-center gap-2.5 pr-6 sm:pr-8 font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase"
              style={{ color: 'var(--green)', borderRight: '1px solid var(--rule)' }}
            >
              <div className="pulse-dot w-[5px] h-[5px] rounded-full" style={{ background: 'var(--green)' }} />
              Case Studies · Page 004
            </div>
            <div
              className="ml-auto font-mono text-[8px] sm:text-[9px] tracking-[0.1em] uppercase"
              style={{ color: 'var(--muted2)' }}
            >
              4 stories · 4 types of coaches
            </div>
          </div>
        </div>
        
      </div>

      <div ref={ref} className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24 overflow-hidden">

        <div
          className="font-display font-black leading-none tracking-[-0.04em] select-none"
          style={{
            fontSize: 'clamp(40px,7vw,110px)',
            color: 'var(--text)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateX(-40px)',
            transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          REAL COACHES.
        </div>

        
          <div
            className="font-display font-black leading-none tracking-[-0.04em] select-none"
            style={{
              fontSize: 'clamp(40px,7vw,110px)',
              color: 'var(--green)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(30px)',
              transition: 'opacity 0.8s 0.12s cubic-bezier(0.16,1,0.3,1), transform 0.8s 0.12s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            REAL RESULTS.
          </div>
        

        
          <div
            className="font-display font-black leading-none tracking-[-0.04em] select-none"
            style={{
              fontSize: 'clamp(40px,7vw,110px)',
              color: 'var(--text)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateX(40px)',
              transition: 'opacity 0.8s 0.24s cubic-bezier(0.16,1,0.3,1), transform 0.8s 0.24s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            REAL GROWTH.
          </div>
       

        <div
          className="absolute font-display font-black leading-none tracking-[-0.06em] select-none pointer-events-none"
          style={{
            fontSize: 'clamp(120px,22vw,340px)',
            color: 'rgba(240,237,232,0.02)',
            bottom: -20,
            right: -20,
          }}
        >
          04
        </div>
      </div>

      
    </section>
  )
}

/* ─── RESULT STAT ─────────────────────────────────────────────────────────── */
function ResultStat({ label, value, sub, index, inView }) {
  return (
    <div
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(16px)',
        transition: `opacity 0.6s ${0.1 + index * 0.07}s cubic-bezier(0.16,1,0.3,1), transform 0.6s ${0.1 + index * 0.07}s cubic-bezier(0.16,1,0.3,1)`,
      }}
    >
      <div
        className="font-display font-black tracking-[-0.03em] leading-none mb-1"
        style={{ fontSize: 'clamp(24px,3.5vw,42px)', color: 'var(--green)' }}
      >
        {value}
      </div>
      <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.08em] uppercase" style={{ color: 'var(--text)' }}>
        {label}
      </div>
      <div className="font-mono text-[8px] sm:text-[9px] tracking-[0.06em] uppercase mt-0.5" style={{ color: 'var(--muted2)' }}>
        {sub}
      </div>
    </div>
  )
}

/* ─── CASE STUDY SECTION ─────────────────────────────────────────────────── */
function CaseStudySection({ cs, isLast }) {
  const headerRef = useRef(null)
  const bodyRef   = useRef(null)
  const statsRef  = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const bodyInView   = useInView(bodyRef,   { once: true, margin: '-40px' })
  const statsInView  = useInView(statsRef,  { once: true, margin: '-40px' })

  const isEven = parseInt(cs.num) % 2 === 0

  return (
    <section
      id={`case-${cs.num}`}
      style={{ borderBottom: isLast ? 'none' : '1px solid var(--rule)' }}
    >
      {/* ── Top label strip ── */}
      <div style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex items-center min-h-[48px]">
            <div
              className="flex items-center gap-3 pr-6 sm:pr-8"
              style={{ borderRight: '1px solid var(--rule)' }}
            >
              <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted2)' }}>
                {cs.num}
              </span>
              <span
                className="font-mono text-[8px] sm:text-[9px] tracking-[0.1em] uppercase px-2.5 py-1"
                style={{ color: 'var(--green)', border: '1px solid rgba(0,255,148,0.3)' }}
              >
                {cs.type}
              </span>
            </div>
            <div className="px-4 sm:px-6 font-mono text-[8px] sm:text-[9px] tracking-[0.08em] uppercase hidden sm:block" style={{ color: 'var(--muted2)' }}>
              {cs.label}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? '' : ''}`}>

          <div
            ref={headerRef}
            className={`relative px-4 sm:px-6 md:px-10 py-10 sm:py-12 md:py-16 flex flex-col justify-between gap-8 overflow-hidden ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
            style={{ borderRight: isEven ? 'none' : '1px solid var(--rule)', borderLeft: isEven ? '1px solid var(--rule)' : 'none' }}
          >
            <div
              className="absolute font-display font-black leading-none select-none pointer-events-none"
              style={{
                fontSize: 'clamp(140px,18vw,260px)',
                color: 'rgba(0,255,148,0.04)',
                top: -10,
                right: isEven ? 'auto' : -10,
                left: isEven ? -10 : 'auto',
                lineHeight: 1,
              }}
            >
              {cs.num}
            </div>

            <div className="relative z-10">
              <div
                className="font-display font-black leading-none mb-4"
                style={{ fontSize: 64, color: 'var(--green)', lineHeight: 1, opacity: 0.4 }}
              >
                "
              </div>
              <blockquote
                className="font-display font-black tracking-[-0.02em] leading-[1.0]"
                style={{
                  fontSize: 'clamp(20px,2.8vw,38px)',
                  color: 'var(--text)',
                  opacity: headerInView ? 1 : 0,
                  transform: headerInView ? 'none' : 'translateY(24px)',
                  transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {cs.quote}
              </blockquote>
            </div>

            <div
              className="relative z-10 flex items-center gap-4"
              style={{
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? 'none' : 'translateY(12px)',
                transition: 'opacity 0.7s 0.2s cubic-bezier(0.16,1,0.3,1), transform 0.7s 0.2s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <div className="w-8 h-px" style={{ background: 'var(--green)' }} />
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
                {cs.label}
              </span>
            </div>
          </div>

          {/* Challenge + Change panel */}
          <div
            ref={bodyRef}
            className={`px-4 sm:px-6 md:px-10 py-10 sm:py-12 md:py-16 flex flex-col gap-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
            style={{ borderRight: isEven ? '1px solid var(--rule)' : 'none' }}
          >
            <div
              style={{
                opacity: bodyInView ? 1 : 0,
                transform: bodyInView ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <div className="font-mono text-[8px] sm:text-[9px] tracking-[0.18em] uppercase mb-3 flex items-center gap-3" style={{ color: 'var(--green)' }}>
                <span style={{ width: 14, height: 1, background: 'var(--green)', display: 'inline-block' }} />
                The Challenge
              </div>
              <p className="text-[13px] sm:text-[14px] leading-[1.75]" style={{ color: 'var(--muted)' }}>{cs.challenge}</p>
            </div>

            <div style={{ width: '100%', height: 1, background: 'var(--rule)' }} />

            <div
              style={{
                opacity: bodyInView ? 1 : 0,
                transform: bodyInView ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.7s 0.12s cubic-bezier(0.16,1,0.3,1), transform 0.7s 0.12s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <div className="font-mono text-[8px] sm:text-[9px] tracking-[0.18em] uppercase mb-3 flex items-center gap-3" style={{ color: 'var(--muted)' }}>
                <span style={{ width: 14, height: 1, background: 'var(--muted2)', display: 'inline-block' }} />
                What Changed
              </div>
              <p className="text-[13px] sm:text-[14px] leading-[1.75]" style={{ color: 'var(--muted)' }}>{cs.change}</p>
            </div>
          </div>
        </div>

        {/* ── Results bar — full width ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
          style={{ borderTop: '1px solid var(--rule)' }}
        >
          {cs.results.map((r, ri) => (
            <div
              key={r.label}
              className="px-4 sm:px-6 md:px-8 py-6 sm:py-7 group transition-colors duration-200"
              style={{
                borderRight: ri < cs.results.length - 1 ? '1px solid var(--rule)' : 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,255,148,0.03)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <ResultStat {...r} index={ri} inView={statsInView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─────────────────────────────────────────────────────────────────── */
function CaseStudiesCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative overflow-hidden" style={{ background: '#080808', borderTop: '1px solid var(--rule)' }}>
      <div
        className="absolute font-display font-black leading-none tracking-[-0.04em] select-none pointer-events-none whitespace-nowrap"
        style={{ fontSize: 'clamp(80px,16vw,220px)', color: 'rgba(240,237,232,0.02)', bottom: -20, left: '50%', transform: 'translateX(-50%)' }}
      >
        SC360
      </div>
      <div ref={ref} className="relative z-10 px-4 sm:px-6 md:px-10 py-20 sm:py-24 md:py-28 text-center">
        <div
          className="inline-flex items-center gap-2.5 font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase px-[18px] py-2 mb-10 border"
          style={{
            color: 'var(--green)', borderColor: 'var(--green-border)',
            opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <div className="pulse-dot w-[5px] h-[5px] rounded-full" style={{ background: 'var(--green)' }} />
          Your story starts here
        </div>

        <h2
          className="font-display font-black tracking-[-0.03em] leading-[0.88] mb-8"
          style={{
            fontSize: 'clamp(48px,8vw,120px)', color: 'var(--text)',
            opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.7s 0.08s cubic-bezier(0.16,1,0.3,1), transform 0.7s 0.08s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          READY TO<br />WRITE YOUR<br /><em style={{ fontStyle: 'normal', color: 'var(--green)' }}>OWN STORY?</em>
        </h2>

        <div
          className="flex flex-wrap items-center justify-center gap-4"
          style={{
            opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.7s 0.2s cubic-bezier(0.16,1,0.3,1), transform 0.7s 0.2s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-[12px] tracking-[0.12em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 font-medium transition-all duration-200"
            style={{ background: 'var(--green)', color: '#080808', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.transform = 'none' }}
          >
            Book Your Free Demo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="/"
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
          {['11 integrations', 'No extra cost', 'No config headaches'].map(t => (
            <span key={t} className="flex items-center gap-2">
              <span style={{ color: 'var(--green)' }}>✓</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── PAGE ─────────────────────────────────────────────────────────────────── */
export default function CaseStudies() {
  return (
    <div style={{ minHeight: '100vh', background: '#080808' }}>
      <main>
        <CaseStudiesHero />
        {CASES.map((cs, i) => (
          <CaseStudySection key={cs.num} cs={cs} isLast={i === CASES.length - 1} />
        ))}
        <CaseStudiesCTA />
      </main>
    </div>
  )
}