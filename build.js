// build.js
const fs = require('fs');
const path = require('path');

console.log('🔨 Building config.js from environment variables...');

// Get values from environment or use defaults
const config = {
  APP_NAME: process.env.APP_NAME || "appv2",
  API_KEY: process.env.API_KEY || "",
  REGION: process.env.REGION || "US",
  APP_VERSION: process.env.APP_VERSION || "V2",
  API_BASE_URL: process.env.API_BASE_URL || "",
};

// Check if required values are missing
if (!config.API_KEY || !config.API_BASE_URL) {
  console.warn('⚠️  Warning: Some environment variables are missing!');
  console.warn('   API_KEY:', config.API_KEY ? '✅ Set' : '❌ Missing');
  console.warn('   API_BASE_URL:', config.API_BASE_URL ? '✅ Set' : '❌ Missing');
}

const configContent = `window._APP_CONFIG_ = ${JSON.stringify(config, null, 2)};`;

try {
  fs.writeFileSync('config.js', configContent);
  console.log('✅ config.js created successfully!');
  console.log('📝 Config:', config);
} catch (error) {
  console.error('❌ Failed to create config.js:', error.message);
  process.exit(1);
}
