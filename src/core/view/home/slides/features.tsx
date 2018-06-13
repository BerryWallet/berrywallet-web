import React from 'react';
import {Container, ContainerSlide, Topic} from '../../../ui';
import {ISlideProps} from '../utils';
import {InstallButton} from '../install-button';
import {ScreenSlideComponent} from '../components/screen-slide-component';

export class FeaturesSlide extends React.Component<ISlideProps> {
    public render(): JSX.Element {
        const {isActive} = this.props;

        return (
            <Container>
                <ContainerSlide className={isActive ? '-is-active' : undefined}>
                    <Topic
                        topicTitle="Benefit From Advanced Features"
                        subtitle={<span>
                            Security and convenience are the two cores of our ideology. To make it so we work hard on three
                            crucial parts - client-centric security model, ease and flawless user experience.
                        </span>}
                        actionButtons={<InstallButton/>}
                    />
                </ContainerSlide>

                <ScreenSlideComponent
                    image="/image/screen/wallets.png"
                    description={<span>
                        Bitcoin mining fee selection with real-time rate updates based on the latest network statistics
                        provides you the opportunity to earn more with the most loyal fees.
                    </span>}
                    isActive={isActive}
                    imageTitle="Berrywallet supports Dash, Bitcoin, Litecoin and Ethereum"
                    imageAlt="Wallets"
                />
            </Container>
        );
    }
}
