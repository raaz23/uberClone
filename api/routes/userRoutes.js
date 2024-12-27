import express from 'express';
import { userProfile } from '../controllers/userControllers.js';
import { verifyToken } from '../utils/verifyJWT.js';


const router = express.Router();
router.get("/profile", verifyToken, userProfile);

export default router;