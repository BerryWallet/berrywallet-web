import * as React from 'react';

const imageExtRe = /\.(jpe?g|png|webp)$/;

export interface IPictureProps {
    src: string;
    alt?: string;
}

export function Picture(props: IPictureProps): JSX.Element {
    const { src, alt } = props;
    const fileWithoutExt = src.replace(imageExtRe, '');

    return (
        <picture>
            <source type="image/webp" srcSet={ `${fileWithoutExt}.webp` } />
            <img src={ src } alt={ alt } />
        </picture>
    );
}
