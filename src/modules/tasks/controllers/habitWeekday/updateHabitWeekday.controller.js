import { updateHabitWeekday } from "../../services/habitWeekday/updateHabitWeekday.service.js";
import { updateHabitWeekdaySchema } from "../../schemas/habitWeekday/habitWeekday.schema.js";

export async function updateHabitWeekdayController(req, res) {
    // Extract habitId and weekdayId from URL parameters
    const habitId = req.params.habitId;
    const weekdayId = req.params.weekdayId;

    // Validate request body
    const validatedData = updateHabitWeekdaySchema.parse({ habitId, weekdayId, ...req.body });
    const { isDone } = validatedData;

    // Update the habit weekday entry
    const updatedHabitWeekday = await updateHabitWeekday(habitId, weekdayId, isDone);

    return res.status(200).json({
        message: "Habit weekday updated successfully",
        habitWeekday: updatedHabitWeekday,
    });
}
