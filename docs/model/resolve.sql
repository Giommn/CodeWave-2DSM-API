-- CreateTable
CREATE TABLE `usuarios` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `user_senha_hash` VARCHAR(255) NOT NULL,
    `data_criacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `nivel_user` ENUM('ADM', 'USER') NOT NULL DEFAULT 'USER',

    UNIQUE INDEX `usuarios_email_key`(`email`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orgaos` (
    `org_id` INTEGER NOT NULL AUTO_INCREMENT,
    `org_desc` VARCHAR(50) NOT NULL,
    `org_sigla` VARCHAR(10) NOT NULL,
    `adm_criador` INTEGER NOT NULL,

    PRIMARY KEY (`org_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoria` (
    `cat_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cat_nome` VARCHAR(50) NOT NULL,
    `adm_criador` INTEGER NOT NULL,
    `data_criacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `categoria_cat_nome_key`(`cat_nome`),
    PRIMARY KEY (`cat_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `normas` (
    `id_norm` INTEGER NOT NULL AUTO_INCREMENT,
    `norm_titulo` VARCHAR(100) NOT NULL,
    `norm_desc` TEXT NOT NULL,
    `org_criador` INTEGER NOT NULL,
    `adm_criador` INTEGER NOT NULL,
    `emissao` DATETIME(3) NOT NULL,
    `norm_codigo` VARCHAR(50) NOT NULL,
    `data_criacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `data_update` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `pdf_nome_original` VARCHAR(255) NOT NULL,
    `pdf_caminho` VARCHAR(500) NOT NULL,

    UNIQUE INDEX `normas_norm_codigo_key`(`norm_codigo`),
    PRIMARY KEY (`id_norm`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notas` (
    `id_not` INTEGER NOT NULL AUTO_INCREMENT,
    `not_titulo` VARCHAR(191) NOT NULL,
    `not_dec` TEXT NOT NULL,
    `norm_criador` INTEGER NOT NULL,
    `adm_criador` INTEGER NOT NULL,
    `data_criacao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id_not`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nota_Categoria` (
    `id_nota` INTEGER NOT NULL,
    `id_cat` INTEGER NOT NULL,

    PRIMARY KEY (`id_nota`, `id_cat`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `normas_referenciadas` (
    `norma_origem_id` INTEGER NOT NULL,
    `norma_destino_id` INTEGER NOT NULL,

    PRIMARY KEY (`norma_origem_id`, `norma_destino_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `normas_versoes` (
    `id_versao` INTEGER NOT NULL AUTO_INCREMENT,
    `norma_id` INTEGER NOT NULL,
    `versao_numero` INTEGER NOT NULL,
    `norm_titulo` VARCHAR(50) NOT NULL,
    `norm_dec` VARCHAR(500) NOT NULL,
    `emissao` DATE NOT NULL,
    `criado_em` TIMESTAMP(0) NOT NULL,
    `criado_em_novo` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `pdf_nome_original` VARCHAR(255) NOT NULL,
    `pdf_caminho` VARCHAR(500) NOT NULL,

    UNIQUE INDEX `normas_versoes_norma_id_versao_numero_key`(`norma_id`, `versao_numero`),
    PRIMARY KEY (`id_versao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mfa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id_FK` INTEGER NOT NULL,
    `cod_mfa` VARCHAR(255) NOT NULL,
    `cod_data_cricao` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `orgaos` ADD CONSTRAINT `orgaos_adm_criador_fkey` FOREIGN KEY (`adm_criador`) REFERENCES `usuarios`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `categoria` ADD CONSTRAINT `categoria_adm_criador_fkey` FOREIGN KEY (`adm_criador`) REFERENCES `usuarios`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `normas` ADD CONSTRAINT `normas_adm_criador_fkey` FOREIGN KEY (`adm_criador`) REFERENCES `usuarios`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `normas` ADD CONSTRAINT `normas_org_criador_fkey` FOREIGN KEY (`org_criador`) REFERENCES `orgaos`(`org_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notas` ADD CONSTRAINT `notas_adm_criador_fkey` FOREIGN KEY (`adm_criador`) REFERENCES `usuarios`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notas` ADD CONSTRAINT `notas_norm_criador_fkey` FOREIGN KEY (`norm_criador`) REFERENCES `normas`(`id_norm`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Nota_Categoria` ADD CONSTRAINT `Nota_Categoria_id_cat_fkey` FOREIGN KEY (`id_cat`) REFERENCES `categoria`(`cat_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Nota_Categoria` ADD CONSTRAINT `Nota_Categoria_id_nota_fkey` FOREIGN KEY (`id_nota`) REFERENCES `notas`(`id_not`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `normas_referenciadas` ADD CONSTRAINT `normas_referenciadas_norma_origem_id_fkey` FOREIGN KEY (`norma_origem_id`) REFERENCES `normas`(`id_norm`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `normas_referenciadas` ADD CONSTRAINT `normas_referenciadas_norma_destino_id_fkey` FOREIGN KEY (`norma_destino_id`) REFERENCES `normas`(`id_norm`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `normas_versoes` ADD CONSTRAINT `normas_versoes_norma_id_fkey` FOREIGN KEY (`norma_id`) REFERENCES `normas`(`id_norm`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mfa` ADD CONSTRAINT `mfa_user_id_FK_fkey` FOREIGN KEY (`user_id_FK`) REFERENCES `usuarios`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

