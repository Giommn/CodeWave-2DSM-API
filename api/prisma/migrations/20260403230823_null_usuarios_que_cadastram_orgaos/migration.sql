-- DropForeignKey
ALTER TABLE `orgaos` DROP FOREIGN KEY `orgaos_adm_criador_fkey`;

-- AlterTable
ALTER TABLE `orgaos` MODIFY `adm_criador` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `orgaos` ADD CONSTRAINT `orgaos_adm_criador_fkey` FOREIGN KEY (`adm_criador`) REFERENCES `usuarios`(`id_user`) ON DELETE SET NULL ON UPDATE CASCADE;
