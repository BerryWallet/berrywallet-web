import {config} from '../config';

export function getUrl(): string {
    const host = config.get('app.host');
    const port = config.get('app.port');
    const isSecure = config.get('app.secure');

    return `${isSecure ? 'https' : 'http'}://${host}:${port}`;
}
