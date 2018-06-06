import path from 'path';
import compression from 'compression';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import dotenv from 'dotenv';

import {reactRenderRoute} from './routes';

const CURRENT_PATH = path.resolve('dist');
const PUBLIC_PATH = path.resolve(CURRENT_PATH, 'public');

dotenv.config({path: '.env'});

const expressApp: express.Express = express();

expressApp.use(cors());
expressApp.use(compression());
expressApp.use(logger('dev'));

expressApp.use('/', express.static(PUBLIC_PATH));
expressApp.get('*', reactRenderRoute);

expressApp.listen(3000, () => {
    console.log(`Server is listening on port: 3000`);
});