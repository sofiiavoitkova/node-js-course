import express from "express";
import router from "./router";
import morgan from "morgan";
import { Request, Response, NextFunction } from "express";

const app = express();

const customLogger =
  (message: string) => (req: Request, res: Response, next: NextFunction) => {
    console.log(`Hello from ${message}`);
    next();
  };

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(customLogger("custom logger"));

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "hello" });
});

app.use("/api", router);

export default app;