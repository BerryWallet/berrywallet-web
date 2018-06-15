declare global {

    const __isBrowser__: boolean;

    const dataLayer: any[] | undefined;

    interface Window {
        __INITIAL_DATA__: string;

        chrome?: chrome;
    }
}

export {};
