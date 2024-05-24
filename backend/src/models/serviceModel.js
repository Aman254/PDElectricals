const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the Name"],
      unique: true,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Please provide price for the service"],
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
      type: [String],
      required: [true, "Please Provide the Description"],
    },
    included: {
      type: [String],
    },
    excluded: {
      type: [String],
    },
    image: [String],
    note: {
      type: String,
    },
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
