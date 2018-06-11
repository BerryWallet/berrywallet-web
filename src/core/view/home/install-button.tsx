import React from 'react';
import {ChromeColor} from '../../svg';

export class InstallButton extends React.Component<React.HTMLProps<{}>> {

    protected triggerInstall = (event: React.MouseEvent<HTMLAnchorElement>): void => {
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
    };

    public render(): JSX.Element {
        const installButtonProps = {
            onClick: this.triggerInstall,
            href: 'https://chrome.google.com/webstore/detail/boidgcdefidhoojfljngigkjffbodjmn',
            target: '_blank',
            className: 'btn'
        };

        return <a {...installButtonProps}><ChromeColor className="btn__icon"/> Add to Chrome</a>;
    }
}
