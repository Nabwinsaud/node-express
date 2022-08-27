import express from "express";
import dotenv from "dotenv";
dotenv.config();
import student from "./routes/students.js";
import teacher from "./routes/teacher.js";
import loggerMiddelware from "./middlewares/logger-middleware.js";
// initlization of app
const app = express();

// setting the port
const port = process.env.PORT || 3000;

// application level middleware

app.use(loggerMiddelware);
// use of router and controller

app.use("/student", student);

app.use("/teacher", teacher);

// we already discussed why to use router
// to overcome to messy code

// why to use controller and what are controllers
// controllers helps to save messy code
// instead of writting long logic in one file we can seperate it in different files

// app.get("/coding/:id", (req, res) => {
//   // if the logic is large then its is not recommeneded
//   const id = req.params.id;
//   console.log(id);
//   if (id === parseInt(123).toString()) {
//     res.send("ID is equal to 123");
//   } else if (id == parseInt(10).toString()) {
//     res.send("id is 10");
//   } else {
//     res.send("Not a valid matched id");
//   }
// });

// this is messy isn't it ?
app.listen(port, () => {
  console.log(`port listening at http://localhost:${port}`);
});
