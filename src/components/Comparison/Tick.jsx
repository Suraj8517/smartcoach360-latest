
export default function Tick({ on, highlight }) {
  if (on) {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26, borderRadius: 4, background: highlight ? 'rgba(0,255,148,0.12)' : 'rgba(255,255,255,0.04)', border: `1px solid ${highlight ? 'rgba(0,255,148,0.35)' : 'rgba(255,255,255,0.08)'}` }}>
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M1.5 5.5L4 8L9.5 2.5" stroke={highlight ? '#00FF94' : 'rgba(255,255,255,0.4)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    )
  }
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26 }}>
      <span style={{ width: 10, height: 1, background: 'rgba(255,255,255,0.1)', display: 'block' }} />
    </span>
  )
}