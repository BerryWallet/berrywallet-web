import {Home, Grid} from './View';
import {fetchPopularRepos, IGithubItem} from './api';
import {RouteProps, match} from 'react-router';

export interface IApplicationRoute extends RouteProps {
    fetchInitialData?: (matchParams: any) => any;
}

interface IPopularMatch {
    id: string;
}

export const routes: IApplicationRoute[] = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/popular/:id',
        component: Grid,
        fetchInitialData: (matchParams: any) => fetchPopularRepos(matchParams.id)
            .then((items: IGithubItem[] | null) => {
                return {
                    name: 'TYLOR!',
                    repos: items
                };
            })
    }
];
