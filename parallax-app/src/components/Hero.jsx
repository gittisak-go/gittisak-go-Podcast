import React, { useEffect } from 'react'
import { initParallax } from '../utils/parallax'

export default function Hero(){
  useEffect(()=>{
    const stop = initParallax()
    return ()=>{ if(typeof stop === 'function') stop() }
  },[])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-800 to-indigo-700 text-white">
      {/* Parallax layers */}
      <img src="http://codingstella.com/wp-content/uploads/2024/01/download-4.png" alt="stars" data-parallax data-parallax-speed="0.06" className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60" />
      <img src="http://codingstella.com/wp-content/uploads/2024/01/download-5.png" alt="moon" data-parallax data-parallax-speed="0.10" className="absolute top-0 left-1/4 w-48 h-48 object-contain pointer-events-none opacity-90" />
      <img src="http://codingstella.com/wp-content/uploads/2024/01/download-6.png" alt="mountains" data-parallax data-parallax-speed="0.03" className="absolute bottom-0 left-0 w-full object-cover pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center py-32">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">ยินดีต้อนรับสู่ Parallax Podcast</h1>
        <p className="mb-4">หน้าแสดงผลงานและตัวอย่างการ์ดแบบ responsive — mobile-first</p>
        <div className="space-x-2">
          <a href="/podcast" className="inline-block bg-white text-indigo-700 px-4 py-2 rounded">ไปที่ Podcast</a>
        </div>
      </div>
    </section>
  )
}
