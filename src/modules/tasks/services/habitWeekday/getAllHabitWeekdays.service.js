import { prisma } from "../../../../shared/infra/prisma/client.js";

export async function getAllHabitWeekdays(habitIds) {

  const habitWeekdays = await prisma.habitWeekday.findMany({
    where: {
      habitId: {
        in: habitIds
      }
    },
    // Also include bound habits and weekdays to habitWeekday entry
    include: {
        habit: true,
        weekday: true,
    },
  });

  return habitWeekdays;
}