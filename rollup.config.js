import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import vue from 'rollup-plugin-vue'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/library.js'
      }
    ],
    plugins: [
      vue(), peerDepsExternal()
    ]
  }
]