import React from 'react';
import cn from 'classnames';
import {map} from 'lodash';
import {Platform} from './platform';
import {platformList, IPlatformInfo} from '../../data';

import './platform.scss';

export class Platforms extends React.PureComponent<React.HTMLProps<{}>> {
    public render(): JSX.Element {
        return (
            <div className={cn('platforms', this.props.className)}>
                {map(platformList, (plt: IPlatformInfo) => {
                    return <Platform platform={plt} key={plt.alias}/>;
                })}
            </div>
        );
    }
}
