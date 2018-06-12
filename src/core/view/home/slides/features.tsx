import React from 'react';
import {ISlideProps} from '../utils';
import {InstallButton} from '../install-button';
import {Container, ContainerSlide, Topic} from '../../../ui';

export class FeaturesSlide extends React.Component<ISlideProps> {
    public render(): JSX.Element {
        return (
            <Container>
                <ContainerSlide>
                    <Topic
                        topicTitle="Benefit From Advanced Features"
                        subtitle={<span>
                        Security and convenience are the two cores of our ideology. To make it so we work hard on three
                        crucial parts - client-centric security model, ease and flawless user experience.
                    </span>}
                        actionButtons={<InstallButton/>}
                    />
                </ContainerSlide>
            </Container>
        );
    }
}
