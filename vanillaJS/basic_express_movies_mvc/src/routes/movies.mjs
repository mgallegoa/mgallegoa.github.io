import { Router } from "express";
import { MovieController } from "../controllers/movies.mjs";

export const movieRouter = Router();

movieRouter.get("", MovieController.getAll);

movieRouter.get("/:id", MovieController.getById);

movieRouter.post("/", MovieController.create);

movieRouter.patch("/:id", MovieController.update);

movieRouter.delete("/:id", MovieController.delete);
