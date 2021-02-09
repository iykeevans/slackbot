import { Schema, model } from "mongoose";

const response = new Schema(
  {
    mood: String,
    startWalkTime: String,
    endWalkTime: String,
    day: String,
    hobbies: [String],
    numberScale: String,
  },
  { timestamps: true }
);

export default model("Response", response);
