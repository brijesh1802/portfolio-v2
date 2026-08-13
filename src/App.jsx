import { useState, useEffect } from 'react'
import LiquidBackground from './components/LiquidBackground'
import FloatingParticles from './components/FloatingParticles'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Training from './components/Training'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'certs', 'contact']
    const onScroll = () => {
      const pos = window.scrollY + 100
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= pos && el.offsetTop + el.offsetHeight > pos) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <LiquidBackground />
      <FloatingParticles />
      <CursorGlow />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Training />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App