import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

const input = 'src/index.ts'

export default {
  input: input,
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    }
  ],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
      tsconfigOverride: {
        compilerOptions: {
          module: 'ESNext',
          declaration: true,
          sourceMap: true
        },
        files: [input]
      },
      useTsconfigDeclarationDir: false
    })
  ]
}
