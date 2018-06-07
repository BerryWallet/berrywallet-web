import React from 'react';
import './home.scss';
import {MainLayout} from '../';

interface IHomeProps {
}

export class Home extends React.Component<IHomeProps> {
    public render(): JSX.Element {
        return (
            <MainLayout>
                Select a Language
            </MainLayout>
        );
    }
}
