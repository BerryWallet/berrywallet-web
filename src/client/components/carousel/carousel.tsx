import * as React from 'react';
import Slider from 'react-slick';

export interface ICarouselProps {
    children: React.ReactNode;
    slidesToShow?: number;
}

export function Carousel(props: ICarouselProps): JSX.Element {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: true,
        slidesToShow: props.slidesToShow || 3,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1 } },
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 1600, settings: { slidesToShow: 3 } },
            { breakpoint: 10000, settings: { slidesToShow: props.slidesToShow || 3 } },
        ]
    };

    return (
        <div className="carousel">
            <Slider { ...settings }>
                { props.children }
            </Slider>
        </div>
    );
}

// tslint:disable-next-line:no-any
function Arrow(props: any): any {
    const { className, style, onClick } = props;
    return (
        <div
            className={ className }
            onClick={ onClick }
        />
    );
}
