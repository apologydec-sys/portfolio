import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Tips from './components/Tips'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen scroll-smooth">
      <Hero />
      <main className="max-w-6xl mx-auto px-6 py-0 space-y-20">
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Tips />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
