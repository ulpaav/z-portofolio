import { setCorsHeaders } from '../utils/cors.js';

// Data projects
const project = [
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
];

export default function handler(req, res) {
    setCorsHeaders(res);
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    if (req.method === 'GET') {
        try {
            res.status(200).json(project);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}