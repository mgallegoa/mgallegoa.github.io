const express = require("express");
const movies = require("./db/movies.json");

// GET movies or GET movies?genre=Action
// GET movies/:id
// POST movies
// PATCH movies/:id
// PUT movies/:id
const app = express();

app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.end("<h1>Server Running Manuel</h1>");
});
app.get("/movies", (req, res) => {
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

app.listen(3000, () => console.log("Server running."));
