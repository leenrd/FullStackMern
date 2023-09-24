import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();

// middleware
app.use(express.json());

// Middleware for cors policy
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost: 1000",
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.use("/books", booksRoute);

app.get("/", (request, response) => {
  console.log(request.url);
  return response.status(200).set("backend try");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => {
      console.log(`listening to ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
