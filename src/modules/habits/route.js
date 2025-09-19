import { Router } from "express";
import { createHabitController } from "./controller/createHabit.controller.js";

const habitsRouter = Router();

habitsRouter.post("/", createHabitController);

export { habitsRouter };
