const User = require("../models/userModel");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      results: users.length,
      status: "Sucess",
      data: users,
    });
  } catch (error) {}
};
