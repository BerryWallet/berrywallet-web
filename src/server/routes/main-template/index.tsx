import React from 'react';
import serialize from 'serialize-javascript';
import fs from 'fs';
import path from 'path';

interface IProps {
    data?: any;
    title?: string;
    keywords?: string[];
    description?: string;
}

const version = '0.0.0';
const gtmKey = '';

const criticalCSS = fs.readFileSync(
    path.resolve('dist/css/critical.css'),
    'utf-8'
);

export class MainTemplate extends React.Component<IProps> {
    public render(): JSX.Element {

        const criticalLocalCss = fs.readFileSync(
            path.resolve('dist/css/critical.css'),
            'utf-8'
        );

        const {children, data = null, title = null, keywords = [], description} = this.props;

        const mainCssAttribute = {
            href: `/css/main.css?v=${version}`,
            async: false,
            rel: 'stylesheet',
            type: 'text/css'
        };

        const mainJsAttribute = {
            src: `/main.bundle.js?v=${version}`,
            defer: true
        };

        return (
            <html lang="en">
            <head>
                <meta httpEquiv="Content-type" content="text/html; charset=utf-8"/>
                <meta name="Content-language" content="en"/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta name="format-detection" content="telephone=no"/>
                <title>{title || 'BERRYWALLET'}</title>
                <meta name="keywords" content={keywords.join(', ')}/>
                <meta name="description" content={description}/>

                <link {...mainCssAttribute}/>
                <style dangerouslySetInnerHTML={{__html: criticalLocalCss}}/>
                <script {...mainJsAttribute}/>
                <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_DATA__=${serialize(data)};`}}
                        type="application/javascript"
                />
                <link rel="shortcut icon" type="image/png" href="/favicon.ico"/>
            </head>
            <body>
            <div id="app">{children}</div>
            </body>
            </html>
        );
    }
}
