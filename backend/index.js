// backend/index.js
const express = require('express');
const cors = require('cors');
const { educationHistory, skills, project } = require('./data');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/project', (req, res) => res.json(project));
app.listen(PORT, () => {
console.log(` Server backend berjalan di
https://z-portofolio-ten.vercel.app/:${PORT}`);
});