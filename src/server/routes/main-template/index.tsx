import React from 'react';
import serialize from 'serialize-javascript';
import fs from 'fs';
import path from 'path';
import {Helmet} from 'react-helmet';
import {config} from '../../config';

import {GTM} from '../../utils/gtm';

interface IProps {
    data?: any;
}

const version = config.get('app.version');
const gtmKey = config.get('app.gtmKey');
const gtmObserver = new GTM(gtmKey);

const criticalCSS = fs.readFileSync(
    path.resolve('dist/css/critical.css'),
    'utf-8'
);

export class MainTemplate extends React.Component<IProps> {

    protected renderApplication(): JSX.Element {
        const {children} = this.props;
        if (typeof children === 'string') {
            return <div id="app" dangerouslySetInnerHTML={{__html: children}}/>;
        }

        return <div id="app">{children}</div>;
    }

    protected static getCriticalCss(): string {
        try {
            return fs.readFileSync(
                path.resolve('dist/css/critical.css'),
                'utf-8'
            );
        } catch (error) {
            console.error('Cannot load Critical CSS', error);

            return '';
        }
    }

    public render(): JSX.Element {
        const {data = null} = this.props;

        const frontApplication = this.renderApplication();
        const helmet = Helmet.renderStatic();

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
                {helmet.title.toComponent()}
                {helmet.meta.toComponent()}
                <link {...mainCssAttribute}/>
                <style dangerouslySetInnerHTML={{__html: MainTemplate.getCriticalCss()}}/>
                <script {...mainJsAttribute}/>
                <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_DATA__=${serialize(data)};`}}
                        type="application/javascript"
                />
                <link rel="shortcut icon" type="image/png" href="/favicon.ico"/>
                <link rel="chrome-webstore-item"
                      href="https://chrome.google.com/webstore/detail/boidgcdefidhoojfljngigkjffbodjmn"/>

                {gtmObserver.renderHead()}
            </head>
            <body>
            {gtmObserver.renderBody()}
            {frontApplication}
            </body>
            </html>
        );
    }
}
