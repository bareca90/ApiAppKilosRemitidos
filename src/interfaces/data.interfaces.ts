
export interface DataRequest {
  option: string;   
}
export interface UpdateDateTimeWaybillRequest {
  nroPesca: string;
  nroGuia: string;
  inicioPesca: string;
  finPesca: string;
  fechaCamaroneraPlanta: string;
  fechaLlegadaCamaronera: string;
}

export interface InsertKgSentRequest {
  nroGuia: string;
  ciclo: string;
  anioSiembra: number;
  lote: number;
  ingresoCompra: string;
  tipoMaterial: string;
  cantidadMaterial: number;
  unidadMedida: string;
  cantidadRemitida: string;
  gramaje: number;
  proceso: string;
}