import { readJSON } from "../../utils/utils.mjs";

const movies = readJSON(import.meta.dirname + "/../../db/movies.json");

export class MovieModel {
  static async getAll({ genre }) {
    if (genre) {
      const movie = movies.filter((item) =>
        item.genre.some((g) => g.toUpperCase() === genre.toUpperCase()),
      );
      return movie;
    }
    return movies;
  }
  static async getById({ id }) {
    return movies.find((item) => item.id === id);
  }
  static async create({ data }) {
    const newMovie = {
      id: crypto.randomUUID(),
      ...data,
    };
    movies.push(newMovie);
    return movies;
  }

  static async update({ id, data }) {
    const movieIndex = movies.findIndex((m) => m.id === id);
    if (movieIndex < 0) {
      return null;
    }
    const movieToUpdate = {
      ...movies[movieIndex],
      ...data,
    };
    movies[movieIndex] = movieToUpdate;
    return movies[movieIndex];
  }

  static async delete({ id }) {
    const movieIndex = movies.findIndex((m) => m.id === id);
    if (movieIndex < 0) {
      return null;
    }
    movies.splice(movieIndex, 1);

    return movies;
  }
}
