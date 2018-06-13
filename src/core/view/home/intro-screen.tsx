import React from 'react';
import cn from 'classnames';
import {Swipeable} from 'react-touch';
import {Topic} from '../../ui';
import {BerrywalletDummy, Logo, InlineLogo} from '../../svg';

import './intro-screen.scss';

interface IIntroProps extends React.HTMLProps<{}> {
    isOpen?: boolean;
    onCloseIntro?: () => void;
}

export class IntroScreen extends React.Component<IIntroProps> {

    protected onScrollCapture = (event: React.WheelEvent<{}>) => {
        const {onCloseIntro, isOpen} = this.props;
        if (event.deltaY > 0) {
            if (onCloseIntro && isOpen) {
                onCloseIntro();
            }

            event.preventDefault();
        }
    }

    protected onTouchCapture = () => {
        const {onCloseIntro, isOpen} = this.props;
        if (onCloseIntro && isOpen) {
            onCloseIntro();
        }
    }

    public render(): JSX.Element {

        const {isOpen = false} = this.props;

        const introSectionProps = {
            className: cn('intro', isOpen && '-is-open'),
            onWheel: this.onScrollCapture
        };

        return (
            <Swipeable onSwipeUp={this.onTouchCapture}>
                <section {...introSectionProps}>
                    <div className="intro-wrapper">
                        <div className="intro-logo">
                            <Logo/>
                            <InlineLogo className="intro-logo__name"/>
                        </div>

                        <div className="intro-content">
                            <Topic topicTitle="Safest multi-currency virtual crypto wallet"
                                   subtitle="perfect balance between simplicity and mastery"
                                   className="intro-content__text"
                                   isWhite
                                   titleTag="h2"
                            />

                            <div className="intro-content__screen">
                                <BerrywalletDummy/>
                            </div>
                        </div>

                        <button onClick={this.props.onCloseIntro} className="intro-lets-start">
                            <label className="intro-lets-start__label">Start your journey</label>
                            <div className="intro-lets-start__loader"/>
                        </button>
                    </div>
                </section>
            </Swipeable>
        );
    }
}
