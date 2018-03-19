import { ISubscription } from './isubscription';
import { IDestroyable } from './idestroyable';

export type ScrollHandler = (scrollTop: number) => void;

export class WindowScrollService implements ISubscription, IDestroyable {
    private readonly _subscriptions: Set<ScrollHandler> = new Set();

    public constructor() {
        window.addEventListener('scroll', this._scrollHandler, { passive: true });
        window.document.body.addEventListener('touchmove', this._scrollHandler, { passive: true });
    }

    public subscribe(handler: ScrollHandler): void {
        this._subscriptions.add(handler);
    }

    public unsubscribe(handler: ScrollHandler): void {
        this._subscriptions.delete(handler);
    }

    public destroy(): void {
        window.removeEventListener('scroll', this._scrollHandler);
        window.document.body.removeEventListener('touchmove', this._scrollHandler);
        this._subscriptions.clear();
    }

    private _scrollHandler = (event: Event) => {
        const scrollTop = window.pageYOffset;
        for (const handler of this._subscriptions) {
            handler(scrollTop);
        }
    }
}
