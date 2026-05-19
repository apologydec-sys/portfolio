import React, {useRef, useEffect} from 'react'

export default function MatrixRain({color='#00ff99', fontSize=14, density=0.04}){
  const ref = useRef(null)

  useEffect(()=>{
    const canvas = ref.current
    if(!canvas) return
    const ctx = canvas.getContext('2d')
    let width = canvas.width = canvas.offsetWidth
    let height = canvas.height = canvas.offsetHeight

    const columns = Math.floor(width / fontSize)
    const drops = Array(columns).fill(1)

    function resize(){
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', resize)

    let raf = null
    function draw(){
      ctx.fillStyle = 'rgba(0,0,0,0.25)'
      ctx.fillRect(0,0,width,height)
      ctx.fillStyle = color
      ctx.font = `${fontSize}px monospace`
      for(let i=0;i<drops.length;i++){
        const text = String.fromCharCode(0x30A0 + Math.random()*96)
        ctx.fillText(text, i*fontSize, drops[i]*fontSize)
        if(drops[i]*fontSize > height && Math.random() > 0.975) drops[i]=0
        drops[i]++
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return ()=>{
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [color, fontSize, density])

  return (
    <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />
  )
}
