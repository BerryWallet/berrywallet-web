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
        label: 'Home',
        target: 'home'
    }, {
        label: 'Experience',
        target: 'experience',
    }, {
        label: 'Features',
        target: 'features',
    }, {
        label: 'Roadmap',
        target: 'roadmap',
    }, {
        label: 'Ethersnake Game',
        target: 'ethersnake-game',
    }, {
        label: 'Contact Us',
        target: 'contact-us',
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
                            {map(this.slides, ({label, target}) => (
                                <NavLink key={target}
                                         activeStyle={{fontWeight: 'bold'}}
                                         className="menu-item"
                                         to={`#${label}`}
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
