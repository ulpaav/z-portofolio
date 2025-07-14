const axios = require('axios');

const PRODUCTION_URL = 'https://z-portofolio-gtw67ypyu-zulfas-projects-f284ccbd.vercel.app';
const LOCAL_URL = 'http://localhost:3000';

async function debugAPI() {
    console.log('🔍 Debugging API endpoints...\n');
    
    const testCases = [
        {
            name: 'Production Education API',
            url: `${PRODUCTION_URL}/api/education`,
            expected: 'Array of education data'
        },
        {
            name: 'Production Skills API', 
            url: `${PRODUCTION_URL}/api/skills`,
            expected: 'Array of skills data'
        },
        {
            name: 'Production Project API',
            url: `${PRODUCTION_URL}/api/project`, 
            expected: 'Array of project data'
        },
        {
            name: 'Local Education API',
            url: `${LOCAL_URL}/api/education`,
            expected: 'Array of education data'
        }
    ];
    
    for (const testCase of testCases) {
        console.log(`📡 Testing: ${testCase.name}`);
        console.log(`URL: ${testCase.url}`);
        
        try {
            const response = await axios.get(testCase.url, {
                timeout: 10000,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            
            console.log(`✅ Status: ${response.status}`);
            console.log(`✅ Data:`, response.data);
            console.log(`✅ Expected: ${testCase.expected}`);
            
        } catch (error) {
            console.error(`❌ Error: ${error.message}`);
            if (error.response) {
                console.error(`   Status: ${error.response.status}`);
                console.error(`   Headers:`, error.response.headers);
                console.error(`   Data:`, error.response.data);
            }
            if (error.request) {
                console.error(`   Request was made but no response received`);
            }
        }
        
        console.log('─'.repeat(50));
    }
    
    console.log('\n🎯 Debug Summary:');
    console.log('1. Check if production URLs are accessible');
    console.log('2. Check if local URLs are accessible'); 
    console.log('3. Compare responses between local and production');
    console.log('4. Check for CORS issues');
    console.log('5. Check for routing issues');
}

// Run debug
debugAPI(); 