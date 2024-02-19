import mongoose from "mongoose";
import { app } from "./app";

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
