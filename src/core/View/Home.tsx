import React from 'react';
import {Grid} from './Grid';
import {IGithubItem} from '../api';

interface IHomeProps {
}

export class Home extends React.Component<IHomeProps> {
    public render(): JSX.Element {
        return (
            <div>Select a Language</div>
        );
    }
}
