-- DropForeignKey
ALTER TABLE `notas` DROP FOREIGN KEY `notas_norm_criador_fkey`;

-- DropForeignKey
ALTER TABLE `pedidos_alteracao` DROP FOREIGN KEY `pedidos_alteracao_id_norma_fkey`;

-- DropIndex
DROP INDEX `pedidos_alteracao_id_norma_fkey` ON `pedidos_alteracao`;

-- AddForeignKey
ALTER TABLE `notas` ADD CONSTRAINT `notas_norm_criador_fkey` FOREIGN KEY (`norm_criador`) REFERENCES `normas`(`id_norm`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedidos_alteracao` ADD CONSTRAINT `pedidos_alteracao_id_norma_fkey` FOREIGN KEY (`id_norma`) REFERENCES `normas`(`id_norm`) ON DELETE CASCADE ON UPDATE CASCADE;
