import * as ReactModule from 'react';
import * as ReactDOMModule from 'react-dom';
import * as HomeViewModule from './views/home-view';
import { IHomeViewProps } from './views/home-view';
import * as WindowScrollServiceModule from './utils/window-scroll-service';
import * as WindowScrollProviderModule from './utils/window-scroll-provider';
import * as WindowIntersectionObserverServiceModule from './utils/window-intersection-observer-service';
import * as WindowIntersectionObserverProviderModule from './utils/window-intersection-observer-provider';
import * as ApiServiceModule from './utils/api-service';
import * as ApiProviderModule from './utils/api-provider';

import { log } from './utils/logger';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

import 'normalize.css';
import './fonts.scss';
import './critical.scss';
import './main.scss';

const rootEl = document.getElementById('root');
const initProps = (window.__initState || {}).props;

require.ensure(
    [],
    async (require: WebpackRequire) => {
        // tslint:disable:variable-name
        const React = require<typeof ReactModule>('react');
        const ReactDOM = require<typeof ReactDOMModule>('react-dom');
        const { HomeView } = require<typeof HomeViewModule>('./views/home-view');
        const { WindowScrollService } = require<typeof WindowScrollServiceModule>('./utils/window-scroll-service');
        const { WindowScrollProvider } = require<typeof WindowScrollProviderModule>('./utils/window-scroll-provider');
        const { WindowIntersectionObserverService } = require<typeof WindowIntersectionObserverServiceModule>('./utils/window-intersection-observer-service');
        const { WindowIntersectionObserverProvider } = require<typeof WindowIntersectionObserverProviderModule>('./utils/window-intersection-observer-provider');
        const ApiService = require<typeof ApiServiceModule>('./utils/api-service');
        const { ApiProvider } = require<typeof ApiProviderModule>('./utils/api-provider');
        // tslint:enable:variable-name

        const windowScrollService = new WindowScrollService();
        const windowIntersectionObserverService = new WindowIntersectionObserverService();

        const render = (props: IHomeViewProps) => ReactDOM.hydrate(
            (
                <ApiProvider apiService={ ApiService }>
                    <WindowIntersectionObserverProvider windowIntersectionObserverService={ windowIntersectionObserverService }>
                        <WindowScrollProvider windowScrollService={ windowScrollService }>
                            <HomeView { ...props } />
                        </WindowScrollProvider>
                    </WindowIntersectionObserverProvider>
                </ApiProvider>
            ),
            rootEl
        );

        render(initProps);
        log('Init render');

        const { Background } = await import(/* webpackChunkName: 'background-component' */ './components/background/background');
        render({
            ...initProps,
            BackgroundComponent: Background,
        });
        log('Background loaded');

        const { Carousel } = await import(/* webpackChunkName: 'carousel-component' */ './components/carousel/carousel');

        render({
            ...initProps,
            CarouselComponent: Carousel,
            BackgroundComponent: Background,
        });
        log('Carousel loaded');
    },
    'home-async'
);
