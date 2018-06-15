import React from 'react';
import cn from 'classnames';
import {IPlatformInfo} from '../../data';

interface IPlatformProps extends React.HTMLProps<{}> {
    platform: IPlatformInfo;
}

export class Platform extends React.PureComponent<IPlatformProps> {
    public render(): JSX.Element {

        const {className = null, platform} = this.props;

        const itemProps = {
            className: cn('platform-item', className, {
                '-inactive': !platform.url
            }),
            title: platform.title,
            href: platform.url,
            target: '_blank'
        };

        return (
            <a {...itemProps}>
                {React.createElement<React.HTMLProps<{}>>(platform.icon, {
                    className: 'platform-item__icon'
                })}
                <label className="platform-item__soon">{platform.url ? platform.name : 'Coming soon'}</label>
            </a>
        );
    }
}
