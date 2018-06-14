import React from 'react';
import {getUrl} from './host';

export interface IOpenGraphProps {
    title?: string;
    description?: string;
}

export class OpenGraph extends React.Component<IOpenGraphProps> {

    public render(): JSX.Element {

        const baseHost = getUrl();
        return (
            <React.Fragment>
                {/*<meta name="ICBM" content="50.440878, 30.437546"/>*/}
                {/*<meta property="fb:app_id" content="1736415216605807"/>*/}
                <meta name="geo.region" content="UA-30"/>
                <meta name="geo.placename" content="World"/>
                <meta name="geo.position" content="50.440878;30.437546"/>

                {/*<meta name="twitter:site" content="@MaksymTymchyk"/>*/}
                {/*<meta name="twitter:creator" content="@MaksymTymchyk"/>*/}
                {/*<meta name="twitter:card" content="summary_large_image"/>*/}

                <meta property="og:url" content={baseHost}/>
                <meta property="og:site_name" content="Berrywallet"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content={`${baseHost}/image/social-cover.png`}/>
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
            </React.Fragment>
        );
    }
}
