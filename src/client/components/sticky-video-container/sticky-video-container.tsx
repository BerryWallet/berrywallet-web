import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import * as classnames from 'classnames';

import { VideoPreview } from '../video-preview/video-preview';

import { WindowIntersectionObserverService, IntersectionHandler } from '../../utils/window-intersection-observer-service';

export interface IStickyVideoContainerProps {
    videoPreview: JSX.Element;
    children: React.ReactNode;
}

export interface IStickyVideoContainerState {
    videoPreviewEl: HTMLDivElement | null;
    videoPreviewColumnEl: HTMLDivElement | null;
    videoPreviewElStyle: React.CSSProperties;
    isVideoPreviewIntersect: boolean;
    childrenRefs: Record<string, HTMLDivElement>;
    isChildrenIntersect: Record<string, boolean>;
}

export interface IStickyVideoContainerContext {
    windowIntersectionObserverService: WindowIntersectionObserverService;
}

export class StickyVideoContainer extends React.PureComponent<IStickyVideoContainerProps, IStickyVideoContainerState> {
    public static readonly contextTypes: PropTypes.ValidationMap<IStickyVideoContainerContext> = {
        windowIntersectionObserverService: PropTypes.object,
    };

    public readonly state: IStickyVideoContainerState = {
        videoPreviewEl: null,
        videoPreviewColumnEl: null,
        videoPreviewElStyle: {},
        isVideoPreviewIntersect: false,
        childrenRefs: {},
        isChildrenIntersect: {},
    };

    private _windowIntersectionObserverService: WindowIntersectionObserverService;
    private _ownIntersectionObserverOptions: IntersectionObserverInit = {
        rootMargin: '-100% 0% 0% 0%',
    };
    private _childrenIntersectionObserverOptions: IntersectionObserverInit = {
        rootMargin: '-25% 0% -50% 0%',
    };

    public constructor(props: IStickyVideoContainerProps, context: IStickyVideoContainerContext) {
        super(props, context);
        this._windowIntersectionObserverService = context.windowIntersectionObserverService;
    }

    public componentDidMount(): void {
        this._windowIntersectionObserverService
            .getIntersectionObserver(this._handleOwnIntersection, this._ownIntersectionObserverOptions)
            .observe(ReactDOM.findDOMNode(this));

        requestAnimationFrame(() => {
            for (const key of Object.keys(this.state.childrenRefs)) {
                this._windowIntersectionObserverService
                    .getIntersectionObserver(this._handleChildrenIntersection(key), this._childrenIntersectionObserverOptions)
                    .observe(this.state.childrenRefs[key]);
            }
        });
    }

    public componentWillUnmount(): void {
        this._windowIntersectionObserverService.removeIntersectionObserver(this._handleOwnIntersection);
    }

    public render(): JSX.Element {
        const {
            isVideoPreviewIntersect,
            isChildrenIntersect,
        } = this.state;

        return (
            <div className="sticky-video-container">
                <div
                    className="sticky-video-container__video-preview-column"
                    ref={ this._getVideoPreviewColumnRef }
                >
                    <div
                        className={ classnames('sticky-video-container__video-preview', { 'sticky-video-container__video-preview--fixed': isVideoPreviewIntersect }) }
                        ref={ this._getVideoPreviewRef }
                        style={ this.state.videoPreviewElStyle }
                    >
                        { this.props.videoPreview }
                    </div>
                </div>
                <div className="sticky-video-container__content">
                    {
                        React.Children.map(this.props.children, (child: React.ReactChild, i: number) => {
                            return (
                                <div
                                    className={ classnames('sticky-video-container__content-item', { 'i-hidden': !isChildrenIntersect[i] }) }
                                    ref={ this._getChildRef(String(i)) }
                                >
                                    { child }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    private _getVideoPreviewColumnRef = (node: HTMLDivElement) => {
        if (!this.state.videoPreviewColumnEl) {
            this.setState({ videoPreviewColumnEl: node });
        }
    }

    private _getVideoPreviewRef = (node: HTMLDivElement) => {
        if (!this.state.videoPreviewEl) {
            this.setState({ videoPreviewEl: node });
        }
    }

    private _getChildRef = (i: string) => (node: HTMLDivElement) => {
        if (!this.state.childrenRefs[i]) {
            this.setState({
                childrenRefs: {
                    ...this.state.childrenRefs,
                    [i]: node,
                },
            });
        }
    }

    private _handleOwnIntersection = (entries: IntersectionObserverEntry[]) => {
        const { videoPreviewEl, videoPreviewColumnEl } = this.state;
        if (videoPreviewEl === null || videoPreviewColumnEl === null) {
            return;
        }

        const videoPreviewElStyle: React.CSSProperties = {};
        const isVideoPreviewIntersect = entries.some((entry: IntersectionObserverEntry) => entry.isIntersecting || entry.intersectionRatio > 0);
        if (!isVideoPreviewIntersect) {
            const wh = window.innerHeight;
            const ph = videoPreviewColumnEl.getBoundingClientRect().height;
            const vh = videoPreviewEl.getBoundingClientRect().height;
            const diff = wh - ph;
            videoPreviewElStyle.bottom = `${wh / 2 - vh / 2 - diff / 2}px`;
        }

        this.setState({
            videoPreviewElStyle,
            isVideoPreviewIntersect,
        });
    }

    private _handleChildrenIntersection = (i: string) => (entries: IntersectionObserverEntry[]) => {
        const isIntersect = entries.some((entry: IntersectionObserverEntry) => entry.isIntersecting || entry.intersectionRatio > 0);
        this.setState({
            isChildrenIntersect: {
                ...this.state.isChildrenIntersect,
                [i]: isIntersect,
            }
        });
    }
}
