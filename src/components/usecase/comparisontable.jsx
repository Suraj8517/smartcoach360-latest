import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const GROUPS = [
  {
    label: 'Core — every plan',
    rows: [
      { label: 'Custom Programs',    pt: true,  gym: true,  nut: true,  ent: true },
      { label: 'Nutrition Tracking', pt: true,  gym: true,  nut: true,  ent: true },
      { label: 'Client Messaging',   pt: true,  gym: true,  nut: true,  ent: true },
      { label: 'Payment Processing', pt: true,  gym: true,  nut: true,  ent: true },
    ],
  },
  {
    label: 'Teams & operations',
    rows: [
      { label: 'Team Management',      pt: false, gym: true,  nut: false, ent: true },
      { label: 'Multi-branch Support', pt: false, gym: true,  nut: false, ent: true },
      { label: 'Auto Lead Allocation', pt: false, gym: true,  nut: false, ent: true },
      { label: 'Role & Access Control',pt: false, gym: true,  nut: false, ent: true },
      { label: 'Bulk Upload',          pt: false, gym: true,  nut: false, ent: true },
    ],
  },
  {
    label: 'Enterprise',
    rows: [
      { label: 'SSO & Enterprise Security',     pt: false, gym: false, nut: false, ent: true },
      { label: 'Dedicated Success Manager',      pt: false, gym: true,  nut: false, ent: true },
    ],
  },
]

const COLS = [
  { key: 'pt',  label: 'PT',        full: 'Personal Trainer',    num: '01' },
  { key: 'gym', label: 'Gym',       full: 'Gym / Studio',        num: '02' },
  { key: 'nut', label: 'Nutrition', full: 'Nutrition Coach',     num: '03' },
  { key: 'ent', label: 'Org',       full: 'Large Organisation',  num: '04' },
]

/* Tick — centered via flex */
function Tick({ on }) {
  return (
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      {on ? (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 22,
            height: 22,
            borderRadius: 2,
            background: 'rgba(0,255,148,0.1)',
            border: '1px solid rgba(0,255,148,0.25)',
            flexShrink: 0,
          }}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M1.5 5.5L4 8L9.5 2.5" stroke="#00FF94" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      ) : (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 22,
            height: 22,
            flexShrink: 0,
          }}
        >
          <span style={{ width: 8, height: 1, background: 'var(--rule)', display: 'block' }} />
        </span>
      )}
    </span>
  )
}

