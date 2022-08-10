/*
  Warnings:

  - You are about to drop the column `age` on the `blogger` table. All the data in the column will be lost.
  - Added the required column `usernmae` to the `Blogger` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `blogger` DROP COLUMN `age`,
    ADD COLUMN `usernmae` VARCHAR(191) NOT NULL;
