
import fotoProfil from './assets/Alfaro.jpeg'
import project1Img from './assets/project1.jpeg'
import project2Img from './assets/projekt2.jpeg'

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
    title: 'Mobile Responsive',
    desc: 'Memastikan tampilan website sempurna di semua perangkat, dari HP hingga desktop.',
    icon: '📱',
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
    desc: 'Deskripsi singkat project pertama kamu. Jelaskan apa yang dibuat dan teknologi yang dipakai.',
    image: project1Img,
    link: 'https://ecobank-sigma.vercel.app/',
  },
  {
    title: 'Project 2',
    desc: 'Deskripsi singkat project kedua kamu. Jelaskan apa yang dibuat dan teknologi yang dipakai.',
    image: project2Img,
    link: 'https://www.figma.com/design/3UikL0FYym9fCVloQOoBy1/WhatsApp-UI-Alfaro-NK?node-id=1126-517&t=bZKdEkZyraOiHxGP-1',
  },

]
