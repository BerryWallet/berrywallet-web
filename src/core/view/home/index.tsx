import React from 'react';
import './home.scss';
import {MainLayout} from '../';
import {Container, ContainerSlide, Topic} from '../../ui';

interface IHomeProps {
}

export class Home extends React.Component<IHomeProps> {
    public render(): JSX.Element {
        return (
            <MainLayout>
                <Container>
                    <ContainerSlide>
                        <Topic
                            topicTitle="Manage crypto funds with ease"
                            subtitle={<span>
                                Blockchain multi-wallet that keeps the perfect balance between simplicity and mastery
                            </span>}
                        />
                    </ContainerSlide>
                </Container>

                <Container>
                    <ContainerSlide>
                        <Topic
                            topicTitle="Get Used to Holistic Experience"
                            subtitle={<span>
                                We aim to make the cryptocurrency usage less hard and awkward. Berrywallet is just
                                like your regular leather wallet, except it can’t be lost, forgotten or stolen by
                                thieves with their nimble little fingers.
                            </span>}
                        />
                    </ContainerSlide>
                </Container>

                <Container>
                    <ContainerSlide>
                        <Topic
                            topicTitle="Forget About Inconvenient Wallet"
                            subtitle={<span>
                                Berrywallet is a cross-platform cryptocurrency multi-wallet that allows you to
                                store, manage and trade your cryptocurrencies conveniently without the need to
                                switch between wallets or screens.
                            </span>}
                        />
                    </ContainerSlide>
                </Container>

                <Container>
                    <ContainerSlide>
                        <Topic
                            topicTitle="Benefit From Advanced Features"
                            subtitle={<span>
                                Security and convenience are the two cores of our ideology. To make it so we work hard
                                on three crucial parts - client-centric security model, ease and flawless user
                                experience.
                            </span>}
                        />
                    </ContainerSlide>
                </Container>

                <Container>
                    <ContainerSlide>
                        <Topic
                            topicTitle="Roadmap 2018"
                            subtitle={<span>
                                Don’t just take our word for it.<br/>
                                Download and check this shit out!
                            </span>}
                        />
                    </ContainerSlide>
                </Container>

                <Container>
                    <ContainerSlide>
                        <Topic
                            topicTitle={<span>Play a Game and <br/>Win 1 Ethereum</span>}
                            subtitle={<span>
                                Don’t just take our word for it.<br/>
                                Download and check this shit out!
                            </span>}
                        />
                    </ContainerSlide>
                </Container>

                <Container>
                    <ContainerSlide>
                        <Topic
                            topicTitle="Contact Us"
                            subtitle={<span>
                                Don’t just take our word for it.<br/>
                                Download and check this shit out!
                            </span>}
                        />
                    </ContainerSlide>
                </Container>
            </MainLayout>
        );
    }
}
