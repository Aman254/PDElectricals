const logger = require("../configs/logger");
const createHttpError = require("http-errors");
const validator = require("validator");
const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.createUser = async (userData) => {
  const { name, email, password } = userData;

  //Check if fields are empty
  if (!name || !email || !password) {
    throw createHttpError.BadRequest("Please fill all fields");
  }

  //check name length
  if (
    !validator.isLength(name, {
      min: 2,
      max: 16,
    })
  ) {
    throw createHttpError.BadRequest(
      "Please make sure your name is between 2 and 16 characters"
    );
  }

  //check if Email is valid
  if (!validator.isEmail(email)) {
    throw createHttpError.BadRequest("Please provide a Valid Email");
  }

  //check if user already exists
  const checkDb = await UserModel.findOne({ email });
  if (checkDb) {
    throw createHttpError.Conflict("Email address, this email already exist.");
  }
  //check password length
  if (
    !validator.isLength(password, {
      min: 6,
      max: 128,
    })
  ) {
    throw createHttpError.BadRequest(
      "Please make sure your password is between 6 and 128 characters"
    );
  }

  //hash password --> in the userModel
  const user = await new UserModel({
    name,
    email,
    password,
  }).save();

  return user;
};

exports.signUser = async (email, password) => {
  const user = await UserModel.findOne({ email: email.toLowerCase() }).lean();

  //check if user exists
  if (!user) {
    throw createHttpError.NotFound("Invalid Credentials.");
  }
  //compare passwords
  let passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) throw createHttpError.NotFound("Invalid Credentials");

  return user;
};
