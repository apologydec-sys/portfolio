import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, level=80, index})=> (
  <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} transition={{delay: index*0.1}} viewport={{once:true}} className="mb-6">
    <div className="flex justify-between items-center mb-3">
      <span className="text-slate-200 font-medium">{name}</span>
      <span className="text-cyan-300 font-bold text-sm">{level}%</span>
    </div>
    <div className="w-full h-3 bg-slate-700/50 rounded-full overflow-hidden border border-slate-600/50">
      <motion.div initial={{width: 0}} whileInView={{width: `${level}%`}} transition={{delay: index*0.1 + 0.3, duration: 1}} viewport={{once:true}} className="h-full bg-gradient-to-r from-purple-600 via-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-400/50" />
    </div>
  </motion.div>
)

export default function Skills(){
  const frontend = [
    {name: 'HTML', level: 95},
    {name: 'CSS / Tailwind', level: 90},
    {name: 'JavaScript', level: 88},
    {name: 'React', level: 85}
  ]
  
  const backend = [
    {name: 'Python', level: 80},
    {name: 'Flask', level: 75},
    {name: 'MySQL', level: 70},
    {name: 'Docker / Linux', level: 65}
  ]
  
  return (
    <section id="skills" className="py-20">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold neon mb-2">Skills & Expertise</h2>
          <p className="text-slate-400">Technologies I've mastered and am actively learning</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            <h3 className="text-xl font-bold text-cyan-300 mb-6 flex items-center"><span className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></span>Frontend</h3>
            {frontend.map((skill, i) => <Skill key={i} {...skill} index={i} />)}
          </motion.div>
          
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            <h3 className="text-xl font-bold text-purple-300 mb-6 flex items-center"><span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>Backend & Tools</h3>
            {backend.map((skill, i) => <Skill key={i} {...skill} index={i + 4} />)}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
