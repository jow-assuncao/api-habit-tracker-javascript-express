import { prisma } from "../../../../shared/infra/prisma/client.js";


export async function deleteHabitWeekdays(habitId) {
  // Check if any habit weekdays exist for the given habitId
  const habitWeekdays = await prisma.habitWeekday.findMany({
    where: {
      habitId: habitId
    },
  });

  if (!habitWeekdays || habitWeekdays.length === 0) {
    throw new Error('Habit weekdays not found');
  }

  const deletedHabitWeekdays = await prisma.habitWeekday.deleteMany({
    where: {
      habitId: habitId
    },
  });

  return deletedHabitWeekdays;
}
