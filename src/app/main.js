import { startHttpServer } from "./http/index.js";
import { prisma } from "../shared/infra/prisma/client.js";

// This is the real entry point
export async function bootstrap() {
  try {
    await prisma.$connect();
    await startHttpServer();
  } catch (err) {
    console.error(err);
  }
}
