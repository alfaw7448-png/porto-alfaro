import { useState, useEffect } from 'react'

const links = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <nav className="w-full flex items-center justify-between px-8 md:px-14 lg:px-20 xl:px-24 py-6">
        <a href="#home" className="text-4xl font-bold gradient-text">ALFARO<span className="text-blue-400">.</span></a>

        <ul className="hidden items-center gap-8 lg:gap-12 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-xl text-gray-300 transition-colors hover:text-white relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-block btn-primary text-lg px-10 py-4">Hubungi Saya</a>

        <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden text-4xl text-white">
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#0a1628]/95 backdrop-blur-md">
          <ul className="flex flex-col gap-5 px-8 pb-8">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-xl text-gray-300 hover:text-white transition-colors block py-2">{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary text-lg px-10 py-4 inline-block text-center">Hubungi Saya</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
