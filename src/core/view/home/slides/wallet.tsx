import React from 'react';
import {Container, ContainerSlide, Topic} from '../../../ui';
import {ISlideProps} from '../utils';
import {ScreenSlideComponent} from '../components/screen-slide-component';

export class WalletSlide extends React.Component<ISlideProps> {
    public render(): JSX.Element {
        return (
            <Container>
                <ContainerSlide className={this.props.isActive ? '-is-active' : undefined}>
                    <Topic
                        topicTitle="Forget About Inconvenient Wallet"
                        subtitle={<span>
                            Berrywallet is a cross-platform cryptocurrency multi-wallet that allows you to store,
                            manage and trade your cryptocurrencies conveniently without the need to switch between
                            wallets or screens.
                        </span>}
                    />
                </ContainerSlide>

                <ScreenSlideComponent
                    image="/image/screen/exchange.png"
                    description={<span>
                        Single Screen Interface allows you to manage your wallets or make transactions without
                        switching between screens and pages.
                    </span>}
                    isActive={this.props.isActive}
                    imageTitle="Exchange directly in the wallet"
                    imageAlt="Exchange"
                />
            </Container>
        );
    }
}
