
module.exports = {
    devtool: 'source-map',
    resolve: {
        alias: {
            'reactor-ui/css': __dirname + '/dist/css',
            'reactor-ui': __dirname + '/src'
        }
    },
    node: {
        buffer: false
    },

    plugins: [],

    module: {
        loaders: [
            { test: /\.css$/,loader: 'style-loader!css-loader'},
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
        ]
    },

    devServer: {
        inline: true
    }

};
