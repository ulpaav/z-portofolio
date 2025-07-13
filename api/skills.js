import { setCorsHeaders } from '../utils/cors.js';
import { sql } from '@vercel/postgres';

export default function handler(req, res) {
    setCorsHeaders(res);
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    if (req.method === 'GET') {
        res.status(200).json(skills);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}