import { z } from "zod";

export const createHabitWeekdaySchema = z.object({
  habitId: z.number().int().positive("Habit ID must be a positive integer"),
  weekdayIds: z.array(z.number().int().min(1).max(7)).min(1, "At least one weekday ID is required")
});

export const updateHabitWeekdaySchema = z.object({
  isDone: z.boolean("isDone must be a boolean value")
});
