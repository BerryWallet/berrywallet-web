import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { template } from './template';

export interface IInitState<P extends object> {
    props?: P;
}

export abstract class BaseView<T extends IInitState<object>, C extends React.ComponentClass> {
    private _title: string;
    private _initState: T;
    private _chunks: string[];

    public constructor(title: string, chunks: string[], initState: T) {
        this._title = title;
        this._chunks = chunks;
        this._initState = initState;
    }

    public render(): string {
        const { props = {} } = this._initState;
        const appString = renderToString(React.createElement(this._getComponent(), props));

        return template({
            body: appString,
            title: this._title,
            initState: this._initState,
            chunks: this._chunks,
        });
    }

    protected abstract _getComponent(): C;
}
