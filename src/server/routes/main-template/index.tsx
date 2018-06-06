import React from 'react';
import serialize from 'serialize-javascript';

interface IProps {
    data?: any;
    title?: string;
}

export class MainTemplate extends React.Component<IProps> {
    public render(): JSX.Element {
        const {children, data = null, title = null} = this.props;

        return (
            <html lang="en">
            <head>
                <title>{title || 'BERRYWALLET'}</title>
                <script src="/main.bundle.js" defer/>
                <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_DATA__=${serialize(data)};`}}
                        type="application/javascript"
                />
            </head>
            <body>
            <div id="app">{children}</div>
            </body>
            </html>
        );
    }
}
