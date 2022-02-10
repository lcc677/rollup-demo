// const json = require('@rollup/plugin-json')
// const terser = require('')
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'

export default{
  input:'./src/main.js',
  plugins:[json()],
  output:{
    file:'lib/bundle.js',
    format:'esm',
    plugins:[terser()]
  }
}