import express, { json } from "express";
import { movieRouter } from "./routes/movies.mjs";
import { corsMiddleware } from "./middlewares/cors.mjs";

// ---- Experimental: import JSON modules
// import movies from "./db/movies.json" with { type: "json" };

// ---- Import file JSON from file, using fs module
// import fs from "node:fs";
// const movies = JSON.parse(
//   fs.readFileSync(import.meta.dirname + "/db/movies.json", "utf8"),
// );

// const movies = readJSON(import.meta.dirname + "/db/movies.json");
const app = express();

app.disable("x-powered-by");
app.use(json());
app.use(corsMiddleware());

app.use("/movies", movieRouter);

const port = process.env.PORT ?? 3000;
app.listen(port, () => console.log(`Server running in port ${port}`));
