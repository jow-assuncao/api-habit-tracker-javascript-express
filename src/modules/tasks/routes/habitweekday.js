
import { Router } from "express";
import { updateHabitWeekdayController } from "../controllers/habitWeekday/updateHabitWeekday.controller.js";
import { getAllHabitWeekdaysController } from "../controllers/habitWeekday/getAllHabitWeekdays.controller.js";

const habitWeekdayRoutes = Router();

habitWeekdayRoutes.get("/", getAllHabitWeekdaysController);
habitWeekdayRoutes.put("/:habitId/:weekdayId", updateHabitWeekdayController);

export { habitWeekdayRoutes };