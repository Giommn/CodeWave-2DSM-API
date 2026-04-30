import { CreateNotaDTO } from "../dtos/nota.dto";
import { ValidatorError } from "../help/typeError";
import NotaRepositorie from "../repositories/nota.Repositorie";

export default class NotaService{
    constructor(private notaRepo:NotaRepositorie  ){}

    public async createNota(nota:CreateNotaDTO){
       if(!nota.notaIT || !nota.notaTitulo || !nota.adm_criador || !nota.norm_criador )throw new ValidatorError('Not a Nota',400,'Erro');
       return await this.notaRepo.createNota(nota)
    }
}