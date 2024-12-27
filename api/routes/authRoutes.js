import express from 'express';
import { userLogin, userRegister, userLogOut } from '../controllers/authControllers.js';
import { verifyToken } from '../utils/verifyJWT.js';
import { body } from "express-validator";

const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage("Invalid mail"),
    body('fullName.firstName').isLength({ min: 3 }).withMessage("Character must be at least 4 characters"),
    body('password').isLength({ min: 3 }).withMessage("Character must be at least 4 characters"),
], userRegister);

router.post('/login', userLogin);
router.post("/logout", verifyToken, userLogOut);

export default router;
