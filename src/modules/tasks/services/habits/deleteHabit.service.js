import { prisma } from "../../../../shared/infra/prisma/client.js";

export async function deleteHabit(habitId) {
  const deletedHabit = await prisma.habit.delete({
    where: {
      userId: 1, // Hardcoded userId for now
      id: habitId,
    },
  });

  return deletedHabit;
}
