-- AddForeignKey
ALTER TABLE `pedidos_alteracao` ADD CONSTRAINT `pedidos_alteracao_id_norma_fkey` FOREIGN KEY (`id_norma`) REFERENCES `normas`(`id_norm`) ON DELETE SET NULL ON UPDATE CASCADE;
