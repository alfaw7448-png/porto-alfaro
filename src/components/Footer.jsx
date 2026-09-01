export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6 text-center text-gray-400">
      <p>
        © {new Date().getFullYear()} Alfaro. Dibuat dengan{' '}
        <span className="text-blue-400">React</span> &{' '}
        <span className="text-blue-400">Tailwind CSS</span>
      </p>
    </footer>
  )
}
