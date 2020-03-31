var path = require('path');

module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "C:/Users/user/Desktop/Projects/travel-site/app/temp/scripts"),
        filename: "App.js"
    },
    module: {
        rules: [
            {
                loader: 'babel-loader' ,
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/ ,
                exclude: /node_modules/
            }
        ]
    }
}