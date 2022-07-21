-- AddForeignKey
ALTER TABLE "diners" ADD CONSTRAINT "diners_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
