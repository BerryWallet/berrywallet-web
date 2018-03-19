import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classnames from 'classnames';
import { throttle } from '../../utils/utils';

import { Logo } from '../logo/logo';
import { HorizontalMenu } from '../horizontal-menu/horizontal-menu';
import { Link } from '../link/link';

import { WindowScrollService, ScrollHandler } from '../../utils/window-scroll-service';

export interface HeaderMenuLink {
    text: string;
    title?: string;
    href?: string;
}

export interface IHeaderProps {
    links?: HeaderMenuLink[];
}

export interface IHeaderState {
    isScrolled: boolean;
}

export interface IHeaderContext {
    windowScrollService: WindowScrollService;
}

export class Header extends React.PureComponent<IHeaderProps, IHeaderState> {
    public static readonly contextTypes: PropTypes.ValidationMap<IHeaderContext> = {
        windowScrollService: PropTypes.object,
    };

    public readonly state: IHeaderState = {
        isScrolled: false,
    };

    private _windowScrollService: WindowScrollService;
    private _throttledScrollHandler: ScrollHandler = throttle(this._scrollHandler.bind(this), 100);

    public constructor(props: IHeaderProps, context: IHeaderContext) {
        super(props, context);
        this._windowScrollService = context.windowScrollService;
    }

    public componentDidMount(): void {
        document.body.classList.add('header--fixed');
        this._windowScrollService.subscribe(this._throttledScrollHandler);
    }

    public componentWillUnmount(): void {
        this._windowScrollService.unsubscribe(this._throttledScrollHandler);
    }

    public render(): JSX.Element {
        const horizontalMenu = this._renderHeaderMenu();

        return (
            <header className={ classnames('header', { 'i-scrolled': this.state.isScrolled }) }>
                <Logo className="header__logo"/>
                { horizontalMenu }
            </header>
        );
    }

    private _renderHeaderMenu(): null | JSX.Element {
        const { links = [] } = this.props;
        if (links.length === 0) {
            return null;
        }

        return (
            <HorizontalMenu className="header__horizontal-menu">
                {
                    links.map((link: HeaderMenuLink, i: number) => (
                        <span key={ String(i) }>
                            <Link
                                className="header__link"
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

    private _scrollHandler(scrollTop: number): void {
        const { isScrolled } = this.state;
        if (isScrolled && scrollTop === 0) {
            this.setState({ isScrolled: false });
        } else if (!isScrolled && scrollTop > 0) {
            this.setState({ isScrolled: true });
        }
    }
}
