import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Cursor from './components/home/Cursor'
import Navbar from './components/navigation/Navbar'
import Home from './pages/home'
import Footer from './components/navigation/footer'
import UseCases from './pages/usecases'
import Integrations from './pages/integrations'
import CaseStudies from './pages/casestudies'
export default function App() {


  return (
    <div style={{ minHeight: '100vh', background: '#080808' }}>
        <Navbar />
      <Cursor />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usecase" element={<UseCases />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
      <Footer/>
    </div>
  )
}
