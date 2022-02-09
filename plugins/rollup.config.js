const json = require('rollup-plugin-json')

export default{
  input:'./src/main.js',
  plugins:[json()],
  output:{
    file:'lib/bundle.js',
    format:'esm'
  }
}