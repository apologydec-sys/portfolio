import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaWhatsapp, FaTelegram, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Contact(){
  const contacts = [
    {icon: FaPhone, text: '0599844901', link: 'tel:0599844901'},
    {icon: FaEnvelope, text: 'apologydec@gmail.com', link: 'mailto:apologydec@gmail.com'},
  ]
  
  const socials = [
    {icon: FaGithub, link: '#'},
    {icon: FaWhatsapp, link: 'https://wa.me/0599844901'},
    {icon: FaTelegram, link: '#'},
    {icon: FaInstagram, link: '#'},
  ]
  
  return (
    <section id="contact" className="py-20">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold neon mb-2">Get In Touch</h2>
          <p className="text-slate-400">Let's collaborate and build something amazing together</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contacts.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.a key={i} href={c.link} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: i*0.1}} whileHover={{scale:1.02}} viewport={{once:true}} className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-cyan-400/30 hover:border-cyan-400 flex items-center gap-4 transition-all">
                <Icon className="text-cyan-400 text-3xl" />
                <div>
                  <div className="text-cyan-300 text-sm font-semibold">Contact</div>
                  <div className="text-slate-200 text-lg font-bold">{c.text}</div>
                </div>
              </motion.a>
            )
          })}
        </div>
        
        <div className="text-center">
          <p className="text-slate-300 mb-6">Follow me on social media</p>
          <div className="flex gap-4 justify-center">
            {socials.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.a key={i} href={s.link} initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{delay: i*0.1}} whileHover={{scale:1.2}} viewport={{once:true}} className="p-3 bg-gradient-to-br from-purple-600 to-cyan-400 rounded-lg text-black hover:shadow-lg hover:shadow-cyan-400/50 transition-all">
                  <Icon className="text-lg" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
