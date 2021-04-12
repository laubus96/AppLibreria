import { Schema, model } from "mongoose";
import bcript from "bcryptjs";

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,

      trim: true,
    },
    email: {
      type: String,
      required: true,

      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    tokenEmail: {
      type: String,
    },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  { versionKey: false }
);

UserSchema.statics.encrypPassword = async (password) => {
  const salt = await bcript.genSalt(10); //aplica un algoritomo 10 veces
  return await bcript.hash(password, salt); // genera el hash, la contra encriptada
};

UserSchema.statics.comparePassword = async (password, receivePassword) => {
  return await bcript.compare(password, receivePassword);
};

export default model("User", UserSchema);
