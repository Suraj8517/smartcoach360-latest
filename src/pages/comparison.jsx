import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import ComparisonHero from '../components/Comparison/ComparisonHero'
import VsSection from '../components/Comparison/VsSection'
import ComparisonCTA from '../components/Comparison/ComparisonCTA'
import FeatureTable from '../components/Comparison/FeatureTable'
import WhySection from '../components/Comparison/WhySection'

const COMPETITORS = [
  { key: 'sc360',     label: 'SmartCoach360', highlight: true },
  { key: 'truecoach', label: 'TrueCoach',     highlight: false },
  { key: 'mindbody',  label: 'Mindbody',      highlight: false },
  { key: 'ptd',       label: 'PTDistinction', highlight: false },
]




export default function Comparison() {
  return (
    <div style={{ minHeight: '100vh', background: '#080808' }}>
      <main>
        <ComparisonHero />
        <FeatureTable />
        <WhySection />
        <VsSection />
        <ComparisonCTA />
      </main>
    </div>
  )
}