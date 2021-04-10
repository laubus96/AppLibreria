import { Schema, model } from "mongoose";

const RolSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Role", RolSchema);
