import { prisma } from "../../../../shared/infra/prisma/client.js";

export async function createHabit(habit) {
  const newHabit = await prisma.habit.create({
    data: {
      userId: 1, // Hardcoded userId for now
      habit: habit,
    },
  });

  return newHabit;
}
