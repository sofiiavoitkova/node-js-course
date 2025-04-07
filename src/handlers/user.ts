import prisma from "../db";
import { Request, Response } from "express";
import { createJWT, hashPassword, comparePasswords } from "../modules/auth";

export const createNewUser = async (req: Request, res: Response) => {
  if (!req.body.password || !req.body.username || !req.body.email) {
    res.status(400).send("Username, email, and password are required");
    return;
  }
  const hash = await hashPassword(req.body.password);

  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      email: req.body.email,
      password: hash,
    },
  });

  const token = createJWT(user);
  res.json({ token });
};

export const signin = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: { username: req.body.username },
  });

  if (!user) {
    res.status(401).send("Invalid username or password");
    return;
  }

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.send("Invalid username or password");
    return;
  }

  const token = createJWT(user);
  res.json({ token });
};
