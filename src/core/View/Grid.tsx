import React from 'react';
import {RouteComponentProps, StaticContext} from 'react-router';
import {IGithubItem} from '../api';

interface IGridContext extends StaticContext {
    name?: string;
    repos?: IGithubItem[];
}

interface IGridProps extends RouteComponentProps<any, IGridContext> {
    fetchInitialData: (lang?: string) => Promise<any>;
}

interface IGridState {
    name?: string;
    repos?: IGithubItem[];
    loading: boolean;
}

export class Grid extends React.Component<IGridProps, IGridState> {

    public state: IGridState = {
        loading: false
    };

    public constructor(props: IGridProps) {
        super(props);

        let gridState;
        if (__isBrowser__) {
            gridState = window.__INITIAL_DATA__;

            delete window.__INITIAL_DATA__;
        } else {
            gridState = props.staticContext;
        }

        this.state = {
            ...gridState,
            loading: !gridState
        };
    }

    public componentDidUpdate(prevProps: IGridProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.fetchRepos(this.props.match.params.id);
        }
    }

    public componentDidMount(): void {
        if (!this.state.repos) {
            this.fetchRepos(this.props.match.params.id);
        }
    }

    protected fetchRepos(lang: string): void {
        document.title = this.props.match.params.id;

        this.setState(() => ({
            loading: true
        }));

        const onSuccess = (data: any) => {
            this.setState(() => {
                return {
                    ...data,
                    loading: false
                };
            });
        };

        this.props.fetchInitialData(lang).then(onSuccess);
    }

    private renderRepository = (rep: IGithubItem) => {
        return (
            <li key={rep.name} style={{margin: 30}}>
                <ul>
                    <li><a href={rep.html_url}>{rep.name}</a></li>
                    <li>@{rep.owner.login}</li>
                    <li>{rep.stargazers_count} stars</li>
                </ul>
            </li>
        );
    };

    public render(): JSX.Element {
        const {repos = null, name = null, loading = false} = this.state;

        if (loading) {
            return <p>LOADING</p>;
        }

        if (!repos) {
            return <div>No any items</div>;
        }

        return (
            <div>
                <h1>{this.props.match.params.id}</h1>

                <ul style={{display: 'flex', flexWrap: 'wrap'}}>
                    {repos && repos.map(this.renderRepository)}
                </ul>
            </div>
        );
    }
}
