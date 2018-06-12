import React from 'react';
import {ISlideProps} from '../utils';
import {InstallButton} from '../install-button';
import {Container, ContainerSlide, Topic} from '../../../ui';

export class MainSlide extends React.Component<ISlideProps> {
    public render(): JSX.Element {
        return (
            <Container>
                <ContainerSlide>
                    <Topic
                        topicTitle="Manage crypto funds with ease"
                        subtitle="Blockchain multi-wallet that keeps the perfect balance between simplicity and mastery"
                        actionButtons={<InstallButton/>}
                    />
                </ContainerSlide>
            </Container>
        );
    }
}
