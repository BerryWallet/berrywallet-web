import * as express from 'express';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as dotenv from 'dotenv';
import * as path from 'path';

if (process.env.NODE_ENV !== 'production') {
    console.log(path.resolve(__dirname, '../../dev.env'));
    dotenv.config({ path: path.resolve(__dirname, '../../dev.env') });
}

import * as Controllers from './controllers';

const expressApp = express();
expressApp.set('port', process.env.PORT || 3000);

expressApp.use(compression());
expressApp.use(logger('dev'));
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: true }));
expressApp.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.locals.user = req.user;
    next();
});

expressApp.use(express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 }));
expressApp.use(express.static(path.join(__dirname, '../public/volume')));


/**
 * Primary app routes.
 */
expressApp.get('/', Controllers.Home.index);
expressApp.post('/subscribe', Controllers.Home.subscribe);
expressApp.get('/ui-kit', Controllers.UIKit.index);

export {
    expressApp
};
