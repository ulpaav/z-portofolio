// api/education.js
const { educationHistory } = require('../backend/data.js');

module.exports = (req, res) => {
    if (req.method === 'GET') {
        res.status(200).json(educationHistory);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};
