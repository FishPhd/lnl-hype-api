/*
  Warnings:

  - Made the column `name` on table `restaurants` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rating` on table `restaurants` required. This step will fail if there are existing NULL values in that column.
  - Made the column `guide` on table `restaurants` required. This step will fail if there are existing NULL values in that column.
  - Made the column `img` on table `restaurants` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `restaurants` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cuisine` on table `restaurants` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lat` on table `restaurants` required. This step will fail if there are existing NULL values in that column.
  - Made the column `long` on table `restaurants` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "restaurants" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "rating" SET NOT NULL,
ALTER COLUMN "guide" SET NOT NULL,
ALTER COLUMN "img" SET NOT NULL,
ALTER COLUMN "location" SET NOT NULL,
ALTER COLUMN "cuisine" SET NOT NULL,
ALTER COLUMN "lat" SET NOT NULL,
ALTER COLUMN "long" SET NOT NULL;
