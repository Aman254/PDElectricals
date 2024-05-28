const Service = require("../models/serviceModel");

exports.getAllServices = async (req, res, next) => {
  try {
    const services = await Service.find();
    res.status(200).json({
      status: "success",
      requestedAt: res.requestTime,
      results: services.length,
      data: services,
    });
  } catch (error) {
    next(error);
  }
};

exports.createService = async (req, res, next) => {
  try {
    const newService = await Service.create(req.body);
    res.status(201).json({
      status: "Sucess",
      data: {
        service: newService,
      },
    });
  } catch (error) {
    next(error);
  }
};
