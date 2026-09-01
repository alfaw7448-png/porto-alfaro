import { useEffect, useState } from 'react'
import { profile } from '../data'
import Button from './Button'

const roles = ['Frontend Developer', 'UI Designer', 'Creative Coder']

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
        if (next === current) {
          setTimeout(() => setDeleting(true), 1500)
        }
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setRoleIdx((i) => (i + 1) % roles.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [text, deleting, roleIdx])

  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 pt-24 md:flex-row md:gap-20"
    >
      <div className="text-center md:text-left">
        <p className="text-lg text-blue-600">Halo, saya</p>
        <h1 className="mt-2 text-5xl font-extrabold text-gray-900 md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 h-8 text-xl text-gray-600 md:text-2xl">
          Seorang{' '}
          <span className="font-semibold text-blue-600">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <Button href="#projects">Lihat Proyek</Button>
          <Button
            href="#contact"
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white ring-0 hover:bg-white/20"
          >
            Hubungi Saya
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 rounded-full bg-blue-500/20 blur-2xl" />
        <img
          src={profile.photo}
          alt={profile.name}
          className="relative h-64 w-64 rounded-full border-4 border-white object-cover shadow-2xl md:h-80 md:w-80"
        />
      </div>
    </section>
  )
}
