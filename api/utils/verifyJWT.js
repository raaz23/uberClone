import jwt from "jsonwebtoken";
import { errorHandler } from "./errHandler.js";

export const verifyToken = (req, res, next) => {
  try {
    // Extract token from cookies or Authorization header
    const authHeader = req.headers.authorization; 
    const token = req.cookies.access_token || (authHeader && authHeader.startsWith("Bearer ") && authHeader.split(" ")[1]);
       console.log(token);
    // If token is not provided
    if (!token) {
      return next(errorHandler(401, "Authentication token is missing!"));
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        return next(errorHandler(403, "Authentication token is invalid!"));
      }

      req.user = user; 
      next(); 
    });
  } catch (error) {
    return next(errorHandler(500, "An error occurred during authentication!"));
  }
};
