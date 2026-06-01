-- CreateTable
CREATE TABLE `Orgaos` (
    `org_id` INTEGER NOT NULL AUTO_INCREMENT,
    `org_desc` VARCHAR(50) NOT NULL,
    `org_sigla` VARCHAR(10) NOT NULL,
    `adm_criador` INTEGER NOT NULL,

    PRIMARY KEY (`org_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Orgaos` ADD CONSTRAINT `Orgaos_adm_criador_fkey` FOREIGN KEY (`adm_criador`) REFERENCES `usuarios`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;
