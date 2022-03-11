import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import indexRoute from './routes/index';
import userRoute from './routes/user';

const app = express();

/* Config */
app.set('PORT', process.env.PORT || 4000);

/* Middlewares */
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use('/', indexRoute);
app.use('/user', userRoute);


export default app