-- CreateTable
CREATE TABLE "diners" (
    "id" BIGINT NOT NULL,
    "restaurant_id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "diners_pkey" PRIMARY KEY ("id")
);
