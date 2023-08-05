import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users-route.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);

mongoose.connect(
  "mongodb+srv://johnleenard:mernpassword0123@fullstack.cwvkuk8.mongodb.net/fullStack?retryWrites=true&w=majority"
);

app.listen(3001, () => {
  console.log("server start");
});
