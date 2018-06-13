import React from 'react';
import cn from 'classnames';
import {map} from 'lodash';
import {socialList, ISocial} from '../../../data';
import {Logo} from '../../../svg';
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
                        {map(socialList, (social: ISocial) => {
                            const socialLinkProps = {
                                href: social.url,
                                className: 'navigation-social__item',
                                target: '_blank',
                                key: social.label,
                                title: social.label
                            };

                            return <a {...socialLinkProps}>{React.createElement(social.icon)}</a>;
                        })}
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
