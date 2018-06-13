import React from 'react';
import {ISlideProps} from './utils';
import {
    MainSlide,
    ExperienceSlide,
    WalletSlide,
    FeaturesSlide,
    RoadmapSlide,
    EthersnakeGameSlide,
    ContactUsSlide
} from './slides';

export interface IHomeSlide {
    key: string;
    label: string;
    node: React.ComponentClass<ISlideProps>;
}

export const homeSlides: IHomeSlide[] = [
    {
        key: 'home',
        label: 'Home',
        node: MainSlide
    }, {
        key: 'experience',
        label: 'Experience',
        node: ExperienceSlide
    }, {
        key: 'wallet',
        label: 'Wallet',
        node: WalletSlide
    }, {
        key: 'features',
        label: 'Features',
        node: FeaturesSlide
    }, {
        key: 'roadmap',
        label: 'Roadmap',
        node: RoadmapSlide
    },
    // {
    //     key: 'ethersnake-game',
    //     label: 'Ethersnake Game',
    //     node: EthersnakeGameSlide
    // },
    {
        key: 'contact-us',
        label: 'Contact Us',
        node: ContactUsSlide
    }
];
