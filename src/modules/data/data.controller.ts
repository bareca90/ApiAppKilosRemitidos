

import { Request } from "express";
import { DataServices } from "./data.services";
import { DataRequest, UpdateDateTimeWaybillRequest } from "../../interfaces/data.interfaces";  

export const getWaybillController = async (req: Request) => {
  try {
    const { option } = req.body as DataRequest;
    return await new DataServices().getWaybill(option);
  } catch (error) {
    console.error("Error en Consulta de el controller de Data: obtener guias de remisión (getWaybillController)", error); // Registrar el error en la consola
    throw error;
  }
}

export const updateDateTimeWaybillController = async (req: Request) => {
  try {
    const { nroGuia, inicioPesca, finPesca, fechaCamaroneraPlanta, fechaLlegadaCamaronera } = req.body as UpdateDateTimeWaybillRequest;
    return await new DataServices().updateDateTimeWaybill(
      nroGuia,
      inicioPesca,
      finPesca,
      fechaCamaroneraPlanta,
      fechaLlegadaCamaronera
    );
  } catch (error) {
    console.error("Error en Consulta de el controller de Data: actualizar guias de remisión (updateDateTimeWaybillController)", error); // Registrar el error en la consola
    throw error;
  }
}