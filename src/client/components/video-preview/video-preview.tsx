import * as React from 'react';

import { Picture } from '../picture/picture';

export interface IVideoPreviewProps {
    alt?: string;
}

export function VideoPreview(props: IVideoPreviewProps): JSX.Element {
    return (
        <div className="video-preview">
            <Picture src="images/video-preview.png" alt={ props.alt } />
            <div className="video-preview__play-btn" />
        </div>
    );
}
