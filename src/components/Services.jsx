import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Layanan <span className="text-blue-600">Saya</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
          Beberapa layanan yang bisa saya bantu untuk mewujudkan proyekmu.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-200"
            >
              <div className="text-4xl">{s.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
