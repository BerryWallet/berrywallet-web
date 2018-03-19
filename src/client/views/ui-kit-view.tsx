import * as React from 'react';

import { Container } from '../components/container/container';
import { UIKitItem } from '../components/ui-kit-item/ui-kit-item';

import { Header, HeaderMenuLink } from '../components/header/header';
import { Background } from '../components/background/background';
import { VideoPreview } from '../components/video-preview/video-preview';
import { PromoBlock } from '../components/promo-block/promo-block';
import { Button } from '../components/button/button';
import { Input } from '../components/input/input';
import { Form } from '../components/form/form';
import { Quote } from '../components/quote/quote';
import { UserBadge } from '../components/user-badge/user-badge';
import { Link } from '../components/link/link';
import { Carousel } from '../components/carousel/carousel';
import { Footer } from '../components/footer/footer';

export interface IUIKitViewProps {
}

export interface IUIKitViewState {
    inputValue: string;
}

const headerMenuLinks: HeaderMenuLink[] = [
    { text: 'Currencies' },
    { text: 'Hybrid' },
    { text: 'Security' },
    { text: 'News' },
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

export class UIKitView extends React.Component<IUIKitViewProps, IUIKitViewState> {
    public readonly state: IUIKitViewState = {
        inputValue: '',
    };

    public render(): JSX.Element {
        return (
            <div>
                <Background />
                <Header links={ headerMenuLinks } />
                <Container>
                    <UIKitItem title="Video preview">
                        <div style={ { display: 'flex', justifyContent: 'center', padding: 50 } }>
                            <VideoPreview />
                        </div>
                    </UIKitItem>

                    <UIKitItem title="Promo block">
                        <div style={ { display: 'flex', justifyContent: 'center', padding: 50 } }>
                            <PromoBlock
                                header="Several Currencies in One Place"
                                subHeader="Keep your funds organized and flexible. Manage your digital currencies in one multi-wallet. "
                                buttonText="Add to Chrome"
                            />
                        </div>
                    </UIKitItem>

                    <UIKitItem title="Button">
                        <div style={ { display: 'flex', justifyContent: 'center', padding: 50 } }>
                            <Button>Add to Chrome</Button>
                        </div>
                    </UIKitItem>

                    <UIKitItem title="Input">
                        <div style={ { display: 'flex', justifyContent: 'center', padding: 50 } }>
                            <Input
                                name="email"
                                type="email"
                                value={ this.state.inputValue }
                                onChange={ this._inputChangeHandler }
                                placeholder="Your email address"
                            />
                        </div>
                    </UIKitItem>

                    <UIKitItem title="Form">
                        <div style={ { display: 'flex', justifyContent: 'center', padding: 50 } }>
                            <Form onSubmit={ this._onFormSubmit } className="form--column-center">
                                <Input name="field1" placeholder="Some form field" />
                                <Input name="field2" placeholder="Some form field" />
                                <Button>Submit</Button>
                            </Form>
                        </div>
                    </UIKitItem>

                    <UIKitItem title="User badge">
                        <div style={ { display: 'flex', justifyContent: 'center', padding: 50, background: 'white' } }>
                            <UserBadge
                                name="Lucas Schultz"
                                link="@r0maguera_er1ca"
                                avatarSrc="images/avatars/1.jpg"
                            />
                        </div>
                    </UIKitItem>

                    <UIKitItem title="Quote">
                        <div style={ { display: 'flex', justifyContent: 'center', padding: 50 } }>
                            <Quote
                                name="Lucas Schultz"
                                link="@r0maguera_er1ca"
                                avatarSrc="images/avatars/1.jpg"
                            >
                                Automatic email follow-up reminders, built into a Chrome Extension: <Link>https://www.producthunt.com/posts/followup-#berrywallet</Link>
                            </Quote>
                        </div>
                    </UIKitItem>

                    <UIKitItem title="Quotes carousel">
                        <Carousel>
                            {
                                quotes.map((quoteData: QuoteData, i: number) => (
                                    <div key={ String(i) }>
                                        <Quote
                                            name={ quoteData.name }
                                            link={ quoteData.link }
                                            avatarSrc={ quoteData.avatarSrc }
                                        >
                                            { ...quoteData.content }
                                        </Quote>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </UIKitItem>
                </Container>
                <Footer links={ headerMenuLinks } />
            </div>
        );
    }

    private _inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        // tslint:disable-next-line:no-any
        this.setState({ inputValue: (event.target as any).value });
    }

    private _onFormSubmit(formData: Record<string, string>): void {
        console.log(formData);
    }
}
