import React from 'react';
import {renderToString} from 'react-dom/server';
import serialize from 'serialize-javascript';
import {StaticRouter, matchPath, match} from 'react-router-dom';

import {IApplicationRoute, routes} from '../../core/routes';
import {App} from '../../core/App';
import {MainTemplate} from './main-template';

export const reactRenderRoute = (req, res, next) => {

    let activeRoute: IApplicationRoute | null = null;
    let matchedParams: match<any> | null = null;

    for (const route of routes) {
        matchedParams = matchPath(req.url, route);

        if (matchedParams) {
            activeRoute = route;
            break;
        }
    }

    if (!activeRoute) {
        res.status(404).send('Page not found');
        return;
    }

    const promise = activeRoute.fetchInitialData
        ? activeRoute.fetchInitialData(matchedParams)
        : Promise.resolve();

    const onRouteSuccess = (data) => {
        const markup = renderToString(
            <MainTemplate data={data}>
                <StaticRouter location={req.url} context={{data: data}}>
                    <App/>
                </StaticRouter>
            </MainTemplate>
        );

        res.status(200)
            .send(`<!DOCTYPE html>${markup}`);
    };

    promise.then(onRouteSuccess).catch(next);
};