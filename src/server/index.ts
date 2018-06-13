import path from 'path';
import compression from 'compression';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import dotenv from 'dotenv';

import {config} from './config';
import {reactRenderRoute} from './routes';

const CURRENT_PATH = path.resolve('dist');
const PUBLIC_PATH = path.resolve(CURRENT_PATH, 'public');

dotenv.config({path: '.env'});

const expressApp: express.Express = express();

expressApp.set('port', config.get('app.port') || 3000);
expressApp.set('hostname', config.get('app.host') || 'localhost');

expressApp.use(cors());
expressApp.use(compression());
expressApp.use(logger('dev'));

expressApp.use('/', express.static(PUBLIC_PATH));
expressApp.get('*', reactRenderRoute);

expressApp.listen(expressApp.get('port'), () => {
    console.log(`Server is listening on port: 3000`);

    console.log(
        '  App is running at http://%s:%d in %s mode',
        expressApp.get('hostname'),
        expressApp.get('port'),
        expressApp.get('env')
    );
});
