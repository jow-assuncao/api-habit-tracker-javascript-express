import { z } from "zod";

export const createHabitSchema = z.object({
  habit: z.string().min(1, "Habit name is required").max(255, "Habit name must be less than 255 characters"),
});

export const deleteHabitSchema = z.object({
  id: z.string().uuid("Habit ID must be a valid UUID"),
});