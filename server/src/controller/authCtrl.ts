import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
const jwt = require("jsonwebtoken");
import User from "../model/User";

interface AuthCrl {
  register: () => void;
}

interface customReq extends Request {
  user?: any;
}

const authCtrl = {
  register: async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
      const existing = await User.findOne({ username });
      if (existing)
        return res.status(400).json({ msg: "Email already in use" });

      if (!username || !password) {
        return res.status(400).json({ msg: "Please add all field" });
      }

      if (password.length < 6) {
        return res
          .status(400)
          .json({ msg: "Paaword should be atleast 6 digit" });
      }

      if (username.length > 8) {
        return res.status(400).json({ msg: "Too big username" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,

        password: hashedPassword,
      });

      const token = jwt.sign(
        { id: newUser._id },
        process.env.JWT_SECRET as string,
        { expiresIn: "7d" }
      );

      await newUser.save();

      res.cookie("token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        httpOnly: true,
        secure: false,
         // ✅ set to true in production with HTTPS
           //@ts-ignore
        sameSite: 'Lax', // ✅ allows sending in most cross-origin requests
      });
      res.status(201).json({
        user: {
          name: newUser.username,
        },
        token,
      });
    } catch (err) {
      res.status(500).json({ msg: "Server error" });
    }
  },

  login: async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username });
      if (!user){
        return res.status(400).json({ msg: "Invalid username or password" });
      }

      if (!username || !password) {
        return res.status(400).json({ msg: "Please add all field" });
      }
    
      // @ts-ignore
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Invalid username or password" });

      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET as string,
        { expiresIn: "7d" }
      );

      res.cookie("token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        httpOnly: true,
        secure: false, // ✅ set to true in production with HTTPS
       //@ts-ignore
        sameSite: 'Lax', // ✅ allows sending in most cross-origin requests
      });
      res.status(200).json({
        user: {
          name: user.username,
        },
        token,
      });

    } catch (err) {
      res.status(500).json({ msg: "Server error" });
    }
  },

  me: async (req: customReq, res: Response) => {
    const _id = req.user;
    const {token} = req.cookies;
     res.status(200).json({ msg : _id,token});
  },
};


export default authCtrl;
