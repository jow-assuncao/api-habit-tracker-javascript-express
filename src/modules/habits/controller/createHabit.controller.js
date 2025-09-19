import { createHabit } from "../services/createHabit.service.js";

export async function createHabitController(request, response) {
  const body = request.body;
  console.log("[body]", body);

  const created = await createHabit(body);
  console.log("[created]", created);

  return response.status(201).json(created);
}
