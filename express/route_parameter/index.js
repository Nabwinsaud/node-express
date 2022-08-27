import express from "express";

// initlization of app
const app = express();

// setting the port
const port = process.env.PORT || 3000;

// route parameter
// route parameter are url segments that are used to capture values at their specific url
// should contain [A-Za-z0-9]

// examples
//student/:id
// product/:price
//movies/:genre/and/:rating/and/:releasedate  -> movies/comedy/8and/2019

app.get("/students/:id", (req, res) => {
  res.send("The student id got successfully !");
});

// restrict route
app.get("/teacher/:id([0-9]{2})", (req, res) => {
  res.send("Regex works for 0-9 of two digit !");
});

app.get("/users/:id/and/:age/address/:addr/", (req, res) => {
  //   console.log(req.params.id);
  const { id, age, addr } = req.params;
  // console.log(req.params.id);
  //   console.log(id, age, adddressname);
  res.send(`ID:${id} ,Age:${age} ,Address:${addr} !`);
});

app.get("/shop/:dress/name/:name([a-z]{3,20})", (req, res) => {
  //   console.log(req.params.id);
  const { dress, name } = req.params;
  // console.log(req.params.id);
  //   console.log(id, age, adddressname);
  console.log("The name should be 3 to 20 character");
  res.send(`Dress:${dress} ,Name:${name} !`);
});

// app.params() is used to add callback trigers to route parameter
// all the parameter will be called once before the any  handlers of route
// syntax app.params(name,callback)

app.param("token", (req, res, next, token) => {
  console.log(`token verified :${token}`);
  next();
});
app.get("/auth/:token", (req, res, next) => {
  res.send("token generated");
  //   next();
});

app.get("/auth/:token", (req, res) => {
  res.send("token generated 2nd time");
});
// it will run once but should match correctly

// Array of route
app.param(["verify", "token"], (req, res, next, value) => {
  console.log(`Route = Names:${value}`);
  next();
});

app.get("/auth/:verify/:token", (req, res) => {
  res.send(`verify :true and token:true`);
});

// even it is chained it will run once

// query string
// www.coding.com/blog?title=javascript

app.get("/blog", (req, res) => {
  // blog?search='javascript'&tags='js'
  const query = req.query;
  const { title } = query;
  res.send(query);
  // res.send(title);
  console.log(`Title:${title} `);
});
app.listen(port, () => {
  console.log(`port listening at http://localhost:${port}`);
});
