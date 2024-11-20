const z = require("zod");

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: "Title must be an string",
    required_error: "Title is requiered.",
  }),
  year: z.number().int().min(1900).max(2025),
  director: z.string(),
  duration: z.number().int().positive(),
  poster: z.string().url({
    message: "Poster must be a valid URL",
  }),
  genre: z.array(
    z.enum(["Drama", "Action", "Crime", "Adventure", "Sci-Fi", "Romance"]),
    {
      required_error: "Movie genre is requiered",
      invalid_type_error: "Movie genre must be an array of enum Genre",
    },
  ),
  rate: z.number().min(0).max(10).default(5),
});

function validateSchema(input) {
  return movieSchema.safeParse(input);
}

function validatePartialSchema(input) {
  return movieSchema.partial().safeParse(input);
}

module.exports = {
  validateSchema,
  validatePartialSchema,
};
