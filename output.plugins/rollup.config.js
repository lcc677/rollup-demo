import {terser} from 'rollup-plugin-terser'


export default {
  input:'./src/main.js',
  output:{
    file:'lib/bundle.js',
    format:'cjs',
    plugins:[terser()]

  }
}