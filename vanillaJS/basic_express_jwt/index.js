import express, { json } from "express";
import { PORT } from "./config.js";
import { UserRepository } from "./user-repository.js";

const app = express();
app.set("view engine", "ejs");
app.use(json());

app.get("/", (req, res) => {
  res.render("index", { username: "Arias" });
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
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send("Error trying to login.");
  }
});

app.post("/logout", (req, res) => {
  res.end({ id: "hi" });
});
app.get("/protected", (req, res) => {
  res.render("protected", { username: "Arias" });
});

app.listen(PORT, () => {
  console.log("Server listen in port ", PORT);
});
