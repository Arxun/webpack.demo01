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
            {
                // 正则表达式，用于匹配所有的css文件
                test: /\.css$/,
                // 使用什么样的loader进行解析
                use: [
                    // css-loader 解释(interpret) @import 和 url() ，会 import/require() 后再解析(resolve)它们。	  // style-loader: 把解析完成的css代码插入到DOM中，需要配合css-loader使用
                    // 数组中，loader的顺序不能改变，webpack使用的时候，是从后往前加载的。
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    }
}