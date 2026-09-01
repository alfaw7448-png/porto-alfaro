import { profile } from '../data'

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Node.js']

export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Tentang <span className="text-blue-600">Saya</span>
        </h2>

        <div className="mt-12 flex flex-col items-center gap-8 md:flex-row">
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-40 w-40 rounded-3xl object-cover shadow-lg ring-2 ring-blue-200 md:h-52 md:w-52"
          />
          <div>
            <p className="text-gray-600 leading-relaxed">
              Saya adalah <strong className="text-blue-600">{profile.name}</strong>, seorang{' '}
              {profile.role} yang senang mengubah ide menjadi website yang menarik dan
              fungsional. Fokus saya pada membangun pengalaman pengguna yang bersih,
              modern, dan responsif menggunakan teknologi terbaru.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
