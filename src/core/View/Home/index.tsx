import React from 'react';
import './home.scss';

interface IHomeProps {
}

export class Home extends React.Component<IHomeProps> {
    public render(): JSX.Element {
        return (
            <div className="home">Select a Language</div>
        );
    }
}
