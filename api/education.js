import { setCorsHeaders } from '../utils/cors.js';

// Data pendidikan
const educationHistory = [
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
];

export default function handler(req, res) {
    console.log('Education API called:', req.method, req.url);
    
    setCorsHeaders(res);
    
    if (req.method === 'OPTIONS') {
        console.log('Handling OPTIONS request');
        res.status(200).end();
        return;
    }
    
    if (req.method === 'GET') {
        try {
            console.log('Sending education data:', educationHistory);
            res.status(200).json(educationHistory);
        } catch (error) {
            console.error('Education API error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        console.log('Method not allowed:', req.method);
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}