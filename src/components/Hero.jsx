import { useEffect, useState } from 'react'
import { profile } from '../data'

const roles = ['Web Developer', 'UI Designer', 'Creative Coder']

export default function Hero() {
  const [text, setText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    const speed = deleting ? 50 : 120
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setTimeout(() => setDeleting(true), 1500)
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === '') { setDeleting(false); setRoleIdx((i) => (i + 1) % roles.length) }
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [text, deleting, roleIdx])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-14 lg:px-20 xl:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-2xl md:text-3xl text-gray-400 mb-5">Halo, saya</p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold mb-6">
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 mb-8">
            Seorang <span className="font-semibold text-white">{text}<span className="animate-pulse text-blue-400">|</span></span>
          </p>
          <p className="text-gray-400 text-lg md:text-xl lg:text-2xl max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed">
            Membangun pengalaman digital yang menarik dan fungsional dengan kode yang bersih dan desain yang modern.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-5">
            <a href="#projects" className="btn-primary text-lg px-10 py-4">Lihat Proyek</a>
            <a href="#contact" className="btn-secondary text-lg px-10 py-4">Hubungi Saya</a>
          </div>
        </div>

        {/* Right - Photo */}
        <div className="flex-shrink-0 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -inset-8 border border-blue-500/20 rounded-full animate-pulse"></div>
            <div className="absolute -inset-12 border border-purple-500/10 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
