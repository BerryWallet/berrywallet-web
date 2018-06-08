import React from 'react';
import {map} from 'lodash';
import {NavLink} from 'react-router-dom';
import cn from 'classnames';

import {Copywrite, Platforms} from '../../../ui';
import {Oval, InlineLogo} from '../../../svg';

interface INavModalProps {
    isOpen?: boolean;
}

export class NavModal extends React.Component<INavModalProps> {

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

        const {isOpen = false} = this.props;

        return (
            <div className={cn('navigation-modal', isOpen && '-is-open')}>
                <div className="navigation-modal-wrapper">
                    <Oval className="navigation-modal-decoration"/>

                    <div className="navigation-modal-content">
                        <InlineLogo className="navigation-modal-logo"/>
                        <nav className={cn('menu', isOpen && '-is-visible')}>
                            {map(this.slides, ({name, param}) => (
                                <NavLink key={param}
                                         activeStyle={{fontWeight: 'bold'}}
                                         className="menu-item"
                                         to={`#${param}`}
                                >{name}</NavLink>
                            ))}
                        </nav>

                        <div className="navigation-modal-footer">
                            <Platforms/>
                            <Copywrite/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
