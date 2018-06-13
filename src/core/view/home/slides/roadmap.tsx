import React from 'react';
import cn from 'classnames';
import {map} from 'lodash';
import {ISlideProps} from '../utils';
import {IRoadmapPoint, IRoadmapSegment, roadmapPoints} from '../../../data';
import {Container, ContainerSlide, Topic} from '../../../ui';
import {ArrowLeft} from '../../../svg';
import './roadmap.scss';

export class RoadmapSlide extends React.Component<ISlideProps> {

    protected renderSegment = (segment: IRoadmapSegment, index: number) => {
        return (
            <li key={index} className="roadmap-segment">
                <label className="roadmap-segment__label">{segment.label}</label>
                <ul className="roadmap-points">{map(segment.points, this.renderPoint)}</ul>
            </li>
        );
    };

    protected renderPoint = (point: IRoadmapPoint, index: number) => {
        return (
            <li key={index} className="roadmap-point">
                <label className="roadmap-point__label">{point.label}</label>
                {point.isCurrent && <span className="roadmap-point__current-label">
                    We are here <ArrowLeft className="roadmap-point__current-label-icon"/>
                </span>}
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
                <div className={cn('slide-sticky', 'slide-sticky-roadmap', {'-is-active': isActive})}>
                    <ul className="roadmap">
                        {map(roadmapPoints, this.renderSegment)}
                    </ul>
                </div>
            </Container>
        );
    }
}
