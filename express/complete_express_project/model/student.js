import mongoose from "mongoose";

// created schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required !"],
    minlength: 3, // mongoose support minlength in lower and uppercase
    // minLength:3, // both are valid properties
    maxlength: 20,
    trim: true,
    date: {
      type: { Date, default: Date.now() },
    },
    default: "John doe",
  },
});

// create model

const studentModel = mongoose.model("studentModel", studentSchema);
const doc = new studentModel();

return doc.save();
