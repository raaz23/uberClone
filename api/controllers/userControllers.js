import userModel from "../models/userModel.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userLogin = async (req, res) => {
  const { fullName, email, password } = req.body;

  const { firstName, lastName } = fullName;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }
  

  if (!firstName || !lastName || !email || !password) {
    res.status(400).json({ message: "All fields must be required" });
  }

  const hashPassword = bcrypt.hashSync(password, 10);

  try {
    const user = await userModel.create({
      fullName: { firstName: firstName, lastName: lastName },
      email: email,
      password: hashPassword,
    });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);
      const expiryDate = new Date(Date.now() + 3600000);
      const { password: hashedPassword, ...rest } = user._doc;

     return res
        .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
        .status(200)
        .json(rest);
    
  } catch (err) {
    return res
      .status(201)
      .json({
        status: "fail",
        message: " user can't created successfully",
        err:err.message,
      });
  }
};
