import { prisma } from "../../../../shared/infra/prisma/client.js";

export async function createHabitWeekday(habitId, weekdayIds) {

  // Create data structure for the given habit and weekdays
  const habitWeekdayData = weekdayIds.map(weekdayId => ({
    habitId: habitId,
    weekdayId: weekdayId,
    isDone: false
  }));

  // Create habit_weekday entries for the given habit and weekdays
  const newHabitWeekdays = await prisma.habitWeekday.createMany({
    data: habitWeekdayData,
    skipDuplicates: false 
  });

  return habitWeekdayData;
}
