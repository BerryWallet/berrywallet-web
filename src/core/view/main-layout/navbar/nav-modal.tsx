import React from 'react';
import {map} from 'lodash';
import cn from 'classnames';
import {homeSlides, IHomeSlide} from '../../home/home-slides';
import {Copywrite, Platforms} from '../../../ui';
import {Oval, InlineLogo} from '../../../svg';

interface INavModalProps {
    isOpen?: boolean;
    activeSlide?: string;
    closeNavModal?: () => void;
}

export class NavModal extends React.Component<INavModalProps> {

    protected onClickMenuItem = (key: string) => {
        const {closeNavModal} = this.props;

        return (event: React.MouseEvent) => {

            const elementToScroll = document.getElementById(`slide-${key}`);
            if (elementToScroll) {
                document.getElementsByTagName('html')[0].scrollTop = elementToScroll.offsetTop;
            }

            if (closeNavModal) {
                closeNavModal();
            }
        };
    }

    public render(): JSX.Element {
        const {isOpen = false, activeSlide = null} = this.props;

        return (
            <div className={cn('navigation-modal', isOpen && '-is-open')}>
                <div className="navigation-modal-wrapper">
                    <Oval className="navigation-modal-decoration"/>

                    <div className="navigation-modal-content">
                        <InlineLogo className="navigation-modal-logo"/>
                        <nav className={cn('menu', isOpen && '-is-visible')}>
                            {map(homeSlides, (slide: IHomeSlide) => (
                                <div key={slide.key}
                                     className={cn('menu-item', {'-active': activeSlide === slide.key})}
                                     onClick={this.onClickMenuItem(slide.key)}
                                >{slide.label}</div>
                            ))}
                        </nav>

                        <div className="navigation-modal-footer">
                            <Platforms eventLabel="NAV:MODAL"/>
                            <Copywrite/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
