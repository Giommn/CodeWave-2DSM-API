-- CreateTable
CREATE TABLE `mfa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id_FK` INTEGER NOT NULL,
    `cod_mfa` VARCHAR(255) NOT NULL,
    `cod_data_cricao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `mfa` ADD CONSTRAINT `mfa_user_id_FK_fkey` FOREIGN KEY (`user_id_FK`) REFERENCES `usuarios`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
