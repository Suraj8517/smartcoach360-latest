import { useRef } from 'react'
import { useInView } from 'framer-motion'
import logo from '../../assets/world.png'
import logoscatter from '../../assets/logo-scatter.png'

/* ─── MARQUEE ─────────────────────────────────────────────────────────────── */
const ITEMS = [
  'Program Management','Nutrition Tracking','Client Engagement',
  'Business Automation','Payments & Revenue','Appointments',
  'Team Management','iOS & Android','SSO Security','Live Dashboards',
]

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden" style={{ borderBottom: '1px solid var(--rule)', background: 'var(--bg2)' }}>
      <div className="marquee-track flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 sm:gap-5 px-5 sm:px-8 md:px-10 py-[14px] sm:py-[18px] flex-shrink-0 font-mono text-[10px] sm:text-[11px] tracking-[0.12em] uppercase"
            style={{ color: 'var(--muted)', borderRight: '1px solid var(--rule)' }}
          >
            <span style={{ color: 'var(--green)' }}>✦</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── TRUST STATS ─────────────────────────────────────────────────────────── */
const TRUST_STATS = [
  { val: '2,800+',   lbl: 'Active Coaches',      sub: 'Worldwide' },
  { val: '140k+',    lbl: 'Clients Managed',      sub: 'On Platform' },
  { val: '15+',      lbl: 'Integrations',         sub: 'Built-in' },
  { val: '98%',      lbl: 'Retention Rate',       sub: 'Month-on-month' },
]


