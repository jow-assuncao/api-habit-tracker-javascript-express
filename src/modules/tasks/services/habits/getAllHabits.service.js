import { prisma } from "../../../../shared/infra/prisma/client.js";

export async function getAllHabits() {
  const habits = await prisma.habit.findMany({
    where: {
      userId: "dff6184e-e918-48fb-ae4c-8bb1717b918d" // Hardcoded userId for now (replace with actual UUID)
    }
  });

  return habits;
}