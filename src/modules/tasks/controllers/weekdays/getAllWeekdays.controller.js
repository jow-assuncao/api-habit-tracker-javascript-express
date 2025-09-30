import { getAllWeekdays } from "../../services/weekdays/getAllWeekdays.service.js";

export async function getAllWeekdaysController(
  req,
  res
) {
  // Get all weekdays
  const weekdays = await getAllWeekdays();

  return res.status(200).json(weekdays);
}

