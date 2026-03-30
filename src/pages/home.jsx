import { useState, useEffect } from 'react'
import Loader from '../components/home/Loader'
import Hero   from '../components/home/Hero'
import { Marquee,Trust, Problem, Features } from '../components/home/Sections1'
import { WhoItsFor, Process, Integrations, CTA,Support } from '../components/home/Sections2'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2200)
    return () => clearTimeout(t)
  }, [])

  // Scroll reveal
  useEffect(() => {
    if (!loaded) return
    const els = document.querySelectorAll('.reveal, .reveal-left')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.08, rootMargin: '-40px 0px' })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [loaded])

  return (
    <div style={{ minHeight: '100vh', background: '#080808' }}>
      <Loader done={loaded} />
      {loaded && (
        <>
          <main>
            <Hero />
            <Marquee />
            <Trust/>
            <Problem />
            <Features />
            <WhoItsFor />
            <Process />
            <Integrations />
            <Support/>
            <CTA />
          </main>
        </>
      )}
    </div>
  )
}
