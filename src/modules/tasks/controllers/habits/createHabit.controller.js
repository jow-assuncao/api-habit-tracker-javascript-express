import { createHabit } from "../../services/habits/createHabit.service.js";
import { createHabitSchema } from "../../schemas/habits/habit.schema.js";
import { createHabitWeekdaySchema } from "../../schemas/habitWeekday/habitWeekday.schema.js";
import { createHabitWeekday } from "../../services/habitWeekday/createHabitWeekday.service.js";
import { getAllWeekdays } from "../../services/weekdays/getAllWeekdays.service.js";

export async function createHabitController(
    req, 
    res
) {
    // Validate request body
    const validatedData = createHabitSchema.parse(req.body);
    const { habit } = validatedData;

    // Create the habit
    const newHabit = await createHabit(habit);

    // Validate the weekdays
    const weekdays = await getAllWeekdays();
    console.log(weekdays);
    const { _, weekdayIds } = createHabitWeekdaySchema.parse({habitId: newHabit.id, weekdayIds: weekdays.map(weekday => weekday.id)});

    // Create habit weekdays
    const { habitWeekdays } = await createHabitWeekday(newHabit.id, weekdayIds);

    return res.status(201).json({
        message: "Habit created successfully",
        habit: newHabit,
        weekdays: habitWeekdays,
    });
}