import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function main() {
  // Create user
  const user = await prisma.user.upsert({
    where: { email: 'john.doe@example.com' },
    update: {},
    create: {
      id: uuidv4(),
      email: 'john.doe@example.com',
      password: 'simplepassword',
    },
  });

  // Create weekdays
  const weekdays = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  for (const weekday of weekdays) {
    await prisma.weekday.upsert({
      where: { weekday },
      update: {},
      create: {
        id: uuidv4(),
        weekday,
      },
    });
  }

  console.log('Seed complete!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
