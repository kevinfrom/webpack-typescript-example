const path = require('path')

module.exports = (env, argv) => {
    const isProduction = argv.mode.toString().toLowerCase() === 'production';

    return {
        devtool: isProduction ? false : 'eval-source-map',
        entry: './src/index.ts',
        module: {
            rules: [{
                test: /(?<!\.test)\.ts$/i,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }, ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 8080,
            allowedHosts: [
                'localhost',
                '127.0.0.1'
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        }
    }
}