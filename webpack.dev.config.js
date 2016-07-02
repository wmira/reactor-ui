
module.exports = {
    devtool: 'source-map',
    resolve: {
        alias: {
            'reactor-ui': __dirname + '/src'
        }
    },
    node: {
        buffer: false
    },

    plugins: [],

    module: {
        loaders: [
            { test: /\.css$/,loader: 'style-loader!css-loader?localIdentName=[name]_[local]_[hash:base64:5]'},
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
        ]
    }

};
