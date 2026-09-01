export default function Button({ href, children, className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/30 hover:shadow-xl active:scale-95 ${className}`}
    >
      {children}
    </a>
  )
}
