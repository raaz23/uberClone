import userModel from "../models/userModel.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export const userRegister = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const { firstName, lastName } = fullName;
    if (!firstName || !lastName) {
      return res.status(400).json({ message: "First name and last name are required." });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create user
    const user = await userModel.create({
      fullName: { firstName, lastName },
      email,
      password: hashedPassword,
    });

    // Generate token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "24h",
    });

    console.log("Generated Token:", token); // Debugging log

    // Exclude password from response
    const { password: _, ...rest } = user._doc;

    // Send response with token and cookie
    return res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // Cookie expiry: 24 hours
      })
      .status(200)
      .json({ user: rest, token });
  } catch (err) {
    console.error("Error:", err.message); // Debugging log
    return res.status(500).json({
      status: "fail",
      message: "User could not be created.",
      error: err.message,
    });
  }
};



// USER LOGIN

export const userLogin =async (req, res) => {
  const { email, password } = req.body;


  if (!req.body) {
    res.status(402).json({ message: "All fields must be required" });
  }

  try {
    const user = await userModel.findOne({email}).select("+password");

    if(!user){
      return res.status(400).json({message: "User does not exist ! please enter valid email address."});
    }

    const hashPassword = bcrypt.compareSync(password, user.password);

    if(!hashPassword) {
      return res.status(404).json({message: "password does not match"});
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "24h",
    });

    
      const { password: hashedPassword, ...rest } = user._doc;

      return res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // Cookie expiry: 24 hours
      })
      .status(200)
      .json({ user: rest, token });
    
  } catch (err) {
    return res
      .status(201)
      .json({
        status: "fail",
        message: " user can't be login successfully",
        err:err.message,
      });
  }
};

// logout user

export const userLogOut = (req, res) => {
  try {
    // Clear the token from cookies
    if(!req.user){
      res.status(403).json({message:"you are not authorized to logout"});
    }
    res
      .clearCookie("access_token", { httpOnly: true, secure: true })
      .status(200)
      .json({ message: "Logout successful!" });
  } catch (error) {
    res.status(500).json({ message: "Logout failed.", error: error.message });
  }
};

