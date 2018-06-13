import {ComponentClass} from 'react';
import {Logo, Social} from '../svg';

export interface ISocial {
    url: string;
    label: string;
    icon: ComponentClass;
}

export const socialList: ISocial[] = [
    {
        label: 'Github',
        url: 'https://github.com/berrywallet',
        icon: Social.Github
    }, {
        label: 'Telegram',
        url: 'https://t.me/berrywallet',
        icon: Social.Telegram
    }, {
        label: 'Twitter',
        url: 'https://twitter.com/berrywallet',
        icon: Social.Twitter
    }, {
        label: 'Facebook',
        url: 'https://facebook.com/berrywallet.io/',
        icon: Social.Facebook
    }
];
