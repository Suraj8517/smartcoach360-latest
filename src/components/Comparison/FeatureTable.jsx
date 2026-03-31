import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Tick from './Tick'
const FEATURE_GROUPS = [
  {
    group: 'Coaching & Programming',
    features: [
      { label: 'Custom Workout Programs',       sc360: true,  truecoach: true,  mindbody: false, ptd: true  },
      { label: 'Nutrition & Macro Tracking',    sc360: true,  truecoach: false, mindbody: false, ptd: true  },
      { label: 'Female Health Tracker',         sc360: true,  truecoach: false, mindbody: false, ptd: false },
      { label: 'Apple Health / Google Fit Sync',sc360: true,  truecoach: false, mindbody: false, ptd: true  },
      { label: 'Lab Integration',               sc360: true,  truecoach: false, mindbody: false, ptd: false },
    ],
  },
  {
    group: 'Client Engagement',
    features: [
      { label: 'In-app Messaging',              sc360: true,  truecoach: true,  mindbody: false, ptd: true  },
      { label: 'Automated Messaging',           sc360: true,  truecoach: false, mindbody: false, ptd: false },
      { label: 'WhatsApp Integration',          sc360: true,  truecoach: false, mindbody: false, ptd: false },
      { label: 'Client Challenges & Gamification', sc360: true, truecoach: false, mindbody: false, ptd: false },
    ],
  },
  {
    group: 'Payments & Revenue',
    features: [
      { label: 'Payment Processing',            sc360: true,  truecoach: true,  mindbody: true,  ptd: true  },
      { label: 'Session Packs & Discounts',     sc360: true,  truecoach: true,  mindbody: true,  ptd: true  },
    ],
  },
  {
    group: 'Business Operations',
    features: [
      { label: 'Multi-coach Management',        sc360: true,  truecoach: false, mindbody: true,  ptd: false },
      { label: 'Multi-branch Support',          sc360: true,  truecoach: false, mindbody: true,  ptd: false },
      { label: 'Auto Lead Allocation',          sc360: true,  truecoach: false, mindbody: false, ptd: false },
      { label: 'Role & Access Management',      sc360: true,  truecoach: false, mindbody: true,  ptd: false },
    ],
  },
  {
    group: 'Enterprise & Support',
    features: [
      { label: 'SSO for Enterprises',           sc360: true,  truecoach: false, mindbody: true,  ptd: false },
      { label: 'Dedicated Success Manager',     sc360: true,  truecoach: false, mindbody: false, ptd: false },
      { label: 'Personalised Onboarding',       sc360: true,  truecoach: false, mindbody: false, ptd: false },
      { label: 'Mobile App (iOS & Android)',    sc360: true,  truecoach: true,  mindbody: true,  ptd: true  },
    ],
  },
]
const COMPETITORS = [
  { key: 'sc360',     label: 'SmartCoach360', highlight: true },
  { key: 'truecoach', label: 'TrueCoach',     highlight: false },
  { key: 'mindbody',  label: 'Mindbody',      highlight: false },
  { key: 'ptd',       label: 'PTDistinction', highlight: false },
]
export default function FeatureTable() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hoveredCol, setHoveredCol] = useState(null)

  const colWidths = ['45%', '13.75%', '13.75%', '13.75%', '13.75%']

  return (
    <section id="table" style={{ borderBottom: '1px solid var(--rule)' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pt-12 sm:pt-14 pb-8 sm:pb-10">
            <div>
              <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-4 flex items-center gap-4" style={{ color: 'var(--muted)' }}>
                <span>Feature Comparison</span>
                <span className="w-12 h-px flex-shrink-0" style={{ background: 'var(--muted2)' }} />
              </div>
              <h2 className="font-display font-black tracking-[-0.03em] leading-[0.9]" style={{ fontSize: 'clamp(32px,5vw,72px)', color: 'var(--text)' }}>
                SIDE BY<br /><em style={{ fontStyle: 'normal', color: 'var(--green)' }}>SIDE</em>
              </h2>
            </div>
            <p className="max-w-xs text-[13px] sm:text-[14px] leading-[1.65] md:text-right" style={{ color: 'var(--muted)' }}>
              19 features across 5 categories — compared head to head.
            </p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div ref={ref} className="max-w-[1600px] mx-auto overflow-x-auto px-4 sm:px-6 md:px-10">
        <table className="w-full" style={{ borderCollapse: 'collapse', minWidth: 560 }}>
          <thead>
            <tr>
              <th className="text-left py-5 pr-4 font-mono text-[8px] sm:text-[9px] tracking-[0.12em] uppercase" style={{ color: 'var(--muted2)', borderBottom: '1px solid var(--rule)', width: colWidths[0] }}>
                Feature
              </th>
              {COMPETITORS.map((col, ci) => (
                <th
                  key={col.key}
                  onMouseEnter={() => setHoveredCol(col.key)}
                  onMouseLeave={() => setHoveredCol(null)}
                  style={{
                    width: colWidths[ci + 1],
                    borderBottom: col.highlight ? '2px solid var(--green)' : hoveredCol === col.key ? '1px solid rgba(255,255,255,0.2)' : '1px solid var(--rule)',
                    borderLeft: '1px solid var(--rule)',
                    background: col.highlight ? 'rgba(0,255,148,0.03)' : hoveredCol === col.key ? 'rgba(255,255,255,0.02)' : 'transparent',
                    transition: 'background 0.2s, border-color 0.2s',
                    cursor: 'default',
                    padding: '14px 8px',
                    textAlign: 'center',
                    verticalAlign: 'bottom',
                  }}
                >
                  {col.highlight && (
                    <span className="block font-mono text-[7px] tracking-[0.14em] uppercase px-2 py-0.5 mx-auto mb-2" style={{ color: '#080808', background: 'var(--green)', width: 'fit-content' }}>
                      Best choice
                    </span>
                  )}
                  <span
                    className="font-display font-bold tracking-[-0.01em] block"
                    style={{
                      fontSize: col.highlight ? 'clamp(12px,1.4vw,16px)' : 'clamp(11px,1.2vw,14px)',
                      color: col.highlight ? 'var(--text)' : 'var(--muted)',
                    }}
                  >
                    {col.label}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {FEATURE_GROUPS.map((group, gi) => (
              <>
                {/* Group row */}
                <tr key={`g-${gi}`}>
                  <td colSpan={5} className="py-2.5 pr-4" style={{ borderTop: gi > 0 ? '1px solid var(--rule)' : 'none', background: 'rgba(255,255,255,0.015)' }}>
                    <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.14em] uppercase" style={{ color: 'var(--green)' }}>
                      {group.group}
                    </span>
                  </td>
                </tr>

                {/* Feature rows */}
                {group.features.map((feat, fi) => {
                  const totalIdx = FEATURE_GROUPS.slice(0, gi).reduce((a, g) => a + g.features.length, 0) + fi
                  return (
                    <tr
                      key={feat.label}
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'none' : 'translateY(8px)',
                        transition: `opacity 0.5s ${totalIdx * 0.03}s cubic-bezier(0.16,1,0.3,1), transform 0.5s ${totalIdx * 0.03}s cubic-bezier(0.16,1,0.3,1)`,
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <td className="py-3 pr-4 font-mono text-[10px] sm:text-[11px] tracking-[0.04em]" style={{ color: 'var(--muted)', borderBottom: '1px solid var(--rule)', borderTop: fi === 0 ? '1px solid var(--rule)' : 'none' }}>
                        {feat.label}
                      </td>
                      {COMPETITORS.map(col => (
                        <td
                          key={col.key}
                          onMouseEnter={() => setHoveredCol(col.key)}
                          onMouseLeave={() => setHoveredCol(null)}
                          style={{
                            borderBottom: '1px solid var(--rule)',
                            borderTop: fi === 0 ? '1px solid var(--rule)' : 'none',
                            borderLeft: '1px solid var(--rule)',
                            background: col.highlight
                              ? 'rgba(0,255,148,0.025)'
                              : hoveredCol === col.key ? 'rgba(255,255,255,0.015)' : 'transparent',
                            textAlign: 'center',
                            verticalAlign: 'middle',
                            padding: '10px 4px',
                            transition: 'background 0.2s',
                          }}
                        >
                          <Tick on={feat[col.key]} highlight={col.highlight} />
                        </td>
                      ))}
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