export default function ComparisonTable() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(null) // col key

  return (
    <section style={{ borderBottom: '1px solid var(--rule)' }}>

      {/* ── Header ── */}
      <div style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left */}
            <div
              className="px-4 sm:px-6 md:px-10 pt-14 sm:pt-16 pb-8 sm:pb-10"
              style={{ borderRight: '1px solid var(--rule)' }}
            >
              <div
                className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-5 flex items-center gap-4"
                style={{ color: 'var(--muted)' }}
              >
                <span>005 / Compare Plans</span>
                <span className="flex-shrink-0 w-12 h-px" style={{ background: 'var(--muted2)' }} />
              </div>
              <h2
                className="font-display font-black tracking-[-0.03em] leading-[0.9]"
                style={{ fontSize: 'clamp(40px,6vw,88px)', color: 'var(--text)' }}
              >
                WHICH PLAN<br />IS RIGHT FOR<br />
                <em style={{ fontStyle: 'normal', color: 'var(--green)' }}>YOU?</em>
              </h2>
            </div>

            {/* Right */}
            <div className="px-4 sm:px-6 md:px-10 pt-8 lg:pt-16 pb-8 sm:pb-10 flex flex-col justify-between gap-6">
              <p className="text-[13px] sm:text-[14px] leading-[1.7] max-w-sm" style={{ color: 'var(--muted)' }}>
                Every plan includes the full core platform. Advanced features unlock as your business scales — no hidden costs, no feature taxes.
              </p>

              {/* Column legend — visible on mobile */}
              <div className="flex flex-wrap gap-3 lg:hidden">
                {COLS.map(c => (
                  <div key={c.key} className="flex items-center gap-2">
                    <span
                      className="font-mono text-[8px] tracking-[0.1em] uppercase px-2 py-1"
                      style={{ background: 'var(--bg2)', border: '1px solid var(--rule)', color: 'var(--muted2)' }}
                    >
                      {c.num}
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.06em]" style={{ color: 'var(--muted)' }}>
                      {c.full}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Table ── */}
      <div ref={ref} className="max-w-[1600px] mx-auto overflow-x-auto">
        <table
          className="w-full"
          style={{
            borderCollapse: 'collapse',
            minWidth: 480,
          }}
        >
          {/* Sticky col headers */}
          <thead>
            <tr>
              {/* Feature label col */}
              <th
                className="text-left px-4 sm:px-6 md:px-10 py-4"
                style={{
                  borderBottom: '1px solid var(--rule)',
                  width: '45%',
                  background: 'var(--bg)',
                }}
              >
                <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted2)' }}>
                  Feature
                </span>
              </th>

              {COLS.map((col) => {
                const isHov = hovered === col.key
                return (
                  <th
                    key={col.key}
                    onMouseEnter={() => setHovered(col.key)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      borderBottom: isHov ? '2px solid var(--green)' : '1px solid var(--rule)',
                      borderLeft: '1px solid var(--rule)',
                      background: isHov ? 'rgba(0,255,148,0.04)' : 'var(--bg)',
                      transition: 'background 0.2s ease, border-color 0.2s ease',
                      width: `${55 / 4}%`,
                      cursor: 'default',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 8px' }}>
                      <span
                        className="font-mono text-[7px] sm:text-[8px] tracking-[0.12em] uppercase"
                        style={{ color: isHov ? 'var(--green)' : 'var(--muted2)', transition: 'color 0.2s' }}
                      >
                        {col.num}
                      </span>
                      {/* Full label desktop */}
                      <span
                        className="font-display font-bold leading-[1.1] tracking-[-0.01em] text-center hidden sm:block mt-1"
                        style={{
                          fontSize: 'clamp(11px,1.2vw,15px)',
                          color: isHov ? 'var(--text)' : 'var(--muted)',
                          transition: 'color 0.2s',
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {col.full.replace('/', '/\n')}
                      </span>
                      {/* Short label mobile */}
                      <span
                        className="font-mono text-[9px] tracking-[0.08em] uppercase sm:hidden mt-1"
                        style={{ color: isHov ? 'var(--text)' : 'var(--muted)', transition: 'color 0.2s' }}
                      >
                        {col.label}
                      </span>
                    </div>
                  </th>
                )
              })}
            </tr>
          </thead>

          <tbody>
            {GROUPS.map((group, gi) => (
              <>
                {/* Group label row */}
                <tr key={`g-${gi}`}>
                  <td
                    colSpan={5}
                    className="px-4 sm:px-6 md:px-10 py-2.5"
                    style={{
                      borderTop: gi > 0 ? '1px solid var(--rule)' : 'none',
                      background: 'var(--bg2)',
                    }}
                  >
                    <span
                      className="font-mono text-[8px] sm:text-[9px] tracking-[0.14em] uppercase"
                      style={{ color: 'var(--green)' }}
                    >
                      {group.label}
                    </span>
                  </td>
                </tr>

                {/* Feature rows */}
                {group.rows.map((feat, ri) => {
                  const totalIndex = GROUPS.slice(0, gi).reduce((a, g) => a + g.rows.length, 0) + ri
                  return (
                    <tr
                      key={feat.label}
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'none' : 'translateY(8px)',
                        transition: `opacity 0.5s ${totalIndex * 0.045}s cubic-bezier(0.16,1,0.3,1), transform 0.5s ${totalIndex * 0.045}s cubic-bezier(0.16,1,0.3,1)`,
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.015)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      {/* Label */}
                      <td
                        className="px-4 sm:px-6 md:px-10 py-3 sm:py-3.5"
                        style={{
                          borderBottom: '1px solid var(--rule)',
                          borderTop: ri === 0 ? '1px solid var(--rule)' : 'none',
                        }}
                      >
                        <span
                          className="font-mono text-[10px] sm:text-[11px] tracking-[0.04em]"
                          style={{ color: 'var(--muted)' }}
                        >
                          {feat.label}
                        </span>
                      </td>

                      {/* Tick cells */}
                      {COLS.map(col => {
                        const isHov = hovered === col.key
                        return (
                          <td
                            key={col.key}
                            onMouseEnter={() => setHovered(col.key)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                              borderBottom: '1px solid var(--rule)',
                              borderTop: ri === 0 ? '1px solid var(--rule)' : 'none',
                              borderLeft: '1px solid var(--rule)',
                              background: isHov
                                ? feat[col.key] ? 'rgba(0,255,148,0.06)' : 'rgba(0,255,148,0.02)'
                                : 'transparent',
                              transition: 'background 0.2s ease',
                              height: 44,
                              padding: 0,
                              verticalAlign: 'middle',
                              textAlign: 'center',
                            }}
                          >
                            <Tick on={feat[col.key]} />
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </>
            ))}
          </tbody>
        </table>

       
      </div>
    </section>
  )
}