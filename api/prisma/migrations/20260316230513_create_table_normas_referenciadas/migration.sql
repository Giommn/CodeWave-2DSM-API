-- CreateTable
CREATE TABLE `normas_referenciadas` (
    `norma_origem_id` INTEGER NOT NULL,
    `norma_destino_id` INTEGER NOT NULL,

    PRIMARY KEY (`norma_origem_id`, `norma_destino_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `normas_referenciadas` ADD CONSTRAINT `normas_referenciadas_norma_origem_id_fkey` FOREIGN KEY (`norma_origem_id`) REFERENCES `normas`(`id_norm`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `normas_referenciadas` ADD CONSTRAINT `normas_referenciadas_norma_destino_id_fkey` FOREIGN KEY (`norma_destino_id`) REFERENCES `normas`(`id_norm`) ON DELETE RESTRICT ON UPDATE CASCADE;
    