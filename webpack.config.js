const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: { version: 3, proposals: true },
                },
              ],
            ],
            plugins: [
              '@babel/plugin-transform-regenerator',
              [
                '@babel/plugin-transform-react-jsx',
                {
                  pragma: 'el',
                  pragmaFrag: 'Fragment',
                },
              ],
            ],
          },
        }
      }
    ]
  }
};
