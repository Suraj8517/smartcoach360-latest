import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink, Link } from "react-router-dom";

const links = [
  { label: 'Home', to: '/' },
  { label: 'Clients', to: '/usecase' },
  { label: 'Integrations', to: '/integrations' },
  { label: 'Case Studies', to: '/case-studies' },
    { label: 'Comparison', to: '/comparison' },
]

export default function Navbar() {
  const [stuck, setStuck] = useState(false)
  const [mobOpen, setMob] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[800] flex items-center justify-between px-10 h-16 transition-all duration-300"
        style={{
          borderBottom: stuck ? '1px solid var(--rule)' : '1px solid transparent',
          background: stuck ? 'rgba(8,8,8,0.92)' : 'transparent',
          backdropFilter: stuck ? 'blur(16px)' : 'none',
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="pulse-dot w-[6px] h-[6px] rounded-full" style={{ background: 'var(--green)' }} />
          <span className="font-display font-black text-[20px] tracking-[0.01em]" style={{ color: 'var(--text)' }}>
            SC<span style={{ color: 'var(--green)' }}>360</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          className="hidden md:flex items-stretch"
          style={{ borderLeft: '1px solid var(--rule)', borderRight: '1px solid var(--rule)' }}
        >
          {links.map(l => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                `flex items-center px-6 h-16 font-mono text-[11px] tracking-[0.1em] uppercase transition-all duration-200 ${
                  isActive ? 'active' : ''
                }`
              }
              style={({ isActive }) => ({
                color: isActive ? 'var(--text)' : 'var(--muted)',
                background: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                boxShadow: isActive ? 'inset 0 -2px 0 var(--green)' : 'none',
                textDecoration: 'none',
              })}
              onMouseEnter={e => {
                if (!e.currentTarget.classList.contains('active')) {
                  e.currentTarget.style.color = 'var(--text)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                }
              }}
              onMouseLeave={e => {
                if (!e.currentTarget.classList.contains('active')) {
                  e.currentTarget.style.color = 'var(--muted)'
                  e.currentTarget.style.background = 'transparent'
                }
              }}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            to="/signin"
            className="font-mono text-[11px] tracking-[0.08em] uppercase transition-colors duration-200"
            style={{ color: 'var(--muted)', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            Sign in
          </Link>

          <Link
            to="/"
            className="font-mono text-[11px] tracking-[0.1em] uppercase px-5 py-2.5 font-medium transition-all duration-200"
            style={{ background: 'var(--green)', color: '#080808', textDecoration: 'none' }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.background = '#fff'
              el.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = 'var(--green)'
              el.style.transform = 'none'
            }}
          >
            Book Demo →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none"
          onClick={() => setMob(v => !v)}
        >
          <span
            className="block w-[22px] h-px transition-all duration-300"
            style={{
              background: 'var(--text)',
              transform: mobOpen ? 'rotate(45deg) translate(3px,5px)' : 'none',
            }}
          />
          <span
            className="block w-[22px] h-px transition-all duration-300"
            style={{
              background: 'var(--text)',
              transform: mobOpen ? 'rotate(-45deg) translate(3px,-5px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 top-16 z-[700] flex flex-col gap-6 p-10"
            style={{ background: 'var(--bg)', borderTop: '1px solid var(--rule)' }}
          >
            {[...links, { label: 'Book a Demo', to: '/' }].map(l => (
              <NavLink
                key={l.label}
                to={l.to}
                onClick={() => setMob(false)}
                className="font-display font-black text-[40px] tracking-tight pb-5 transition-colors duration-200"
                style={({ isActive }) => ({
                  color: isActive ? 'var(--green)' : 'var(--text)',
                  borderBottom: '1px solid var(--rule)',
                  textDecoration: 'none',
                })}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
              >
                {l.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}