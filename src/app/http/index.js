import express from "express";
import cors from "cors";
import { createServer } from "http";

import { healthRouter } from "../../modules/health/routes.js";
import { habitRoutes } from "../../modules/tasks/routes/habits.js";
import { habitWeekdayRoutes } from "../../modules/tasks/routes/habitweekday.js";
import { weekdayRoutes } from "../../modules/tasks/routes/weekdays.js";

// This is RESTful entry point
export async function startHttpServer() {
  const app = express();

  // Enable CORS for all routes
  app.use(cors());

  app.use(express.json());

  app.use("/health", healthRouter);
  app.use("/habits", habitRoutes);
  app.use("/habitweekday", habitWeekdayRoutes);
  app.use("/weekdays", weekdayRoutes);

  console.log("app");

  const server = createServer(app);

  server.listen(3000);
}
