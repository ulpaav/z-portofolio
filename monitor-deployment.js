const axios = require('axios');

const PRODUCTION_URL = 'https://z-portofolio-gtw67ypyu-zulfas-projects-f284ccbd.vercel.app';

async function checkDeployment() {
    console.log('🔍 Checking deployment status...\n');
    
    const endpoints = [
        { name: 'Education API', path: '/api/education' },
        { name: 'Skills API', path: '/api/skills' },
        { name: 'Project API', path: '/api/project' },
        { name: 'Frontend', path: '/' }
    ];
    
    for (const endpoint of endpoints) {
        try {
            console.log(`📡 Testing ${endpoint.name}...`);
            const response = await axios.get(`${PRODUCTION_URL}${endpoint.path}`, {
                timeout: 10000,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                }
            });
            
            if (endpoint.path === '/') {
                console.log(`✅ ${endpoint.name}: Frontend loaded successfully (Status: ${response.status})`);
            } else {
                console.log(`✅ ${endpoint.name}:`, response.data);
            }
            
        } catch (error) {
            console.error(`❌ ${endpoint.name} failed:`, error.message);
            if (error.response) {
                console.error(`   Status: ${error.response.status}`);
                console.error(`   Data:`, error.response.data);
            }
        }
        console.log('');
    }
    
    console.log('🎯 Deployment check completed!');
    console.log(`🌐 Production URL: ${PRODUCTION_URL}`);
}

// Run monitoring
checkDeployment(); 