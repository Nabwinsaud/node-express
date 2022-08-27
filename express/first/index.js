import express from "express";
const app = express();

const port = process.env.PORT || "3000";
app.get("", (req, res) => {
  res.send("Hustle harder");
});

// routing in express js

// single callback
app.get("/shop", (req, res) => {
  res.send("Shopping list");
  console.log("shopping list page");
});

// more than one callback

app.get(
  "/services",
  (req, res, next) => {
    console.log("response passed from main page");
    next();
  },
  (req, res) => {
    res.send("Request send successfully to services page");
  }
);

// array of callback
const callback1 = (req, res, next) => {
  console.log("First callback method");
  next();
};
const callback2 = (req, res, next) => {
  //   res.send("first callback");
  console.log("second callback method");
  next();
};
const callback3 = (req, res, next) => {
  res.send("Last callback");
  console.log("Last callback method");
  //   next(); // for independent function
};

app.get("/auth", [callback1, callback2, callback3]);

// combination of array of callback and independent function

app.get("/users", [callback1, callback2, callback3], (req, res) => {
  res.send("combination of independent function and array");
});

// all method wil execute for all

app.all("*", (req, res) => {
  res.send("This will be executed for all the method call");
});

// string pattern in express

app.get("/ab?cd", (req, res) => {
  res.status(200).send("Its accepts acd and  abcd");
});

// a

app.get("/ab+cd", (req, res) => {
  // abc ,abbcd abbcd ,abbbcd,....b
  res.status(200).send("It accepts abcd abbcd abbbcd");
});

// regular expression
// will return all .py file suppose main.py code.py
app.get(/.*py/, (req, res) => {
  res.send("it works for all.py files");
});

// similar cases for butterfly
app.get(/.*fly$/, (req, res) => {
  res.send("it will work for all .fly ");
});

// ab*cd

// chained route callback
// app.route(path)- it return instance of a single route,which can use to handled
// HTTP versb with optional middleware
// main use -to remove duplicate routes names

// so its called chained route callbacks

app.get("student", (req, res) => {
  res.send("Students list");
});

app.post("student", (req, res) => {
  res.json({ name: "Nabin", age: "20" });
});

app.put("student", (req, res) => {
  res.send("Students updated successfully");
});

// if our route is same then we can write it into route method instead of dupliating the code

app
  .route("/student")
  .all((req, res, next) => {
    console.log("Runs first for all HTTP METHODS");
    next();
  })
  .get((req, res) => {
    res.send("Students list");
  })

  .post((req, res) => {
    res.json({ name: "Nabin", age: "20" });
  })

  .put("student", (req, res) => {
    res.send("Students updated successfully");
  });

// this is how code is structured better

app.listen(port, () => {
  console.log(`port listening at http://localhost:${port}`);
});
