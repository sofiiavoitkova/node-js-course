import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export const comparePasswords = (password: string, hash: string): boolean => {
  return bcrypt.compareSync(password, hash);
};

export const hashPassword = (password: string): string => {
  return bcrypt.hashSync(password, 5);
};

interface User {
  id: string;
  username: string;
}

interface AuthRequest extends Request {
  user?: string | jwt.JwtPayload;
}

export const createJWT = (user: User) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET as string
  );
  return token;
};

export const protect = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.send("Not authorized");
    return;
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    console.log("here");
    res.status(401);
    res.send("Not authorized");
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = payload;
    console.log(payload);
    next();
    return;
  } catch (e) {
    console.error(e);
    res.status(401);
    res.send("Not valid token");
    return;
  }
};
