const path = require('path');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            { 
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                  // style-loader
                  { loader: 'style-loader' },
                  // css-loader
                  {loader: 'css-loader'},
                  // sass-loader
                  { loader: 'sass-loader' }
                ]
              },
              {
                  test: /\.css$/,
                  use: [
                    { loader: 'style-loader' },
                    // css-loader
                    {loader: 'css-loader'},
                  ]
              }
        ]
    }
    ,
    devServer: {
        publicPath: 'http://localhost:8081/build',
        // compress: true,
        port: 8081,
        contentBase: path.join(__dirname, "./client/assets"),
        proxy: {
            '/':'http://localhost:3001'
        }
      },
      resolve: {
          extensions: ['.js','.jsx']
      },
}