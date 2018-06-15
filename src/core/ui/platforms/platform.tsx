import React from 'react';
import cn from 'classnames';
import {IPlatformInfo} from '../../data';
import {sendAnaliticsEvent} from '../../../client/utils';

interface IPlatformProps extends React.HTMLProps<{}> {
    platform: IPlatformInfo;
    eventLabel?: string;
}

export class Platform extends React.PureComponent<IPlatformProps> {

    protected clickPlatformLink = () => {
        const {platform, eventLabel} = this.props;

        sendAnaliticsEvent(`STORE:${platform.alias.toLocaleUpperCase()}`, 'OPEN', eventLabel);
    };

    public render(): JSX.Element {
        const {className = null, platform} = this.props;

        const itemProps = {
            onClick: this.clickPlatformLink,
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
