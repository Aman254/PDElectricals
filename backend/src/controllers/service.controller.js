export const allServices = async (req, res, next) => {
  try {
    res.send("Hello from Service Controller");
  } catch (error) {
    next(error);
  }
};
