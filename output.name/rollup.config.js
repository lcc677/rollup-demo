import { defineConfig } from "rollup";

export default defineConfig({
  input:'./src/main.js',
  output:{
    file:'lib/bundle.js',
    format:'umd',
    name:'myBundle'
  }
})