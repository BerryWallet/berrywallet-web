import React from 'react';
import {InstallButton} from '../install-button';
import {ISlideProps} from '../utils';
import {Container, ContainerSlide, Topic} from '../../../ui';

export class EthersnakeGameSlide extends React.Component<ISlideProps> {
    public render(): JSX.Element {
        return (
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
        );
    }
}
