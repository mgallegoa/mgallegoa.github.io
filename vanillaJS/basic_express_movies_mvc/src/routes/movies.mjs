import { Router } from "express";

import { validateMovie, validatePartialMovie } from "../schemas/movies.mjs";
import { MovieModel } from "../models/movie.mjs";
export const movieRouter = Router();

movieRouter.get("", async (req, res) => {
  const { genre } = req.query;
  const returnMovies = await MovieModel.getAll({ genre });

  res.json(returnMovies);
});

movieRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const movie = await MovieModel.getById({ id });
  if (movie) {
    return res.json(movie);
  }
  res.status(404).json(`Not Found, id: ${id}`);
});

movieRouter.post("/", async (req, res) => {
  const result = validateMovie(req.body);
  if (result.error) {
    return res.status(422).json({ error: JSON.parse(result.error) });
  }
  const allMovies = await MovieModel.create(result.data);

  res.status(200).json(allMovies);
});

movieRouter.patch("/:id", async (req, res) => {
  const result = validatePartialMovie(req.body);
  if (result.error) {
    return res.status(422).json({ error: JSON.parse(result.error) });
  }
  const { id } = req.params;
  const movieUpdated = await MovieModel.update({ id, data: result.data });
  if (movieUpdated) {
    return res.status(200).json(movieUpdated);
  }
  return res.status(404).json(`Movie Not Found, with id: ${id}`);
});

movieRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const movies = await MovieModel.delete({ id });
  if (!movies) {
    return res.status(404).json(`Movie Not Found, with id: ${id}`);
  }
  res.json(movies);
});
