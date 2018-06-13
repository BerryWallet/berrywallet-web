import React from 'react';
import cn from 'classnames';
import {Platforms} from '../../../ui';

export interface IProps extends React.HTMLProps<{}> {
    image: string;
    description: React.ReactNode;
    isActive: boolean;
    imageTitle?: string;
    imageAlt?: string;
}

export class ScreenSlideComponent extends React.Component<IProps> {
    public render(): JSX.Element {

        const {isActive, description, image, imageAlt, imageTitle} = this.props;

        return (
            <div className={cn('slide-sticky', {'-is-active': isActive})}>
                <img src={image} className="slide-sticky__image" title={imageTitle} alt={imageAlt}/>
                <p className="slide-sticky__description">{description}</p>

                <Platforms className="slide-sticky__platforms"/>
            </div>
        );
    }
}
