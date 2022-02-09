import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
export default {
  input:'src/main.js',
  output:{
    file:'bundle.js',
    format:'cjs',
    banner:"//我们在头",
    footer:"//我们在尾部",
  },
  onwarn:function(msg,warn){
    console.log(msg)
    // console.log(warn)
  },
  plugins: [resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }
  ),json()],
  external:['lodash']
  // plugins: [json()]
}