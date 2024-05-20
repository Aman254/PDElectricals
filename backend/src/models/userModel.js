import mongoose from "mongoose";
import validator, { isLowercase } from "validator";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your"],
    },
    email: {
      type: String,
      required: [true, "Please provide an Email Address"],
      unique: [true, "This Email Id Already exists"],
      isLowercase: true,
      validate: [validator.isEmail, "Please provide a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collections: "users",
    timestamps: true,
  }
);

const Usermodel = mongoose.model || mongoose.model("Usermodel", userSchema);
export default Usermodel;
