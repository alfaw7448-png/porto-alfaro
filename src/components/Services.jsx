import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="relative w-full flex items-center justify-center py-20 lg:min-h-screen lg:py-24 mb-6 lg:mb-10">
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 lg:px-20 xl:px-24">
        <div className="text-center mb-20 lg:mb-24">
          <p className="text-blue-400 text-xl md:text-2xl mb-4">Layanan Saya</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
            Apa yang <span className="gradient-text">Saya Tawarkan</span>
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto">
            Beberapa layanan yang bisa saya bantu untuk mewujudkan proyekmu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div key={service.title} className="card-hover rounded-2xl p-6 sm:p-8 text-center group flex flex-col items-center">
              <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}