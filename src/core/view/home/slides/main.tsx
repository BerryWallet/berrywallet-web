import React from 'react';
import {Container, ContainerSlide, Topic} from '../../../ui';
import {ISlideProps} from '../utils';
import {InstallButton} from '../install-button';
import {ScreenSlideComponent} from '../components/screen-slide-component';

export class MainSlide extends React.Component<ISlideProps> {
    public render(): JSX.Element {

        const {isActive} = this.props;

        return (
            <Container>
                <ContainerSlide className={isActive ? '-is-active' : undefined}>
                    <Topic
                        topicTitle="Manage crypto funds with ease"
                        subtitle="Blockchain multi-wallet that keeps the perfect balance between simplicity and mastery"
                        actionButtons={<InstallButton/>}
                    />
                </ContainerSlide>

                <ScreenSlideComponent
                    image="/image/screen/dashboard.png"
                    description={<span>
                        Single Master Seed Backup combined with 256-bit encryption algorithm ensures 100% security of
                        your wallet.
                    </span>}
                    isActive={isActive}
                    imageTitle="Crypto currency wallet dashboard"
                    imageAlt="Dashboard"
                />
            </Container>
        );
    }
}
