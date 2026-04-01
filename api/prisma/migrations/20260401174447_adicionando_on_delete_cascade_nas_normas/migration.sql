-- DropForeignKey
ALTER TABLE `Historico_Acesso_Normas` DROP FOREIGN KEY `Historico_Acesso_Normas_id_norma_fkey`;

-- DropForeignKey
ALTER TABLE `Historico_Acesso_Normas` DROP FOREIGN KEY `Historico_Acesso_Normas_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `normas_referenciadas` DROP FOREIGN KEY `normas_referenciadas_norma_destino_id_fkey`;

-- DropForeignKey
ALTER TABLE `normas_referenciadas` DROP FOREIGN KEY `normas_referenciadas_norma_origem_id_fkey`;

-- DropIndex
DROP INDEX `Historico_Acesso_Normas_id_user_fkey` ON `Historico_Acesso_Normas`;

-- AddForeignKey
ALTER TABLE `normas_referenciadas` ADD CONSTRAINT `normas_referenciadas_norma_origem_id_fkey` FOREIGN KEY (`norma_origem_id`) REFERENCES `normas`(`id_norm`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `normas_referenciadas` ADD CONSTRAINT `normas_referenciadas_norma_destino_id_fkey` FOREIGN KEY (`norma_destino_id`) REFERENCES `normas`(`id_norm`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Historico_Acesso_Normas` ADD CONSTRAINT `Historico_Acesso_Normas_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `usuarios`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Historico_Acesso_Normas` ADD CONSTRAINT `Historico_Acesso_Normas_id_norma_fkey` FOREIGN KEY (`id_norma`) REFERENCES `normas`(`id_norm`) ON DELETE CASCADE ON UPDATE CASCADE;
