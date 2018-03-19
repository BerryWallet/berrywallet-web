import * as React from 'react';

export interface IUIKitItemProps {
    title: string;
    children: React.ReactNode;
}

export function UIKitItem(props: IUIKitItemProps): JSX.Element {
    return (
        <div className="ui-kit-item">
            <span className="ui-kit-item__title">{ props.title }</span>
            <div className="ui-kit-item__body">{ props.children }</div>
        </div>
    );
}
