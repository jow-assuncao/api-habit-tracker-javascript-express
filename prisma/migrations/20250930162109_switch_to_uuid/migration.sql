-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."habits" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "habit" TEXT NOT NULL,

    CONSTRAINT "habits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."weekdays" (
    "id" TEXT NOT NULL,
    "weekday" TEXT NOT NULL,

    CONSTRAINT "weekdays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."habit_weekday" (
    "habit_id" TEXT NOT NULL,
    "weekday_id" TEXT NOT NULL,
    "is_done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "habit_weekday_pkey" PRIMARY KEY ("habit_id","weekday_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "weekdays_weekday_key" ON "public"."weekdays"("weekday");

-- AddForeignKey
ALTER TABLE "public"."habits" ADD CONSTRAINT "habits_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."habit_weekday" ADD CONSTRAINT "habit_weekday_habit_id_fkey" FOREIGN KEY ("habit_id") REFERENCES "public"."habits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."habit_weekday" ADD CONSTRAINT "habit_weekday_weekday_id_fkey" FOREIGN KEY ("weekday_id") REFERENCES "public"."weekdays"("id") ON DELETE CASCADE ON UPDATE CASCADE;
