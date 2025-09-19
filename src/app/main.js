import { startHttpServer } from "./http/index.js";

// This is the real entry point
export async function bootstrap() {
  console.log("server");
  await startHttpServer();
}
