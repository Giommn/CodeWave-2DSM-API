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
  referencias?:Array<number>
}

export interface UpdateNormDTO{
  norm_codigoAtual:string
  norm_codigo:string
  norm_titulo?:string;
  norm_desc?:string;
  emissao:string;
  pdf_nome_original:string;
  pdf_caminho:string
}

//Saida
export interface ResponseNorm{
norm_titulo:string;
norm_desc:string;
org_criador:string;
emissao:string;
norm_codigo:string;
adm_criador:string;
id_norm:number;
referencias:Array<string>
}



