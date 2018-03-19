import * as React from 'react';

export interface ISubscriptionContainerProps {
    header: React.ReactNode;
    subHeader: React.ReactNode;
    children: React.ReactNode;
}

export class SubscriptionContainer extends React.PureComponent<ISubscriptionContainerProps, object> {
    public render(): JSX.Element {
        const {
            header,
            subHeader,
            children
        } = this.props;
        return (
            <div className="subscription-container">
                <h1 className="subscription-container__header">{ header }</h1>
                <span className="subscription-container__sub-header">{ subHeader }</span>
                <div className="subscription-container__form">
                    { children }
                </div>
            </div>
        );
    }
}
