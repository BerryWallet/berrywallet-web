import React from 'react';
import {map} from 'lodash';
import {Route, RouteComponentProps, Switch} from 'react-router-dom';

import {NoMatch, Navbar} from './View';
import {routes, IApplicationRoute} from './routes';

interface IAppProps {
}

export class App extends React.Component<IAppProps> {

    protected resolveRoute = (appRoute: IApplicationRoute) => {
        const {path, exact, component, ...anyProps} = appRoute;

        const routeProps = {
            key: path,
            path: path,
            exact: exact,
            render: (props: RouteComponentProps<any>) => {
                return React.createElement(component || '', {
                    ...props,
                    ...anyProps
                });
            }
        };

        return <Route {...routeProps}/>;
    };

    public render(): JSX.Element {
        return (
            <div>
                <Navbar/>

                <Switch>
                    {map(routes, this.resolveRoute)}
                    <Route render={(props: RouteComponentProps<any>) => <NoMatch {...props} />}/>
                </Switch>
            </div>

        );
    }
}
