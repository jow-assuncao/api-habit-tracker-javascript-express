import { Router } from "express";
import { createHabitController } from "../controllers/habits/createHabit.controller.js";
import { getAllHabitsController } from "../controllers/habits/getAllHabits.controller.js";
import { deleteHabitController } from "../controllers/habits/deleteHabit.controller.js";

const habitRoutes = Router();

habitRoutes.post("/", createHabitController);
habitRoutes.get("/", getAllHabitsController);
habitRoutes.delete("/:id", deleteHabitController);

export { habitRoutes };