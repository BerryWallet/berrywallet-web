import React from 'react';
import cn from 'classnames';
import {Logo, Social} from '../../../svg';
import {NavModal} from './nav-modal';
import './navbar.scss';

interface INavbarProps {
    isHide?: boolean;
    activeSlide?: string;
}

interface INavbarState {
    isMenuOpen: boolean;
}

export class Navbar extends React.Component<INavbarProps, INavbarState> {

    public state: INavbarState = {
        isMenuOpen: false
    };

    protected triggerOpenOverlay = () => {
        setTimeout(() => {
            this.setState({
                isMenuOpen: !this.state.isMenuOpen
            });
        });
    };

    public render(): JSX.Element {

        const {isHide = false, activeSlide} = this.props;
        const {isMenuOpen} = this.state;

        return (
            <div className="navigation">
                <div className={cn('navigation-sidebar', {'-is-hide': isHide, '-is-menu-open': isMenuOpen})}>
                    <Logo className="navigation-sidebar__logo"/>

                    <button className="menu-trigger" onClick={this.triggerOpenOverlay}>
                        <span className="menu-trigger__line"/>
                        <span className="menu-trigger__line"/>
                    </button>

                    <div className="navigation-social">
                        <a href="https://github.com/berrywallet"
                           className="navigation-social__item"
                           target="_blank"
                        ><Social.Github/></a>

                        <a href=" https://telegram.org/berrywallet"
                           className="navigation-social__item"
                           target="_blank"
                        ><Social.Telegram/></a>

                        <a href=" https://twitter.com/berrywallet"
                           className="navigation-social__item"
                           target="_blank"
                        ><Social.Twitter/></a>

                        <a href="https://facebook.com/berrywallet"
                           className="navigation-social__item"
                           target="_blank"
                        ><Social.Facebook/></a>
                    </div>
                </div>

                <NavModal isOpen={!isHide && isMenuOpen}
                          activeSlide={activeSlide}
                          closeNavModal={this.triggerOpenOverlay}
                />
            </div>
        );
    }
}
