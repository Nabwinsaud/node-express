import express from "express";
import student from "./router/students.js";
// student doesnot need to be student which is exported but can be different
// import stu from "./router/students"; // this also works perfect
import teacher from "./router/teacher.js";
// const student=require('./router/students');

// initlization of app
const app = express();

// setting the port
const port = process.env.PORT || 3000;

// load router module

app.use("/student", student);

app.use("/teacher", teacher);
// now our route is going to be /studentlist/students/create
// to make short like studnets/create
// we need to make short route of router route /create ,/delete

// request

// when to use router
// if we want to create seperate routes suppose student/create ,student/delete then router comes in play

// app.get("/student/fetch", (req, res) => {
//   res.send("student id get successfully");
// });
// app.post("/student/create", (req, res) => {
//   res.send("student account created successfully");
// });
// app.delete("/student/delete", (req, res) => {
//   res.send("student account deleted successfully");
// });
// app.put("/student/put", (req, res) => {
//   res.send("student account updated successfully");
// });

// Teacher
// app.get("/teacher/fetch", (req, res) => {
//   res.send("teacher id get successfully");
// });
// app.post("/teacher/create", (req, res) => {
//   res.send("teacher account created successfully");
// });
// app.delete("/teacher/delete", (req, res) => {
//   res.send("teacher account deleted successfully");
// });
// app.put("/teacher/put", (req, res) => {
//   res.send("student account updated successfully");
// });

// instead of doing above we can use router
// benfefits of router - removes messy code
// well organized
// easy to debug

// calling listen method

app.listen(port, () => {
  console.log(`port listening at http://localhost:${port}`);
});
