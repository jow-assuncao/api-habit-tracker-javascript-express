import { prisma } from "../../../../shared/infra/prisma/client.js";

export async function updateHabitWeekday(habitId, weekdayId, isDone) {
  const updatedHabitWeekday = await prisma.habitWeekday.update({
    where: {
      habitId_weekdayId: {
        habitId: habitId,
        weekdayId: weekdayId
      }
    },
    data: {
      isDone: isDone
    }
  });

  return updatedHabitWeekday;
}
