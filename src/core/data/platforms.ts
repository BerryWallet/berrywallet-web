import {ComponentClass} from 'react';
import {Dictionary} from 'lodash';
import {Browser, Platform} from '../svg';

export interface IPlatformInfo {
    name: string;
    alias: string;
    icon: ComponentClass;
    url?: string;
}

export const platformList: Dictionary<IPlatformInfo> = {
    chrome: {
        alias: 'chrome',
        name: 'Chrome Extension',
        icon: Browser.Chrome,
        url: 'https://chrome.google.com/webstore/detail/boidgcdefidhoojfljngigkjffbodjmn'
    },
    firefox: {
        alias: 'firefox',
        name: 'Firefox Add-on',
        icon: Browser.Firefox,
        url: 'https://addons.mozilla.org/firefox/addon/berrywallet'
    },
    apple: {
        alias: 'apple',
        name: 'iOS Application',
        icon: Platform.Apple
    },
    android: {
        alias: 'android',
        name: 'Android Application',
        icon: Platform.Android
    }
};
