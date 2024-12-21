import express from 'express';
import { userLogin } from '../controllers/userControllers.js';
import { body } from "express-validator";

const router = express.Router();

router.post('/login', [
    body('email').isEmail().withMessage("Invalid mail"),
    body('fullName.firstName').isLength({ min: 3 }).withMessage("Character must be at least 4 characters"),
    body('password').isLength({ min: 3 }).withMessage("Character must be at least 4 characters"),
], userLogin);

export default router;