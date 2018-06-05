const path = require('path');
const webpack = require('webpack');

const noop = function () {
};

// env
const isDev = process.env.NODE_ENV !== 'production';
const isBuild = process.env.BUILD === 'true';

const PATH_SOURCE = path.resolve(__dirname, './src');
const PATH_DIST = path.resolve(__dirname, './dist');

function getJSLoader() {
    return {
        test: /(\.jsx?)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
        }
    };
}


function getDefinePlugin(isBrowser = false) {
    return new webpack.DefinePlugin({
        __NODE_ENV__: JSON.stringify(process.env.NODE_ENV),
        __isBrowser__: JSON.stringify(isBrowser)
    });
}


const baseConfig = {
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        modules: [
            PATH_SOURCE,
            path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        rules: [
            getJSLoader()
        ]
    },

    devServer: {
        compress: true,
        historyApiFallback: true,
        stats: {
            children: false,
            chunks: false,
        },
        overlay: {
            warnings: true,
            errors: true
        }
    },

    mode: isDev ? 'development' : 'production',
    stats: {
        children: false,
        chunks: false,
    }
};


const clientConfig = {
    ...baseConfig,
    entry: './src/client/index.jsx',
    output: {
        path: path.resolve(PATH_DIST, 'public'),
        filename: 'main.bundle.js',
        publicPath: '/'
    },
    plugins: [
        getDefinePlugin(true)
    ]
};

const serverConfig = {
    ...baseConfig,
    entry: './src/server/index.jsx',
    target: 'node',
    output: {
        path: path.resolve(PATH_DIST),
        filename: 'server.js',
        publicPath: '/'
    },
    plugins: [
        getDefinePlugin(false)
    ],
};

module.exports = [clientConfig, serverConfig];