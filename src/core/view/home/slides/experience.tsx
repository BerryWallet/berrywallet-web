import React from 'react';
import {ISlideProps} from '../utils';
import {InstallButton} from '../install-button';
import {Container, ContainerSlide, Topic} from '../../../ui';

export class ExperienceSlide extends React.Component<ISlideProps> {
    public render(): JSX.Element {
        return (
            <Container>
                <ContainerSlide>
                    <Topic
                        topicTitle="Get Used to Holistic Experience"
                        subtitle={<span>
                        We aim to make the cryptocurrency usage less hard and awkward. Berrywallet is just like your
                        regular leather wallet, except it can’t be lost, forgotten or stolen by thieves with their
                        nimble little fingers.
                    </span>}
                    />
                </ContainerSlide>
            </Container>
        );
    }
}
