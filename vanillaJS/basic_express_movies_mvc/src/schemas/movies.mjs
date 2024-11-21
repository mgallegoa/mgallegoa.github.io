import { z } from "zod";

const movieSchema = z.object({
  title: z.string({
    required_error: "The movie title is required",
    invalid_type_error: "The movie title most be a valid string",
  }),
  year: z.number().int().min(1900).max(2026),
  director: z.string({
    required_error: "The name of director is required",
    invalid_type_error: "The name of director most be a valid string",
  }),
  duration: z.number().int().positive(),
  poster: z.string().url({
    message: "The movie poster must be a valid URL",
  }),
  genre: z.array(
    z.enum(["Drama", "Action", "Crime", "Adventure", "Sci-Fi", "Romance"]),
    {
      required_error: "The genre is required",
      invalid_type_error: "The genre must be valid",
    },
  ),
  rate: z.number().min(0).max(10).default(5),
  password: z.string().optional(),
  confirm: z.string().optional(),
});

export function validateMovie(shape) {
  return movieSchema
    .refine((data) => data.password === data.confirm, {
      message: "Passwords don't match",
      path: ["confirm"], // path of error
    })
    .refine((data) => data.password === "Manuel", {
      message: "Passwords should be Manuel",
      path: ["password"], // path of error
    })
    .safeParse(shape);
}

export function validatePartialMovie(shape) {
  return movieSchema.partial().safeParse(shape);
}
