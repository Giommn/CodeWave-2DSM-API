# File Tree: CodeWave-2DSM-API

```
├── 📁 api
│   ├── 📁 prisma
│   │   ├── 📁 migrations
│   │   │   ├── 📁 20260316201114_create_table_user
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260316205051_create_table_orgaos
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260316205903_create_table_categoria
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260316224210_create_table_norma
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260316224619_create_database_notas
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260316225441_create_table_nota_categoria
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260316230513_create_table_normas_referenciadas
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260316235732_create_table_normas_versoes
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260317001155_create_table_mfa
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260317184331_criacao_de_coluna_de_pdf_para_norma_e_norma_v
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260321230521_create_index_for_foreigh_keys
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260321230932_create_index_for_mfa
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260325000402_create_table_historico_de_acessos_de_normas
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260326012155_removendo_colunas_desnecessarias
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260401174447_adicionando_on_delete_cascade_nas_normas
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260403230823_null_usuarios_que_cadastram_orgaos
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260419195613_categorias_para_normas_e_pedidos_de_alteracao
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260429191106_favoritas_normas
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260429205032_pedido_normas
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260430202528_norma_cat_delete_on_cascade
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260501030335_ondeletecascade_normas
│   │   │   │   └── 📄 migration.sql
│   │   │   ├── 📁 20260501164440_favoritos
│   │   │   │   └── 📄 migration.sql
│   │   │   └── ⚙️ migration_lock.toml
│   │   └── 📄 schema.prisma
│   ├── 📁 src
│   │   ├── 📁 config
│   │   │   ├── 📄 jwt.ts
│   │   │   └── 📄 prisma.ts
│   │   ├── 📁 controllers
│   │   │   ├── 📄 norm.Controller.ts
│   │   │   ├── 📄 nota.Controller.ts
│   │   │   ├── 📄 pedidos.Controller.ts
│   │   │   └── 📄 user.Controller.ts
│   │   ├── 📁 dtos
│   │   │   ├── 📄 norm.dto.ts
│   │   │   ├── 📄 nota.dto.ts
│   │   │   ├── 📄 pedidos.dto.ts
│   │   │   └── 📄 user.dto.ts
│   │   ├── 📁 generated
│   │   │   └── 📁 prisma
│   │   │       ├── 📁 runtime
│   │   │       │   ├── 📄 client.d.ts
│   │   │       │   ├── 📄 client.js
│   │   │       │   ├── 📄 index-browser.d.ts
│   │   │       │   ├── 📄 index-browser.js
│   │   │       │   └── 📄 wasm-compiler-edge.js
│   │   │       ├── 📄 client.d.ts
│   │   │       ├── 📄 client.js
│   │   │       ├── 📄 default.d.ts
│   │   │       ├── 📄 default.js
│   │   │       ├── 📄 edge.d.ts
│   │   │       ├── 📄 edge.js
│   │   │       ├── 📄 index-browser.js
│   │   │       ├── 📄 index.d.ts
│   │   │       ├── 📄 index.js
│   │   │       ├── ⚙️ package.json
│   │   │       ├── 📄 query_compiler_fast_bg.js
│   │   │       ├── 📄 query_compiler_fast_bg.wasm
│   │   │       ├── 📄 query_compiler_fast_bg.wasm-base64.js
│   │   │       ├── 📄 schema.prisma
│   │   │       ├── 📄 wasm-edge-light-loader.mjs
│   │   │       └── 📄 wasm-worker-loader.mjs
│   │   ├── 📁 help
│   │   │   └── 📄 typeError.ts
│   │   ├── 📁 interfaces
│   │   │   ├── 📄 norm.interface.ts
│   │   │   ├── 📄 nota.interface.ts
│   │   │   ├── 📄 pedidos.interface.ts
│   │   │   └── 📄 user.Interface.ts
│   │   ├── 📁 middleware
│   │   │   └── 📄 middleware.ts
│   │   ├── 📁 repositories
│   │   │   ├── 📄 norm.Repository.ts
│   │   │   ├── 📄 nota.Repositorie.ts
│   │   │   ├── 📄 pedidos.Repository.ts
│   │   │   └── 📄 user.Repository.ts
│   │   ├── 📁 routes
│   │   │   ├── 📄 normControllerRoute.ts
│   │   │   ├── 📄 notaControllerRoute.ts
│   │   │   ├── 📄 pedidosControllerRoute.ts
│   │   │   └── 📄 userControlerRoute.ts
│   │   └── 📁 service
│   │       ├── 📄 norm.Service.ts
│   │       ├── 📄 nota.service.ts
│   │       ├── 📄 pedidoService.ts
│   │       └── 📄 user.Service.ts
│   ├── 📁 upload_pdf
│   │   ├── 📕 1777574069280.pdf
│   │   ├── 📕 1777603221568.pdf
│   │   ├── 📕 1777604718153.pdf
│   │   ├── 📕 1777604842994.pdf
│   │   ├── 📕 1777644843071.pdf
│   │   ├── 📕 1777663072705.pdf
│   │   ├── 📕 1777667034262.pdf
│   │   ├── 📕 1780159279345.pdf
│   │   ├── 📕 1780162813685.pdf
│   │   ├── 📕 1780163121392.pdf
│   │   ├── 📕 1780163231227.pdf
│   │   ├── 📕 1780163276045.pdf
│   │   ├── 📕 1780163292045.pdf
│   │   ├── 📕 1780163638948.pdf
│   │   ├── 📕 1780163733294.pdf
│   │   ├── 📕 1780163767844.pdf
│   │   ├── 📕 1780164108951.pdf
│   │   ├── 📕 1780164125041.pdf
│   │   ├── 📕 1780164267914.pdf
│   │   ├── 📕 1780164282233.pdf
│   │   ├── 📕 1780164598945.pdf
│   │   ├── 📕 1780164621515.pdf
│   │   ├── 📕 1780164640286.pdf
│   │   ├── 📕 1780165217207.pdf
│   │   ├── 📕 1780165235180.pdf
│   │   ├── 📕 1780165350150.pdf
│   │   ├── 📕 1780165611064.pdf
│   │   ├── 📕 1780165896069.pdf
│   │   ├── 📕 1780170494573.pdf
│   │   ├── 📕 1780171003925.pdf
│   │   ├── 📕 1780171108390.pdf
│   │   ├── 📕 1780171334899.pdf
│   │   ├── 📕 1780173595647.pdf
│   │   ├── 📕 1780173749637.pdf
│   │   ├── 📕 1780173818864.pdf
│   │   ├── 📕 1780174099231.pdf
│   │   ├── 📕 1780174543417.pdf
│   │   ├── 📕 1780174816175.pdf
│   │   ├── 📕 1780175125625.pdf
│   │   ├── 📕 1780175196483.pdf
│   │   ├── 📕 1780176323713.pdf
│   │   ├── 📕 1780258929992.pdf
│   │   ├── 📕 1780260276088.pdf
│   │   ├── 📕 1780261424951.pdf
│   │   ├── 📕 1780261685764.pdf
│   │   ├── 📕 1780262362078.pdf
│   │   ├── 📕 1780262492600.pdf
│   │   ├── 📕 1780263808391.pdf
│   │   ├── 📕 1780264571695.pdf
│   │   ├── 📕 1780265479508.pdf
│   │   ├── 📕 1780265522192.pdf
│   │   ├── 📕 1780265561778.pdf
│   │   ├── 📕 1780265667034.pdf
│   │   ├── 📕 1780265786355.pdf
│   │   ├── 📕 1780266329381.pdf
│   │   ├── 📕 1780266628538.pdf
│   │   ├── 📕 1780267601340.pdf
│   │   ├── 📕 1780271358049.pdf
│   │   ├── 📕 1780271495252.pdf
│   │   ├── 📕 1780271864122.pdf
│   │   ├── 📕 1780272360331.pdf
│   │   ├── 📕 1780272687533.pdf
│   │   ├── 📕 1780273249582.pdf
│   │   ├── 📕 1780273317211.pdf
│   │   └── 📕 1780273411247.pdf
│   ├── ⚙️ .gitignore
│   ├── ⚙️ docker-compose.yml
│   ├── 📄 eslint.config.mts
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   ├── 📄 prisma.config.ts
│   ├── 📄 routes.ts
│   ├── 📄 server.ts
│   └── ⚙️ tsconfig.json
├── 📁 docs
│   ├── 📁 cenarios
│   │   ├── 📁 sprint1
│   │   │   ├── 📝 cenario-user-story-1.md
│   │   │   ├── 📝 cenario-user-story-2.md
│   │   │   ├── 📝 cenario-user-story-3.md
│   │   │   └── 📝 cenario-user-story-4.md
│   │   ├── 📁 sprint2
│   │   │   ├── 📝 cenario-user-story-5.md
│   │   │   ├── 📝 cenario-user-story-6.md
│   │   │   └── 📝 cenario-user-story-7.md
│   │   └── 📁 sprint3
│   │       ├── 📝 cenario-user-story-8.md
│   │       └── 📝 cenario-user-story-9.md
│   ├── 📁 img
│   │   └── 🖼️ CodeWave_logo.png
│   ├── 📁 model
│   │   ├── 🖼️ CodewaveModel-Normas.png
│   │   └── 📄 resolve.sql
│   ├── 📁 sprints
│   │   ├── 📁 sprint1
│   │   │   └── 📝 readme.md
│   │   ├── 📁 sprint2
│   │   │   └── 📝 readme.md
│   │   └── 📁 sprint3
│   │       └── 📝 readme.md
│   └── 📁 videos
│       ├── 📁 sprint1
│       │   └── 🎬 video_mvp_api_2_sprint1.mp4
│       └── 📁 sprint2
│           └── 🎬 video_mvp_api_2_sprint2.mp4
├── 📁 frontend
│   ├── 📁 img
│   │   ├── 🖼️ logo1.png
│   │   └── 🖼️ logo2.svg
│   ├── 📁 public
│   │   ├── 📁 img
│   │   │   └── 🖼️ Akaer.png
│   │   ├── 📕 API Desafio do Parceiro 1DSM - PMSJC.pdf
│   │   ├── 📕 AtestadodeMatriculaSimples_1461392521017_FATEC-SJC_D.S.M._Manhã.PDF
│   │   └── 📕 Desafio do Parceiro Acadêmico 2DSM - Akaer Rev02 (1).pdf
│   ├── 📁 src
│   │   ├── 📁 assets
│   │   │   ├── 🖼️ Add.png
│   │   │   ├── 🖼️ Akaer.png
│   │   │   ├── 🖼️ AkaerEscrita.png
│   │   │   ├── 🖼️ LogoAkaer.png
│   │   │   ├── 🖼️ Lupa.svg
│   │   │   ├── 🖼️ SemFiltro.svg
│   │   │   └── 🖼️ nuvemUpload.png
│   │   ├── 📁 components
│   │   │   ├── 📄 Busca.tsx
│   │   │   ├── 📄 CardsDados.tsx
│   │   │   ├── 📄 DropdownFiltros.tsx
│   │   │   ├── 📄 FiltroData.tsx
│   │   │   ├── 📄 FiltroNotificacao.tsx
│   │   │   ├── 📄 ListaNormas.tsx
│   │   │   ├── 📄 ListaNormasAprovadas.tsx
│   │   │   ├── 📄 ModalCriarNorma.tsx
│   │   │   ├── 📄 ModalCriarNota.tsx
│   │   │   ├── 📄 ModalEditarNorma.tsx
│   │   │   ├── 📄 ModalNotificacao.tsx
│   │   │   ├── 📄 ModalPDFViewer.tsx
│   │   │   ├── 📄 ModalVisualizarNorma.tsx
│   │   │   ├── 📄 Navbar.tsx
│   │   │   ├── 📄 Popup.tsx
│   │   │   ├── 📄 RegisterModal.tsx
│   │   │   ├── 📄 RemoverFiltros.tsx
│   │   │   ├── 📄 ToastNotificacaoDia.tsx
│   │   │   ├── 📄 UploadsCards.tsx
│   │   │   └── 📄 UserBadge.tsx
│   │   ├── 📁 context
│   │   │   └── 📄 NotificacaoDiaContext.tsx
│   │   ├── 📁 layouts
│   │   │   └── 📄 LayoutProtegido.tsx
│   │   ├── 📁 pages
│   │   │   ├── 📄 Home.tsx
│   │   │   ├── 📄 Login.tsx
│   │   │   ├── 📄 Normas.tsx
│   │   │   ├── 📄 Notificacoes.tsx
│   │   │   └── 📄 cadastro.tsx
│   │   ├── 📄 App.tsx
│   │   ├── 🎨 index.css
│   │   └── 📄 main.tsx
│   ├── ⚙️ .gitignore
│   ├── 📄 eslint.config.js
│   ├── 🌐 index.html
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   ├── ⚙️ tsconfig.app.json
│   ├── ⚙️ tsconfig.json
│   ├── ⚙️ tsconfig.node.json
│   └── 📄 vite.config.ts
├── ⚙️ .gitattributes
├── ⚙️ .gitignore
└── 📝 readme.md
```
