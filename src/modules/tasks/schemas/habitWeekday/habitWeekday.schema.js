import { z } from "zod";

export const createHabitWeekdaySchema = z.object({
  habitId: z.string().uuid("Habit ID must be a valid UUID"),
  weekdayIds: z.array(z.string().uuid("Weekday ID must be a valid UUID")).min(1, "At least one weekday ID is required")
});

export const updateHabitWeekdaySchema = z.object({
  habitId: z.string().uuid("Habit ID must be a valid UUID"),
  weekdayId: z.string().uuid("Weekday ID must be a valid UUID"),
  isDone: z.boolean("isDone must be a boolean value")
});
