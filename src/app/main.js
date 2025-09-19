import { startHttpServer } from "./http/index.js";

export async function bootstrap() {
  console.log("server");
  await startHttpServer();
}
