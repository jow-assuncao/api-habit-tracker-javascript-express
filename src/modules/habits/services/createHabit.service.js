import { prisma } from "../../../shared/infra/prisma/client.js";

export async function createHabit(payload) {
  const newHabit = await prisma.habits.create(payload);

  return newHabit;
}
