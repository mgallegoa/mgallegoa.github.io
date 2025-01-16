import express, { json } from "express";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { PORT, SECRET_JWT_KEY } from "./config.js";
import { UserRepository } from "./user-repository.js";

const app = express();
app.set("view engine", "ejs");
app.use(json());
app.use(cookieParser());

app.use((req, res, next) => {
  const token = req.cookies.manuel_access_token;
  req.session = { user: null };
  try {
    const data = jwt.verify(token, SECRET_JWT_KEY);
    req.session.user = data;
  } catch (error) {
    // console.log(error);
  }
  next();
});

app.get("/", (req, res) => {
  const { user } = req.session;
  res.render("index", user);
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    console.log(username);
    console.log(password);
    const id = await UserRepository.create({ username, password });
    res.send({ id });
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send("Error creating the user");
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserRepository.login({ username, password });
    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_JWT_KEY,
      {
        // Access token short, Refresh token long
        expiresIn: "1h",
      },
    );
    res
      .cookie("manuel_access_token", token, {
        httpOnly: true, // The cookie is only access in the server
        secure: process.env.NODE_ENV === "production", // Access the cookie only with https
        sameSite: "strict", // The cookie only accessed in the same domain. Not work document.cookie
        maxAge: 1000 * 60 * 60, // The cookie only valid in 1 hour
      })
      .send(user);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send("Error trying to login.");
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("manuel_access_token").json({ message: "Logout sussefull" });
});
app.get("/protected", (req, res) => {
  const { user } = req.session;
  if (!user) {
    return res.status(403).send("Access not authorized.");
  }
  res.render("protected", user);
});

app.listen(PORT, () => {
  console.log("Server listen in port ", PORT);
});
