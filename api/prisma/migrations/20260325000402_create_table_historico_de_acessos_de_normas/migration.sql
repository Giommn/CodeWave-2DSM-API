-- CreateTable
CREATE TABLE `Historico_Acesso_Normas` (
    `id_user` INTEGER NOT NULL,
    `id_norma` INTEGER NOT NULL,
    `data_acesso` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_norma`, `id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Historico_Acesso_Normas` ADD CONSTRAINT `Historico_Acesso_Normas_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `usuarios`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Historico_Acesso_Normas` ADD CONSTRAINT `Historico_Acesso_Normas_id_norma_fkey` FOREIGN KEY (`id_norma`) REFERENCES `normas`(`id_norm`) ON DELETE RESTRICT ON UPDATE CASCADE;
