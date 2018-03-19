import * as ReactModule from 'react';
import * as ReactDOMModule from 'react-dom';
import * as UIKitViewModule from './views/ui-kit-view';
import * as WindowScrollServiceModule from './utils/window-scroll-service';
import * as WindowScrollProviderModule from './utils/window-scroll-provider';

import 'normalize.css';
import './fonts.scss';
import './critical.scss';
import './ui-kit.scss';

const rootEl = document.getElementById('root');
const initProps = (window .__initState || {}).props;

require.ensure(
    [],
    (require: WebpackRequire) => {
        // tslint:disable:variable-name
        const React = require<typeof ReactModule>('react');
        const ReactDOM = require<typeof ReactDOMModule>('react-dom');
        const { UIKitView } = require<typeof UIKitViewModule>('./views/ui-kit-view');
        const { WindowScrollService } = require<typeof WindowScrollServiceModule>('./utils/window-scroll-service');
        const { WindowScrollProvider } = require<typeof WindowScrollProviderModule>('./utils/window-scroll-provider');
        // tslint:enable:variable-name

        const windowScrollService = new WindowScrollService();

        // tslint:disable-next-line:no-any
        const render = (props: any) => ReactDOM.hydrate(
            (
                <WindowScrollProvider windowScrollService={ windowScrollService }>
                    <UIKitView { ...props } />
                </WindowScrollProvider>
            ),
            rootEl
        );

        render(initProps);
    },
    'ui-kit-async'
);
