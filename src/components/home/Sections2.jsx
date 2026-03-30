import { useRef } from 'react'
import { useInView } from 'framer-motion'

/* ─── WHO ─────────────────────────────────────────────────────────────────── */
const WHO = [
  {
    type:'001 / Personal Trainer', title:'Personal\nTrainers',
    desc:'Stop spending evenings on admin. Take on more clients without adding more hours. Every workflow automated so you can focus entirely on coaching.',
    perks:['Take on more clients without stress','Automate check-ins and follow-ups','Unified client view from one dashboard'],
  },
  {
    type:'002 / Gym & Studio', title:'Gym Owners\n& Studios',
    desc:'Manage your full team, class schedules, client allocations, and revenue across one or multiple locations — from a single command centre.',
    perks:['Multi-branch management','Team and role-based access control','Class scheduling with live payment sync'],
  },
  {
    type:'003 / Nutrition Coach', title:'Nutrition\n& Wellness',
    desc:'Deliver truly personalised nutrition at scale. Track macro compliance in real time and use the female health tracker for deeper personalisation.',
    perks:['Custom meal plans per client','Real-time macro compliance monitoring','Female health and hormonal tracker'],
  },
  {
    type:'004 / Enterprise', title:'Large\nOrganisations',
    desc:'Enterprise-grade tools built for scale. SSO, bulk data uploads, dedicated Customer Success Manager, and compliance controls at size.',
    perks:['SSO and enterprise-grade security','Bulk upload for clients and coaches','Dedicated Customer Success Manager'],
  },
]

export function WhoItsFor() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="who" style={{ borderBottom: '1px solid var(--rule)' }}>
      <div
        ref={ref}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 px-4 sm:px-6 md:px-10 pt-14 sm:pt-16 md:pt-20 pb-8 sm:pb-10"
        style={{ borderBottom: '1px solid var(--rule)' }}
      >
        <h2 className="font-display font-black leading-[0.9] tracking-[-0.03em]"
          style={{ fontSize: 'clamp(48px,6vw,88px)', color: 'var(--text)' }}>
          BUILT<br />FOR <em style={{ fontStyle:'normal',color:'var(--green)' }}>YOU,</em><br />WHOEVER<br />YOU ARE
        </h2>
        <p className="max-w-[260px] text-[13px] leading-[1.65] md:text-right" style={{ color: 'var(--muted)' }}>
          Solo PT to multi-branch organisation — SmartCoach360 scales to the shape of your business.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {WHO.map((w, i) => <WhoCard key={w.type} card={w} index={i} />)}
      </div>
    </section>
  )
}

