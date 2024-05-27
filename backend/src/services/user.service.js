const createHttpError = require("http-errors");
const UserModel = require("../models/userModel");
exports.findUser = async (userId) => {
  const user = await UserModel.findById(userId);
  if (!user) throw createHttpError.BadRequest("Please fill all Fields");
  return user;
};
