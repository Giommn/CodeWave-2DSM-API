/*
  Warnings:

  - You are about to drop the `Categoria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Norma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Orgaos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Categoria` DROP FOREIGN KEY `Categoria_adm_criador_fkey`;

-- DropForeignKey
ALTER TABLE `Norma` DROP FOREIGN KEY `Norma_adm_criador_fkey`;

-- DropForeignKey
ALTER TABLE `Norma` DROP FOREIGN KEY `Norma_org_criador_fkey`;

-- DropForeignKey
ALTER TABLE `Notas` DROP FOREIGN KEY `Notas_adm_criador_fkey`;

-- DropForeignKey
ALTER TABLE `Notas` DROP FOREIGN KEY `Notas_norm_criador_fkey`;

-- DropForeignKey
ALTER TABLE `Orgaos` DROP FOREIGN KEY `Orgaos_adm_criador_fkey`;

-- DropTable
DROP TABLE `Categoria`;

-- DropTable
DROP TABLE `Norma`;

-- DropTable
DROP TABLE `Notas`;

-- DropTable
DROP TABLE `Orgaos`;

-- CreateTable
CREATE TABLE `orgaos` (
    `org_id` INTEGER NOT NULL AUTO_INCREMENT,
    `org_desc` VARCHAR(50) NOT NULL,
    `org_sigla` VARCHAR(10) NOT NULL,
    `adm_criador` INTEGER NOT NULL,

    PRIMARY KEY (`org_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoria` (
    `cat_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cat_nome` VARCHAR(50) NOT NULL,
    `adm_criador` INTEGER NOT NULL,
    `data_criacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `categoria_cat_nome_key`(`cat_nome`),
    PRIMARY KEY (`cat_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `normas` (
    `id_norm` INTEGER NOT NULL AUTO_INCREMENT,
    `norm_titulo` VARCHAR(100) NOT NULL,
    `norm_desc` TEXT NOT NULL,
    `org_criador` INTEGER NOT NULL,
    `adm_criador` INTEGER NOT NULL,
    `emissao` DATETIME(3) NOT NULL,
    `norm_codigo` VARCHAR(50) NOT NULL,
    `data_criacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `data_update` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `normas_norm_codigo_key`(`norm_codigo`),
    PRIMARY KEY (`id_norm`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notas` (
    `id_not` INTEGER NOT NULL AUTO_INCREMENT,
    `not_titulo` VARCHAR(191) NOT NULL,
    `not_dec` TEXT NOT NULL,
    `norm_criador` INTEGER NOT NULL,
    `adm_criador` INTEGER NOT NULL,
    `data_criacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id_not`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nota_Categoria` (
    `id_nota` INTEGER NOT NULL,
    `id_cat` INTEGER NOT NULL,

    PRIMARY KEY (`id_nota`, `id_cat`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `orgaos` ADD CONSTRAINT `orgaos_adm_criador_fkey` FOREIGN KEY (`adm_criador`) REFERENCES `usuarios`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `categoria` ADD CONSTRAINT `categoria_adm_criador_fkey` FOREIGN KEY (`adm_criador`) REFERENCES `usuarios`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `normas` ADD CONSTRAINT `normas_adm_criador_fkey` FOREIGN KEY (`adm_criador`) REFERENCES `usuarios`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `normas` ADD CONSTRAINT `normas_org_criador_fkey` FOREIGN KEY (`org_criador`) REFERENCES `orgaos`(`org_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notas` ADD CONSTRAINT `notas_adm_criador_fkey` FOREIGN KEY (`adm_criador`) REFERENCES `usuarios`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notas` ADD CONSTRAINT `notas_norm_criador_fkey` FOREIGN KEY (`norm_criador`) REFERENCES `normas`(`id_norm`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Nota_Categoria` ADD CONSTRAINT `Nota_Categoria_id_cat_fkey` FOREIGN KEY (`id_cat`) REFERENCES `categoria`(`cat_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Nota_Categoria` ADD CONSTRAINT `Nota_Categoria_id_nota_fkey` FOREIGN KEY (`id_nota`) REFERENCES `notas`(`id_not`) ON DELETE RESTRICT ON UPDATE CASCADE;
