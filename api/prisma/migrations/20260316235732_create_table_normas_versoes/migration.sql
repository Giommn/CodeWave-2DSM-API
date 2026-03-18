-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `nivel_user` ENUM('ADM', 'USER') NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE `normas_versoes` (
    `id_versao` INTEGER NOT NULL AUTO_INCREMENT,
    `norma_id` INTEGER NOT NULL,
    `versao_numero` INTEGER NOT NULL,
    `norm_titulo` VARCHAR(50) NOT NULL,
    `norm_dec` VARCHAR(500) NOT NULL,
    `emissao` DATE NOT NULL,
    `criado_em` TIMESTAMP(0) NOT NULL,
    `criado_em_novo` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `normas_versoes_norma_id_versao_numero_key`(`norma_id`, `versao_numero`),
    PRIMARY KEY (`id_versao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `normas_versoes` ADD CONSTRAINT `normas_versoes_norma_id_fkey` FOREIGN KEY (`norma_id`) REFERENCES `normas`(`id_norm`) ON DELETE CASCADE ON UPDATE CASCADE;
