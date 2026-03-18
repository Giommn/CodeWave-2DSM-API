/*
  Warnings:

  - Added the required column `pdf_caminho` to the `normas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pdf_nome_original` to the `normas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pdf_caminho` to the `normas_versoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pdf_nome_original` to the `normas_versoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `normas` ADD COLUMN `pdf_caminho` VARCHAR(500) NOT NULL,
    ADD COLUMN `pdf_nome_original` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `normas_versoes` ADD COLUMN `pdf_caminho` VARCHAR(500) NOT NULL,
    ADD COLUMN `pdf_nome_original` VARCHAR(255) NOT NULL;
