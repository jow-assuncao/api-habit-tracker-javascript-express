import { prisma } from "../../../../shared/infra/prisma/client.js";


export async function deleteHabit(habitId) {
  // Check if the habit exists
  const habit = await prisma.habit.findUnique({
    where: {
      userId: "dff6184e-e918-48fb-ae4c-8bb1717b918d", // Hardcoded userId for now (replace with actual UUID)
      id: habitId,
    },
  });

  if (!habit) {
    throw new Error('Habit not found');
  }

  const deletedHabit = await prisma.habit.delete({
    where: {
      userId: "dff6184e-e918-48fb-ae4c-8bb1717b918d", // Hardcoded userId for now (replace with actual UUID)
      id: habitId,
    },
  });

  return deletedHabit;
}
