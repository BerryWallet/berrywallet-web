import React from 'react';
import './home.scss';
import {MainLayout} from '../';
import {Container, ContainerSlide} from '../../ui';

interface IHomeProps {
}

export class Home extends React.Component<IHomeProps> {
    public render(): JSX.Element {
        return (
            <MainLayout>
                <Container>
                    <ContainerSlide>
                        <h2>Manage crypto funds with ease</h2>
                        <p>Blockchain multi-wallet that keeps the perfect balance between simplicity and mastery</p>
                    </ContainerSlide>
                </Container>

                <Container>
                    <ContainerSlide>
                        <h2>Get Used to Holistic Experience</h2>
                        <p>
                            We aim to make the cryptocurrency usage less hard and awkward. Berrywallet is just like
                            your regular leather wallet, except it can’t be lost, forgotten or stolen by thieves with
                            their nimble little fingers.
                        </p>
                    </ContainerSlide>
                </Container>

                <Container>
                    <ContainerSlide>
                        <h2>Forget About Inconvenient Wallet</h2>
                        <p>
                            Berrywallet is a cross-platform cryptocurrency multi-wallet that allows you to store,
                            manage and trade your cryptocurrencies conveniently without the need to switch between
                            wallets or screens.
                        </p>
                    </ContainerSlide>
                </Container>

                <Container>
                    <ContainerSlide>
                        <h2>Benefit From Advanced Features</h2>
                        <p>
                            Security and convenience are the two cores of our ideology. To make it so we work hard
                            on three crucial parts - client-centric security model, ease and flawless user experience.
                        </p>
                    </ContainerSlide>
                </Container>

                <Container>
                    <ContainerSlide>
                        <h2>Roadmap 2018</h2>
                        <p>
                            Don’t just take our word for it.<br/>
                            Download and check this shit out!
                        </p>
                    </ContainerSlide>
                </Container>

                <Container>
                    <ContainerSlide>
                        <h2>Play a Game and Win 1 Ethereum</h2>
                        <p>
                            Don’t just take our word for it.<br/>
                            Download and check this shit out!
                        </p>
                    </ContainerSlide>
                </Container>

                <Container>
                    <ContainerSlide>
                        <h2>Contact Us</h2>
                        <p>
                            Don’t just take our word for it.<br/>
                            Download and check this shit out!
                        </p>
                    </ContainerSlide>
                </Container>
            </MainLayout>
        );
    }
}
