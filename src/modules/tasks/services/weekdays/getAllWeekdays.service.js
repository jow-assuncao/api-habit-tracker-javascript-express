import { prisma } from "../../../../shared/infra/prisma/client.js";

export async function getAllWeekdays() {
  const weekdays = await prisma.weekday.findMany();

  return weekdays;
}