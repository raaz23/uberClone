import express from 'express';
import env from 'dotenv';
import cors from "cors";
import cookieParser from 'cookie-parser'; 
import { errorHandler } from './utils/errHandler.js';

import connectToDB from './db/dbConnection.js';
import userLogin from "./routes/userRoutes.js";

env.config();

const app = express();

// Connect to the database
connectToDB();

// Middlewares
app.use(express.static('public')); 
app.use(express.json());
app.use(cookieParser()); 
app.use(cors());
app.use(express.urlencoded({ extended: true })); 

// Routes
app.use('/api', userLogin);

// Global error handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
});


try {
    app.listen(process.env.PORT, () => {
        console.log('Listening on port ' + process.env.PORT);
    });
} catch (e) {
    console.log("Error", e); 
}
