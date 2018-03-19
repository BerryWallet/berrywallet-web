import * as React from 'react';

export interface ICarouselStubProps {
    children: React.ReactNode;
}

export function CarouselStub(props: ICarouselStubProps): JSX.Element {
    return (
        <div className="carousel-stub">
            { props.children }
        </div>
    );
}
