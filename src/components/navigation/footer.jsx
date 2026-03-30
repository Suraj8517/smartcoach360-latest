import { useState, useEffect } from 'react'

/* ─── FOOTER ──────────────────────────────────────────────────────────────── */
const FOOTER_LINKS = {
  Product:  ['Features','Pricing','Integrations','Changelog','Mobile App'],
  Company:  ['About','Blog','Careers','Contact'],
  Legal:    ['Privacy Policy','Terms of Service','GDPR','Security'],
}

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--rule)', background: 'var(--bg2)' }}>
      <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="p-8 sm:p-10 md:p-12" style={{ borderRight: '1px solid var(--rule)' }}>
          <div className="font-display font-black text-[24px] sm:text-[28px] tracking-[-0.01em] mb-3" style={{ color: 'var(--text)' }}>
            Smart<span style={{ color: 'var(--green)' }}>Coach</span>360
          </div>
          <p className="text-[12px] sm:text-[13px] leading-[1.6] mb-6 max-w-[200px]" style={{ color: 'var(--muted)' }}>
            The all-in-one CRM built exclusively for fitness coaches and personal trainers.
          </p>
          <div className="flex flex-col gap-2">
            {['iOS App ↗', 'Android ↗'].map(l => (
              <a
                key={l}
                href="#"
                className="font-mono text-[9px] sm:text-[10px] tracking-[0.1em] uppercase px-3.5 py-2 border transition-colors duration-200 self-start"
                style={{ color: 'var(--muted)', borderColor: 'var(--rule-bright)', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.color='var(--green)'; e.currentTarget.style.borderColor='var(--green-border)' }}
                onMouseLeave={e => { e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.borderColor='var(--rule-bright)' }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([cat, links]) => (
          <div key={cat} className="p-8 sm:p-10 md:p-12" style={{ borderRight: '1px solid var(--rule)' }}>
            <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase mb-4 sm:mb-5" style={{ color: 'var(--muted2)' }}>
              {cat}
            </div>
            <div className="flex flex-col gap-2 sm:gap-2.5">
              {links.map(l => (
                <a
                  key={l}
                  href="#"
                  className="text-[13px] sm:text-[14px] transition-colors duration-200"
                  style={{ color: 'var(--muted)', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 sm:px-6 md:px-10 py-4 sm:py-5">
        <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.08em]" style={{ color: 'var(--muted2)' }}>
          © 2026 SmartCoach360. All rights reserved.
        </div>
        <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.1em] uppercase" style={{ color: 'var(--muted2)' }}>
          <div className="pulse-dot w-[5px] h-[5px] rounded-full" style={{ background: '#00FF94' }} />
          All systems operational
        </div>
      </div>
    </footer>
  )
}