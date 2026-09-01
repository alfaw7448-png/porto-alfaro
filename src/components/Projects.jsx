import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Proyek <span className="text-blue-600">Portofolio</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
          Beberapa proyek yang pernah saya kerjakan. Klik foto untuk melihat
          detailnya.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-200"
            >
              <a href={p.link} target="_blank" rel="noreferrer" className="block">
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-semibold text-blue-600">
                    Kunjungi Proyek →
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
