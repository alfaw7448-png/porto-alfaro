export default function Footer() {
  return (
    <footer className="relative w-full py-12 border-t border-white/10 flex items-center justify-center">
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 lg:px-20 xl:px-24">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <a href="#home" className="text-3xl font-bold gradient-text">ALFARO<span className="text-blue-400">.</span></a>
          <p className="text-gray-500 text-base text-center">
            © {new Date().getFullYear()} Alfaro. Dibuat dengan{' '}
            <span className="text-blue-400">React</span> &{' '}
            <span className="text-purple-400">Tailwind CSS</span>
          </p>
          <a href="#home" className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
