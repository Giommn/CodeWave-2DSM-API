/*
  Warnings:

  - You are about to drop the column `favorita` on the `normas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `normas` DROP COLUMN `favorita`;

-- CreateTable
CREATE TABLE `Normas_favoritadas` (
    `id_user` INTEGER NOT NULL,
    `id_norma` INTEGER NOT NULL,
    `data_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_user`, `id_norma`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Normas_favoritadas` ADD CONSTRAINT `Normas_favoritadas_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `usuarios`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Normas_favoritadas` ADD CONSTRAINT `Normas_favoritadas_id_norma_fkey` FOREIGN KEY (`id_norma`) REFERENCES `normas`(`id_norm`) ON DELETE CASCADE ON UPDATE CASCADE;
