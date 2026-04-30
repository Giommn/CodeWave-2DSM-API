/*
  Warnings:

  - You are about to drop the column `not_dec` on the `notas` table. All the data in the column will be lost.
  - You are about to drop the `Nota_Categoria` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `not_IT` to the `notas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Nota_Categoria` DROP FOREIGN KEY `Nota_Categoria_id_cat_fkey`;

-- DropForeignKey
ALTER TABLE `Nota_Categoria` DROP FOREIGN KEY `Nota_Categoria_id_nota_fkey`;

-- AlterTable
ALTER TABLE `notas` DROP COLUMN `not_dec`,
    ADD COLUMN `not_AB` TEXT NULL,
    ADD COLUMN `not_IT` TEXT NOT NULL,
    ADD COLUMN `not_Pa` TEXT NULL;

-- AlterTable
ALTER TABLE `usuarios` MODIFY `nivel_user` ENUM('ADM', 'USER', 'CHECKER') NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE `Nota_Categoria`;

-- CreateTable
CREATE TABLE `Norma_Categoria` (
    `id_norma` INTEGER NOT NULL,
    `id_cat` INTEGER NOT NULL,

    INDEX `Norma_Categoria_id_cat_idx`(`id_cat`),
    INDEX `Norma_Categoria_id_norma_idx`(`id_norma`),
    PRIMARY KEY (`id_norma`, `id_cat`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedidos_alteracao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `alteracao` JSON NOT NULL,
    `acaoDealteracao` ENUM('CREATE', 'UPDATE') NOT NULL,
    `notaorNorma` ENUM('NORMA', 'NOTA') NOT NULL,
    `status` ENUM('PENDENTE', 'REJEITADO', 'APROVADO') NOT NULL DEFAULT 'PENDENTE',
    `data_pedido` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_norma` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Norma_Categoria` ADD CONSTRAINT `Norma_Categoria_id_cat_fkey` FOREIGN KEY (`id_cat`) REFERENCES `categoria`(`cat_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Norma_Categoria` ADD CONSTRAINT `Norma_Categoria_id_norma_fkey` FOREIGN KEY (`id_norma`) REFERENCES `normas`(`id_norm`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedidos_alteracao` ADD CONSTRAINT `pedidos_alteracao_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `usuarios`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;
