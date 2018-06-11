import React, {ReactNode} from 'react';
import cn from 'classnames';

import './topic.scss';

interface IProps extends React.HTMLProps<{}> {
    topicTitle: ReactNode;
    titleTag?: 'h1' | 'h2' | 'h3';
    subtitle?: ReactNode;
    isWhite?: boolean;
}

export class Topic extends React.Component<IProps> {
    public render(): JSX.Element {

        const {topicTitle, titleTag = 'h1', subtitle = null, className = null, isWhite = false} = this.props;

        const titleProps = {
            className: 'topic__title'
        };

        return (
            <div className={cn('topic', className, isWhite && '-is-white')}>
                {React.createElement(titleTag, titleProps, topicTitle)}
                {subtitle && <p className="topic__subtitle">{subtitle}</p>}
            </div>
        );
    }
}
