import React from 'react';
import cn from 'classnames';
import {map} from 'lodash';
import {Platform} from './platform';
import {platformList, IPlatformInfo} from '../../data';

import './platform.scss';

interface IProps {
    eventLabel?: string;
}

export class Platforms extends React.PureComponent<React.HTMLProps<{}> & IProps> {
    public render(): JSX.Element {
        const {eventLabel} = this.props;

        return (
            <div className={cn('platforms', this.props.className)}>
                {map(platformList, (plt: IPlatformInfo) => {
                    return <Platform key={plt.alias} platform={plt} eventLabel={eventLabel}/>;
                })}
            </div>
        );
    }
}
