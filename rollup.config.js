import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
export default {
  input:'src/main-lodash.js',
  output:{
    file:'bundle.js',
    format:'cjs'
  },
  plugins: [resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }
  )],
  externals:['lodash']
  // plugins: [json()]
}