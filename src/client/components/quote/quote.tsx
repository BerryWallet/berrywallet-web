import * as React from 'react';
import * as classnames from 'classnames';
import { UserBadge, IUserBadgeProps } from '../user-badge/user-badge';

export interface IQuoteProps extends IUserBadgeProps {
    children: React.ReactNode;
}

interface ChildElementProps {
    className: string;
}

export function Quote(props: IQuoteProps): JSX.Element {
    const {
        name,
        link,
        avatarSrc,
        children,
    } = props;

    return (
        <div className="quote">
            <div className="quote__header">
                <UserBadge name={ name } link={ link } avatarSrc={ avatarSrc } />
            </div>
            <div className="quote__content">
                {
                    React.Children.map(children, (child: React.ReactChild, index: number) => {
                        if (typeof child === 'string' || typeof child === 'number') {
                            return child;
                        }

                        let childProps: object | ChildElementProps = {};
                        if (React.isValidElement<ChildElementProps>(child)) {
                            childProps = {
                                ...child.props,
                                className: classnames(child.props.className, 'quote__link')
                            };
                        }

                        return React.cloneElement(
                            child as React.ReactElement<ChildElementProps>,
                            childProps
                        );
                    })
                }
            </div>
        </div>
    );
}
