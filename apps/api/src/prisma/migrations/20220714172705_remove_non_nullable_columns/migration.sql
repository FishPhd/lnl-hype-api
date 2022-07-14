-- CreateTable
CREATE TABLE "restaurants" (
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "rating" BIGINT NOT NULL,
    "guide" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "lat" DOUBLE PRECISION,
    "long" DOUBLE PRECISION,
    "year" BIGINT NOT NULL,
    "cuisine" TEXT NOT NULL,

    CONSTRAINT "restaurants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ix_restaurants_id" ON "restaurants"("id");
