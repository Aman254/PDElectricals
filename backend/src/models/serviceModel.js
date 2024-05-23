const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the Name"],
    unique: true,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Please provide peice for service"],
  },
  category: {
    type: String,
    required: [true, "Please provide the Category"],
    enum: {
      values: ["Electric", "Generator", "Earthing", "AC"],
      message: "Category is either Electrician , Generator, Earthing, AC",
    },
  },
  description: {
    type: [String, String],
    required: [true, "Please Provide the Description"],
  },
  included: {
    type: [String, String, String, String],
  },
  excluded: {
    type: [String, String, String, String],
  },
  image: [String],

  note: String,
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
