import { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    country: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      // enum: ["user", "admin"],
    },
  },
  { timestamps: true }
);
userSchema.statics.signup = async function (data) {
  const { email, password, username, role } = data;
  const emailExists = await this.findOne({ email });
  const userExists = await this.findOne({ username });
  if (!email || !password || !username) {
    throw Error("All fields must be filled!");
  }
  if (!validator.isEmail(email)) {
    throw Error("email is not valid!");
  }

  if (emailExists) {
    throw Error("email already in use!");
  }

  if (userExists) {
    throw Error("username already in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    ...data,
    password: hash,
  });

  const response = {
    _id: user._id,
    role: user.role,
  };
  return response;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("all fields must be filled!");
  }
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("no such user!");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("incorrect password!");
  }
  const data = {
    _id: user._id,
    role: user.role,
  };
  return data;
};

const User = models.User || model("User", userSchema);

export default User;
