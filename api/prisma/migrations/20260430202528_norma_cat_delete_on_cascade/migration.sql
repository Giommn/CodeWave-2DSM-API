-- DropForeignKey
ALTER TABLE `Norma_Categoria` DROP FOREIGN KEY `Norma_Categoria_id_norma_fkey`;

-- AddForeignKey
ALTER TABLE `Norma_Categoria` ADD CONSTRAINT `Norma_Categoria_id_norma_fkey` FOREIGN KEY (`id_norma`) REFERENCES `normas`(`id_norm`) ON DELETE CASCADE ON UPDATE CASCADE;
