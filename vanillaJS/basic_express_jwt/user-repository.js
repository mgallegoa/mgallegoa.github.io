import crypto from "node:crypto";
import DBLocal from "db-local";
import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "./config.js";

const { Schema } = DBLocal({ path: "./db" });

const User = Schema("User", {
  _id: { type: String, require: true },
  username: { type: String, require: true },
  password: { type: String, require: true },
});

export class UserRepository {
  static async create({ username, password }) {
    Validations.username({ username });
    Validations.password({ password });

    const user = User.findOne({ username });
    if (user) {
      throw new Error("The username exist.");
    }
    const id = crypto.randomUUID();

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    User.create({
      _id: id,
      username,
      password: hashedPassword,
    }).save();
    return id;
  }
  static async login({ username, password }) {
    Validations.username({ username });
    Validations.password({ password });

    const user = User.findOne({ username });
    if (!user) {
      throw new Error("The username doesn't exist.");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error("The password is not valid.");
    }
    return {
      id: user._id,
      username: user.username,
    };
  }
}

class Validations {
  static username({ username }) {
    if (typeof username !== "string")
      throw new Error("username must be a string");
    if (username.length < 3) {
      throw new Error("username must be at least 3 characters long.");
    }
  }

  static password({ password }) {
    if (typeof password !== "string")
      throw new Error("password must be a string");
    if (password.length < 6) {
      throw new Error("password must be at least 6 characters long.");
    }
  }
}
