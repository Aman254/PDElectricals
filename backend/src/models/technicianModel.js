const mongoose = require("mongoose");

const technicianSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name."],
  },
  photo: [String],
  mobile: {
    type: Number,
    required: [true, "Please provide your mobile number"],
  },
  work: {
    type: String,
    required: [true, "Please select the work category"],
    enum: {
      values: ["Generator", "Electrician", "Earthing", "AC"],
    },
    message:
      "Please provide any of these, Generator, Electrician, Earthing, AC",
  },
});

const Technician = mongoose.model("Technician", technicianSchema);

module.exports = Technician;