export function Trust() {
  const statsRef = useRef(null)
  const inView = useInView(statsRef, { once: true, margin: '-60px' })

  return (
    <section className="relative overflow-hidden" style={{ borderBottom: '1px solid var(--rule)' }}>

      <div
        className="absolute inset-0 bg-center bg-contain bg-no-repeat opacity-20 2xl:opacity-10 "
        style={{
          backgroundImage: `url(${logo})`,
        }}
      />
<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_460px]">

          <div
            className="py-14 sm:py-16 lg:py-20 pr-0 lg:pr-16"
            style={{ borderRight: '1px solid var(--rule)' }}
          >
            <div
              className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-6 sm:mb-8 flex items-center gap-4"
              style={{ color: 'var(--muted)' }}
            >
              <span>TRUSTED BY</span>
              <span className="flex-shrink-0 w-14 sm:w-24 h-px" style={{ background: 'var(--muted2)' }} />
            </div>

            <h2
              className="font-display font-black tracking-[-0.03em] leading-[0.9] mb-8 sm:mb-10"
              style={{ fontSize: 'clamp(40px,7vw,96px)', color: 'var(--text)' }}
            >
              Fitness<br />
              Professionals<br />
              <em style={{ fontStyle: 'normal', color: 'var(--green)' }}>
                Around the
              </em><br />
              <em style={{ fontStyle: 'normal', color: 'var(--green)' }}>
                World.
              </em>
            </h2>

            <p
              className="text-[13px] sm:text-[14px] leading-[1.7] max-w-sm"
              style={{ color: 'var(--muted)' }}
            >
              From independent trainers building their client base to established fitness organisations managing multi-coach teams — SmartCoach360 supports modern coaching businesses. Streamline delivery, improve retention, and enable scalable growth.
            </p>

            <div className="mt-8 sm:mt-10 flex items-center gap-6">
              <a
                href="#cta"
                className="inline-flex items-center gap-2.5 font-mono text-[9px] sm:text-[10px] tracking-[0.12em] uppercase font-medium px-5 sm:px-6 py-2.5 transition-all duration-200"
                style={{ background: 'var(--green)', color: '#080808', textDecoration: 'none' }}
              >
                Book a Demo
              </a>
              <span
                className="font-mono text-[9px] sm:text-[10px] tracking-[0.1em] uppercase"
                style={{ color: 'var(--muted2)' }}
              >
 See what we can do for you
               </span>
            </div>
          </div>

          {/* Right — stat cards */}
          <div
            ref={statsRef}
            className="py-0 lg:py-20 pl-0 lg:pl-16 flex flex-col justify-center"
          >
            <div className="grid grid-cols-2" style={{ borderTop: '1px solid var(--rule)',borderBottom: '1px solid var(--rule)' }}>
              {TRUST_STATS.map((s, i) => (
                <StatCard key={s.lbl} stat={s} index={i} inView={inView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, index, inView }) {
  const delay = index * 0.1
  const isRight = index % 2 === 1
  const isBottom = index >= 2

  return (
    <div
      className="p-6 sm:p-8 flex flex-col justify-between"
      style={{
        borderRight: isRight ? 'none' : '1px solid var(--rule)',
        borderBottom: isBottom ? 'none' : '1px solid var(--rule)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(20px)',
        transition: `opacity 0.8s ${delay}s cubic-bezier(0.16,1,0.3,1), transform 0.8s ${delay}s cubic-bezier(0.16,1,0.3,1)`,
      }}
    >
      <div
        className="font-mono text-[8px] sm:text-[9px] tracking-[0.14em] uppercase mb-3"
        style={{ color: 'var(--muted2)' }}
      >
        0{index + 1}
      </div>

      <div>
        <div
          className="font-display font-black tracking-[-0.03em] leading-none mb-1"
          style={{ fontSize: 'clamp(32px,5vw,52px)', color: 'var(--text)' }}
        >
          {stat.val}
        </div>
        <div
          className="font-mono text-[9px] sm:text-[10px] tracking-[0.1em] uppercase mt-2"
          style={{ color: 'var(--green)' }}
        >
          {stat.lbl}
        </div>
        <div
          className="font-mono text-[8px] sm:text-[9px] tracking-[0.08em] uppercase mt-0.5"
          style={{ color: 'var(--muted2)' }}
        >
          {stat.sub}
        </div>
      </div>
    </div>
  )
}

/* ─── PROBLEM ─────────────────────────────────────────────────── */
const PAINS = [
  { title: 'Scattered client data', body: 'Emails, spreadsheets, WhatsApp — it\'s a mess. One missed follow-up and a client walks.' },
  { title: 'Chasing invoices manually', body: 'Hours every week on payment follow-ups. That\'s coaching time you\'ll never get back.' },
  { title: 'Constant context-switching', body: 'Messaging on one app. Scheduling on another. Nutrition on a third. Exhausted before you\'ve coached anyone.' },
  { title: 'Clients ghosting quietly', body: 'No check-in system means you only find out someone\'s disengaged after they\'ve already cancelled.' },
  { title: 'You\'ve hit a ceiling', body: 'Not from lack of demand — from admin eating every available hour of your day.' },
]

export function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{ borderBottom: '1px solid var(--rule)' }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
          <div
            ref={ref}
            className="py-14 sm:py-16 lg:py-20 pr-0 lg:pr-10"
            style={{ borderRight: '1px solid var(--rule)' }}
          >
            <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] uppercase flex items-center gap-3" style={{ color: 'var(--muted)' }}>
              <span style={{ display:'inline-block',width:20,height:1,background:'var(--green)' }} />
              THE PROBLEM WE SOLVE
            </div>
            <div
              className="font-display font-black text-[80px] sm:text-[100px] lg:text-[120px] leading-none tracking-[-0.04em] mt-4 reveal-left"
              style={{ color: 'var(--muted2)', transition: inView ? undefined : 'none' }}
            >
              02
            </div>
          </div>

          <div className="py-14 sm:py-16 lg:py-20 pl-0 lg:pl-14">
            <h2
              className="font-display font-black tracking-[-0.02em] leading-[1.05] lg:leading-[1.0] mb-10 sm:mb-14 reveal"
              style={{ fontSize: 'clamp(28px,5vw,68px)', color: 'var(--text)' }}
            >
              Does Any<br />
              of This Sound<br />
              <em style={{ fontStyle:'normal', color:'var(--green)' }}>Familiar?</em>
            </h2>

            <div>
              {PAINS.map((p, i) => (
                <PainItem key={p.title} index={i} {...p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PainItem({ title, body, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const delay = index * 0.08

  return (
    <div
      ref={ref}
      className="grid gap-4 sm:gap-6 py-5 sm:py-6 transition-colors duration-200 group"
      style={{
        gridTemplateColumns: '40px 1fr',
        borderTop: '1px solid var(--rule)',
        borderBottom: index === PAINS.length - 1 ? '1px solid var(--rule)' : 'none',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(20px)',
        transition: `opacity 0.7s ${delay}s cubic-bezier(0.16,1,0.3,1), transform 0.7s ${delay}s cubic-bezier(0.16,1,0.3,1)`,
      }}
    >
      <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.1em] pt-0.5" style={{ color: 'var(--muted2)' }}>
        0{index + 1}
      </div>
      <div>
        <strong className="block font-semibold text-[15px] sm:text-[16px] mb-1" style={{ color: 'var(--text)', fontWeight: 600 }}>{title}</strong>
        <span className="text-[13px] sm:text-[14px] leading-[1.65]" style={{ color: 'var(--muted)' }}>{body}</span>
      </div>
    </div>
  )
}

/* ─── FEATURES ────────────────────────────────────────────────── */
import {
  ClipboardList, Salad, Bolt, MessageSquare,
  CreditCard, BarChart, Users, Smartphone, ShieldCheck
} from 'lucide-react'

const FEATS = [
  { num:'001', icon:<ClipboardList />, title:'Program Management', desc:'Build your master library once. Assign fully customised plans to individual clients in seconds. Clients get workouts on the app — no PDFs, no confusion.', tags:['Master Programs','Video Library','Auto Notifications','Custom Exercises'] },
  { num:'002', icon:<Salad />, title:'Nutrition & Activity', desc:'Create personalised meal plans, set macro targets, track daily compliance. Includes a dedicated female health and hormonal cycle tracker.', tags:['Meal Tracking','Macro Goals','Compliance Monitor','Female Health'] },
  { num:'003', icon:<Bolt />, title:'Business Automation', desc:'Lead allocation, client onboarding, payment flows, and communication sequences — completely automated and running in the background.', tags:['Lead Allocation','Auto Onboarding','Payment Flows','Message Sequences'] },
  { num:'004', icon:<MessageSquare />, title:'Client Engagement', desc:'Automated check-ins, in-app messaging, video calls, group challenges, and digital high-fives. Keep every client engaged between sessions.', tags:['In-App Messaging','Video Calls','Group Challenges','Auto Check-ins'] },
  { num:'005', icon:<CreditCard />, title:'Payments & Revenue', desc:'No more chasing. Accept online payments, set up recurring session packs, configure discounts, and handle partial payments — all built in.', tags:['Online Payments','Session Packs','Discount Codes','Instalments'] },
  { num:'006', icon:<BarChart />, title:'Dashboards & Reports', desc:'Real-time view of client compliance, progress, and business health. Custom surveys, pre-assessment forms, performance dashboards.', tags:['Live Reports','Business Insights','Custom Surveys','Health Intake'] },
  { num:'007', icon:<Users />, title:'Team & Organisation Management', desc:'Whether you are a solo coach or managing a multi-branch fitness organisation, scale effortlessly. Control teams, assign roles, and oversee operations from one central dashboard.', tags:['Team & Branch Management','Role-Based Access','Coach Allocation Limits','Bulk Upload Tools'] },
  { num:'008', icon:<Smartphone />, title:'Mobile App iOS & Android', desc:'Run your entire coaching business from your pocket. Coaches and clients get a seamless mobile experience with real-time updates and integrated health tracking.', tags:['iOS & Android Apps','Client Self-Service','Push Notifications','Health Data Sync'] },
  { num:'009', icon:<ShieldCheck />, title:'Security & Compliance', desc:'Enterprise-grade security built into every plan. Protect sensitive client data with advanced authentication, secure payments, and compliance tools.', tags:['SSO Support','Access Control','PCI-DSS Payments','GDPR Tools'] },
]

export function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
   <section id="features" className="relative overflow-hidden" style={{ borderBottom: '1px solid var(--rule)' }}>
  <div className="absolute inset-0 pointer-events-none">
    <div
      className="absolute inset-0 bg-no-repeat opacity-10 2xl:opacity-5"
      style={{
        backgroundImage: `url(${logoscatter})`,
        backgroundPosition: 'center',
      }}
    />
    <div className="absolute inset-0 2xl:bg-black/40 bg:black/60 " />
  </div>

  <div className="relative z-10">
    <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase flex items-center gap-4 mt-6 px-4 sm:px-6 md:px-10" style={{ color: 'var(--muted)' }}>
      <span>003 / PLATFORM FEATURES</span>
      <span className="flex-shrink-0 w-14 sm:w-20 h-px" style={{ background: 'var(--muted2)' }} />
    </div>

    <div
      ref={ref}
      className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-10 px-4 sm:px-6 md:px-10 pt-14 sm:pt-16 md:pt-6 pb-8 sm:pb-10"
      style={{ borderBottom: '1px solid var(--rule)' }}
    >
      <h2
        className="font-display font-black leading-[0.9] tracking-[-0.03em]"
        style={{ fontSize: 'clamp(36px,7vw,100px)', color: 'var(--text)' }}
      >
        THE<br /><em style={{ fontStyle:'normal', color:'var(--green)' }}>FULL</em><br />SYSTEM
      </h2>

      <p className="max-w-full md:max-w-[280px] text-[13px] sm:text-[14px] leading-[1.65] md:text-right hidden md:block" style={{ color: 'var(--muted)' }}>
        <strong className="text-white">Everything You Need to Coach, Grow, and Automate Your Business</strong><br/>
        SmartCoach360 is built specifically for fitness coaching—designed around how coaches run sessions, track progress, and manage client communication day to day.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto px-4 sm:px-6 md:px-10" style={{ borderBottom: '1px solid var(--rule)' }}>
      {FEATS.map((f, i) => <FeatCard key={f.num} feat={f} index={i} />)}
    </div>
  </div>
</section>
  )
}

function FeatCard({ feat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const delay = index * 0.07
  const col = index % 3
  const isLast = col === 2

  return (
    <div
      ref={ref}
      data-cursor
      className="relative p-6 sm:p-8 md:p-10 xl:p-12 group transition-colors duration-300"
      style={{
        borderRight: isLast ? 'none' : '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(28px)',
        transition: `opacity 0.75s ${delay}s cubic-bezier(0.16,1,0.3,1), transform 0.75s ${delay}s cubic-bezier(0.16,1,0.3,1), background 0.3s ease`,
      }}
    >
      <div className="flex items-center justify-between mb-6 sm:mb-8 font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase" style={{ color: 'var(--muted2)' }}>
        <span>{feat.num}</span>
        <span className="text-[18px] sm:text-[20px] opacity-70" style={{ color: 'var(--green)' }}>{feat.icon}</span>
      </div>
      <h3 className="font-display font-bold text-[22px] sm:text-[26px] md:text-[28px] tracking-[-0.01em] leading-[1.1] mb-3" style={{ color: 'var(--text)' }}>
        {feat.title}
      </h3>
      <p className="text-[13px] sm:text-[14px] leading-[1.65] mb-6 sm:mb-7" style={{ color: 'var(--muted)' }}>{feat.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {feat.tags.map(t => (
          <span key={t} className="font-mono text-[8px] sm:text-[9px] tracking-[0.1em] uppercase px-2 py-1 border transition-colors duration-200" style={{ color: 'var(--muted)', borderColor: 'var(--rule-bright)' }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}