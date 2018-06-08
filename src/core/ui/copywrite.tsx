import React from 'react';
import cn from 'classnames';

export function Copywrite(props: React.HTMLProps<{}>): JSX.Element {
    return (
        <div className={cn('text-medium', 'text-xs', props.className)}>
            © 2018 Berrywallet LLC. All rights reserved.
        </div>
    );
}
