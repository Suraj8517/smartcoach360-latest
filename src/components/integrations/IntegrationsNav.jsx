import { useState, useEffect, useRef } from 'react'
import { CATEGORIES } from './IntegrationsData'

export default function IntegrationsNav({ activeId, onSelect }) {
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

  useEffect(() => {
    const handleScroll = () => {
      const offset = 140
      let current = null
      for (const cat of CATEGORIES) {
        const el = document.getElementById(cat.id)
        if (el && el.getBoundingClientRect().top < offset) current = cat.id
      }
      if (current) onSelect(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onSelect])

  const scrollTo = (id) => {
    onSelect(id)
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 120
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div
      ref={ref}
      id="all-integrations"
      className="sticky z-40 overflow-x-auto"
      style={{
        top: 64,
        background: stuck ? 'rgba(8,8,8,0.96)' : 'var(--bg2)',
        backdropFilter: stuck ? 'blur(12px)' : 'none',
        borderBottom: '1px solid var(--rule)',
        transition: 'background 0.3s ease',
      }}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-stretch min-h-[50px] whitespace-nowrap">

          <div
            className="hidden md:flex items-center pr-6 font-mono text-[9px] tracking-[0.15em] uppercase flex-shrink-0"
            style={{ color: 'var(--muted2)', borderRight: '1px solid var(--rule)' }}
          >
            Categories
          </div>

          {CATEGORIES.map((cat, i) => {
            const isActive = cat.id === activeId
            return (
              <button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className="flex items-center gap-2.5 px-4 sm:px-6 font-mono text-[9px] sm:text-[10px] tracking-[0.1em] uppercase transition-all duration-200 flex-shrink-0"
                style={{
                  borderLeft: '1px solid var(--rule)',
                  borderBottom: isActive ? '2px solid var(--green)' : '2px solid transparent',
                  color: isActive ? 'var(--text)' : 'var(--muted2)',
                  background: 'transparent',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                {isActive && (
                  <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: 'var(--green)' }} />
                )}
                <span className="hidden sm:inline">{cat.label}</span>
                <span className="sm:hidden">{cat.num}</span>
              </button>
            )
          })}

          {/* right pill */}
          <div
            className="ml-auto flex items-center px-4 sm:px-6 font-mono text-[8px] sm:text-[9px] tracking-[0.1em] uppercase flex-shrink-0"
            style={{ borderLeft: '1px solid var(--rule)', color: 'var(--muted2)' }}
          >
            11 total
          </div>
        </div>
      </div>
    </div>
  )
}
