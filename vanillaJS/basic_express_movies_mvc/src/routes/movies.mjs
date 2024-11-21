import { Router } from "express";
import { readJSON } from "../utils/utils.mjs";

import { validateMovie, validatePartialMovie } from "../schemas/movies.mjs";
export const movieRouter = Router();

const movies = readJSON(import.meta.dirname + "/../db/movies.json");

movieRouter.get("", (req, res) => {
  const { genre } = req.query;
  if (genre) {
    const movie = movies.filter((item) =>
      item.genre.some((g) => g.toUpperCase() === genre.toUpperCase()),
    );
    return res.json(movie);
  }

  res.json(movies);
});

movieRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((item) => item.id === id);
  if (movie) {
    return res.json(movie);
  }
  res.status(404).json(`Not Found, id: ${id}`);
});

movieRouter.post("", (req, res) => {
  const result = validateMovie(req.body);
  if (result.error) {
    return res.status(422).json({ error: JSON.parse(result.error) });
  }
  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data,
  };
  movies.push(newMovie);
  res.status(200).json(movies);
});

movieRouter.patch("/:id", (req, res) => {
  const result = validatePartialMovie(req.body);
  if (result.error) {
    return res.status(422).json({ error: JSON.parse(result.error) });
  }
  const { id } = req.params;
  const movieIndex = movies.findIndex((m) => m.id === id);
  if (movieIndex < 0) {
    return res.status(404).json(`Movie Not Found, with id: ${id}`);
  }
  const movieToUpdate = {
    ...movies[movieIndex],
    ...result.data,
  };
  movies[movieIndex] = movieToUpdate;
  res.status(200).json(movies[movieIndex]);
});

movieRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const movieIndex = movies.findIndex((m) => m.id === id);
  if (movieIndex < 0) {
    return res.status(404).json(`Movie Not Found, with id: ${id}`);
  }
  movies.splice(movieIndex, 1);

  res.json(movies);
});
