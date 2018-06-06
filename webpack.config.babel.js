const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const noop = function () {
};

// env
const isDev = process.env.NODE_ENV !== 'production';
const isBuild = process.env.BUILD === 'true';

const PATH_SOURCE = path.resolve(__dirname, './src');
const PATH_DIST = path.resolve(__dirname, './dist');

const extractSass = new ExtractTextPlugin({
    filename: "css/[name].css",
    disable: isBuild
});

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

function getScssLoader() {
    return {
        test: /\.scss$/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
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
            getTSLoader(),
            getScssLoader()
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

    entry: {
        main: './src/client/index.tsx'
    },
    output: {
        path: path.resolve(PATH_DIST, 'public'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins: [
        getDefinePlugin(true),
        extractSass
    ]
};

const serverConfig = {
    ...baseConfig,
    entry: {
        server: './src/server/index.ts',
        critical: './src/server/critical.ts'
    },
    target: 'node',
    output: {
        path: path.resolve(PATH_DIST),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        getDefinePlugin(false),
        extractSass
    ],
};

module.exports = [clientConfig, serverConfig];