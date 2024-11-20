import express, { json } from "express";

const app = express();

app.disable("powered-by");
app.use(json());

app.get("/movies", (req, res) => {
  const { genre } = req.query;

  res.end("ok" + genre);
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  res.end("get request ok, id: " + id);
});

app.post("/movies", (req, res) => {
  res.end("port request ok");
});

app.path("/movies/:id", (req, res) => {
  const { id } = req.params;
  res.end("patch request ok" + id);
});

app.delete("/movies", (req, res) => {
  res.end("delete request ok");
});

const port = process.env.PORT ?? 3000;
app.listen(port, () => console.log(`Server running in port ${port}`));
