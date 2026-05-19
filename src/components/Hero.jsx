import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import MatrixRain from './MatrixRain'

export default function Hero(){
  return (
    <header className="relative min-h-[60vh] flex items-center justify-center text-center py-20 px-4" style={{background: 'linear-gradient(180deg, rgba(11,16,32,0.9), rgba(3,6,12,0.9))'}}>
      <MatrixRain />
      <div className="space-y-6 relative z-10">
        <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} className="text-4xl sm:text-6xl font-bold neon">Hi, I’m Blessing Akanni</motion.h1>
        <div className="text-xl sm:text-2xl text-cyan-200">
          <TypeAnimation
            sequence={[
              'Young Full Stack Developer',
              1500,
              'Started Programming at 12 Years Old',
              1500,
              'Cyber curious • Web builder',
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="max-w-xl mx-auto text-sm text-slate-300">Hacker-inspired UI — modern, clean, and animated. I build full stack apps and explore cybersecurity.</p>
        <div className="flex items-center justify-center gap-4">
          <a href="#projects" className="px-5 py-2 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-md text-black font-semibold">See Projects</a>
          <a href="#contact" className="px-5 py-2 border border-slate-700 rounded-md">Contact Me</a>
        </div>
      </div>
    </header>
  )
}
