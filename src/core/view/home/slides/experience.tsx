import React from 'react';
import {Container, ContainerSlide, Topic} from '../../../ui';
import {ISlideProps} from '../utils';
import {ScreenSlideComponent} from '../components/screen-slide-component';

export class ExperienceSlide extends React.Component<ISlideProps> {
    public render(): JSX.Element {
        const {isActive} = this.props;

        return (
            <Container>
                <ContainerSlide className={isActive ? '-is-active' : undefined}>
                    <Topic
                        topicTitle="Get Used to Holistic Experience"
                        subtitle={<span>
                        We aim to make the cryptocurrency usage less hard and awkward. Berrywallet is just like your
                        regular leather wallet, except it can’t be lost, forgotten or stolen by thieves with their
                        nimble little fingers.
                    </span>}
                    />
                </ContainerSlide>

                <ScreenSlideComponent
                    image="/image/screen/transaction.png"
                    description={<span>
                        We aim to make the cryptocurrency usage less hard and awkward. Berrywallet is just like your
                        regular leather wallet, except it can’t be lost, forgotten or stolen by thieves with their
                        nimble little fingers.
                    </span>}
                    isActive={isActive}
                    imageTitle="Get Used to Holistic Experience"
                    imageAlt="Transactions"
                />
            </Container>
        );
    }
}
