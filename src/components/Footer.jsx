import React from 'react'
import { motion } from 'framer-motion'

export default function Footer(){
  return (
    <footer className="border-t border-slate-800/50 py-12">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="text-center">
        <p className="text-slate-400 text-sm mb-4">Crafted with passion and code</p>
        <p className="text-slate-500 text-xs">© {new Date().getFullYear()} Blessing Akanni. Built with <span className="text-cyan-400 font-bold">Vite</span> • <span className="text-purple-400 font-bold">React</span> • <span className="text-cyan-400 font-bold">Tailwind</span></p>
        <p className="text-slate-600 text-xs mt-4">Hacker aesthetics meets modern web development</p>
      </motion.div>
    </footer>
  )
}
