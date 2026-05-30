import { CreateNotaDTO, ResponseNota } from "../dtos/nota.dto";

export default interface Nota{
    createNota(nota:CreateNotaDTO):Promise<ResponseNota>
}