import { CodesHttpEnum } from "../../enums/codesHttpsEnums";
import { HttpResponse } from "../../utils/httpresponse.utils";
import { DataRepository } from "./data.repository";

export class DataServices {
  private dataRepository: DataRepository;
  constructor() {
    this.dataRepository = new DataRepository();
  }
  async getWaybill(option: string) {
    try {
      const dataWayBillFromDb = await this.dataRepository.getWaybill(option);
      const codeError = dataWayBillFromDb.codmsg;
      if (codeError === 300) {
        return HttpResponse.response(
          CodesHttpEnum.notFound,
          null,
          dataWayBillFromDb.descmsg
        );
      }else  {
        return HttpResponse.response(CodesHttpEnum.ok, dataWayBillFromDb, "Data from DataServices: getWaybill");
      }
      
    } catch (error) {
      console.error("Error en Consulta de el services de Data: obtener guias de remisión (getWaybill)", error); // Registrar el error en la consola
      throw error;
    }
  }
}
