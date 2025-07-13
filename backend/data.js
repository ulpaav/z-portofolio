// src/backend/data.js

export const educationHistory = [
    {
        id: 1,
        period: '2023 - Sekarang',
        institution: 'Universitas Amikom Yogyakarta',
        major: 'S1 - Teknik Informatika'
    },
    {
        id: 2,
        period: '2020 - 2023',
        institution: 'SMA Negeri 3 Singkawang',
        major: 'MIPA'
    }
]

export const skills = [
    { name: 'Vue.js', level: 'Mahir' },
    { name: 'JavaScript', level: 'Mahir' },
    { name: 'Tailwind CSS', level: 'Mahir' },
    { name: 'Node.js', level: 'Menengah' },
    { name: 'Express.js', level: 'Menengah' },
    { name: 'PostgreSQL', level: 'Menengah' },
    { name: 'Git & GitHub', level: 'Mahir' },
    { name: 'HTML5 & CSS3', level: 'Mahir' }
]

export const projects = [
    {
        title: 'Website Toko Online',
        image: '@/images/website_tooko_online.webp',
        description: 'Platform e-commerce dengan fitur keranjang belanja.',
        tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
        link: '#'
    },
    {
        title: 'Aplikasi Manajemen Tugas',
        image: '@/images/project-management.webp',
        description: 'Aplikasi untuk melacak progres tugas harian.',
        tech: ['React', 'Firebase'],
        link: '#'
    },
    {
        title: 'Sistem Booking Online',
        image: '@/images/booking-online.webp',
        description: 'Aplikasi booking untuk reservasi layanan.',
        tech: ['Next.js', 'MongoDB'],
        link: '#'
    },
    {
        title: 'Dashboard Admin',
        image: '@/images/dashboard.webp',
        description: 'Dashboard admin dengan data real-time.',
        tech: ['Laravel', 'MySQL'],
        link: '#'
    }
]
