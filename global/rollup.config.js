export default{
  input:'./src/main.js',
  output:{
    file:'lib/bundle.js',
    format:'umd',
    globals: {
      jquery: '$'
    }
  }
  
}