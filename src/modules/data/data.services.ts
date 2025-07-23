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
  async insertKgSent(
    nroGuia: string,
    ciclo: string,
    anioSiembra: number,
    lote: number,
    ingresoCompra: string,
    tipoMaterial: string,
    cantidadMaterial: number,
    unidadMedida: string,
    cantidadRemitida: number,
    gramaje: number,
    proceso: string
  ) {
    try {
      const insertKgSent = await this.dataRepository.insertKgSent(
        nroGuia,
        ciclo,
        anioSiembra,
        lote,
        ingresoCompra,
        tipoMaterial,
        cantidadMaterial,
        unidadMedida,
        cantidadRemitida,
        gramaje,
        proceso
      );
      if (insertKgSent.codcodmsg == 300) {
        return HttpResponse.response(CodesHttpEnum.notFound, null, "No se encontraron datos para insertar");
      } else {
        return HttpResponse.response(CodesHttpEnum.ok, insertKgSent, "Data from DataServices: insertKgSent");
      }
    } catch (error) {
      console.error("Error en Consulta de el services de Data: insertar kilos enviados (insertKgSent)", error); // Registrar el error en la consola
      throw error;
    }
  } 
}
