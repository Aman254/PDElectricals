const logger = require("../configs/logger");
const { createUser } = require("../services/auth.service");
const { generateToken } = require("../services/token.service");

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

    console.table({ access_token, refresh_token });

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
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  res.send("Hello from  Logout");
};

exports.refreshToken = async (req, res, next) => {
  res.send("Hello from Refresh");
};

exports.signUser = async (email, passwsord) => {
  const user = await UserModel.findOne({ email: email.toLowerCase() }).lean();
};
