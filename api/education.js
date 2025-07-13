// File: api/education.js
import { educationHistory } from '../backend/data.js';

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(educationHistory);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
