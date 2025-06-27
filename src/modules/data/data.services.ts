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
      return HttpResponse.response(CodesHttpEnum.ok, dataWayBillFromDb, "Data from DataServices: getWaybill");     
      
    } catch (error) {
      console.error("Error en Consulta de el services de Data: obtener guias de remisión (getWaybill)", error); // Registrar el error en la consola
      throw error;
    }
  }
  async updateDateTimeWaybill(
    nroGuia: string,
    inicioPesca: string,
    finPesca: string,
    fechaCamaroneraPlanta: string,
    fechaLlegadaCamaronera: string
  ) {
    try {
      const updateDateTimeWaybill = await this.dataRepository.updateDateTimeWaybill(
        nroGuia,
        inicioPesca,
        finPesca,
        fechaCamaroneraPlanta,
        fechaLlegadaCamaronera
      );
      if (updateDateTimeWaybill.codcodmsg == 300) {
        return HttpResponse.response(CodesHttpEnum.notFound, null, "No se encontraron datos para actualizar");
      } else {
        return HttpResponse.response(CodesHttpEnum.ok, updateDateTimeWaybill, "Data from DataServices: updateDateTimeWaybill");
      }
    } catch (error) {
      console.error("Error en Consulta de el services de Data: actualizar  guias de remisión (updateDateTimeWaybill)", error); // Registrar el error en la consola
      throw error;
    }
  }
}
