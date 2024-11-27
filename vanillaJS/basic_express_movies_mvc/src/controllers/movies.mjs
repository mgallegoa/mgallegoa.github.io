import { MovieModel } from "../models/mongodb/movie.mjs";
// import { MovieModel } from "../models/local-file/movie.mjs";

import { validateMovie, validatePartialMovie } from "../schemas/movies.mjs";

export class MovieController {
  static async getAll(req, res) {
    const { genre } = req.query;
    const returnMovies = await MovieModel.getAll({ genre });

    res.json(returnMovies);
  }

  static async getById(req, res) {
    const { id } = req.params;
    const movie = await MovieModel.getById({ id });
    if (movie) {
      return res.json(movie);
    }
    res.status(404).json(`Not Found, id: ${id}`);
  }

  static async create(req, res) {
    const result = validateMovie(req.body);
    if (result.error) {
      return res.status(422).json({ error: JSON.parse(result.error) });
    }
    const allMovies = await MovieModel.create({ data: result.data });

    res.status(200).json(allMovies);
  }

  static async update(req, res) {
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
  }

  static async delete(req, res) {
    const { id } = req.params;
    const movies = await MovieModel.delete({ id });
    if (!movies) {
      return res.status(404).json(`Movie Not Found, with id: ${id}`);
    }
    res.json(movies);
  }
}
