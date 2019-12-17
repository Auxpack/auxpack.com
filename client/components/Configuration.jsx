import React from 'react';

const Configuration = (props) => {
    
    const data = `
    const path = require('path')
    
    module.exports = {
        entry: './client/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js'
        },
        mode: process.env.NODE_ENV,
        plugins: [],
        module: {
            rules: [
                { 
                    test: /\.jsx?/,
                    //react file test
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
                    //sass test
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
                      //css test
                      use: [
                        { loader: 'style-loader' },
                        // css-loader
                        {loader: 'css-loader'},
                      ]
                  },
            ]
        }
`
const data1 = `,
devServer: {
    publicPath: 'http://localhost:8080/build',
    // compress: true,
    port: 8080,
    contentBase: path.join(__dirname, "./client/assets"),
    proxy: {
        '/':'http://localhost:3000'
    }
  },
  resolve: {
      extensions: ['.js','.jsx']
  },
}`

    return ( 
        <div id="configText">
            <h2>Configuration: a quick look into making a react application with a webpack.config</h2>
            <pre>{data}</pre>
            <pre id="devServer">{data1}</pre>
        </div>
     );
}
 
export default Configuration;