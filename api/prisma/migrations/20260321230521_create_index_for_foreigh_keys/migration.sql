-- CreateIndex
CREATE INDEX `Nota_Categoria_id_nota_idx` ON `Nota_Categoria`(`id_nota`);

-- CreateIndex
CREATE INDEX `normas_norm_titulo_idx` ON `normas`(`norm_titulo`);

-- CreateIndex
CREATE INDEX `normas_emissao_idx` ON `normas`(`emissao`);

-- CreateIndex
CREATE INDEX `normas_data_criacao_idx` ON `normas`(`data_criacao`);

-- CreateIndex
CREATE INDEX `normas_referenciadas_norma_origem_id_idx` ON `normas_referenciadas`(`norma_origem_id`);

-- CreateIndex
CREATE INDEX `normas_versoes_norma_id_idx` ON `normas_versoes`(`norma_id`);

-- CreateIndex
CREATE INDEX `normas_versoes_norma_id_versao_numero_idx` ON `normas_versoes`(`norma_id`, `versao_numero`);

-- CreateIndex
CREATE INDEX `normas_versoes_emissao_norma_id_idx` ON `normas_versoes`(`emissao`, `norma_id`);

-- CreateIndex
CREATE INDEX `notas_not_titulo_idx` ON `notas`(`not_titulo`);

-- RenameIndex
ALTER TABLE `Nota_Categoria` RENAME INDEX `Nota_Categoria_id_cat_fkey` TO `Nota_Categoria_id_cat_idx`;

-- RenameIndex
ALTER TABLE `categoria` RENAME INDEX `categoria_adm_criador_fkey` TO `categoria_adm_criador_idx`;

-- RenameIndex
ALTER TABLE `normas` RENAME INDEX `normas_adm_criador_fkey` TO `normas_adm_criador_idx`;

-- RenameIndex
ALTER TABLE `normas` RENAME INDEX `normas_org_criador_fkey` TO `normas_org_criador_idx`;

-- RenameIndex
ALTER TABLE `normas_referenciadas` RENAME INDEX `normas_referenciadas_norma_destino_id_fkey` TO `normas_referenciadas_norma_destino_id_idx`;

-- RenameIndex
ALTER TABLE `notas` RENAME INDEX `notas_adm_criador_fkey` TO `notas_adm_criador_idx`;

-- RenameIndex
ALTER TABLE `notas` RENAME INDEX `notas_norm_criador_fkey` TO `notas_norm_criador_idx`;

-- RenameIndex
ALTER TABLE `orgaos` RENAME INDEX `orgaos_adm_criador_fkey` TO `orgaos_adm_criador_idx`;
