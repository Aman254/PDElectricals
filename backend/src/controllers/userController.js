exports.register = async (req, res) => {
  res.send("Hello from Register");
};

exports.login = async (req, res) => {
  try {
    res.send("Hello form Login");
  } catch (error) {
    console.log(error);
  }
};

exports.logout = async (req, res) => {
  res.send("Hello from  Logout");
};
