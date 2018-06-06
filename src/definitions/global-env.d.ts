declare global {

    const __isBrowser__: boolean;

    interface Window {
        __INITIAL_DATA__: string;
    }
}

export {};
