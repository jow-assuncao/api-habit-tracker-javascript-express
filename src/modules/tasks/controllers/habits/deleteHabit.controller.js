import { deleteHabit } from "../../services/habits/deleteHabit.service.js";
import { deleteHabitSchema } from "../../schemas/habits/habit.schema.js";
import { deleteHabitWeekdays } from "../../services/habitWeekday/deleteHabitWeekdays.service.js";

export async function deleteHabitController(req, res) {
    // Validate request params
    const validatedParams = deleteHabitSchema.parse(req.params);
    const { id } = validatedParams;

    // Delete all habit weekdays for this habit first
    await deleteHabitWeekdays(id);

    // Delete the habit
    await deleteHabit(id);

    return res.status(204).send();
}