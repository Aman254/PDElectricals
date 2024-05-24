const { sign } = require("../utils/token.util");

exports.generateToken = async (payload, expiresIn, secret) => {
  let token = await sign(payload, expiresIn, secret);
  return token;
};
