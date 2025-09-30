import { getAllHabits } from "../../services/habits/getAllHabits.service.js";
import { getAllHabitWeekdays } from "../../services/habitWeekday/getAllHabitWeekdays.service.js";

export async function getAllHabitWeekdaysController(
  req,
  res
) {

  // Get all habits of the current user
  const habits = await getAllHabits();
  const habitIds = habits.map(habit => habit.id);

  // Get all habit weekdays
  const habitWeekdays = await getAllHabitWeekdays(habitIds);


  return res.status(200).json(habitWeekdays);
}

