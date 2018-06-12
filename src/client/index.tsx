import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {hydrate} from 'react-dom';
import {App} from '../core/app';

import {
    WindowScrollService,
    WindowScrollProvider,
    WindowIntersectionObserverService,
    WindowIntersectionObserverProvider
} from '../core/utils';

const windowScrollService = new WindowScrollService();
const windowIntersectionObserverService = new WindowIntersectionObserverService();

hydrate(
    <BrowserRouter>
        <WindowIntersectionObserverProvider windowIntersectionObserverService={windowIntersectionObserverService}>
            <WindowScrollProvider windowScrollService={windowScrollService}>
                <App/>
            </WindowScrollProvider>
        </WindowIntersectionObserverProvider>
    </BrowserRouter>,
    document.getElementById('app')
);
