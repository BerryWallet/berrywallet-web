import React from 'react';
import cn from 'classnames';
import './container.scss';

export class Container extends React.Component<React.HTMLProps<{}>> {
    public render(): JSX.Element {

        const {className = null, children} = this.props;

        return (
            <section className={cn('container', className)}>{children}</section>
        );
    }
}
