const logger = require("../configs/logger");
const { createUser } = require("../services/auth.service");

exports.register = async (req, res, next) => {
  try {
    res.send("Hello from Register");
  } catch (error) {
    logger.error(error);
  }
};

exports.login = async (req, res, next) => {
  try {
  } catch (error) {
    logger.error(error);
  }
};

exports.logout = async (req, res, next) => {
  res.send("Hello from  Logout");
};

exports.refreshToken = async (req, res, next) => {
  res.send("Hello from Refresh");
};
