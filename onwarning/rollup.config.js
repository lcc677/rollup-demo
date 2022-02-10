export default {
  input:'./src/main.js',
  // external:['lodash'],
  output:{
    file:'lib/bundle.js',
    format:'cjs',
  },
  onwarn(warning,handler){
    console.log(warning)
    // skip certain warnings
    if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;

    // throw on others
    if (warning.code === 'UNRESOLVED_IMPORT') throw new Error(warning.message);

    // Use default for everything else
    handler(warning);

  }
}