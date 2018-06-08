import React from 'react';
import cn from 'classnames';
import './intro-screen.scss';

interface IIntroProps extends React.HTMLProps<{}> {
    isOpen?: boolean;
    onCloseInto?: () => void;
}

export class IntroScreen extends React.Component<IIntroProps> {
    public render(): JSX.Element {

        const {isOpen = false} = this.props;

        return (
            <section className={cn('intro', isOpen && '-is-open')}>
                <div className="intro-wrapper">
                    <h1>Safest multi-currency virtual crypto wallet</h1>
                    <p>perfect balance between simplicity and mastery</p>

                    <button onClick={this.props.onCloseInto}>Close</button>
                </div>
            </section>
        );
    }
}
