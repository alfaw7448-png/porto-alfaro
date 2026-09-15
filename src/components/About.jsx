import { profile } from '../data'

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 93 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 90 },
  { name: 'Tailwind', level: 75 },
  { name: 'Laravel', level: 80 },
  { name: 'Flutter', level: 50},
  { name: ''}
]

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center">
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 lg:px-20 xl:px-24 py-16">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-xl md:text-2xl mb-4">Tentang Saya</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Kenali <span className="gradient-text">Saya</span> Lebih Dekat
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <img src={profile.photo} alt={profile.name} className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl object-cover border border-white/10 shadow-2xl" />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Saya adalah <span className="gradient-text">{profile.name}</span>
            </h3>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-4">
              Seorang {profile.role} yang passionate dalam menciptakan pengalaman digital yang menarik dan fokus pada detail. Saya senang mengubah ide menjadi website yang tidak hanya terlihat bagus, tetapi juga berfungsi dengan baik.
            </p>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
              Dengan pengalaman dalam pengembangan web modern, saya berkomitmen untuk memberikan solusi terbaik yang sesuai dengan kebutuhan klien.
            </p>

            <div className="space-y-5 mb-10">
              <h4 className="text-2xl font-semibold text-white mb-5">Keahlian Saya</h4>
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}

            </div>


            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-4xl font-bold gradient-text">2+</div>
                <div className="text-base text-gray-400 mt-2">Tahun Pengalaman</div>
              </div>

              <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-4xl font-bold gradient-text">3+</div>
                <div className="text-base text-gray-400 mt-2">Proyek Selesai</div>
              </div>

              <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-4xl font-bold gradient-text">1+</div>
                <div className="text-base text-gray-400 mt-2">Klien Puas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
