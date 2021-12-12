module.exports = {
  apps: [{
    name: 'graftree',
    script: './src/bin/www.js',
    env: {
      NODE_ENV: 'production'
    }
  }]
}
