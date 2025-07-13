// File: api/skills.js
import { skills } from '../data.js';

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(skills);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}