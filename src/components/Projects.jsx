import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="relative w-full flex items-center justify-center py-20 lg:min-h-screen lg:py-24 mb-6 lg:mb-10">
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 lg:px-20 xl:px-24">
        <div className="text-center mb-20 lg:mb-24">
          <p className="text-blue-400 text-xl md:text-2xl mb-4">Portofolio</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
            Proyek <span className="gradient-text">Terbaru</span>
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed">
            Beberapa proyek yang pernah saya kerjakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <div key={project.title} className="card-hover rounded-2xl overflow-hidden group">
              <a href={project.link} target="_blank" rel="noreferrer" className="block">
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-flex items-center gap-2 text-white text-lg font-semibold">
                        Lihat Proyek
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-5">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1 text-sm rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">Web</span>
                    <span className="px-4 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">React</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
