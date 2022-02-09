// javascript 代码打包

const rollup = require('rollup')
const rollupPluginJson = require('rollup-plugin-json')

const inputOptions = {
  input:'./src/main.js',
  plugins:[rollupPluginJson()]
}
const outputOptions = {
  file:'bundle.js'
}

async function build(){
  const bundle = await rollup.rollup(inputOptions)
  console.log(bundle.imports)
  console.log(bundle.exports)
  console.log(bundle.modules)

  const {code ,map } = await bundle.generate(outputOptions)

  bundle.write(outputOptions)

}
build()