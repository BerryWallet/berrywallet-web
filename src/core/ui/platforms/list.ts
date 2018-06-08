import {ComponentClass} from 'react';
import {Dictionary} from 'lodash';
import {Browser} from '../../svg';

export interface IPlatformInfo {
    alias: string;
    icon: ComponentClass;
    url?: string;
}

export const platformList: Dictionary<IPlatformInfo> = {
    edge: {
        alias: 'edge',
        icon: Browser.Edge
    },
    chrome: {
        alias: 'chrome',
        icon: Browser.Chrome,
        url: 'https://chrome.google.com/webstore/detail/berrywallet/boidgcdefidhoojfljngigkjffbodjmn'
    },
    firefox: {
        alias: 'firefox',
        icon: Browser.Firefox,
        url: 'https://addons.mozilla.org/firefox/addon/berrywallet'
    },
    safari: {
        alias: 'safari',
        icon: Browser.Safari
    },
    opera: {
        alias: 'opera',
        icon: Browser.Opera
    }
};
