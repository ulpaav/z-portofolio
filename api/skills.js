import { setCorsHeaders } from '../utils/cors.js';

// Data skills
const skills = [
    { name: 'Vue.js', level: 'Mahir' },
    { name: 'JavaScript', level: 'Mahir' },
    { name: 'Tailwind CSS', level: 'Mahir' },
    { name: 'Node.js', level: 'Menengah' },
    { name: 'Express.js', level: 'Menengah' },
    { name: 'PostgreSQL', level: 'Menengah' },
    { name: 'Git & GitHub', level: 'Mahir' },
    { name: 'HTML5 & CSS3', level: 'Mahir' }
];

export default function handler(req, res) {
    console.log('Skills API called:', req.method, req.url);
    
    setCorsHeaders(res);
    
    if (req.method === 'OPTIONS') {
        console.log('Handling OPTIONS request');
        res.status(200).end();
        return;
    }
    
    if (req.method === 'GET') {
        try {
            console.log('Sending skills data:', skills);
            res.status(200).json(skills);
        } catch (error) {
            console.error('Skills API error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        console.log('Method not allowed:', req.method);
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}