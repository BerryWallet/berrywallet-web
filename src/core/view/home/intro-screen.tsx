import React from 'react';
import cn from 'classnames';
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
    };

    public render(): JSX.Element {

        const {isOpen = false} = this.props;

        return (
            <section className={cn('intro', isOpen && '-is-open')} onWheel={this.onScrollCapture}>
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
        );
    }
}
