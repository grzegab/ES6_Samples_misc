const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js',
        api: './src/api.js',
        webcomponents: './src/webcomponents.js',
        joke: './src/joke.js',
        game: './src/index_game.js',
        samplePage: './src/sample_page.js',
        loading: './src/loading.js',
        generator: './src/generator.js',
        hospital: './src/hospital.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index2.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader?modules"]
            }
        ]
    }
};