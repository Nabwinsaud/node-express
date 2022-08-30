import mongoose from "mongoose";

// connect database

const connectDB = async (url) => {
  await mongoose
    .connect(url, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   useCreateIndex: true,
    })
    .then(() => {
      console.log("connection established to db ✅");
    })
    .catch(() => console.log("coudnot connect to database ❌💀"));
};

// const connectDB = async (url) => {
//   try {
//     await mongoose.connect(url);
//   } catch {
//     console.log("coudnot connect to database ❌💀");
//   }
// };

export default connectDB;
