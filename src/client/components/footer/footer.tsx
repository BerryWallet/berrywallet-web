import * as React from 'react';

import { Logo } from '../logo/logo';
import { HorizontalMenu } from '../horizontal-menu/horizontal-menu';
import { Link } from '../link/link';
import { Container } from '../container/container';

export interface FooterLink {
    text: string;
    title?: string;
    href?: string;
}

export interface IFooterProps {
    links?: FooterLink[];
}

export class Footer extends React.PureComponent<IFooterProps, object> {
    public render(): JSX.Element {
        const horizontalMenu = this._renderFooterMenu();

        return (
            <footer className="footer">
                <Container className="footer__menu">
                    <Logo className="footer__logo"/>
                    { horizontalMenu }
                </Container>
                <Container className="footer__copyright">
                    <span>© Berrywallet, Inc 2013 - 2017. All rights reserved.</span>
                </Container>
            </footer>
        );
    }

    private _renderFooterMenu(): null | JSX.Element {
        const { links = [] } = this.props;
        if (links.length === 0) {
            return null;
        }

        return (
            <HorizontalMenu className="footer__horizontal-menu">
                {
                    links.map((link: FooterLink, i: number) => (
                        <span key={ String(i) }>
                            <Link
                                className="footer__link"
                                title={ link.title || link.text }
                            >
                                { link.text }
                            </Link>
                        </span>
                    ))
                }
            </HorizontalMenu>
        );
    }
}
