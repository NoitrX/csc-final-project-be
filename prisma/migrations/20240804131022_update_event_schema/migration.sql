/*
  Warnings:

  - Added the required column `dateEvent` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` ADD COLUMN `dateEvent` DATETIME(3) NOT NULL;
