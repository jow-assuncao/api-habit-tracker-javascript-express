
import { Router } from "express";
import { updateHabitWeekdayController } from "../controllers/habitWeekday/updateHabitWeekday.controller.js";

const habitWeekdayRoutes = Router();

habitWeekdayRoutes.put("/:habitId/:weekdayId", updateHabitWeekdayController);

export { habitWeekdayRoutes };