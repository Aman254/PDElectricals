const createHttpError = require("http-errors");
const logger = require("../configs/logger");
const { createUser, signUser } = require("../services/auth.service");
const { generateToken, verifyToken } = require("../services/token.service");
const { findUser } = require("../services/user.service");

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await createUser({
      name,
      email,
      password,
    });
    const access_token = await generateToken(
      { userId: newUser._id },
      process.env.TOKEN_EXPIRE,
      process.env.ACCESS_TOKEN_SECRET
    );
    const refresh_token = await generateToken(
      { userId: newUser._id },
      process.env.TOKEN_EXPIRE,
      process.env.REFRESH_TOKEN_SECRET
    );

    res.cookie("refreshToken", refresh_token, {
      httpOnly: true,
      path: "/api/v1/auth/refreshToken",
      maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    });

    // console.table({ access_token, refresh_token });

    res.json({
      message: "Register Sucessful",
      access_token,
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await signUser(email, password);

    const access_token = await generateToken(
      { userId: user._id },
      process.env.TOKEN_EXPIRE,
      process.env.ACCESS_TOKEN_SECRET
    );
    const refresh_token = await generateToken(
      { userId: user._id },
      process.env.TOKEN_EXPIRE,
      process.env.REFRESH_TOKEN_SECRET
    );

    res.cookie("refreshToken", refresh_token, {
      httpOnly: true,
      path: "/api/v1/auth/refreshToken",
      maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    });

    // console.table({ access_token, refresh_token });

    res.json({
      message: "Register Sucessful",
      access_token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  try {
    res.clearCookie("refreshToken", { path: "/api/v1/auth/refreshToken" });
    res.json({
      message: "Logged Out",
    });
  } catch (error) {
    next(error);
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const refresh_token = req.cookies.refreshToken;
    if (!refresh_token) throw createHttpError.Unauthorized("Please Login");
    const check = await verifyToken(
      refresh_token,
      process.env.REFRESH_TOKEN_SECRET
    );
    const user = await findUser(check.userId);
    const access_token = await generateToken(
      { userId: user._id },
      process.env.TOKEN_EXPIRE,
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      access_token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};
