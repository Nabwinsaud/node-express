import mongoose from "mongoose";

export const connectDb = async (url) => {
  //   await mongoose.connect("mongodb://localhost:27017/Blog");
  await mongoose.connect(url);
  return console.log(`connection successful to db ✅`);
};
