import React from 'react';
import cn from 'classnames';
import {map} from 'lodash';
import {ISlideProps} from '../utils';
import {IRoadmapPoint, IRoadmapSegment, roadmapPoints} from '../../../data';
import {Container, ContainerSlide, Topic} from '../../../ui';
import {ArrowLeft} from '../../../svg';

export class RoadmapSlide extends React.Component<ISlideProps> {

    protected renderSegment = (segment: IRoadmapSegment, index: number) => {
        return (
            <li key={index}>
                <label>{segment.label}</label>
                <ul>{map(segment.points, this.renderPoint)}</ul>
            </li>
        );
    };

    protected renderPoint = (point: IRoadmapPoint, index: number) => {
        return (
            <li key={index}>
                <label>{point.label}</label>
                {point.isCurrent && <span>We are here <ArrowLeft/></span>}
            </li>
        );
    };

    public render(): JSX.Element {
        const {isActive} = this.props;

        return (
            <Container>
                <ContainerSlide className={this.props.isActive ? '-is-active' : undefined}>
                    <Topic
                        topicTitle="Roadmap 2018"
                        subtitle={<span>
                            Don’t just take our word for it.<br/>
                            Download and check this shit out!
                        </span>}
                    />
                </ContainerSlide>
                <div className={cn('slide-sticky', {'-is-active': isActive})}>
                    <ul>
                        {map(roadmapPoints, this.renderSegment)}
                    </ul>
                </div>
            </Container>
        );
    }
}
