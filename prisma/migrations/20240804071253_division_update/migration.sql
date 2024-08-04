/*
  Warnings:

  - You are about to drop the column `detail_division` on the `division` table. All the data in the column will be lost.
  - You are about to drop the column `image_detail` on the `division` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `division` DROP COLUMN `detail_division`,
    DROP COLUMN `image_detail`;
