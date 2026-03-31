import NormRepository from "../repositories/norm.Repository";
import NormService from "../service/norm.Service";

export default class NormController{
    private static norm_repository:NormRepository = new NormRepository()
    private static norm_service:NormService = new NormService(this.norm_repository)

    
}