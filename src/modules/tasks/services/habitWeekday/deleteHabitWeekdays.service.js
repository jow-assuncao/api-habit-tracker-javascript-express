import { prisma } from "../../../../shared/infra/prisma/client.js";

export async function deleteHabitWeekdays(habitId) {
  const deletedHabitWeekdays = await prisma.habitWeekday.deleteMany({
    where: {
      habitId: habitId
    },
  });

  return deletedHabitWeekdays;
}
