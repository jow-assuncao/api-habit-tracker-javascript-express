import express from "express";
import { createServer } from "http";

import { healthRouter } from "../../modules/health/routes.js";
import { habitsRouter } from "../../modules/habits/route.js";

// This is RESTful entry point
export async function startHttpServer() {
  const app = express();

  app.use(express.json());

  app.use("/health", healthRouter);
  app.use("/habits", habitsRouter);

  console.log("app");

  const server = createServer(app);

  server.listen(3000);
}
