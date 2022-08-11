/*
  Warnings:

  - You are about to drop the `blogger` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `haha` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wow` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `blogger`;

-- DropTable
DROP TABLE `haha`;

-- DropTable
DROP TABLE `wow`;

-- CreateTable
CREATE TABLE `UserModel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
