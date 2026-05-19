import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  const stats = [
    {label: 'Years Coding', value: '12+'},
    {label: 'Started At', value: 'Age 12'},
    {label: 'Projects Built', value: '20+'},
    {label: 'Skills', value: 'Full Stack'}
  ]
  
  return (
    <section id="about" className="py-20">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold neon mb-4">About Me</h2>
          <p className="text-slate-400 text-lg">A lifelong learner and tech enthusiast</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{x:-50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.6}} viewport={{once:true}}>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">I'm Blessing Akanni, a passionate young developer from a young age who fell in love with technology at 12. Since then, I've dedicated myself to mastering full-stack development, exploring cybersecurity, and creating elegant solutions to complex problems.</p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">My journey started with curiosity and grew into a career. I believe in continuous learning, building real-world projects, and helping others discover the beauty of code.</p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat,i)=> (
                <motion.div key={i} initial={{y:10, opacity:0}} whileInView={{y:0, opacity:1}} transition={{delay: i*0.1}} viewport={{once:true}} className="p-4 bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-lg border border-cyan-500/20">
                  <div className="text-cyan-300 text-2xl font-bold">{stat.value}</div>
                  <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div initial={{x:50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.6}} viewport={{once:true}} className="flex justify-center">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-2xl shadow-cyan-400/20">
              <img src="/images/ChatGPT Image May 16, 2026, 03_58_48 AM.png" alt="Blessing Akanni" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
