const mongoose = require(" mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a Name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an Email"],
      unique: [true, "This Email Already Exists."],
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please provide your password"],
      minLength: [
        6,
        "Please make sure the password is atleast 6 characters long",
      ],
      maxLength: [
        128,
        "Please make sure the password is less than 128 characters",
      ],
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("UserModel", userSchema);

modeule.exports = UserModel;
