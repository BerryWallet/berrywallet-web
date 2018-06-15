import {Home} from './view';
import {RouteProps} from 'react-router';

export interface IApplicationRoute extends RouteProps {
    fetchInitialData?: (matchParams: any) => any;
}

export const routes: IApplicationRoute[] = [
    {
        path: '/',
        exact: true,
        component: Home
    }
];
