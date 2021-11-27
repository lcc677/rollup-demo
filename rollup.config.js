import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
export default {
  input:'src/main2.js',
  output:{
    file:'bundle.js',
    format:'cjs'
  },
  plugins: [resolve()]
  // plugins: [json()]
}