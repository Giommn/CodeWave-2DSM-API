import { CreateNotaDTO, ResponseNota } from "./nota.dto";

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
  notas?:Array<CreateNotaDTO>
  categoria:Array<string>
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
criacao?:string;
pdf_caminho:string;
referencias:Array<string>
notas:Array<ResponseNota>
categoria:Array<string>
}



