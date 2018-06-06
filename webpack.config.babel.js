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

function getTSLoader() {
    return {
        test: /(\.tsx?)$/,
        use: [
            {
                loader: 'awesome-typescript-loader',
                options: {
                    // silent: true,
                    configFile: path.resolve(__dirname, 'tsconfig.json'),
                    compilerOptions: {
                        module: 'esnext',
                        target: 'es5',
                        noEmitHelpers: true,
                        importHelpers: true
                    }
                }
            },
        ],
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
        ],
        alias: {
            client: path.join(__dirname, 'src/client'),
            server: path.join(__dirname, 'src/server'),
            core: path.join(__dirname, 'src/core')
        }
    },
    module: {
        rules: [
            getJSLoader(),
            getTSLoader()
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
    entry: './src/client/index.tsx',
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
    entry: './src/server/index.js',
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