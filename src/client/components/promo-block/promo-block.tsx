import * as React from 'react';
import { Button } from '../button/button';

export interface IPromoBlockProps {
    header: string;
    subHeader: string;
    buttonText: string;
}

export function PromoBlock(props: IPromoBlockProps): JSX.Element {
    return (
        <div className="promo-block">
            <h1 className="promo-block__header">{ props.header }</h1>
            <span className="promo-block__sub-header">{ props.subHeader }</span>
            <Button className="promo-block__button">{ props.buttonText }</Button>
        </div>
    );
}
