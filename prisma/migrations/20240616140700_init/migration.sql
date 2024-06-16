/*
  Warnings:

  - You are about to alter the column `total_price` on the `transactional_details` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `Float`.

*/
-- AlterTable
ALTER TABLE `transactional_details` MODIFY `total_price` FLOAT NULL;
