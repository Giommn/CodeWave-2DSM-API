/*
  Warnings:

  - You are about to drop the column `versao_numero` on the `normas_versoes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[org_desc]` on the table `orgaos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `norma_codigo` to the `normas_versoes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `normas_versoes` DROP FOREIGN KEY `normas_versoes_norma_id_fkey`;

-- DropIndex
DROP INDEX `normas_versoes_emissao_norma_id_idx` ON `normas_versoes`;

-- DropIndex
DROP INDEX `normas_versoes_norma_id_versao_numero_idx` ON `normas_versoes`;

-- DropIndex
DROP INDEX `normas_versoes_norma_id_versao_numero_key` ON `normas_versoes`;

-- AlterTable
ALTER TABLE `normas` MODIFY `emissao` DATE NOT NULL;

-- AlterTable
ALTER TABLE `normas_versoes` DROP COLUMN `versao_numero`,
    ADD COLUMN `norma_codigo` VARCHAR(50) NOT NULL;

-- CreateIndex
CREATE INDEX `normas_versoes_norma_codigo_idx` ON `normas_versoes`(`norma_codigo`);

-- CreateIndex
CREATE UNIQUE INDEX `orgaos_org_desc_key` ON `orgaos`(`org_desc`);

-- AddForeignKey
ALTER TABLE `normas_versoes` ADD CONSTRAINT `normas_versoes_norma_id_fkey` FOREIGN KEY (`norma_id`) REFERENCES `normas`(`id_norm`) ON DELETE CASCADE ON UPDATE CASCADE;
