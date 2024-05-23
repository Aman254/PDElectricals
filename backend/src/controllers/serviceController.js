const fs = require("fs");

const services = JSON.parse(
  fs.readFileSync(`${__dirname}/../Data/Alldata.json`)
);
exports.getAllServices = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: res.requestTime,
    results: services.length,
    data: services,
  });
};
