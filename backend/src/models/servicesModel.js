import mongoose from "mongoose";

const serviceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Provide the Name of the Service"],
    },
    price: {
      type: String,
      required: [true, "Please provide the Price for the Service"],
    },
    image: {
      type: String,
    },
    description: {
      type: [String, String],
    },
    included: {
      type: [String, String, String],
    },
    excluded: {
      type: [String, String, String],
    },
    note: {
      type: [String, String],
    },
  },
  { timestsmp: true }
);

const ServiceModel =
  mongoose.model.serviceModel || mongoose.model("ServiceModel", serviceSchema);

export default ServiceModel;
