-- CreateTable
CREATE TABLE `Norma` (
    `id_norm` INTEGER NOT NULL AUTO_INCREMENT,
    `norm_titulo` VARCHAR(100) NOT NULL,
    `norm_desc` TEXT NOT NULL,
    `org_criador` INTEGER NOT NULL,
    `adm_criador` INTEGER NOT NULL,
    `emissao` DATETIME(3) NOT NULL,
    `norm_codigo` VARCHAR(50) NOT NULL,
    `data_criacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `data_update` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `Norma_norm_codigo_key`(`norm_codigo`),
    PRIMARY KEY (`id_norm`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Norma` ADD CONSTRAINT `Norma_adm_criador_fkey` FOREIGN KEY (`adm_criador`) REFERENCES `usuarios`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Norma` ADD CONSTRAINT `Norma_org_criador_fkey` FOREIGN KEY (`org_criador`) REFERENCES `Orgaos`(`org_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
