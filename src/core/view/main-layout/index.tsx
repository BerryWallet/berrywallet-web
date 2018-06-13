import React from 'react';
import cn from 'classnames';
import {Copywrite} from '../../ui';
import {InlineLogo} from '../../svg';
import {IntroScreen} from '../home/intro-screen';
import {Navbar} from './navbar';
import {BackgroundLine} from './background-line';

interface IProps {
    activeSlide?: string;
}

interface IState {
    isOpenIntro: boolean;
}

export class MainLayout extends React.Component<IProps, IState> {

    public state: IState = {
        isOpenIntro: true
    };

    protected closeIntro = () => {
        this.setState({
            isOpenIntro: false
        });
    }

    public render(): JSX.Element {

        const {isOpenIntro} = this.state;
        const {activeSlide} = this.props;

        return (
            <main className={cn('main-layout', isOpenIntro && '-is-blocked-scroll')}>
                <IntroScreen isOpen={isOpenIntro} onCloseIntro={this.closeIntro}/>
                <BackgroundLine/>

                <Navbar isHide={isOpenIntro} activeSlide={activeSlide}/>
                <div className={cn('main-content')}>
                    <InlineLogo className="main-content__logo"/>
                    {this.props.children}
                    <div className="copywrite-wrapper">
                        <Copywrite/>
                    </div>
                </div>
            </main>
        );
    }
}
