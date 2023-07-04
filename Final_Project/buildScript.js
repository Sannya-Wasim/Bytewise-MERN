const { execSync } = require('child_process');

try {
  console.log('Building frontend...');
  execSync('npm run build-frontend', { stdio: 'inherit' });
  console.log('Frontend build successful!');
} catch (error) {
  console.error('Error building frontend:', error);
  process.exit(1);
}
