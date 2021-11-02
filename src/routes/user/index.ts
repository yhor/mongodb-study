import express from 'express';
import { userList } from '~/controllers/user';

const router = express.Router();

router.get('/', userList);

export default router;