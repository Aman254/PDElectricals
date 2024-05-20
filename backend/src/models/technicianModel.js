import mongoose from "mongoose";
const technicianSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the Name"],
    },
    mobile: {
      type: Number,
      reuired: [true, "Please provide a valid Number"],
      unique: [true, "This Mobile Number Already Exists"],
    },
    photo: {
      type: String,
      default: "",
    },
    work: {
      type: [String],
      reuired: [true, "Please provide the work of the Technician"],
    },
  },
  {
    timestamps: true,
  }
);

const Technician = mongoose.model("Technician", technicianSchema);

module.exports = Technician;
