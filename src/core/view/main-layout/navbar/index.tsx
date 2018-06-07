import React from 'react';
import cn from 'classnames';
import {map} from 'lodash';
import {NavLink} from 'react-router-dom';
import {Logo} from '../../../svg';
import './navbar.scss';

interface INavbarProps {
    isHide?: boolean;
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

    protected slides = [{
        name: 'Home',
        param: 'home'
    }, {
        name: 'Experience',
        param: 'experience',
    }, {
        name: 'Features',
        param: 'features',
    }, {
        name: 'Roadmap',
        param: 'roadmap',
    }, {
        name: 'Ethersnake Game',
        param: 'ethersnake-game',
    }, {
        name: 'Contact Us',
        param: 'contact-us',
    }];

    public render(): JSX.Element {

        const {isHide = false} = this.props;
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
                        >G</a>

                        <a href=" https://twitter.com/berrywallet"
                           className="navigation-social__item"
                           target="_blank"
                        >T</a>

                        <a href="https://facebook.com/berrywallet"
                           className="navigation-social__item"
                           target="_blank"
                        >F</a>
                    </div>
                </div>

                <div className="navigation-overlay">
                    <div className="navigation-overlay-content">
                        <nav className="menu">
                            {map(this.slides, ({name, param}) => (
                                <NavLink key={param}
                                         activeStyle={{fontWeight: 'bold'}}
                                         className="menu-item"
                                         to={`#${param}`}
                                >{name}</NavLink>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}
