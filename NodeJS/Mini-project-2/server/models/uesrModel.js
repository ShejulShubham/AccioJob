import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
    },
    role: {
      type: String,
      required: true,
      default: "student",
    },
    bio: {
      type: String,
    },
    imageURL: {
      type: String,
    },
  },
  { timestamp: true }
);

export default mongoose.model("userModel", userSchema);
