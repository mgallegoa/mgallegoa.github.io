import express from "express";
import logger from "morgan";

const app = express();

const port = process.env.PORT ?? 3000;

app.use(logger("dev"));
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/client/index.html");
});

app.listen(port, () => {
  console.log(`Server listening in port ${port}`);
});
