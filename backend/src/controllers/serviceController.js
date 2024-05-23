const Service = require("../models/serviceModel");

exports.getAllServices = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: res.requestTime,
    results: services.length,
    data: services,
  });
};
