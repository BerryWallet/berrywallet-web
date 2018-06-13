import React from 'react';
import cn from 'classnames';
import './copywrite.scss';

export function Copywrite(props: React.HTMLProps<{}>): JSX.Element {
    return (
        <div className={cn('copywrite', 'text-medium', 'text-xs', props.className)}>
            © 2018 Berrywallet LLC. All rights reserved.
        </div>
    );
}
