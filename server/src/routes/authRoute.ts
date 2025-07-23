import express from 'express';
const router = express.Router();
import   authCtrl  from '../controller/authCtrl';
import { verifyToken } from '../middleware/authMiddleware';


// @ts-ignore do-later
router.post('/register',authCtrl.register)
// @ts-ignore do-later
router.post('/login',authCtrl.login);
// @ts-ignore dont know whats happening
router.get('/me',verifyToken,authCtrl.me)




module.exports = router;