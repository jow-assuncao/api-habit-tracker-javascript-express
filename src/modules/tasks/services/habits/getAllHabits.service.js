import { prisma } from "../../../../shared/infra/prisma/client.js";

export async function getAllHabits() {
  const habits = await prisma.habit.findMany({
    where: {
      userId: 1 // Hardcoded userId for now
    }
  });

  return habits;
}