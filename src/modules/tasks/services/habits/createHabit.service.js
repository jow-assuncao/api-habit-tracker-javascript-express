import { prisma } from "../../../../shared/infra/prisma/client.js";

export async function createHabit(habit) {
  const newHabit = await prisma.habit.create({
    data: {
      userId: "dff6184e-e918-48fb-ae4c-8bb1717b918d", // Hardcoded userId for now (replace with actual UUID)
      habit: habit,
    },
  });

  return newHabit;
}
