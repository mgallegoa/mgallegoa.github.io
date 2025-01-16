import express from "express";

const app = express();

const port = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
  res.send("Hi from server");
});

app.listen(port, () => {
  console.log(`Server listening in port ${port}`);
});
