import React from 'react';
import {map, findKey, debounce} from 'lodash';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {WindowIntersectionObserverService, IntersectionHandler} from '../../utils';
import {MainLayout} from '../';
import {sendAnaliticsEvent} from '../../../client/utils';
import {homeSlides, IHomeSlide} from './home-slides';

import './home.scss';

interface IHomeProps {
}

export interface IHomeContext {
    windowIntersectionObserverService: WindowIntersectionObserverService;
}

export interface IHomeState {
    childrenRefs: Record<string, HTMLDivElement>;
    isChildrenIntersect: Record<string, boolean>;
}

export class Home extends React.PureComponent<IHomeProps, IHomeState> {

    protected debounceHandleViewScreen;

    public static readonly contextTypes: PropTypes.ValidationMap<IHomeContext> = {
        windowIntersectionObserverService: PropTypes.object,
    };

    public readonly state: IHomeState = {
        childrenRefs: {},
        isChildrenIntersect: {},
    };

    private _windowIntersectionObserverService: WindowIntersectionObserverService;
    private _childrenIntersectionObserverOptions: IntersectionObserverInit = {
        rootMargin: '-50% 0% -50% 0%'
    };

    public constructor(props: IHomeProps, context: IHomeContext) {
        super(props, context);
        this._windowIntersectionObserverService = context.windowIntersectionObserverService;
    }

    public componentDidMount(): void {
        requestAnimationFrame(() => {
            for (const key of Object.keys(this.state.childrenRefs)) {
                this._windowIntersectionObserverService
                    .getIntersectionObserver(this._handleChildrenIntersection(key), this._childrenIntersectionObserverOptions)
                    .observe(this.state.childrenRefs[key]);
            }
        });

        this.debounceHandleViewScreen = debounce(
            (viewKey: string) => {
                sendAnaliticsEvent('VIEW:SCREEN', viewKey);
            },
            500
        );
    }

    public componentWillUnmount(): void {
        // this._windowIntersectionObserverService.removeIntersectionObserver(this._handleOwnIntersection);
    }

    private _handleChildrenIntersection = (i: string) => (entries: IntersectionObserverEntry[]) => {
        const isIntersect = entries.some(
            (entry: IntersectionObserverEntry) => entry.isIntersecting || entry.intersectionRatio > 0
        );

        if (isIntersect && this.debounceHandleViewScreen) {
            this.debounceHandleViewScreen(i);
        }

        this.setState({
            isChildrenIntersect: {
                ...this.state.isChildrenIntersect,
                [i]: isIntersect,
            }
        });
    }

    private _getChildRef = (key: string) => (node: HTMLDivElement) => {
        if (!this.state.childrenRefs[key]) {
            this.setState(() => {
                return {
                    childrenRefs: {
                        ...this.state.childrenRefs,
                        [key]: node
                    }
                };
            });
        }
    }

    public render(): JSX.Element {
        const {isChildrenIntersect} = this.state;

        return (
            <MainLayout activeSlide={findKey(isChildrenIntersect)}>
                <Helmet>
                    <title>Berrywallet - PC virtual wallet for Bitcoin, Ethereum, Dash & Litecoin</title>
                    <meta name="description"
                          content="Safest blockchain cryptocurrency multi-wallet with a perfect balance between simplicity and mastery"/>
                    <meta property="og:title"
                          content="Berrywallet - PC virtual wallet for Bitcoin, Ethereum, Dash & Litecoin"/>
                    <meta property="og:description"
                          content="Safest blockchain cryptocurrency multi-wallet with a perfect balance between simplicity and mastery"/>
                </Helmet>

                {map(homeSlides, (slide: IHomeSlide) => {
                    return (
                        <div key={slide.key} ref={this._getChildRef(slide.key)} id={`slide-${slide.key}`}>
                            {React.createElement(slide.node, {
                                isActive: isChildrenIntersect[slide.key] as boolean
                            })}
                        </div>
                    );
                })}
            </MainLayout>
        );
    }
}
