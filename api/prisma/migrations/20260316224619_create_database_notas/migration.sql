-- CreateTable
CREATE TABLE `Notas` (
    `id_not` INTEGER NOT NULL AUTO_INCREMENT,
    `not_titulo` VARCHAR(191) NOT NULL,
    `not_dec` TEXT NOT NULL,
    `norm_criador` INTEGER NOT NULL,
    `adm_criador` INTEGER NOT NULL,
    `data_criacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id_not`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Notas` ADD CONSTRAINT `Notas_adm_criador_fkey` FOREIGN KEY (`adm_criador`) REFERENCES `usuarios`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notas` ADD CONSTRAINT `Notas_norm_criador_fkey` FOREIGN KEY (`norm_criador`) REFERENCES `Norma`(`id_norm`) ON DELETE RESTRICT ON UPDATE CASCADE;
