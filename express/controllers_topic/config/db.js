import mongoose from "mongoose";

// connect(uri,options,callback)

// uri -> its a string used for connection
// options -> its an object passed down to the mongodb drivers

//examples for local connection

// mongoose.connect("mongodb://localhost:27017/dbname")
// mongoose.connect("mongodb://localhost:27107/ecommerce", {
//   useNewUrlParse: true,
//   useUnifiedTopology: true,
// });

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // addtional information
  user: "nabin",
  pass: "coding@123",
  dbName: "ecommerce",
  authSource: "ecommerce",
};

// a seperate method can be created for option
mongoose.connect("mongodb://localhost:27107/ecommerce", options);
