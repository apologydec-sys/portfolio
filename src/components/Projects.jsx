import React from 'react'
import { motion } from 'framer-motion'

const Card = ({title, desc, index}) => (
  <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay: index*0.1}} whileHover={{y:-5}} viewport={{once:true}} className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-cyan-400/20 hover:border-cyan-400/50 transition-all cursor-pointer">
    <h4 className="text-xl font-bold neon group-hover:text-cyan-200 transition-colors">{title}</h4>
    <p className="text-slate-300 mt-3 text-sm leading-relaxed">{desc}</p>
    <motion.div whileHover={{x:2}} className="mt-4 flex items-center gap-2 text-cyan-300 text-sm font-semibold">
      <span>View Project</span>
      <span className="group-hover:translate-x-1 transition-transform">→</span>
    </motion.div>
  </motion.div>
)

export default function Projects(){
  const projects = [
    {title: 'Data Bundle App', desc: 'Mobile-friendly service for purchasing data plans with real-time updates and secure payments.'},
    {title: 'Portfolio Website', desc: 'Modern personal portfolio built with Vite, React, and Tailwind CSS with smooth animations.'},
    {title: 'Game Website', desc: 'Interactive browser games and demos showcasing JavaScript skills and game mechanics.'},
    {title: 'Flask Login System', desc: 'Secure authentication system with Flask backend, MySQL database, and password encryption.'}
  ]
  
  return (
    <section id="projects" className="py-20">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold neon mb-2">Featured Projects</h2>
          <p className="text-slate-400">Work I'm proud of</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((proj, i) => <Card key={i} {...proj} index={i} />)}
        </div>
      </motion.div>
    </section>
  )
}
