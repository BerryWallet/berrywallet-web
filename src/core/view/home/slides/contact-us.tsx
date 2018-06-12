import React from 'react';
import {ISlideProps} from '../utils';
import {InstallButton} from '../install-button';
import {Container, ContainerSlide, Topic} from '../../../ui';

export class ContactUsSlide extends React.Component<ISlideProps> {
    public render(): JSX.Element {
        return (
            <Container>
                <ContainerSlide>
                    <Topic
                        topicTitle="Contact Us"
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
