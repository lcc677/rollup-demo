const rollup = require('rollup')

module.exports = rollup.defineConfig({
  input:'./src/main.js',
  output:{
    file:'lib/bundle.js',
    format:'cjs'
  }
})