-- AlterTable
CREATE SEQUENCE "diners_id_seq";
ALTER TABLE "diners" ALTER COLUMN "id" SET DEFAULT nextval('diners_id_seq');
ALTER SEQUENCE "diners_id_seq" OWNED BY "diners"."id";
