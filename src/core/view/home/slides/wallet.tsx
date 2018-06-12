import React from 'react';
import {ISlideProps} from '../utils';
import {InstallButton} from '../install-button';
import {Container, ContainerSlide, Topic} from '../../../ui';

export class WalletSlide extends React.Component<ISlideProps> {
    public render(): JSX.Element {
        return (
            <Container>
                <ContainerSlide>
                    <Topic
                        topicTitle="Forget About Inconvenient Wallet"
                        subtitle={<span>
                            Berrywallet is a cross-platform cryptocurrency multi-wallet that allows you to store, manage
                            and trade your cryptocurrencies conveniently without the need to switch between wallets or
                            screens.
                        </span>}
                    />
                </ContainerSlide>
            </Container>
        );
    }
}
