import mongoose from "mongoose";

// setting up the Schema.
const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  subject: { type: String, required: true },
  msg: { type: String, required: true },
});

// user is the dB.
export const UserModel = mongoose.model("user", UserSchema);
