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
                loader: "css-loader",
                options: {
                    minimize: !isDev
                }
            }, {
                loader: "sass-loader",
                options: {
                    data: `@import "common.scss";`,
                    includePaths: [
                        path.resolve(__dirname, './src/style')
                    ]
                }
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
    };
}

function getSvgLoader() {
    return {
        test: /\.svg$/,
        use: [
            {
                loader: "babel-loader"
            }, {
                loader: "react-svg-loader",
                options: {
                    jsx: true,
                    svgo: {
                        plugins: [{cleanupIDs: false}]
                    }
                }
            }
        ]
    };
}


function getDefinePlugin(isBrowser = false) {
    return new webpack.DefinePlugin({
        __NODE_ENV__: JSON.stringify(process.env.NODE_ENV || 'development'),
        __isBrowser__: JSON.stringify(isBrowser)
    });
}

console.log(path.resolve(__dirname, 'src/style'));

const baseConfig = {
    resolve: {
        extensions: [".svg", ".ts", ".tsx", ".js", ".jsx", ".json"],
        modules: [
            PATH_SOURCE,
            path.resolve(__dirname, './node_modules')
        ],
        alias: {
            Client: path.resolve(__dirname, 'src/client'),
            Server: path.resolve(__dirname, 'src/server'),
            Core: path.resolve(__dirname, 'src/core'),
            Style: path.resolve(__dirname, 'src/style')
        }
    },
    module: {
        rules: [
            getJSLoader(),
            getTSLoader(),
            getSvgLoader(),
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
        new webpack.NamedModulesPlugin(),
        isDev ? noop : new webpack.optimize.ModuleConcatenationPlugin(),
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
        new webpack.NamedModulesPlugin(),
        isDev ? noop : new webpack.optimize.ModuleConcatenationPlugin(),
        extractSass
    ],
};

module.exports = [clientConfig, serverConfig];