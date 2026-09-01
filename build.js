// build.js
const fs = require('fs');

const config = {
  APP_NAME: process.env.APP_NAME || "appv2",
  API_KEY: process.env.API_KEY || "",
  REGION: process.env.REGION || "US",
  APP_VERSION: process.env.APP_VERSION || "V2",
  API_BASE_URL: process.env.API_BASE_URL || "",
};

const configContent = `window._APP_CONFIG_ = ${JSON.stringify(config, null, 2)};`;

fs.writeFileSync('config.js', configContent);
console.log('✅ config.js created with environment variables');