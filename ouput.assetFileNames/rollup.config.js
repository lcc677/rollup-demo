import json from '@rollup/plugin-json'
import image from '@rollup/plugin-image'

export default {
  input:'./src/main.js',
  output:{
    file:'lib/bundle.js',
    format:'cjs',
    assetFileNames:'[hash][ext]'
  },
  plugins:[json(),image()]
}