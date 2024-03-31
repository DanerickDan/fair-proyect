/*
  Warnings:

  - You are about to drop the column `image` on the `workpost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `workpost` DROP COLUMN `image`;

-- CreateTable
CREATE TABLE `Images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` TEXT NOT NULL,
    `workPostId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_workPostId_fkey` FOREIGN KEY (`workPostId`) REFERENCES `WorkPost`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
