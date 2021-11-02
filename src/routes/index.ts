import express from 'express';

const router = express.Router();

router.get('/', function (req, res, next: express.NextFunction) {
  return res.send(`${'kkkk api' + ' '}${process.env.NODE_ENV}`);
});

export default router;