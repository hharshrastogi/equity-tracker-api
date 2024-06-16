/*
  Warnings:

  - You are about to alter the column `target_amount` on the `transactional_details` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `Float`.

*/
-- AlterTable
ALTER TABLE `transactional_details` MODIFY `target_amount` FLOAT NULL;
