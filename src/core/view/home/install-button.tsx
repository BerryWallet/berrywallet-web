import React from 'react';
import {ChromeColor, FirefoxColor} from '../../svg';

interface IState {
    showButton: boolean;
}

export class InstallButton extends React.PureComponent<React.HTMLProps<{}>, IState> {

    public readonly state: IState = {
        showButton: false
    };

    public componentDidMount(): void {
        this.setState({
            showButton: true
        });
    }

    public static isFirefox(): boolean {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    }

    protected triggerInstallChrome = (event: React.MouseEvent<HTMLAnchorElement>): void => {
        if (!window.chrome) {
            return;
        }

        if (window.chrome.app.isInstalled) {
            console.log('Success installed');
            return;
        }

        const url = event.currentTarget.href;
        event.preventDefault();

        const onSuccess = (...success) => {
            console.log(success);
        };

        const onFailure = (...failur) => {
            console.log(failur);
            window.open(url, '_blank');
        };

        window.chrome.webstore.install(url, onSuccess, onFailure);
    }

    protected triggerInstallFirefox = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const itemUrl = 'https://addons.mozilla.org/firefox/downloads/file/939925/berrywallet-1.4.4-fx.xpi';
        window.open(itemUrl, '_blank');

        event.preventDefault();
    }

    protected renderChromeButton(): JSX.Element {
        const installButtonProps = {
            onClick: this.triggerInstallChrome,
            href: 'https://chrome.google.com/webstore/detail/boidgcdefidhoojfljngigkjffbodjmn',
            target: '_blank',
            className: 'btn'
        };

        return <a {...installButtonProps}><ChromeColor className="btn__icon"/> Add to Chrome</a>;
    }

    protected renderFirefoxButton(): JSX.Element {
        const installButtonProps = {
            onClick: this.triggerInstallFirefox,
            href: 'https://addons.mozilla.org/firefox/addon/berrywallet',
            target: '_blank',
            className: 'btn'
        };

        return <a {...installButtonProps}><FirefoxColor className="btn__icon"/> Add to Firefox</a>;
    }

    public render(): JSX.Element | null {

        if (!this.state.showButton) {
            return null;
        }

        if (InstallButton.isFirefox()) {
            return this.renderFirefoxButton();
        }

        return this.renderChromeButton();
    }
}
