import React from 'react';
import {Navbar} from './navbar';

export class MainLayout extends React.Component {

    public state = {
        isNavbarHidden: false
    };

    public render(): JSX.Element {

        const {isNavbarHidden} = this.state;

        return (
            <main className="main-layout">
                <Navbar isHide={isNavbarHidden}/>
                <div>{this.props.children}</div>
            </main>
        );
    }
}
