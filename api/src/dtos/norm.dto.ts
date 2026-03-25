// Entrada
export interface  CreateNormDTO{
  norm_titulo:string;
  norm_desc:string;
  org_criador:number;
  adm_criador:number;
  emissao:string;
  norm_codigo:string;
  pdf_nome_original:string;
  pdf_caminho:string;
  org_desc:string;
  org_sigla:string;
}

export interface UpdateNormDTO{
  norm_codigo:string
  norm_titulo?:string;
  norm_desc?:string;
  emissao?:string;
}

//Saida
export interface ResponseNorm{
norm_titulo:string;
norm_desc:string;
org_criador:string;
emissao:string;
norm_codigo:string;
}



