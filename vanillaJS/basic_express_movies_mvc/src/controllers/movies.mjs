export class MovieController {
  static async getAll(req, res) {
    const { genre } = req.query;
    const returnMovies = await MovieModel.getAll({ genre });

    res.json(returnMovies);
  }
}
