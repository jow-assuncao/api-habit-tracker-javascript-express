import { getAllHabits } from "../../services/habits/getAllHabits.service.js";

export async function getAllHabitsController(
  req,
  res
) {

  // Create a habit
  const habits = await getAllHabits();

  return res.status(200).json(habits);
}