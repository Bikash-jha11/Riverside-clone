import express from 'express';
const router = express.Router();
import meetingCtrl from '../controller/meetingCtrl';
import { verifyToken } from '../middleware/authMiddleware';

// @ts-ignore
router.post('/createmeeting',verifyToken,meetingCtrl.savemeeting);


module.exports = router;