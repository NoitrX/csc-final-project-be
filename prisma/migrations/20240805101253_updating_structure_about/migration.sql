/*
  Warnings:

  - You are about to drop the column `mission` on the `about` table. All the data in the column will be lost.
  - You are about to drop the column `vision` on the `about` table. All the data in the column will be lost.
  - Added the required column `headerImage` to the `About` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `about` DROP COLUMN `mission`,
    DROP COLUMN `vision`,
    ADD COLUMN `headerImage` VARCHAR(191) NOT NULL;
