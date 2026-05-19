import React from 'react'
import { motion } from 'framer-motion'
import { FaLightbulb } from 'react-icons/fa'

const Tip = ({t, index}) => (
  <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay: index*0.1}} whileHover={{scale:1.02}} viewport={{once:true}} className="p-6 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30 hover:border-purple-400 rounded-lg transition-all">
    <div className="flex gap-3 items-start">
      <FaLightbulb className="text-yellow-400 mt-1 text-lg flex-shrink-0" />
      <span className="text-slate-200 text-sm leading-relaxed font-medium">{t}</span>
    </div>
  </motion.div>
)

export default function Tips(){
  const tips = [
    'Code every single day to build momentum and muscle memory',
    'Build real projects instead of watching endless tutorials',
    'Embrace errors—they are your best teachers',
    'Stay consistent even when progress feels slow',
    'Read other developers\' code to learn best practices',
    'Share your knowledge with others to reinforce learning'
  ]
  return (
    <section id="tips" className="py-20">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold neon mb-2">Developer Tips</h2>
          <p className="text-slate-400">Lessons learned on my journey</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((t,i)=> <Tip t={t} key={i} index={i} />)}
        </div>
      </motion.div>
    </section>
  )
}
