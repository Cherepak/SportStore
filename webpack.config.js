const path = require("path");

module.exports = {
    entry: "/App.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    watch: true,
    module: {
        rules: [
            {test: /\.react$/, use: `react`},
            {test: /\.react-dom$/, use: `react-dom`},
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [`@babel/preset-env`, `@babel/preset-react`]
                  }
                }
            }

        ]
    }
}