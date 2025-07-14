const axios = require('axios');

// Test API endpoints
async function testVercelAPI() {
    console.log('🧪 Testing Vercel API endpoints...\n');
    
    const endpoints = [
        '/api/education',
        '/api/skills', 
        '/api/project'
    ];
    
    for (const endpoint of endpoints) {
        try {
            console.log(`📡 Testing ${endpoint}...`);
            const response = await axios.get(`http://localhost:3000${endpoint}`);
            console.log(`✅ ${endpoint}:`, response.data);
            console.log('');
        } catch (error) {
            console.error(`❌ ${endpoint} failed:`, error.message);
            if (error.response) {
                console.error('Status:', error.response.status);
                console.error('Data:', error.response.data);
            }
            console.log('');
        }
    }
}

// Test with different base URLs
async function testAllScenarios() {
    console.log('🚀 Testing all scenarios...\n');
    
    const scenarios = [
        { name: 'Local Express Backend', baseURL: 'http://localhost:3000' },
        { name: 'Vercel API (relative)', baseURL: '' }
    ];
    
    for (const scenario of scenarios) {
        console.log(`\n📋 Testing: ${scenario.name}`);
        console.log('Base URL:', scenario.baseURL || '(relative)');
        
        try {
            const response = await axios.get(`${scenario.baseURL}/api/education`);
            console.log('✅ Success:', response.data);
        } catch (error) {
            console.log('❌ Failed:', error.message);
        }
    }
}

// Run tests
testVercelAPI();
// testAllScenarios(); 