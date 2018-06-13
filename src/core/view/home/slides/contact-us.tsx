import React from 'react';
import cn from 'classnames';
import {ISlideProps} from '../utils';
import {Container, ContainerSlide, Topic} from '../../../ui';

export class ContactUsSlide extends React.Component<ISlideProps> {
    public render(): JSX.Element {
        return (
            <Container>
                <ContainerSlide className={this.props.isActive ? '-is-active' : undefined}>
                    <Topic
                        topicTitle="Contact Us"
                        subtitle={<span>
                            Don’t just take our word for it.<br/>
                            Download and check this shit out!
                        </span>}
                    />
                </ContainerSlide>

                <div className={cn('slide-sticky', {'-is-active': this.props.isActive})}>
                    <h1>Contact Us</h1>
                </div>
            </Container>
        );
    }
}
