export const register = async (req, res, next) => {
  try {
    res.send("Hello from Register");
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
    res.send("Hello from Login");
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.send("Hello from Logout");
  } catch (error) {
    next(error);
  }
};

export const refreshToken = async (req, res, next) => {
  try {
    res.send("Hello form Token");
  } catch (error) {
    next(error);
  }
};
