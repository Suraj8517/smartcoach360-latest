import { useState, useEffect, useRef } from 'react'

const TABS = [
  { id: 'pt',   label: 'Personal Trainers',      short: 'PT' },
  { id: 'gym',  label: 'Gym Owners & Studios',   short: 'Gym' },
  { id: 'nut',  label: 'Nutrition & Wellness Coaches',   short: 'Nutrition' },
  { id: 'ent',  label: 'Large Health Organisations',    short: 'Enterprise' },
]

export default function UseCaseNav({ activeId, onSelect }) {
  const [stuck, setStuck] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const sentinel = document.createElement('div')
    sentinel.style.height = '1px'
    el.parentNode.insertBefore(sentinel, el)
    const io = new IntersectionObserver(
      ([e]) => setStuck(!e.isIntersecting),
      { threshold: 0, rootMargin: '-65px 0px 0px 0px' }
    )
    io.observe(sentinel)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="sticky z-40 overflow-x-auto"
      style={{
        top: 64,
        background: stuck ? 'rgba(8,8,8,0.95)' : 'var(--bg2)',
        backdropFilter: stuck ? 'blur(12px)' : 'none',
        borderBottom: '1px solid var(--rule)',
        transition: 'background 0.3s ease',
      }}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-stretch min-h-[52px] whitespace-nowrap">
          {/* Label */}
          <div
            className="hidden md:flex items-center pr-6 font-mono text-[9px] tracking-[0.15em] uppercase flex-shrink-0"
            style={{ color: 'var(--muted2)', borderRight: '1px solid var(--rule)' }}
          >
            Filter by type
          </div>

          {/* Tabs */}
          {TABS.map((tab, i) => {
            const isActive = tab.id === activeId
            return (
              <button
                key={tab.id}
                onClick={() => onSelect(tab.id)}
                className="flex items-center gap-2 px-5 sm:px-7 py-0 font-mono text-[9px] sm:text-[10px] tracking-[0.12em] uppercase transition-all duration-200 flex-shrink-0"
                style={{
                  borderLeft: '1px solid var(--rule)',
                  color: isActive ? 'var(--green)' : 'var(--muted)',
                  background: 'transparent',
                  borderBottom: isActive ? 'none' : 'none',
                  cursor: 'pointer',
                  outline: 'none',
                  border: 'none',
                  borderLeft: '1px solid var(--rule)',
                }}
              >
                <span
                  className="font-mono text-[8px]"
                  style={{ color: isActive ? 'white' : 'var(--muted2)' }}
                >
                  0{i + 1}
                </span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.short}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}