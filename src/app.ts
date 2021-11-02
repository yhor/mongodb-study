import express, { Application } from 'express';
import indexRouter from '~/routes/index';
import userRouter from '~/routes/user';
// import { JSend } from 'jsend';

export const createApp = (): Application => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));


  app.use('/', indexRouter);
  app.use('/user', userRouter);

  return app;
};