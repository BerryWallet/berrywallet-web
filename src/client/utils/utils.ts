export function debounce<F extends Function>(func: F, waitMilliseconds: number = 50): F {
    // tslint:disable-next-line:no-any
    let timeoutId: any;

    // tslint:disable-next-line:no-any
    return function(this: any, ...args: any[]): void {
        const doLater = () => {
            timeoutId = undefined;
            func.apply(this, args);
        };

        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(doLater, waitMilliseconds);

        if (timeoutId === undefined) {
            func.apply(this, args);
        }
    } as any; // tslint:disable-line:no-any
}

export function throttle<F extends Function>(func: F, waitMilliseconds: number = 50): F {
    let isWait = false;

    // tslint:disable-next-line:no-any
    return function(this: any, ...args: any[]): void {
        if (isWait) {
            return;
        }

        func.apply(this, args);
        isWait = true;
        setTimeout(() => isWait = false, waitMilliseconds);
    } as any; // tslint:disable-line:no-any
}
