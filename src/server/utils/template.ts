import * as path from 'path';
import * as fs from 'fs';
import { find, isString } from 'lodash';

const stats = require(path.resolve(__dirname, '../../stats.json'));
const jsRe = /\.js$/;
const cssRe = /\.css$/;

const webpackRuntime = fs.readFileSync(
    path.resolve(__dirname, '../../public', getChunkAssetFilePath('runtime')),
    'utf-8'
);

const fontsFOFT = fs.readFileSync(
    path.resolve(__dirname, '../../public', getChunkAssetFilePath('vendors', /fonts.+css$/)),
    'utf-8'
);

const criticalCSS = fs.readFileSync(
    path.resolve(__dirname, '../../public', getChunkAssetFilePath('vendors', /critical.+css$/)),
    'utf-8'
);

const manifestFile = (stats.assets.filter((asset: { name: string }) => asset.name.match(/manifest.+json$/))[0] || {}).name;

export interface TemplateParams<T> {
    title: string;
    body: string;
    initState?: T;
    chunks?: string[];
}

export function template<T extends object>(params: TemplateParams<T>): string {
    const { title, body, initState = {}, chunks = [] } = params;

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>${title}</title>
            <meta name="theme-color" content="#630fcd"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
            ${ fontsFOFT }
            ${ criticalCSS }
            </style>
            ${ manifestFile !== undefined ? `<link rel="manifest" href="/${ manifestFile }">` : '' }
            <link rel="preload" href="/${getChunkAssetFilePath('vendors', cssRe)}" as="style">
            ${ chunks.map((chunk: string) => `<link rel="preload" href="/${getChunkAssetFilePath(chunk, cssRe)}" as="style">`) }
            <link rel="preload" href="/${getChunkAssetFilePath('vendors')}" as="script">
            ${ chunks.map((chunk: string) => `<link rel="preload" href="/${getChunkAssetFilePath(chunk)}" as="script">`) }
        </head>
        <body>
            <div id="root">${body}</div>
            <script>
                function appendCSS(src) {
                    var usedLaterCSS = document.createElement('link');
                    usedLaterCSS.rel = 'stylesheet';
                    usedLaterCSS.href = src;
                    document.body.appendChild(usedLaterCSS)
                }

                appendCSS('/${getChunkAssetFilePath('vendors', cssRe)}');
                ${ chunks.map((chunk: string) => `appendCSS('/${getChunkAssetFilePath(chunk, cssRe)}');`) }
            </script>
            <script>
                window.__initState = ${JSON.stringify(initState)}
            </script>
            <script>
                ${webpackRuntime}
            </script>
            <script src="/${getChunkAssetFilePath('vendors')}" defer></script>
            ${ chunks.map((chunk: string) => `<script src="/${getChunkAssetFilePath(chunk)}" defer></script>`) }
        </body>
        </html>
    `;
}

function getChunkAssetFilePath(chunk: string, re: RegExp = jsRe): string {
    const assetsByChunkName: Record<string, string | string[]> = stats.assetsByChunkName || {};

    let chunkAssets = assetsByChunkName[chunk] || [];
    if (isString(chunkAssets)) {
        chunkAssets = [chunkAssets];
    }
    const chunkAssetFilePath = find(chunkAssets, (filePath: string) => Boolean(filePath.match(re)));
    if (chunkAssetFilePath === undefined) {
        throw new Error(`Chunk: ${chunk} has no ${re.toString()} file`);
    }

    return chunkAssetFilePath;
}
