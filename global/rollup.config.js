export default{
  input:'./src/main.js',
  external:['jquery'],
  output:{
    file:'lib/bundle.js',
    format:'umd',
    globals: {
      jquery: '$'
    }
  }
}