import React from 'react';
import cn from 'classnames';
import {IPlatformInfo} from '../../data';

interface IPlatformProps extends React.HTMLProps<{}> {
    platform: IPlatformInfo;
}

export class Platform extends React.Component<IPlatformProps> {
    public render(): JSX.Element {

        const {className = null, platform} = this.props;

        const itemProps = {
            className: cn('platform-item', className, {
                '-inactive': !platform.url
            }),
            href: platform.url,
            target: '_blank'
        };

        return (
            <a {...itemProps}>
                {React.createElement<React.HTMLProps<{}>>(platform.icon, {
                    className: 'platform-item__icon'
                })}
            </a>
        );
    }
}