function WhoCard({ card, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const isEven = index % 2 === 0
  const isBot  = index >= 2

  return (
    <div
      ref={ref}
      data-cursor
      className="relative p-8 sm:p-10 md:p-12 lg:p-14 group transition-colors duration-300"
      style={{
        borderRight: isEven ? '1px solid var(--rule)' : 'none',
        borderBottom: !isBot ? '1px solid var(--rule)' : 'none',
        opacity:   inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: `opacity 0.7s ${index*0.09}s cubic-bezier(0.16,1,0.3,1), transform 0.7s ${index*0.09}s cubic-bezier(0.16,1,0.3,1), background 0.3s ease`,
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.015)'}
      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
    >
      <div className="flex items-start justify-between mb-7">
        <div>
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--green)' }}>
            {card.type}
          </div>
          <div className="font-display font-black text-[32px] sm:text-[36px] tracking-[-0.02em] leading-[1.05]" style={{ color: 'var(--text)' }}>
            {card.title.split('\n').map((l,i) => <span key={i} className="block">{l}</span>)}
          </div>
        </div>
        <div
          className="w-10 h-10 flex items-center justify-center flex-shrink-0 border transition-all duration-200"
          style={{ borderColor: 'var(--rule-bright)' }}
          ref={el => {
            if (!el) return
            const p = el.closest('[data-cursor]')
            if (!p) return
            p.addEventListener('mouseenter', () => { el.style.borderColor='var(--green)'; el.style.background='rgba(0,255,148,0.08)' })
            p.addEventListener('mouseleave', () => { el.style.borderColor='var(--rule-bright)'; el.style.background='transparent' })
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M8 3l5 5-5 5" stroke="#00FF94" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <p className="text-[13px] sm:text-[14px] leading-[1.7] mb-7" style={{ color: 'var(--muted)' }}>{card.desc}</p>
      <ul className="flex flex-col gap-2">
        {card.perks.map(p => (
          <li key={p} className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] tracking-[0.04em]" style={{ color: 'var(--muted)' }}>
            <span style={{ color: 'var(--green)' }}>→</span>
            {p}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ─── PROCESS ─────────────────────────────────────────────────────────────── */
const STEPS = [
  { num:'01', title:'Book a Demo',      desc:'A free 20-minute walkthrough with a specialist. No pressure. No pitch deck. Just a real look at what SmartCoach360 can do for your business.' },
  { num:'02', title:'We Set It Up',     desc:'Our onboarding team configures everything hands-on: your programs, branding, team structure, and payment settings. All done with you.' },
  { num:'03', title:'Onboard Clients',  desc:'Invite clients, assign programs, set nutrition goals, and start tracking progress from day one — all through the mobile app.' },
  { num:'04', title:'Grow',             desc:'Automations run in the background. You focus on coaching. SmartCoach360 handles everything else.' },
]

export function Process() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{ borderBottom: '1px solid var(--rule)' }}>
      <div className="px-4 sm:px-6 md:px-10 py-14 sm:py-16 md:py-20">
        <div
          className="flex items-center gap-4 font-mono text-[9px] sm:text-[10px] tracking-[0.18em] uppercase mb-10 sm:mb-14"
          style={{ color: 'var(--muted)' }}
          ref={ref}
        >
          <span>How it works</span>
          <span className="flex-1 h-px" style={{ background: 'var(--rule)' }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              data-cursor
              className="lg:px-10 group"
              style={{
                borderRight: i < 3 ? '1px solid var(--rule)' : 'none',
                paddingLeft: i === 0 ? 0 : undefined,
                paddingRight: i === 3 ? 0 : undefined,
                opacity:   inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(24px)',
                transition: `opacity 0.7s ${0.1+i*0.1}s cubic-bezier(0.16,1,0.3,1), transform 0.7s ${0.1+i*0.1}s cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              <div
                className="font-display font-black text-[72px] sm:text-[80px] leading-none tracking-[-0.04em] mb-6 transition-colors duration-300"
                style={{ color: 'var(--muted2)' }}
                ref={el => {
                  if (!el) return
                  const p = el.closest('[data-cursor]')
                  if (!p) return
                  p.addEventListener('mouseenter', () => el.style.color='var(--green)')
                  p.addEventListener('mouseleave', () => el.style.color='var(--muted2)')
                }}
              >
                {s.num}
              </div>
              <div className="font-display font-bold text-[22px] sm:text-[24px] tracking-[-0.01em] mb-3" style={{ color: 'var(--text)' }}>{s.title}</div>
              <p className="text-[13px] sm:text-[14px] leading-[1.65]" style={{ color: 'var(--muted)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── INTEGRATIONS ────────────────────────────────────────────────────────── */
const INTS = [
  { name:'WhatsApp',        color:'#25D366' },
  { name:'Zoom',            color:'#2D8CFF' },
  { name:'Microsoft Teams', color:'#6264A7' },
  { name:'Google Sheets',   color:'#34A853' },
  { name:'Google Forms',    color:'#4285F4' },
  { name:'Apple Health',    color:'#FC3158' },
  { name:'Google Fit',      color:'#4285F4' },
  { name:'Health Connect',  color:'#34A853' },
  { name:'Zoho Forms',      color:'#E42527' },
  { name:'Stripe',          color:'#635BFF' },
  { name:'Lab Integration', color:'#00FF94' },
  { name:'Web Builder',     color:'#00FF94' },
]

export function Integrations() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="integrations" style={{ borderBottom: '1px solid var(--rule)' }}>
      <div
        ref={ref}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 px-4 sm:px-6 md:px-10 pt-14 sm:pt-16 md:pt-20 pb-8 sm:pb-10"
        style={{ borderBottom: '1px solid var(--rule)' }}
      >
        <h2 className="font-display font-black leading-[0.9] tracking-[-0.03em]"
          style={{ fontSize: 'clamp(40px,5vw,72px)', color: 'var(--text)' }}>
          WORKS WITH<br />YOUR <em style={{ fontStyle:'normal',color:'var(--green)' }}>STACK</em>
        </h2>
        <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
          15+ integrations
        </div>
      </div>
      <div className="flex flex-wrap">
        {INTS.map((it, i) => (
          <div
            key={it.name}
            data-cursor
            className="flex items-center gap-2.5 px-6 sm:px-9 py-5 sm:py-7 transition-colors duration-200 group"
            style={{
              borderRight: '1px solid var(--rule)',
              borderBottom: '1px solid var(--rule)',
              opacity:   inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(16px)',
              transition: `opacity 0.6s ${0.04*i}s cubic-bezier(0.16,1,0.3,1), transform 0.6s ${0.04*i}s cubic-bezier(0.16,1,0.3,1), background 0.2s ease`,
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,255,148,0.06)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: it.color }} />
            <span
              className="font-mono text-[11px] sm:text-[12px] tracking-[0.06em] transition-colors duration-200"
              style={{ color: 'var(--text)' }}
              ref={el => {
                if (!el) return
                const p = el.closest('[data-cursor]')
                if (!p) return
                p.addEventListener('mouseenter', () => el.style.color = 'var(--green)')
                p.addEventListener('mouseleave', () => el.style.color = 'var(--text)')
              }}
            >
              {it.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── CUSTOMER SUPPORT ───────────────────────────────────────────────────── */

const SUPPORT_TIERS = [
  {
    tier: 'Self-serve',
    index: '001',
    items: [
      { title: 'Help Centre',        desc: 'A searchable knowledge base with step-by-step guides and FAQs, available 24/7.' },
      { title: 'On-demand Webinars', desc: 'Training videos and feature walkthroughs you can access anytime.' },
    ],
  },
  {
    tier: 'Direct access',
    index: '002',
    items: [
      { title: 'Email Support',   desc: 'Send us a question and get a detailed response within 24 hours.' },
      { title: 'Live Chat',       desc: 'Get fast answers from real people within the platform during business hours.' },
      { title: 'Phone Support',   desc: 'Speak to a specialist for immediate, personal help.' },
    ],
  },
  {
    tier: 'High-touch',
    index: '003',
    items: [
      { title: 'Live Masterclass Calls',              desc: 'Join live sessions where our team dives deep into features and growth strategies.' },
      { title: 'Priority Support',                    desc: 'Premium users get guaranteed fast response times across every channel.' },
      { title: 'Personalised Onboarding',             desc: 'A dedicated specialist works with you one-on-one to configure your setup.' },
      { title: 'Dedicated Customer Success Manager',  desc: 'A CSM focused entirely on your growth, retention, and platform success.' },
    ],
  },
]

export function Support() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section style={{ borderBottom: '1px solid var(--rule)' }}>

      {/* ── Header ── */}
      <div
        ref={headerRef}
        className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10"
        style={{ borderBottom: '1px solid var(--rule)' }}
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pt-14 sm:pt-16 md:pt-20 pb-8 sm:pb-10">

          {/* Left — section label + headline */}
          <div>
            <div
              className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-5 sm:mb-7 flex items-center gap-4"
              style={{
                color: 'var(--muted)',
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? 'none' : 'translateY(12px)',
                transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <span>005 / Customer Support</span>
              <span className="flex-shrink-0 w-14 sm:w-20 h-px" style={{ background: 'var(--muted2)' }} />
            </div>

            <h2
              className="font-display font-black leading-[0.9] tracking-[-0.03em]"
              style={{
                fontSize: 'clamp(40px,6vw,88px)',
                color: 'var(--text)',
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.7s 0.08s cubic-bezier(0.16,1,0.3,1), transform 0.7s 0.08s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              WITH YOU<br />
              EVERY <em style={{ fontStyle: 'normal', color: 'var(--green)' }}>STEP</em><br />
              OF THE WAY.
            </h2>
          </div>

          {/* Right — tagline + stat pill */}
          <div
            className="flex flex-col gap-5 lg:items-end lg:text-right"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? 'none' : 'translateY(16px)',
              transition: 'opacity 0.7s 0.14s cubic-bezier(0.16,1,0.3,1), transform 0.7s 0.14s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <p className="text-[13px] sm:text-[14px] leading-[1.7] max-w-xs" style={{ color: 'var(--muted)' }}>
              Support should be as reliable as the product. From onboarding through day-to-day optimisation, our team is here to help you get value quickly and keep improving over time.
            </p>
            <div
              className="inline-flex items-center gap-2.5 font-mono text-[9px] sm:text-[10px] tracking-[0.12em] uppercase px-4 py-2 self-start lg:self-end"
              style={{ border: '1px solid var(--rule-bright)', color: 'var(--muted)' }}
            >
              <div className="pulse-dot w-[5px] h-[5px] rounded-full" style={{ background: 'var(--green)' }} />
              9 ways to get help
            </div>
          </div>
        </div>
      </div>

      {/* ── Tier columns ── */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ borderBottom: '1px solid var(--rule)' }}>
          {SUPPORT_TIERS.map((tier, ti) => (
            <TierColumn key={tier.tier} tier={tier} tierIndex={ti} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TierColumn({ tier, tierIndex }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const isLast = tierIndex === 2

  return (
    <div
      ref={ref}
      className="flex flex-col"
      style={{
        borderRight: isLast ? 'none' : '1px solid var(--rule)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: `opacity 0.7s ${tierIndex * 0.1}s cubic-bezier(0.16,1,0.3,1), transform 0.7s ${tierIndex * 0.1}s cubic-bezier(0.16,1,0.3,1)`,
      }}
    >
      {/* Column header */}
      <div
        className="flex items-center justify-between px-6 sm:px-8 md:px-10 py-5 sm:py-6"
        style={{ borderBottom: '1px solid var(--rule)' }}
      >
        <div className="flex items-center gap-3">
          <span
            className="font-mono text-[8px] sm:text-[9px] tracking-[0.14em] uppercase"
            style={{ color: 'var(--muted2)' }}
          >
            {tier.index}
          </span>
          <span
            className="font-mono text-[9px] sm:text-[10px] tracking-[0.12em] uppercase"
            style={{ color: 'var(--green)' }}
          >
            {tier.tier}
          </span>
        </div>
        <span
          className="font-mono text-[8px] sm:text-[9px] tracking-[0.1em] uppercase"
          style={{ color: 'var(--muted2)' }}
        >
          {tier.items.length} channels
        </span>
      </div>

      {/* Support items */}
      {tier.items.map((item, ii) => (
        <SupportItem key={item.title} item={item} delay={tierIndex * 0.1 + ii * 0.07} isLast={ii === tier.items.length - 1} />
      ))}
    </div>
  )
}

function SupportItem({ item, delay, isLast }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <div
      ref={ref}
      className="group px-6 sm:px-8 md:px-10 py-7 sm:py-8 transition-colors duration-300 flex flex-col gap-3"
      style={{
        borderBottom: isLast ? 'none' : '1px solid var(--rule)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(16px)',
        transition: `opacity 0.6s ${delay}s cubic-bezier(0.16,1,0.3,1), transform 0.6s ${delay}s cubic-bezier(0.16,1,0.3,1), background 0.25s ease`,
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,255,148,0.04)'}
      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
    >
      {/* Arrow + title row */}
      <div className="flex items-center justify-between gap-3">
        <span
          className="font-display font-bold text-[17px] sm:text-[19px] tracking-[-0.01em] leading-[1.1]"
          style={{ color: 'var(--text)' }}
        >
          {item.title}
        </span>
        <span
          className="flex-shrink-0 font-mono text-[13px] transition-colors duration-200"
          style={{ color: 'var(--muted2)' }}
          ref={el => {
            if (!el) return
            const p = el.closest('.group')
            if (!p) return
            p.addEventListener('mouseenter', () => el.style.color = 'var(--green)')
            p.addEventListener('mouseleave', () => el.style.color = 'var(--muted2)')
          }}
        >
          →
        </span>
      </div>

      {/* Desc */}
      <p className="text-[12px] sm:text-[13px] leading-[1.65]" style={{ color: 'var(--muted)' }}>
        {item.desc}
      </p>
    </div>
  )
}

/* ─── CTA ─────────────────────────────────────────────────────────────────── */
export function CTA() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="cta" className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div
        className="absolute font-display font-black leading-none tracking-[-0.04em] select-none pointer-events-none whitespace-nowrap bottom-[-20px] left-1/2 -translate-x-1/2"
        style={{ fontSize: 'clamp(120px,20vw,280px)', color: 'rgba(240,237,232,0.025)' }}
      >
        SC360
      </div>

      <div ref={ref} className="relative z-10 px-4 sm:px-6 md:px-10 py-20 sm:py-24 md:py-28 text-center">
        <div
          className="inline-flex items-center gap-2.5 font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase px-[18px] py-2 mb-10 sm:mb-12 border"
          style={{
            color: 'var(--green)',
            borderColor: 'var(--green-border)',
            opacity:   inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <div className="pulse-dot w-[5px] h-[5px] rounded-full" style={{ background: 'var(--green)' }} />
          Start today — no commitment
        </div>

        <h2
          className="font-display font-black tracking-[-0.03em] leading-[0.88] mb-8 sm:mb-10"
          style={{
            fontSize: 'clamp(56px,9vw,140px)',
            color: 'var(--text)',
            opacity:   inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.7s 0.08s cubic-bezier(0.16,1,0.3,1), transform 0.7s 0.08s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          CHANGE<br />HOW YOU<br /><em style={{ fontStyle:'normal', color:'var(--green)' }}>COACH.</em>
        </h2>

        <p
          className="text-[14px] sm:text-[16px] leading-[1.65] max-w-[500px] mx-auto mb-10 sm:mb-12"
          style={{
            color: 'var(--muted)',
            opacity:   inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.7s 0.16s cubic-bezier(0.16,1,0.3,1), transform 0.7s 0.16s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          Thousands of fitness coaches are already using SmartCoach360 to save time,
          keep more clients, and grow their revenue — all from one platform.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-4"
          style={{
            opacity:   inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.7s 0.22s cubic-bezier(0.16,1,0.3,1), transform 0.7s 0.22s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-[12px] tracking-[0.12em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 font-medium transition-all duration-200"
            style={{ background: 'var(--green)', color: '#080808', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.background='#fff'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 32px rgba(0,255,148,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.background='var(--green)'; e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none' }}
          >
            Book Your Free Demo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.1em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 transition-all duration-200"
            style={{ color: 'var(--muted)', border: '1px solid var(--rule-bright)', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.color='var(--text)'; e.currentTarget.style.background='rgba(255,255,255,0.04)' }}
            onMouseLeave={e => { e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.background='transparent' }}
          >
            Explore the platform
          </a>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-7 sm:mt-8 font-mono text-[9px] sm:text-[10px] tracking-[0.1em] uppercase"
          style={{
            color: 'var(--muted2)',
            opacity:   inView ? 1 : 0,
            transition: 'opacity 0.7s 0.32s ease',
          }}
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
