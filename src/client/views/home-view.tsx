import * as React from 'react';

import { Container } from '../components/container/container';
import { Header, HeaderMenuLink } from '../components/header/header';
import { BackgroundStub } from '../components/background-stub/background-stub';
import * as BackgroundModule from '../components/background/background';
import { Button } from '../components/button/button';
import { Quote } from '../components/quote/quote';
import { UserBadge } from '../components/user-badge/user-badge';
import { Link } from '../components/link/link';
import * as CarouselModule from '../components/carousel/carousel';
import { Footer } from '../components/footer/footer';
import { VideoPreview } from '../components/video-preview/video-preview';
import { StickyVideoContainer } from '../components/sticky-video-container/sticky-video-container';
import { PromoBlock, IPromoBlockProps } from '../components/promo-block/promo-block';
import { CarouselContainer } from '../components/carousel-container/carousel-container';
import { SubscriptionContainer } from '../components/subscription-container/subscription-container';
import { Form } from '../components/form/form';
import { Input } from '../components/input/input';
import { CarouselStub } from '../components/carousel-stub/carousel-stub';
import { SubscriptionForm } from '../components/subscription-form/subscription-from';

export interface IHomeViewProps {
    BackgroundComponent?: typeof BackgroundModule.Background;
    CarouselComponent?: typeof CarouselModule.Carousel;
}

const headerMenuLinks: HeaderMenuLink[] = [
    { text: 'Currencies' },
    { text: 'Hybrid' },
    { text: 'Security' },
    { text: 'News' },
];

const promoBlocks: IPromoBlockProps[] = [
    {
        header: 'Manage Crypto Funds with Ease',
        subHeader: 'Safest Chrome-based multi-wallet that lets you store and manage crypto funds quickly and safely.',
        buttonText: 'Add to Chrome',
    },
    {
        header: 'Several Currencies in One Place',
        subHeader: 'Keep your funds organized and flexible. Manage your digital currencies in one multi-wallet.',
        buttonText: 'Add to Chrome',
    },
    {
        header: 'Few Clicks Exchange',
        subHeader: 'Fast, easy, and not only a Multicurrency Wallet. It\'s a Hybrid Exchange too.',
        buttonText: 'Add to Chrome',
    },
    {
        header: 'Safe and Sound Personal Data',
        subHeader: 'Your blockchain assets stay safe and protected. No personal data required or shared.',
        buttonText: 'Add to Chrome',
    },
];

interface QuoteData {
    name: string;
    link: string;
    avatarSrc: string;
    content: (JSX.Element | string)[];
}

const quotes: QuoteData[] = [
    {
        name: 'Caleigh Jerde',
        link: '@er1ca_r0maguera',
        avatarSrc: 'images/avatars/1.jpg',
        content: ['“(Almost) Every Product & Design Resource You Need to Understand the Tech Ecosystem” by ', <Link key="1">@SamDeBrule</Link>, ' ', <Link key="2">#berrywallet</Link>]
    },
    {
        name: 'Lucas Schultz',
        link: '@r0maguera_er1ca',
        avatarSrc: 'images/avatars/1.jpg',
        content: ['Automatic email follow-up reminders, built into a Chrome Extension: ', <Link key="1">https://www.producthunt.com/posts/followup-#berrywallet</Link>]
    },
    {
        name: 'Carole Marvin',
        link: '@luca5_5chultz',
        avatarSrc: 'images/avatars/1.jpg',
        content: ['The fastest production car ever is fully electric. 0 to 60 in 1.9 seconds. ⚡️ ', <Link key="1">https://www.producthunt.com/posts/new-tesla-roadster </Link>]
    },
    {
        name: 'Caleigh Jerde',
        link: '@er1ca_r0maguera',
        avatarSrc: 'images/avatars/1.jpg',
        content: ['“(Almost) Every Product & Design Resource You Need to Understand the Tech Ecosystem” by ', <Link key="1">@SamDeBrule</Link>, ' ', <Link key="2">#berrywallet</Link>]
    },
    {
        name: 'Carole Marvin',
        link: '@luca5_5chultz',
        avatarSrc: 'images/avatars/1.jpg',
        content: ['The fastest production car ever is fully electric. 0 to 60 in 1.9 seconds. ⚡️ ', <Link key="1">https://www.producthunt.com/posts/new-tesla-roadster </Link>]
    },
    {
        name: 'Lucas Schultz',
        link: '@r0maguera_er1ca',
        avatarSrc: 'images/avatars/1.jpg',
        content: ['Automatic email follow-up reminders, built into a Chrome Extension: ', <Link key="1">https://www.producthunt.com/posts/followup-#berrywallet</Link>]
    },
];

export class HomeView extends React.PureComponent<IHomeViewProps, object> {
    public render(): JSX.Element {
        return (
            <div>
                { this._getBackground() }

                <Header links={ headerMenuLinks } />

                <Container>
                    <StickyVideoContainer videoPreview={ <VideoPreview alt="BerryWallet" /> }>
                        {
                            promoBlocks.map((props: IPromoBlockProps, i: number) => <PromoBlock key={ String(i) } { ...props } />)
                        }
                    </StickyVideoContainer>
                </Container>

                <CarouselContainer
                    header="Berrywallet on the Radar"
                    subHeader="Your blockchain assets stay safe and protected, your personal data never leaves your device."
                >
                    { this._getCarousel() }
                </CarouselContainer>

                <Container>
                    <SubscriptionForm />
                </Container>

                <Footer links={ headerMenuLinks } />
            </div>
        );
    }

    private _getBackground(): JSX.Element {
        const { BackgroundComponent } = this.props;
        const children = this._getCarouselItems();

        if (BackgroundComponent !== undefined) {
            return <BackgroundComponent />;
        }

        return <BackgroundStub />;
    }

    private _getCarousel(): JSX.Element {
        const { CarouselComponent } = this.props;
        const children = this._getCarouselItems();

        if (CarouselComponent !== undefined) {
            return (
                <CarouselComponent slidesToShow={ 5 }>
                    { children }
                </CarouselComponent>
            );
        }

        return (
            <CarouselStub>
                { children }
            </CarouselStub>
        );
    }

    private _getCarouselItems(): JSX.Element[] {
        return quotes.map((quoteData: QuoteData, i: number) => (
            <div key={ String(i) }>
                <Quote
                    name={ quoteData.name }
                    link={ quoteData.link }
                    avatarSrc={ quoteData.avatarSrc }
                >
                    { ...quoteData.content }
                </Quote>
            </div>
        ));
    }
}
