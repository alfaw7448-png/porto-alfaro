
import fotoProfil from './assets/Alfaro.jpeg'
import project1Img from './assets/project1.jpeg'
import project2Img from './assets/projek3.jpeg'

export const profile = {
  name: 'Alfaro',
  role: 'Web Developer',
  photo: fotoProfil, // bukan string lagi
}

export const services = [
  {
    title: 'Web Development',
    desc: 'Membangun website modern, responsif, dan cepat menggunakan React & Tailwind.',
    icon: '💻',
  },
  {
    title: 'UI/UX Design',
    desc: 'Mendesain antarmuka yang menarik, intuitif, dan nyaman digunakan.',
    icon: '🎨',
  },
  {
    title: 'Landing Page',
    desc: 'Membuat landing page yang efektif untuk memperkenalkan produk atau bisnismu.',
    icon: '🚀',
  },
]

export const projects = [
  {
    title: 'Project 1',
    desc: 'EcoBank adalah aplikasi web manajemen bank sampah berbasis dasbor digital yang dirancang untuk mempermudah pengelolaan operasional, pencatatan transaksi setor sampah, dan pencairan saldo nasabah/pelanggan secara efisien dan terstruktur.',
    image: project1Img,
    link: 'https://ecobank-sigma.vercel.app/',
  },
   {
    title: 'Project 2',
    desc: 'CV Valor Nusantara adalah sebuah website company profile yang menampilkan informasi tentang perusahaan, layanan, dan proyek-proyek yang telah diselesaikan. Website ini dirancang dengan tampilan yang profesional dan responsif, sehingga dapat diakses dengan baik di berbagai perangkat.',
    image: project2Img,
    link: 'https://cv-valor-nusantara.vercel.app/',
  },

]
