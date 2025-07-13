// File: api/projects.js
import { projects } from '../data.js';

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(projects);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}