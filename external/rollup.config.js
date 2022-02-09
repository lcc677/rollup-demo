const path = require('path')

export default {
  input:'./src/main.js',
  output:{
    file:'lib/bundle.js',
    format:'cjs'
  },
  external:[path.resolve('./src/name.js')]
}