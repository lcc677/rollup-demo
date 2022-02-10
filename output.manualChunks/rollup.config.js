import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input:'./src/main.js',
  output:{
    // file:'lib/bundle.js',
    dir:'lib',
    format:'cjs',
    manualChunks:{
      lodash:['lodash']
    },
    chunkFileNames:'[name].[format].js',
    entryFileNames:'[name].[format].js',
    // assetFileNames:'[name].[extname][hash][ext]'
  },
  plugins:[nodeResolve(),commonjs()],
  onwarn(warinig,warn){
    console.log(warinig)
  }
}