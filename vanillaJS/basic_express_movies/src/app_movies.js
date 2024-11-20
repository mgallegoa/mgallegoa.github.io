const express = require("express");
const movies = require("./db/movies.json");
const { validateSchema, validatePartialSchema } = require("./schemas/movie");
// const cors = require("cors");

// NOTE: for CORS normal methods GET/HEAD/POST, complex methods PUT/PATCH/DELETE (Require OPTIONS request) CORS Pre-flight
// GET movies or GET movies?genre=Action
// GET movies/:id
// POST movies
// PATCH movies/:id
// PUT movies/:id
// DELETE movies/:id
const app = express();

app.disable("x-powered-by");
app.use(express.json());

const ACCEPTED_ORIGINS = [
  "http://localhost:40033",
  "http://localhost:36665",
  "http://localhost:8080",
  "http://urlOfProduction.com",
];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
//         callback(null, true);
//       }
//       return callback(new Error(`Origin ${origin} Not Allowed`));
//     },
//   }),
// );

app.get("/", (req, res) => {
  res.end("<h1>Server Running Manuel</h1>");
});
app.get("/movies", (req, res) => {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Origin", "http://localhost:40033");
  const origin = req.header("origin");
  if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  const { genre } = req.query;
  if (genre) {
    const filterMovies = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase()),
    );
    return res.json(filterMovies);
  }
  res.json(movies);
});
app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((m) => m.id === id);
  if (movie) {
    return res.json(movie);
  }
  res.status(404).json(`Movie with id: ${id}, not found`);
});
app.post("/movies", (req, res) => {
  const result = validateSchema(req.body);
  if (result.error) {
    // 422 Unprocessed able entity
    return res.status(400).json({ error: JSON.parse(result.error?.message) });
  }

  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data,
  };
  movies.push(newMovie);
  res.status(200).json(movies);
});

app.patch("/movies/:id", (req, res) => {
  const result = validatePartialSchema(req.body);
  if (result.error) {
    // 422 Unprocessed able entity
    return res.status(404).json({ error: JSON.parse(result.error?.message) });
  }
  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === id);
  if (movieIndex === -1) {
    return res.status(404).json(`Movie to PATCH with id: ${id}, not found`);
  }
  const updatedMovie = {
    ...movies[movieIndex],
    ...result.data,
  };

  movies[movieIndex] = updatedMovie;
  return res.json(updatedMovie);
});

app.delete("/movies/:id", (req, res) => {
  const origin = req.header("origin");
  if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    return res.status(404).json(`Movie to DELETE with id: ${id}, not found`);
  }
  movies.splice(movieIndex, 1);
  return res.status(200).json(`Movie with id: ${id} was delete`);
});

app.options("/movies/:id", (req, res) => {
  const origin = req.header("origin");
  if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  }
  res.send(200);
});

const port = process.env.PORT ?? 3000;

app.listen(port, () => console.log(`Server running in port ${port}.`));
