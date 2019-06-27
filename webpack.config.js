const path = require('path')

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "index.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    //loader
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
        ]
    }
}