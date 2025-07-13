// api/skills.js
const { skills } = require('../backend/data.js');

module.exports = (req, res) => {
    if (req.method === 'GET') {
        res.status(200).json(skills);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};
