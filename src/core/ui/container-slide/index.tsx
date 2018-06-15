import React from 'react';
import cn from 'classnames';
import './slide.scss';

export class ContainerSlide extends React.PureComponent<React.HTMLProps<{}>> {
    public render(): JSX.Element {
        const {className = null, children} = this.props;
        return (
            <div className={cn('slide', className)}>
                <div className="slide-wrapper">{children}</div>
            </div>
        );
    }
}
