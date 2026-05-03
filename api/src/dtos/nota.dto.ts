// Entrada
export interface CreateNotaDTO {
    notaIT:string,
    notaTitulo:string,
    notaAB?:string,
    notaPA?:string,
    norm_criador:number,
    adm_criador:number;
}


//Saida
export interface ResponseNota {
      notaIT:string 
      notaTitulo:string 
      notaAB:string 
      notaPA:string 
      norm_criador:string 
      adm_criador:string
}
