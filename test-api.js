const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

async function testAPI() {
  console.log('🧪 Testing API endpoints...\n');
  
  try {
    // Test education endpoint
    console.log('📚 Testing /api/education...');
    const educationResponse = await axios.get(`${BASE_URL}/api/education`);
    console.log('✅ Education API:', educationResponse.data);
    
    // Test skills endpoint
    console.log('\n💻 Testing /api/skills...');
    const skillsResponse = await axios.get(`${BASE_URL}/api/skills`);
    console.log('✅ Skills API:', skillsResponse.data);
    
    // Test project endpoint
    console.log('\n🚀 Testing /api/project...');
    const projectResponse = await axios.get(`${BASE_URL}/api/project`);
    console.log('✅ Project API:', projectResponse.data);
    
    console.log('\n🎉 All API tests passed!');
  } catch (error) {
    console.error('❌ API test failed:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
}

testAPI(); 