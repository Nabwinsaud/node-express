import express from "express";
import dotenv from "dotenv";
// import mongoose from "mongoose";
import { connectDb } from "./config/db.js";
// import dotenv from "dotenv/config";

// init dotenv
dotenv.config();

// init app
const app = express();

// middleware
// app.use("/student", studentRouter);
// app.use(express.json());
// app.use(express.urlencoded());

const port = process.env.PORT || 3000;
// const DATABASE_URL = process.env.DATABASE_URL;

// mongoose
//   .connect("mongodb://localhost:27017/Blog")
//   .then(() => console.log(`connection successful to db ✅`));

// const DATABASE_URL = "mongodb://localhost:27017/Blog"; // can be made again better
const DATABASE_URL = process.env.DATABASE_URL;
connectDb(DATABASE_URL);
app.get("/", (req, res) => {
  res.send("Nodejs ");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
