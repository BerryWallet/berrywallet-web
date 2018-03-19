import * as React from 'react';

import { Link } from '../link/link';

export interface IUserBadgeProps {
    name: string;
    link: string;
    avatarSrc: string;
}

export function UserBadge(props: IUserBadgeProps): JSX.Element {
    const {
        name,
        link,
        avatarSrc
    } = props;

    return (
        <div className="user-badge">
            <img src={ avatarSrc } alt={ name } className="user-badge__avatar" />
            <span className="user-badge__name">{ name }</span>
            <Link className="user-badge__link">{ link }</Link>
        </div>
    );
}
