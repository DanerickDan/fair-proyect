/*
  Warnings:

  - Added the required column `idLocation` to the `WorkPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `WorkPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `workpost` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `idLocation` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `Locations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `WorkPost` ADD CONSTRAINT `WorkPost_idLocation_fkey` FOREIGN KEY (`idLocation`) REFERENCES `Locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
