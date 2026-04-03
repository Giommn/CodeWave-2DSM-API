import { CreateNormDTO, UpdateNormDTO } from "../dtos/norm.dto";
import NormRepository from "../repositories/norm.Repository";

export default class NormService {
  constructor(private NormRepository: NormRepository) {}

  public createNorm(norma: CreateNormDTO) {
    return this.NormRepository.createNorm(norma);
  }
  public deleteNorm(id_norm: number) {
    return this.NormRepository.deleteNorm(id_norm);
  }
  public updateNorm(norma: UpdateNormDTO) {
    return this.NormRepository.updateNorm(norma);
  }
  public getNorms() {
    return this.NormRepository.getNorms();
  }
  public saveHistoric(id_norm: number, id_user: number) {
    return this.NormRepository.saveNormsInHistoric(id_norm, id_user);
  }
  public getHistoric(id_user: number) {
    return this.NormRepository.getHistoricNorms(id_user);
  }
}
