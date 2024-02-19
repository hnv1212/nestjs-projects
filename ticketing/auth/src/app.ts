import express from "express";
import "express-async-errors";
import {
  currentUserRouter,
  signinRouter,
  signoutRouter,
  signupRouter,
} from "./routes";
import { errorHandler } from "./middlewares";
import { NotFoundError } from "./errors";

import cookieSession from "cookie-session";

const app = express();
app.set("trust proxy", true);
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

// routes
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all("*", async (req, res, next) => {
  // next(new NotFoundError())
  throw new NotFoundError();
});

// error handler
app.use(errorHandler);

export { app };
