import * as React from 'react';

export interface ICarouselContainerProps {
    header: React.ReactNode;
    subHeader: React.ReactNode;
    children: React.ReactNode;
}

export class CarouselContainer extends React.PureComponent<ICarouselContainerProps, object> {
    public render(): JSX.Element {
        const {
            header,
            subHeader,
            children
        } = this.props;
        return (
            <div className="carousel-container">
                <h1 className="carousel-container__header">{ header }</h1>
                <span className="carousel-container__sub-header">{ subHeader }</span>
                <div className="carousel-container__carousel">
                    { children }
                </div>
            </div>
        );
    }
}
