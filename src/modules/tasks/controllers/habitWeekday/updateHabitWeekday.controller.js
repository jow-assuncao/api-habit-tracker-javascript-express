import { updateHabitWeekday } from "../../services/habitWeekday/updateHabitWeekday.service.js";
import { updateHabitWeekdaySchema } from "../../schemas/habitWeekday/habitWeekday.schema.js";

export async function updateHabitWeekdayController(req, res) {
    try {
        // Extract habitId and weekdayId from URL parameters
        const habitId = parseInt(req.params.habitId);
        const weekdayId = parseInt(req.params.weekdayId);

        // Validate that IDs are valid numbers
        if (isNaN(habitId) || isNaN(weekdayId)) {
            return res.status(400).json({
                message: "Invalid habitId or weekdayId provided"
            });
        }

        // Validate request body
        const validatedData = updateHabitWeekdaySchema.parse(req.body);
        const { isDone } = validatedData;

        // Update the habit weekday entry
        const updatedHabitWeekday = await updateHabitWeekday(habitId, weekdayId, isDone);

        return res.status(200).json({
            message: "Habit weekday updated successfully",
            habitWeekday: updatedHabitWeekday,
        });
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({
                message: "Habit weekday entry not found"
            });
        }
        
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}
