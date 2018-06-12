import React from 'react';
import {InstallButton} from '../install-button';
import {ISlideProps} from '../utils';
import {Container, ContainerSlide, Topic} from '../../../ui';

export class RoadmapSlide extends React.Component<ISlideProps> {
    public render(): JSX.Element {
        return (
            <Container>
                <ContainerSlide>
                    <Topic
                        topicTitle="Roadmap 2018"
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
