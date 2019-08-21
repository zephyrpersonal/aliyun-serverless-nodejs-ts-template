import path from 'path'
import webpack from 'webpack'

const config: webpack.Configuration = {
  entry: './src/index.ts',
  target: 'node',
  node: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }
    ]
  },
  externals: {},
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.gql', '.json', '.graphql'],
    mainFields: ['main']
  }
}

export default config
