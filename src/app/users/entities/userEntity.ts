import mongoose, { InferSchemaType, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, reuire: true, unique: true },
  },
  { timestamps: true }
);
type IUser = InferSchemaType<typeof UserSchema>;

const User = mongoose.model("User", UserSchema);

export { User, IUser };
