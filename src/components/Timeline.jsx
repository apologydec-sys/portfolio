import React from 'react'
import { motion } from 'framer-motion'

const Item = ({year, text, index}) => (
  <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} transition={{delay: index*0.1}} viewport={{once:true}} className="mb-8 flex gap-6">
    <div className="flex flex-col items-center">
      <motion.div whileInView={{scale: 1}} initial={{scale: 0}} transition={{delay: index*0.1 + 0.2}} className="w-6 h-6 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full border-2 border-cyberbg" />
      {index < 4 && <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-transparent" />}
    </div>
    <div>
      <div className="text-lg text-cyan-300 font-bold">{year}</div>
      <div className="text-slate-300 mt-1">{text}</div>
    </div>
  </motion.div>
)

export default function Timeline(){
  const items = [
    {year: 'Age 12', text: 'Started learning HTML and basic web pages.'},
    {year: 'Age 13-14', text: 'Mastered JavaScript and built interactive apps.'},
    {year: 'Age 15', text: 'First portfolio site and game projects launched.'},
    {year: 'Age 16-17', text: 'Deep dive into Python, Flask, and databases.'},
    {year: 'Today', text: 'Building full stack apps and exploring cybersecurity.'}
  ]
  
  return (
    <section id="journey" className="py-20">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold neon mb-2">My Journey</h2>
          <p className="text-slate-400">From curiosity to expertise</p>
        </div>
        <div className="mt-12 max-w-2xl mx-auto">
          {items.map((item, i) => <Item key={i} {...item} index={i} />)}
        </div>
      </motion.div>
    </section>
  )
}
