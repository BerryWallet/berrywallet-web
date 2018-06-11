import React from 'react';
import cn from 'classnames';
import {Navbar} from './navbar';
import {IntroScreen} from '../home/intro-screen';
import {Copywrite} from '../../ui';
import {InlineLogo} from '../../svg';

export class MainLayout extends React.Component {

    public state = {
        isOpenIntro: true
    };

    protected closeIntro = () => {
        this.setState({
            isOpenIntro: false
        });
    }

    public render(): JSX.Element {

        const {isOpenIntro} = this.state;

        return (
            <main className={cn('main-layout', isOpenIntro && '-is-blocked-scroll')}>
                <IntroScreen isOpen={isOpenIntro} onCloseIntro={this.closeIntro}/>

                <Navbar isHide={isOpenIntro}/>
                <div className={cn('main-content')}>
                    <InlineLogo className="main-content__logo"/>
                    {this.props.children}
                    <div className="copywrite-wrapper">
                        <Copywrite />
                    </div>
                </div>
            </main>
        );
    }
}
