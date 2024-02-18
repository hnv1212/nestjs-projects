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
import mongoose from "mongoose";
import cookieSession from "cookie-session";

const app = express();
app.set("trust proxy", true);
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
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

const start = async () => {
  if(!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined.')
  }
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/ticketing-auth");
    console.log("Connected to mongodb.");
  } catch (error) {
    console.error(error);
  }

  app.listen(3000, () => {
    console.log("Listening on 3000!");
  });
};

start();
