import { Router } from "express";
import { getAllWeekdaysController } from "../controllers/weekdays/getAllWeekdays.controller.js";
const weekdayRoutes = Router();

weekdayRoutes.get("/", getAllWeekdaysController);

export { weekdayRoutes };