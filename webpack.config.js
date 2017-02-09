module.exports = {
    entry: './src/includes.js',
    output: {
        filename: 'time.js',
        path: './dist',

        // libraryTarget: "var",
        library: "IresultsTime",
        // library: "[name]",
        libraryTarget: 'var',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};