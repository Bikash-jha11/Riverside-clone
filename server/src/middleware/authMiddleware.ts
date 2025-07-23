const jwt = require("jsonwebtoken");
import { Request, Response, NextFunction } from "express";

interface customReq extends Request {
  user?: any;
}

export function verifyToken(req: customReq, res: Response, next: NextFunction) {
  const { token } = req.cookies;

  if (!token) return res.status(400).json({ msg: "No token found" });

  jwt.verify(token, process.env.JWT_SECRET, (err: any, decoded: any) => {
    if (err) {
      return res.status(400).json({ msg: "Please login first" });
    }

    req.user = decoded.id;
  });

  next();
}
